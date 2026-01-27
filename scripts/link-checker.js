#!/usr/bin/env node
/**
 * Link Checker for mealprepideas.co / proteinmeals.co
 * 
 * Usage:
 *   node scripts/link-checker.js sites/mealprepideas
 *   node scripts/link-checker.js sites/proteinmeals
 * 
 * Reads the sitemap XML from the dist/ directory, crawls every page locally,
 * extracts all <a href="..."> links, and reports broken links + dummy content.
 */

const fs = require('fs');
const path = require('path');

const siteDir = process.argv[2];
if (!siteDir) {
  console.error('Usage: node scripts/link-checker.js <site-dir>');
  console.error('  e.g. node scripts/link-checker.js sites/mealprepideas');
  process.exit(1);
}

const distDir = path.resolve(siteDir, 'dist');
if (!fs.existsSync(distDir)) {
  console.error(`dist directory not found: ${distDir}`);
  process.exit(1);
}

// ─── Parse sitemap ──────────────────────────────────────────────────────────

function parseSitemap(distDir) {
  const sitemapPath = path.join(distDir, 'sitemap-0.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error(`Sitemap not found: ${sitemapPath}`);
    process.exit(1);
  }
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

// ─── URL to local file path ────────────────────────────────────────────────

function urlToFilePath(urlPath, distDir) {
  // Remove trailing slash, add /index.html
  let cleanPath = urlPath.replace(/\/$/, '') || '';
  if (cleanPath === '') cleanPath = '/index.html';
  
  // Check for exact file first
  const exactPath = path.join(distDir, cleanPath);
  if (fs.existsSync(exactPath) && fs.statSync(exactPath).isFile()) {
    return exactPath;
  }
  
  // Try as directory with index.html
  const indexPath = path.join(distDir, cleanPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    return indexPath;
  }
  
  // Try with .html extension
  const htmlPath = exactPath + '.html';
  if (fs.existsSync(htmlPath)) {
    return htmlPath;
  }
  
  return null;
}

// ─── Extract links from HTML ───────────────────────────────────────────────

function extractLinks(html) {
  const links = [];
  // Match href="..." in <a> tags - handles single and double quotes
  // Exclude x-bind:href (Alpine.js dynamic bindings - resolved client-side)
  const aTagRegex = /<a\s[^>]*?(?<!x-bind:)href\s*=\s*["']([^"']*?)["'][^>]*>/gi;
  let match;
  while ((match = aTagRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  return links;
}

// ─── Check for dummy/placeholder content ────────────────────────────────────

const DUMMY_PATTERNS = [
  // Placeholder recipe names like "Breakfast Budget Recipe 1"
  /\w+\s+\w+\s+Recipe\s+\d+\b/i,
  /\bLorem\s+ipsum\b/i,
  /\bComing\s+soon\b/i,
  /\bTBD\b/,
  /\bTODO\b/,
  /\bFIXME\b/,
  /\bsample\s+recipe\b/i,
  /\btest\s+recipe\b/i,
  /\bexample\s+recipe\b/i,
  /\bdummy\s+(text|content|recipe|data)\b/i,
  /\b(insert|add)\s+(content|text|recipe)\s+here\b/i,
  /\bunder\s+construction\b/i,
  /\bwork\s+in\s+progress\b/i,
];

function checkDummyContent(html, pagePath) {
  const findings = [];
  
  // Strip script/style tags to avoid false positives
  const stripped = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' '); // Remove all HTML tags
  
  for (const pattern of DUMMY_PATTERNS) {
    const matches = stripped.match(new RegExp(pattern.source, pattern.flags + (pattern.flags.includes('g') ? '' : 'g')));
    if (matches) {
      // Get unique matches
      const unique = [...new Set(matches)];
      findings.push(...unique.map(m => m.trim()));
    }
  }
  
  return [...new Set(findings)];
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`LINK CHECKER — ${path.basename(siteDir)}`);
  console.log(`dist: ${distDir}`);
  console.log(`${'='.repeat(70)}\n`);
  
  // 1. Parse sitemap
  const sitemapUrls = parseSitemap(distDir);
  
  // Determine the domain from first URL
  let domain = '';
  if (sitemapUrls.length > 0) {
    try {
      const u = new URL(sitemapUrls[0]);
      domain = u.origin;
    } catch {}
  }
  
  console.log(`Sitemap URLs: ${sitemapUrls.length}`);
  console.log(`Domain: ${domain}\n`);
  
  // Also discover ALL HTML files in dist (some may not be in sitemap)
  const allHtmlFiles = [];
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath);
      } else if (entry.name.endsWith('.html')) {
        allHtmlFiles.push(fullPath);
      }
    }
  }
  walkDir(distDir);
  
  console.log(`Total HTML files in dist: ${allHtmlFiles.length}\n`);
  
  // 2. Crawl each page
  const brokenLinks = []; // { source, href, resolvedPath }
  const dummyPages = []; // { page, findings }
  let totalLinks = 0;
  let totalInternalLinks = 0;
  let totalExternalLinks = 0;
  const checkedPages = new Set();
  
  for (const htmlFile of allHtmlFiles) {
    const relativePath = '/' + path.relative(distDir, htmlFile);
    const pagePath = relativePath.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
    checkedPages.add(pagePath);
    
    const html = fs.readFileSync(htmlFile, 'utf-8');
    
    // Check for dummy content
    const dummyFindings = checkDummyContent(html, pagePath);
    if (dummyFindings.length > 0) {
      dummyPages.push({ page: pagePath, findings: dummyFindings });
    }
    
    // Extract and check links
    const links = extractLinks(html);
    totalLinks += links.length;
    
    for (const href of links) {
      // Skip anchors, mailto, tel, javascript, external links, empty
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || 
          href.startsWith('tel:') || href.startsWith('javascript:') ||
          href.startsWith('data:')) {
        continue;
      }
      
      // Determine if internal
      let internalPath = null;
      
      if (href.startsWith('/')) {
        // Absolute internal path
        internalPath = href;
      } else if (href.startsWith(domain + '/') || href === domain) {
        // Full URL to same domain
        internalPath = href.replace(domain, '');
      } else if (href.startsWith('http://') || href.startsWith('https://')) {
        // External link
        totalExternalLinks++;
        continue;
      } else if (!href.includes('://')) {
        // Relative link - resolve against current page
        const pageDir = path.dirname(pagePath);
        internalPath = path.posix.resolve(pageDir, href);
      } else {
        continue;
      }
      
      if (!internalPath) continue;
      
      totalInternalLinks++;
      
      // Remove query string and hash
      internalPath = internalPath.split('?')[0].split('#')[0];
      
      // Skip non-HTML resources
      if (/\.(css|js|png|jpg|jpeg|gif|svg|webp|ico|xml|txt|json|woff|woff2|ttf|eot|mp4|mp3|pdf)$/i.test(internalPath)) {
        continue;
      }
      
      // Check if the path resolves to a file
      const filePath = urlToFilePath(internalPath, distDir);
      if (!filePath) {
        brokenLinks.push({
          source: pagePath,
          href: href,
          resolved: internalPath,
        });
      }
    }
  }
  
  // Deduplicate broken links
  const uniqueBroken = [];
  const seenBroken = new Set();
  for (const bl of brokenLinks) {
    const key = `${bl.source} -> ${bl.resolved}`;
    if (!seenBroken.has(key)) {
      seenBroken.add(key);
      uniqueBroken.push(bl);
    }
  }
  
  // ─── Report ─────────────────────────────────────────────────────────────
  
  console.log(`${'─'.repeat(70)}`);
  console.log('SUMMARY');
  console.log(`${'─'.repeat(70)}`);
  console.log(`Total pages crawled:     ${allHtmlFiles.length}`);
  console.log(`Total links found:       ${totalLinks}`);
  console.log(`Internal links checked:  ${totalInternalLinks}`);
  console.log(`External links (skipped):${totalExternalLinks}`);
  console.log(`Broken links (404):      ${uniqueBroken.length}`);
  console.log(`Pages with dummy content:${dummyPages.length}`);
  console.log();
  
  if (uniqueBroken.length > 0) {
    console.log(`\n${'─'.repeat(70)}`);
    console.log('BROKEN LINKS (404s)');
    console.log(`${'─'.repeat(70)}`);
    
    // Group by target
    const byTarget = {};
    for (const bl of uniqueBroken) {
      if (!byTarget[bl.resolved]) byTarget[bl.resolved] = [];
      byTarget[bl.resolved].push(bl.source);
    }
    
    for (const [target, sources] of Object.entries(byTarget).sort()) {
      console.log(`\n  ✗ ${target}`);
      console.log(`    href: ${uniqueBroken.find(b => b.resolved === target).href}`);
      console.log(`    Linked from ${sources.length} page(s):`);
      // Show first 5 sources
      for (const src of sources.slice(0, 5)) {
        console.log(`      - ${src}`);
      }
      if (sources.length > 5) {
        console.log(`      ... and ${sources.length - 5} more`);
      }
    }
  }
  
  if (dummyPages.length > 0) {
    console.log(`\n${'─'.repeat(70)}`);
    console.log('PAGES WITH DUMMY/PLACEHOLDER CONTENT');
    console.log(`${'─'.repeat(70)}`);
    for (const dp of dummyPages) {
      console.log(`\n  ⚠ ${dp.page}`);
      for (const f of dp.findings) {
        console.log(`    → "${f}"`);
      }
    }
  }
  
  if (uniqueBroken.length === 0 && dummyPages.length === 0) {
    console.log('\n✅ No broken links or dummy content found!');
  }
  
  console.log(`\n${'='.repeat(70)}\n`);
}

main();
