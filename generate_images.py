#!/usr/bin/env python3
import os
import json
import urllib.request
import urllib.error
import base64
import sys
import shutil

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

api_key = os.environ.get("OPENAI_API_KEY", "").strip()
if not api_key:
    print("Missing OPENAI_API_KEY")
    sys.exit(1)

output_dir = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
os.makedirs(output_dir, exist_ok=True)

recipes = [
    ("hp-quinoa-chicken-power-bowl", "quinoa chicken power bowl with grilled chicken, fluffy quinoa, colorful vegetables and fresh herbs"),
    ("hp-quinoa-turkey-stuffed-peppers", "turkey stuffed bell peppers with quinoa filling, melted cheese, fresh vegetables"),
    ("hp-quinoa-salmon-bowl", "salmon quinoa bowl with grilled salmon fillet, quinoa, edamame, avocado, pickled vegetables"),
    ("hp-quinoa-egg-breakfast-bowl", "breakfast quinoa bowl with fried eggs, quinoa, sauteed vegetables, avocado"),
    ("hp-quinoa-black-bean-burger", "black bean quinoa burger on brioche bun with lettuce, tomato, avocado, special sauce"),
    ("hp-quinoa-shrimp-stir-fry", "shrimp quinoa stir fry with colorful vegetables, soy sauce glaze, sesame seeds"),
    ("hp-sweet-potato-chicken-bowl", "sweet potato chicken bowl with roasted sweet potatoes, grilled chicken, greens, tahini drizzle"),
    ("hp-sweet-potato-turkey-skillet", "turkey sweet potato skillet with ground turkey, diced sweet potatoes, bell peppers, onions"),
    ("hp-loaded-sweet-potato-cottage-cheese", "loaded baked sweet potato with cottage cheese, chives, black beans, salsa"),
    ("hp-sweet-potato-protein-pancakes", "sweet potato protein pancakes stacked with maple syrup, pecans, butter"),
    ("hp-sweet-potato-steak-sheet-pan", "sheet pan steak with sweet potato wedges, asparagus, herbs"),
    ("hp-sweet-potato-egg-muffins", "sweet potato egg muffins with vegetables, herbs, golden top"),
]

for i, (slug, dish) in enumerate(recipes, 1):
    filepath = os.path.join(output_dir, f"{slug}.jpg")
    if os.path.exists(filepath):
        print(f"[{i}/{len(recipes)}] SKIP (exists): {slug}")
        continue
        
    print(f"[{i}/{len(recipes)}] Generating: {slug}")
    prompt = f"Professional food photography of {dish}, overhead shot, styled for cookbook, appetizing presentation, natural lighting, on dark slate table, garnished, high resolution"
    
    url = "https://api.openai.com/v1/images/generations"
    args = {
        "model": "gpt-image-1",
        "prompt": prompt,
        "size": "1024x1024",
        "quality": "high",
        "n": 1,
    }
    
    body = json.dumps(args).encode("utf-8")
    req = urllib.request.Request(
        url,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        data=body,
    )
    
    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            data = result.get("data", [{}])[0]
            image_b64 = data.get("b64_json")
            image_url = data.get("url")
            
            if image_b64:
                with open(filepath, "wb") as f:
                    f.write(base64.b64decode(image_b64))
                print(f"  Saved: {slug}.jpg (base64)")
            elif image_url:
                urllib.request.urlretrieve(image_url, filepath)
                print(f"  Saved: {slug}.jpg (url)")
            else:
                print(f"  ERROR: No image data in response")
    except urllib.error.HTTPError as e:
        payload = e.read().decode("utf-8", errors="replace")
        print(f"  ERROR: {e.code} - {payload[:200]}")
    except Exception as e:
        print(f"  ERROR: {e}")

print("\nDone! Now copying to mealprepideas site...")

# Copy to mealprepideas
src_dir = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
dst_dir = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/mealprepideas/public/images/recipes"
os.makedirs(dst_dir, exist_ok=True)

for slug, _ in recipes:
    src = os.path.join(src_dir, f"{slug}.jpg")
    dst = os.path.join(dst_dir, f"{slug}.jpg")
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f"  Copied: {slug}.jpg")

print("\nAll done!")
