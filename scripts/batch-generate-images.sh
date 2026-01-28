#!/bin/bash
# Batch generate missing recipe images using Gemini 3 Pro
# Reads from /tmp/missing_recipes.json, generates to both sites

set -euo pipefail

SCRIPT="/opt/homebrew/lib/node_modules/clawdbot/skills/nano-banana-pro/scripts/generate_image.py"
PM_DIR="sites/proteinmeals/public/images/recipes"
MPI_DIR="sites/mealprepideas/public/images/recipes"
export GEMINI_API_KEY="AIzaSyAwKz09QjLvoAXktzzh8MwtjtvdQyu6SbY"

cd /Users/customer/clawd/Projects/mealprepideas-proteinmeals

TOTAL=$(cat /tmp/missing_recipes.json | python3 -c "import sys,json; print(len(json.load(sys.stdin)))")
echo "=== Generating $TOTAL missing recipe images ==="

SUCCESS=0
FAIL=0
i=0

python3 -c "
import json, sys
recipes = json.load(open('/tmp/missing_recipes.json'))
for r in recipes:
    title = r.get('imageAlt') or r.get('title') or r['slug'].replace('-',' ')
    print(r['slug'] + '|||' + title)
" | while IFS='|||' read -r slug title; do
    i=$((i + 1))
    OUTFILE="$PM_DIR/${slug}.jpg"
    
    # Skip if already exists
    if [ -f "$OUTFILE" ]; then
        echo "[$i/$TOTAL] SKIP (exists): $slug"
        continue
    fi
    
    PROMPT="Professional food photography, overhead flat-lay shot on rustic wooden surface. ${title}. Beautifully plated, appetizing presentation with natural warm lighting. Meal prep style, vibrant colors, sharp detail. 3:2 landscape composition, no text or watermarks."
    
    echo "[$i/$TOTAL] Generating: $slug"
    
    if uv run "$SCRIPT" --prompt "$PROMPT" --filename "$OUTFILE" --resolution 1K 2>&1 | tail -1; then
        # Copy to mealprepideas site too
        cp "$OUTFILE" "$MPI_DIR/${slug}.jpg" 2>/dev/null || true
        SUCCESS=$((SUCCESS + 1))
        echo "  ✓ Done ($SUCCESS generated so far)"
    else
        FAIL=$((FAIL + 1))
        echo "  ✗ FAILED ($FAIL failures so far)"
    fi
    
    # Rate limit: ~4 seconds between requests
    sleep 4
done

echo ""
echo "=== COMPLETE ==="
echo "Generated: $SUCCESS"
echo "Failed: $FAIL"
echo "Total attempted: $TOTAL"
