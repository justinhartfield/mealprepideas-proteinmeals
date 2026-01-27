#!/bin/bash
# Generate recipe images via Ideogram API
API_KEY="7EeSWl-Gj0s-1Zo7o2qwHXkaZijlYx_GnQzqYuuRTCTo2b39VbM5n_tmOPR7mSoco2aR4UHWxplgJgWU9PLQgw"
BASE_DIR="/Users/customer/clawd/Projects/mealprepideas-proteinmeals"

generate_image() {
  local prompt="$1"
  local output_path="$2"
  
  if [ -f "$output_path" ]; then
    echo "SKIP: $output_path already exists"
    return 0
  fi
  
  echo "GENERATING: $output_path"
  echo "  Prompt: ${prompt:0:80}..."
  
  local response
  response=$(curl -s -X POST "https://api.ideogram.ai/generate" \
    -H "Api-Key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"image_request\": {
        \"prompt\": \"$prompt\",
        \"model\": \"V_2\",
        \"aspect_ratio\": \"ASPECT_16_9\",
        \"style_type\": \"REALISTIC\"
      }
    }")
  
  local url
  url=$(echo "$response" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d['data'][0]['url'])" 2>/dev/null)
  
  if [ -z "$url" ] || [ "$url" = "None" ]; then
    echo "  ERROR: Failed to get URL from response"
    echo "  Response: ${response:0:200}"
    return 1
  fi
  
  echo "  Downloading: ${url:0:80}..."
  mkdir -p "$(dirname "$output_path")"
  curl -s -o "$output_path" "$url"
  
  if [ -f "$output_path" ] && [ -s "$output_path" ]; then
    local size=$(stat -f%z "$output_path" 2>/dev/null || stat -c%s "$output_path" 2>/dev/null)
    echo "  SUCCESS: $(( size / 1024 ))KB"
  else
    echo "  ERROR: Download failed"
    rm -f "$output_path"
    return 1
  fi
}

echo "=== Generating Meal Prep Recipe Images ==="

generate_image \
  "Professional food photography of Greek chicken meal prep bowls with golden chicken thighs, fluffy quinoa, cucumber tomato salad, tzatziki sauce, and feta cheese in glass containers, overhead shot on rustic wooden table, natural lighting, appetizing" \
  "$BASE_DIR/sites/mealprepideas/public/images/recipes/greek-chicken-meal-prep-bowls.jpg"

generate_image \
  "Professional food photography of sheet pan teriyaki salmon with broccoli and sweet potatoes, glazed salmon fillets, colorful vegetables, overhead shot on parchment-lined baking sheet, natural lighting, meal prep style" \
  "$BASE_DIR/sites/mealprepideas/public/images/recipes/sheet-pan-teriyaki-salmon-vegetables.jpg"

generate_image \
  "Professional food photography of crockpot chicken burrito bowls with shredded chicken, black beans, rice, corn salsa, and lime, overhead shot, meal prep containers, bright natural lighting" \
  "$BASE_DIR/sites/mealprepideas/public/images/recipes/crockpot-chicken-burrito-bowls.jpg"

generate_image \
  "Professional food photography of freezer friendly breakfast burritos wrapped in foil, some cut in half showing scrambled eggs, cheese, peppers and sausage inside, arranged on wooden cutting board, natural lighting" \
  "$BASE_DIR/sites/mealprepideas/public/images/recipes/freezer-friendly-breakfast-burritos.jpg"

generate_image \
  "Professional food photography of budget chicken stir fry with colorful bell peppers, broccoli, snap peas in a wok, served over rice in meal prep containers, overhead shot, bright lighting" \
  "$BASE_DIR/sites/mealprepideas/public/images/recipes/budget-chicken-stir-fry-meal-prep.jpg"

generate_image \
  "Professional food photography of keto egg muffin cups with bacon, cheese, and spinach in a muffin tin, golden brown tops, overhead shot on marble countertop, natural lighting" \
  "$BASE_DIR/sites/mealprepideas/public/images/recipes/keto-egg-muffin-cups.jpg"

echo "=== Generating High Protein Recipe Images ==="

generate_image \
  "Professional food photography of high protein breakfast burrito cut in half showing scrambled eggs, black beans, chicken sausage, cheese, and avocado, on a plate, overhead shot, natural lighting" \
  "$BASE_DIR/sites/proteinmeals/public/images/recipes/high-protein-breakfast-burrito.jpg"

generate_image \
  "Professional food photography of ground beef power bowls with seasoned ground beef, brown rice, roasted vegetables, avocado slices, and sriracha drizzle in meal prep containers, overhead shot, natural lighting" \
  "$BASE_DIR/sites/proteinmeals/public/images/recipes/ground-beef-power-bowls.jpg"

generate_image \
  "Professional food photography of air fryer chicken thighs with crispy golden skin, served with roasted sweet potatoes and green beans, on a dark plate, overhead shot, appetizing" \
  "$BASE_DIR/sites/proteinmeals/public/images/recipes/protein-packed-air-fryer-chicken-thighs.jpg"

generate_image \
  "Professional food photography of cottage cheese protein pancakes stacked on a plate with fresh berries, maple syrup drizzle, and a dollop of Greek yogurt, overhead shot, bright breakfast scene" \
  "$BASE_DIR/sites/proteinmeals/public/images/recipes/cottage-cheese-protein-pancakes.jpg"

generate_image \
  "Professional food photography of shrimp quinoa power bowl with grilled shrimp, tricolor quinoa, avocado, edamame, cherry tomatoes, and sesame dressing, overhead shot on dark background, vibrant colors" \
  "$BASE_DIR/sites/proteinmeals/public/images/recipes/shrimp-quinoa-power-bowl.jpg"

generate_image \
  "Professional food photography of baked salmon protein bowl with flaked pink salmon, brown rice, steamed broccoli, edamame, and ginger soy sauce, overhead shot, clean plating, natural lighting" \
  "$BASE_DIR/sites/proteinmeals/public/images/recipes/baked-salmon-protein-bowl.jpg"

echo "=== Generating Hero Images ==="

generate_image \
  "Organized meal prep containers with colorful food, birds eye view, Sunday meal prep spread on marble countertop, professional food photography, multiple glass containers with chicken rice vegetables, bright natural lighting" \
  "$BASE_DIR/sites/mealprepideas/public/images/hero-meal-prep.jpg"

generate_image \
  "High protein meal with grilled chicken breast, quinoa bowl, and colorful vegetables, macro-friendly plating, professional food photography, overhead shot on dark slate background, natural lighting, fitness nutrition" \
  "$BASE_DIR/sites/proteinmeals/public/images/hero-high-protein.jpg"

echo "=== Generating Store Images ==="
mkdir -p "$BASE_DIR/sites/mealprepideas/public/images/stores"
mkdir -p "$BASE_DIR/sites/proteinmeals/public/images/stores"

generate_image \
  "Grocery haul spread on kitchen counter, organized by category, healthy foods including vegetables fruits nuts and whole grains, bright natural lighting, overhead shot, clean kitchen background" \
  "$BASE_DIR/sites/mealprepideas/public/images/stores/trader-joes.jpg"

generate_image \
  "Chipotle burrito bowl deconstructed with all ingredients visible, cilantro lime rice, black beans, grilled chicken, corn salsa, guacamole, sour cream, overhead shot, restaurant style plating" \
  "$BASE_DIR/sites/proteinmeals/public/images/stores/chipotle.jpg"

echo "=== DONE ==="
echo "Total images generated."
