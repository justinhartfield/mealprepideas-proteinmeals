#!/usr/bin/env python3
import os
import json
import urllib.request
import urllib.error
import base64
import sys
import shutil
import re

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

api_key = os.environ.get("OPENAI_API_KEY", "").strip()
if not api_key:
    print("Missing OPENAI_API_KEY")
    sys.exit(1)

output_dir = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
os.makedirs(output_dir, exist_ok=True)

# Read missing images
with open("/tmp/missing_images.txt") as f:
    missing = [line.strip() for line in f if line.strip().startswith("hp3-")]

def slug_to_dish_name(slug):
    """Convert slug to human-readable dish name"""
    # Remove prefix
    name = slug.replace("hp3-", "")
    # Replace hyphens with spaces
    name = name.replace("-", " ")
    # Capitalize words
    return name.title()

def generate_prompt(slug):
    """Generate a food photography prompt based on the slug"""
    dish = slug_to_dish_name(slug)
    
    # Special handling for shakes/smoothies
    if "shake" in slug or "smoothie" in slug:
        return f"Professional food photography of {dish} protein smoothie in glass with ingredients visible, swirl texture, fresh garnish, overhead shot, styled for cookbook, appetizing presentation, natural lighting, on dark slate table, high resolution"
    
    # Special handling for salads
    if "salad" in slug:
        return f"Professional food photography of {dish} in white bowl, colorful fresh ingredients, protein visible, overhead shot, styled for cookbook, appetizing presentation, natural lighting, on dark wooden table, garnished, high resolution"
    
    # Special handling for bowls
    if "bowl" in slug:
        return f"Professional food photography of {dish} in ceramic bowl, arranged beautifully with visible protein and vegetables, overhead shot, styled for cookbook, appetizing presentation, natural lighting, on dark slate table, garnished with fresh herbs, high resolution"
    
    # Special handling for wraps/burritos
    if "wrap" in slug or "burrito" in slug:
        return f"Professional food photography of {dish} cut in half showing filling, on plate, overhead shot, styled for cookbook, appetizing presentation, natural lighting, on dark wooden table, garnished, high resolution"
    
    # Special handling for breakfast items
    if "breakfast" in slug or "eggs" in slug:
        return f"Professional food photography of {dish}, beautifully plated breakfast, overhead shot, styled for cookbook, appetizing presentation, morning natural lighting, on dark slate table, garnished, high resolution"
    
    # Default prompt
    return f"Professional food photography of {dish}, overhead shot, styled for cookbook, appetizing presentation, natural lighting, on dark slate table, garnished, high resolution"

# Generate images
total = len(missing)
generated = 0
skipped = 0

for i, slug in enumerate(missing, 1):
    filepath = os.path.join(output_dir, f"{slug}.jpg")
    if os.path.exists(filepath):
        print(f"[{i}/{total}] SKIP (exists): {slug}")
        skipped += 1
        continue
        
    print(f"[{i}/{total}] Generating: {slug}")
    prompt = generate_prompt(slug)
    
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
                print(f"  Saved: {slug}.jpg")
                generated += 1
            elif image_url:
                urllib.request.urlretrieve(image_url, filepath)
                print(f"  Saved: {slug}.jpg (url)")
                generated += 1
            else:
                print(f"  ERROR: No image data in response")
    except urllib.error.HTTPError as e:
        payload = e.read().decode("utf-8", errors="replace")
        print(f"  ERROR: {e.code} - {payload[:200]}")
    except Exception as e:
        print(f"  ERROR: {e}")

print(f"\nGenerated: {generated}, Skipped: {skipped}, Total: {total}")

# Copy to mealprepideas
print("\nCopying to mealprepideas site...")
src_dir = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
dst_dir = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/mealprepideas/public/images/recipes"
os.makedirs(dst_dir, exist_ok=True)

copied = 0
for slug in missing:
    src = os.path.join(src_dir, f"{slug}.jpg")
    dst = os.path.join(dst_dir, f"{slug}.jpg")
    if os.path.exists(src) and not os.path.exists(dst):
        shutil.copy2(src, dst)
        copied += 1

print(f"Copied {copied} images to mealprepideas")
print("\nAll done!")
