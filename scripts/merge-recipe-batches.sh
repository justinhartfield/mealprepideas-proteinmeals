#!/bin/bash
# Merge recipe batch files into the main recipes.ts
# Run after all sub-agents finish generating their batch files

SHARED_DIR="/Users/customer/clawd/Projects/mealprepideas-proteinmeals/packages/shared/data/content"

echo "=== Recipe Batch Status ==="
for batch in recipes-batch-mp1.ts recipes-batch-mp2.ts recipes-batch-hp1.ts recipes-batch-hp2.ts; do
  if [ -f "$SHARED_DIR/$batch" ]; then
    count=$(grep -c "slug:" "$SHARED_DIR/$batch")
    echo "✅ $batch: $count recipes"
  else
    echo "❌ $batch: NOT FOUND"
  fi
done

echo ""
echo "=== Total Recipe Count ==="
total_existing=$(grep -c "slug:" "$SHARED_DIR/recipes.ts" "$SHARED_DIR/recipes-generated.ts" 2>/dev/null | tail -1 | cut -d: -f2)
total_batches=0
for batch in recipes-batch-mp1.ts recipes-batch-mp2.ts recipes-batch-hp1.ts recipes-batch-hp2.ts; do
  if [ -f "$SHARED_DIR/$batch" ]; then
    count=$(grep -c "slug:" "$SHARED_DIR/$batch")
    total_batches=$((total_batches + count))
  fi
done
echo "Existing: ~199 recipes"
echo "New batches: $total_batches recipes"
echo "Total: $((199 + total_batches)) recipes"
