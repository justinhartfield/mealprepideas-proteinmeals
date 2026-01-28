#!/usr/bin/env python3
"""Direct Ideogram batch image generation — no sub-agent dependency."""
import json, os, sys, time, requests, shutil

API_KEY = "7EeSWl-Gj0s-1Zo7o2qwHXkaZijlYx_GnQzqYuuRTCTo2b39VbM5n_tmOPR7mSoco2aR4UHWxplgJgWU9PLQgw"
PM_DIR = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
MPI_DIR = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/mealprepideas/public/images/recipes"
PROGRESS = "/tmp/ideogram_progress.txt"

recipes = json.load(open("/tmp/ideogram_remaining.json"))
total = len(recipes)
success = 0
fail = 0

with open(PROGRESS, "w") as pf:
    pf.write(f"=== Ideogram Direct Batch ===\nTotal: {total}\n")

for i, r in enumerate(recipes):
    slug = r["slug"]
    title = r.get("title") or r.get("imageAlt") or slug.replace("-", " ")
    outfile = os.path.join(PM_DIR, f"{slug}.jpg")

    if os.path.exists(outfile):
        continue

    prompt = f"Professional food photography, overhead flat-lay shot on rustic wooden surface. {title}. Beautifully plated, appetizing presentation with natural warm lighting. Meal prep style, vibrant colors, sharp detail. No text or watermarks."

    try:
        resp = requests.post(
            "https://api.ideogram.ai/generate",
            headers={"Api-Key": API_KEY, "Content-Type": "application/json"},
            json={"image_request": {"prompt": prompt, "aspect_ratio": "ASPECT_3_2", "model": "V_2"}},
            timeout=90,
        )
        data = resp.json()
        url = data.get("data", [{}])[0].get("url", "")
        if url:
            img = requests.get(url, timeout=30)
            with open(outfile, "wb") as f:
                f.write(img.content)
            # Copy to mealprepideas
            os.makedirs(MPI_DIR, exist_ok=True)
            shutil.copy2(outfile, os.path.join(MPI_DIR, f"{slug}.jpg"))
            success += 1
            status = f"[{i+1}/{total}] ✓ {slug} ({success} done, {fail} failed)"
        else:
            fail += 1
            msg = data.get("message", "no url")
            status = f"[{i+1}/{total}] ✗ {slug}: {msg}"
    except Exception as e:
        fail += 1
        status = f"[{i+1}/{total}] ✗ {slug}: {e}"

    print(status)
    with open(PROGRESS, "a") as pf:
        pf.write(status + "\n")

    time.sleep(2)

summary = f"\n=== DONE === Generated: {success}, Failed: {fail}, Total: {total}"
print(summary)
with open(PROGRESS, "a") as pf:
    pf.write(summary + "\n")
