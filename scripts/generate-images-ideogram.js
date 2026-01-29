/**
 * Generate recipe images using Ideogram API
 * RULE: Always use Ideogram for image generation
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = '7EeSWl-Gj0s-1Zo7o2qwHXkaZijlYx_GnQzqYuuRTCTo2b39VbM5n_tmOPR7mSoco2aR4UHWxplgJgWU9PLQgw';
const API_URL = 'https://api.ideogram.ai/generate';

const RECIPES_DIR_PM = path.join(__dirname, '../sites/proteinmeals/public/images/recipes');
const RECIPES_DIR_MP = path.join(__dirname, '../sites/mealprepideas/public/images/recipes');

// Get missing images
function getMissingImages() {
  const missing = [];
  
  // Read all recipe files to get slugs
  const contentDir = path.join(__dirname, '../packages/shared/data/content');
  const recipeFiles = fs.readdirSync(contentDir)
    .filter(f => f.startsWith('recipes') && f.endsWith('.ts') && !f.includes('.es.'));
  
  for (const file of recipeFiles) {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
    const slugMatches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
    const titleMatches = content.matchAll(/title:\s*['"]([^'"]+)['"]/g);
    
    const slugs = [...slugMatches].map(m => m[1]);
    const titles = [...titleMatches].map(m => m[1]);
    
    for (let i = 0; i < slugs.length; i++) {
      const slug = slugs[i];
      const title = titles[i] || slug.replace(/-/g, ' ');
      const imagePath = path.join(RECIPES_DIR_PM, `${slug}.jpg`);
      
      if (!fs.existsSync(imagePath)) {
        missing.push({ slug, title });
      }
    }
  }
  
  return missing;
}

// Generate image with Ideogram
async function generateImage(slug, title) {
  const prompt = `Professional food photography of ${title}, overhead shot on dark slate table, styled for cookbook, appetizing presentation, natural window lighting, garnished with fresh herbs, high resolution, photorealistic`;
  
  const requestBody = JSON.stringify({
    image_request: {
      prompt,
      model: 'V_2',
      magic_prompt_option: 'AUTO',
      aspect_ratio: 'ASPECT_16_9',
      style_type: 'REALISTIC'
    }
  });
  
  return new Promise((resolve, reject) => {
    const url = new URL(API_URL);
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Api-Key': API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.data && result.data[0] && result.data[0].url) {
            resolve(result.data[0].url);
          } else {
            reject(new Error(`No image URL in response: ${data.substring(0, 200)}`));
          }
        } catch (e) {
          reject(new Error(`Parse error: ${e.message} - ${data.substring(0, 200)}`));
        }
      });
    });
    
    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

// Download image from URL
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Follow redirect
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', reject);
  });
}

// Main
async function main() {
  const missing = getMissingImages();
  console.log(`Found ${missing.length} recipes missing images\n`);
  
  // Process in batches
  const batchSize = parseInt(process.argv[2]) || 10;
  const startFrom = parseInt(process.argv[3]) || 0;
  
  const batch = missing.slice(startFrom, startFrom + batchSize);
  console.log(`Processing batch: ${startFrom} to ${startFrom + batch.length}\n`);
  
  let success = 0;
  let failed = 0;
  
  for (const { slug, title } of batch) {
    console.log(`Generating: ${slug}`);
    console.log(`  Title: ${title}`);
    
    try {
      const imageUrl = await generateImage(slug, title);
      console.log(`  Got URL: ${imageUrl.substring(0, 60)}...`);
      
      // Download to proteinmeals
      const pmPath = path.join(RECIPES_DIR_PM, `${slug}.jpg`);
      await downloadImage(imageUrl, pmPath);
      console.log(`  Saved: ${pmPath}`);
      
      // Copy to mealprepideas
      const mpPath = path.join(RECIPES_DIR_MP, `${slug}.jpg`);
      fs.copyFileSync(pmPath, mpPath);
      console.log(`  Copied: ${mpPath}`);
      
      success++;
      
      // Rate limit: wait 2 seconds between requests
      await new Promise(r => setTimeout(r, 2000));
      
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
      failed++;
    }
    
    console.log('');
  }
  
  console.log(`\n=== BATCH COMPLETE ===`);
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nTo continue: node scripts/generate-images-ideogram.js ${batchSize} ${startFrom + batchSize}`);
}

main().catch(console.error);
