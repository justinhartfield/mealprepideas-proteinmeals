#!/bin/bash
# Batch generate missing recipe images using Ideogram API
set -euo pipefail

API_KEY="7EeSWl-Gj0s-1Zo7o2qwHXkaZijlYx_GnQzqYuuRTCTo2b39VbM5n_tmOPR7mSoco2aR4UHWxplgJgWU9PLQgw"
PM_DIR="/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
MPI_DIR="/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/mealprepideas/public/images/recipes"
PROGRESS_FILE="/tmp/ideogram_progress.txt"

mkdir -p "$PM_DIR" "$MPI_DIR"

echo "=== Ideogram Batch Image Generation ===" | tee "$PROGRESS_FILE"
echo "Started: $(date)" | tee -a "$PROGRESS_FILE"

# Build queue using Python (safe handling of all characters)
python3 -c "
import json
recipes = json.load(open('/tmp/missing_recipes.json'))
for r in recipes:
    title = r.get('title') or r.get('imageAlt') or r['slug'].replace('-',' ')
    # Tab-separated for safe parsing
    print(r['slug'] + '\t' + title)
" > /tmp/ideogram_queue.txt

TOTAL=$(wc -l < /tmp/ideogram_queue.txt | tr -d ' ')
SUCCESS=0
FAIL=0
SKIP=0
i=0

while IFS=$'\t' read -r slug title; do
    i=$((i + 1))
    OUTFILE="$PM_DIR/${slug}.jpg"
    
    # Skip if already exists
    if [ -f "$OUTFILE" ] && [ -s "$OUTFILE" ]; then
        SKIP=$((SKIP + 1))
        continue
    fi
    
    echo "[$i/$TOTAL] Generating: $slug" | tee -a "$PROGRESS_FILE"
    
    # Build JSON payload safely using Python
    JSON_PAYLOAD=$(python3 -c "
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
    
    # Call Ideogram API with retries
    ATTEMPTS=0
    MAX_ATTEMPTS=3
    IMAGE_URL=""
    
    while [ $ATTEMPTS -lt $MAX_ATTEMPTS ] && [ -z "$IMAGE_URL" ]; do
        ATTEMPTS=$((ATTEMPTS + 1))
        
        RESPONSE=$(curl -s --max-time 60 -X POST "https://api.ideogram.ai/generate" \
            -H "Api-Key: $API_KEY" \
            -H "Content-Type: application/json" \
            -d "$JSON_PAYLOAD" 2>/dev/null || echo '{"error":"curl_failed"}')
        
        # Extract image URL
        IMAGE_URL=$(python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
    data = d.get('data', [])
    if data and len(data) > 0:
        print(data[0].get('url', ''))
    else:
        print('')
except:
    print('')
" <<< "$RESPONSE" 2>/dev/null)
        
        if [ -z "$IMAGE_URL" ] && [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; then
            # Check if rate limited
            IS_RATE_LIMITED=$(python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
    msg = d.get('message', '').lower()
    if 'rate' in msg or 'limit' in msg or 'throttl' in msg:
        print('yes')
    else:
        print('no')
except:
    print('no')
" <<< "$RESPONSE" 2>/dev/null)
            
            if [ "$IS_RATE_LIMITED" = "yes" ]; then
                echo "  ⏳ Rate limited, waiting 30s (attempt $ATTEMPTS/$MAX_ATTEMPTS)" | tee -a "$PROGRESS_FILE"
                sleep 30
            else
                echo "  ⏳ Retrying in 5s (attempt $ATTEMPTS/$MAX_ATTEMPTS)" | tee -a "$PROGRESS_FILE"
                sleep 5
            fi
        fi
    done
    
    if [ -n "$IMAGE_URL" ]; then
        # Download image
        if curl -s --max-time 30 -o "$OUTFILE" "$IMAGE_URL" 2>/dev/null && [ -s "$OUTFILE" ]; then
            cp "$OUTFILE" "$MPI_DIR/${slug}.jpg" 2>/dev/null || true
            SUCCESS=$((SUCCESS + 1))
            echo "  ✓ Done ($SUCCESS generated, $SKIP skipped, $FAIL failed)" | tee -a "$PROGRESS_FILE"
        else
            FAIL=$((FAIL + 1))
            rm -f "$OUTFILE" 2>/dev/null || true
            echo "  ✗ Download failed" | tee -a "$PROGRESS_FILE"
        fi
    else
        FAIL=$((FAIL + 1))
        ERROR=$(python3 -c "
import json, sys
try:
    d = json.loads(sys.stdin.read())
    print(d.get('message', d.get('error', 'unknown error')))
except:
    print('parse error')
" <<< "$RESPONSE" 2>/dev/null || echo "unknown")
        echo "  ✗ API error: $ERROR" | tee -a "$PROGRESS_FILE"
    fi
    
    # Rate limit: ~3 seconds between requests
    sleep 3
done < /tmp/ideogram_queue.txt

echo "" | tee -a "$PROGRESS_FILE"
echo "=== COMPLETE ===" | tee -a "$PROGRESS_FILE"
echo "Finished: $(date)" | tee -a "$PROGRESS_FILE"
echo "Generated: $SUCCESS" | tee -a "$PROGRESS_FILE"
echo "Skipped (existed): $SKIP" | tee -a "$PROGRESS_FILE"
echo "Failed: $FAIL" | tee -a "$PROGRESS_FILE"
echo "Total recipes: $TOTAL" | tee -a "$PROGRESS_FILE"
