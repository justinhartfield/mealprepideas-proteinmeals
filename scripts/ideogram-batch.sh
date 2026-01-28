#!/bin/bash
# Batch generate missing recipe images using Ideogram API
# Uses parallel workers for faster throughput
set -euo pipefail

API_KEY="7EeSWl-Gj0s-1Zo7o2qwHXkaZijlYx_GnQzqYuuRTCTo2b39VbM5n_tmOPR7mSoco2aR4UHWxplgJgWU9PLQgw"
PM_DIR="/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
MPI_DIR="/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/mealprepideas/public/images/recipes"
PROGRESS_FILE="/tmp/ideogram_progress.txt"
WORKERS=4  # Number of parallel workers

mkdir -p "$PM_DIR" "$MPI_DIR"

echo "=== Ideogram Batch Image Generation ===" | tee "$PROGRESS_FILE"
echo "Started: $(date)" | tee -a "$PROGRESS_FILE"
echo "Workers: $WORKERS" | tee -a "$PROGRESS_FILE"

# Build queue of ONLY missing recipes
python3 -c "
import json, os
recipes = json.load(open('/tmp/missing_recipes.json'))
pm_dir = '$PM_DIR'
count = 0
for r in recipes:
    slug = r['slug']
    outfile = os.path.join(pm_dir, slug + '.jpg')
    if os.path.exists(outfile) and os.path.getsize(outfile) > 0:
        continue
    title = r.get('title') or r.get('imageAlt') or slug.replace('-',' ')
    print(slug + '\t' + title)
    count += 1
print(f'# {count} images to generate', file=__import__('sys').stderr)
" > /tmp/ideogram_todo.txt 2>&1

# Extract the count from stderr (last line starting with #)
TODO_COUNT=$(grep -c $'^[^#]' /tmp/ideogram_todo.txt || echo 0)
echo "Images to generate: $TODO_COUNT" | tee -a "$PROGRESS_FILE"

# Counter files for tracking
echo "0" > /tmp/ideogram_success.cnt
echo "0" > /tmp/ideogram_fail.cnt

# Worker function
generate_one() {
    local slug="$1"
    local title="$2"
    local outfile="$PM_DIR/${slug}.jpg"
    
    # Double check not already done (race condition protection)
    if [ -f "$outfile" ] && [ -s "$outfile" ]; then
        return 0
    fi
    
    # Build JSON payload safely using Python
    local json_payload
    json_payload=$(python3 -c "
import json, sys
title = sys.argv[1]
prompt = f'Professional food photography, overhead flat-lay shot on rustic wooden surface. {title}. Beautifully plated, appetizing presentation with natural warm lighting. Meal prep style, vibrant colors, sharp detail. No text or watermarks.'
payload = {
    'image_request': {
        'prompt': prompt,
        'aspect_ratio': 'ASPECT_3_2',
        'model': 'V_2'
    }
}
print(json.dumps(payload))
" "$title")
    
    local attempts=0
    local max_attempts=3
    local image_url=""
    
    while [ $attempts -lt $max_attempts ] && [ -z "$image_url" ]; do
        attempts=$((attempts + 1))
        
        local response
        response=$(curl -s --max-time 120 -X POST "https://api.ideogram.ai/generate" \
            -H "Api-Key: $API_KEY" \
            -H "Content-Type: application/json" \
            -d "$json_payload" 2>/dev/null || echo '{"error":"curl_failed"}')
        
        image_url=$(python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
    data = d.get('data', [])
    if data and len(data) > 0:
        url = data[0].get('url', '')
        if url:
            print(url)
        else:
            print('')
    else:
        print('')
except:
    print('')
" <<< "$response" 2>/dev/null)
        
        if [ -z "$image_url" ] && [ $attempts -lt $max_attempts ]; then
            local is_rate_limited
            is_rate_limited=$(python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
    msg = str(d.get('message', '')).lower()
    if 'rate' in msg or 'limit' in msg or 'throttl' in msg or '429' in msg:
        print('yes')
    else:
        print('no')
except:
    print('no')
" <<< "$response" 2>/dev/null)
            
            if [ "$is_rate_limited" = "yes" ]; then
                sleep 30
            else
                sleep 10
            fi
        fi
    done
    
    if [ -n "$image_url" ]; then
        if curl -s --max-time 30 -o "$outfile" "$image_url" 2>/dev/null && [ -s "$outfile" ]; then
            cp "$outfile" "$MPI_DIR/${slug}.jpg" 2>/dev/null || true
            # Atomic increment
            local cnt
            cnt=$(cat /tmp/ideogram_success.cnt)
            echo $((cnt + 1)) > /tmp/ideogram_success.cnt
            echo "  ✓ $slug ($(cat /tmp/ideogram_success.cnt) done)" | tee -a "$PROGRESS_FILE"
            return 0
        else
            rm -f "$outfile" 2>/dev/null || true
        fi
    fi
    
    local cnt
    cnt=$(cat /tmp/ideogram_fail.cnt)
    echo $((cnt + 1)) > /tmp/ideogram_fail.cnt
    local error_msg
    error_msg=$(python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
    print(d.get('message', d.get('error', 'unknown')))
except:
    print('unknown')
" <<< "${response:-{}}" 2>/dev/null || echo "unknown")
    echo "  ✗ $slug: $error_msg" | tee -a "$PROGRESS_FILE"
    return 1
}

export -f generate_one
export API_KEY PM_DIR MPI_DIR PROGRESS_FILE

# Run with GNU parallel if available, otherwise use xargs
if command -v parallel &>/dev/null; then
    echo "Using GNU parallel with $WORKERS workers" | tee -a "$PROGRESS_FILE"
    cat /tmp/ideogram_todo.txt | grep -v '^#' | parallel -j "$WORKERS" --colsep '\t' generate_one {1} {2}
else
    echo "Using background jobs with $WORKERS workers" | tee -a "$PROGRESS_FILE"
    
    # Simple parallel using background jobs
    active=0
    while IFS=$'\t' read -r slug title; do
        # Skip comment lines
        [[ "$slug" == \#* ]] && continue
        [ -z "$slug" ] && continue
        
        # Wait if we have max workers
        while [ $active -ge $WORKERS ]; do
            wait -n 2>/dev/null || true
            active=$((active - 1))
        done
        
        generate_one "$slug" "$title" &
        active=$((active + 1))
        
        # Small stagger to avoid API burst
        sleep 1
    done < /tmp/ideogram_todo.txt
    
    # Wait for remaining jobs
    wait
fi

echo "" | tee -a "$PROGRESS_FILE"
echo "=== COMPLETE ===" | tee -a "$PROGRESS_FILE"
echo "Finished: $(date)" | tee -a "$PROGRESS_FILE"
echo "Generated: $(cat /tmp/ideogram_success.cnt)" | tee -a "$PROGRESS_FILE"
echo "Failed: $(cat /tmp/ideogram_fail.cnt)" | tee -a "$PROGRESS_FILE"

# Final count
PM_COUNT=$(ls "$PM_DIR"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
MPI_COUNT=$(ls "$MPI_DIR"/*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo "Total images in proteinmeals: $PM_COUNT" | tee -a "$PROGRESS_FILE"
echo "Total images in mealprepideas: $MPI_COUNT" | tee -a "$PROGRESS_FILE"
