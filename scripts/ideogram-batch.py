#!/usr/bin/env python3
"""Batch generate missing recipe images using Ideogram API with parallel workers."""
import json
import os
import sys
import time
import shutil
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from threading import Lock

API_KEY = "7EeSWl-Gj0s-1Zo7o2qwHXkaZijlYx_GnQzqYuuRTCTo2b39VbM5n_tmOPR7mSoco2aR4UHWxplgJgWU9PLQgw"
PM_DIR = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/proteinmeals/public/images/recipes"
MPI_DIR = "/Users/customer/clawd/Projects/mealprepideas-proteinmeals/sites/mealprepideas/public/images/recipes"
PROGRESS_FILE = "/tmp/ideogram_progress.txt"
WORKERS = 4
MAX_RETRIES = 3

# Thread-safe counters
lock = Lock()
stats = {"success": 0, "fail": 0, "total": 0}

def log(msg):
    with lock:
        print(msg, flush=True)
        with open(PROGRESS_FILE, "a") as f:
            f.write(msg + "\n")

def generate_image(slug, title):
    outfile = os.path.join(PM_DIR, f"{slug}.jpg")
    
    # Skip if exists
    if os.path.exists(outfile) and os.path.getsize(outfile) > 0:
        return "skip"
    
    prompt = (
        f"Professional food photography, overhead flat-lay shot on rustic wooden surface. "
        f"{title}. Beautifully plated, appetizing presentation with natural warm lighting. "
        f"Meal prep style, vibrant colors, sharp detail. No text or watermarks."
    )
    
    payload = {
        "image_request": {
            "prompt": prompt,
            "aspect_ratio": "ASPECT_3_2",
            "model": "V_2"
        }
    }
    
    headers = {
        "Api-Key": API_KEY,
        "Content-Type": "application/json"
    }
    
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.post(
                "https://api.ideogram.ai/generate",
                headers=headers,
                json=payload,
                timeout=120
            )
            
            if resp.status_code == 429:
                log(f"  ⏳ {slug}: Rate limited, waiting 30s (attempt {attempt})")
                time.sleep(30)
                continue
            
            data = resp.json()
            
            if "data" in data and len(data["data"]) > 0:
                image_url = data["data"][0].get("url", "")
                if image_url:
                    # Download
                    img_resp = requests.get(image_url, timeout=30)
                    if img_resp.status_code == 200 and len(img_resp.content) > 1000:
                        with open(outfile, "wb") as f:
                            f.write(img_resp.content)
                        # Copy to mealprepideas
                        mpi_file = os.path.join(MPI_DIR, f"{slug}.jpg")
                        try:
                            shutil.copy2(outfile, mpi_file)
                        except:
                            pass
                        
                        with lock:
                            stats["success"] += 1
                            s = stats["success"]
                        log(f"  ✓ {slug} ({s} done)")
                        return "success"
            
            # API returned but no image
            error_msg = data.get("message", "no image in response")
            if attempt < MAX_RETRIES:
                log(f"  ⏳ {slug}: {error_msg}, retrying (attempt {attempt})")
                time.sleep(10)
            else:
                with lock:
                    stats["fail"] += 1
                log(f"  ✗ {slug}: {error_msg}")
                return "fail"
                
        except requests.exceptions.Timeout:
            if attempt < MAX_RETRIES:
                log(f"  ⏳ {slug}: Timeout, retrying (attempt {attempt})")
                time.sleep(5)
            else:
                with lock:
                    stats["fail"] += 1
                log(f"  ✗ {slug}: Timeout after {MAX_RETRIES} attempts")
                return "fail"
        except Exception as e:
            if attempt < MAX_RETRIES:
                time.sleep(5)
            else:
                with lock:
                    stats["fail"] += 1
                log(f"  ✗ {slug}: {str(e)}")
                return "fail"
    
    return "fail"

def main():
    os.makedirs(PM_DIR, exist_ok=True)
    os.makedirs(MPI_DIR, exist_ok=True)
    
    # Clear progress file
    with open(PROGRESS_FILE, "w") as f:
        f.write("")
    
    log("=== Ideogram Batch Image Generation ===")
    log(f"Started: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    log(f"Workers: {WORKERS}")
    
    # Load recipes
    with open("/tmp/missing_recipes.json") as f:
        recipes = json.load(f)
    
    # Build todo list (only missing images)
    todo = []
    for r in recipes:
        slug = r["slug"]
        outfile = os.path.join(PM_DIR, f"{slug}.jpg")
        if os.path.exists(outfile) and os.path.getsize(outfile) > 0:
            continue
        title = r.get("title") or r.get("imageAlt") or slug.replace("-", " ")
        todo.append((slug, title))
    
    stats["total"] = len(todo)
    log(f"Images to generate: {len(todo)}")
    
    if not todo:
        log("Nothing to do!")
        return
    
    # Process with thread pool
    with ThreadPoolExecutor(max_workers=WORKERS) as executor:
        futures = {}
        for i, (slug, title) in enumerate(todo):
            # Stagger submissions slightly to avoid burst
            if i > 0 and i % WORKERS == 0:
                time.sleep(1)
            future = executor.submit(generate_image, slug, title)
            futures[future] = slug
        
        # Wait for all to complete
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                slug = futures[future]
                log(f"  ✗ {slug}: Unexpected error: {e}")
                with lock:
                    stats["fail"] += 1
    
    log("")
    log("=== COMPLETE ===")
    log(f"Finished: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    log(f"Generated: {stats['success']}")
    log(f"Failed: {stats['fail']}")
    
    # Final file counts
    pm_count = len([f for f in os.listdir(PM_DIR) if f.endswith('.jpg')])
    mpi_count = len([f for f in os.listdir(MPI_DIR) if f.endswith('.jpg')])
    log(f"Total images in proteinmeals: {pm_count}")
    log(f"Total images in mealprepideas: {mpi_count}")

if __name__ == "__main__":
    main()
