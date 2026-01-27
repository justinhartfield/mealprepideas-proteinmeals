# 🍗 MealPrepIdeas.co + ProteinMeals.co — Kanban Board

_Last updated: 2026-01-27 18:45 CET_

## ✅ Done

### Phase 1: Astro Scaffolding
- [x] Read & analyze all 14 HTML templates + design system + design plan
- [x] Create GitHub monorepo (`justinhartfield/mealprepideas-proteinmeals`)
- [x] Copy reference HTML templates to `docs/templates-reference/`
- [x] Define project structure (monorepo: shared packages + 2 site packages)
- [x] Root workspace `package.json` (pnpm workspaces)
- [x] Shared package: design system (Tailwind config, CSS vars, global styles)
- [x] Shared package: taxonomy data (TypeScript — facets, hubs, synonyms, combos)
- [x] Shared package: URL utilities (slug normalization, canonical URL generation, path generation)
- [x] All 12 Astro components converted from 14 HTML templates (T1-T8 + Global Entry Portal + helpers)
- [x] BaseLayout with full design system CSS, grain overlay, fonts, Alpine.js, Tailwind CDN
- [x] Site: mealprepideas — `astro.config.mjs` + Netlify adapter
- [x] Site: proteinmeals — `astro.config.mjs` + Netlify adapter
- [x] Dynamic routing: `[facetType]/[facetValue]/` and `[...slug]` for two-facet combos
- [x] `getStaticPaths()` generates all single-facet + two-facet combo paths from taxonomy data

### Phase 2: Build Fixes & Netlify Config
- [x] Fix Astro 5 `output: 'hybrid'` → `output: 'static'` (hybrid mode removed in Astro 5)
- [x] Add Vite resolve alias for `@mealprepideas/shared` workspace package (Rollup server build fix)
- [x] Both sites build successfully
- [x] Netlify build config (`netlify.toml`) for both sites with monorepo root install
- [x] Verify component quality against original HTML templates (all full conversions, no stubs)
- [x] All CSS from design system preserved

### Phase 3: Design Revamp
- [x] New design: "The Grocery Index" — dark mode (#0F0F0F), neon lime (#D9FF00), cyberpunk dot-grid, glass-morphism nav
- [x] All templates converted to new design system (v17)
- [x] Light/dark theme toggle working

### Phase 4: Content & Data
- [x] 40 real recipes (20 meal-prep + 20 high-protein) with full ingredients, instructions, macros
- [x] 8 meal plans (5-day protocols with day-by-day meals, shopping lists, prep schedules)
- [x] 37 stores/chains with top picks, descriptions, taglines
- [x] Facet SEO copy (meta titles, descriptions, hero text, FAQs) for key facet pages
- [x] 40 AI-generated recipe images per site + 2 hero images + 2 store images

### Phase 5: SEO & Schema
- [x] Schema.org: Recipe + HowToStep on recipe pages
- [x] Schema.org: HowTo on plan pages
- [x] Schema.org: FAQPage on facet category pages
- [x] Schema.org: BreadcrumbList on all pages
- [x] Schema.org: ItemList + FAQPage on store/chain pages
- [x] Sitemaps generated (per-site, auto via @astrojs/sitemap)
- [x] robots.txt with sitemap references

### Phase 6: Deploy & Domains
- [x] Both sites deployed to Netlify
- [x] Custom domains: mealprepideas.co + proteinmeals.co
- [x] Netlify site IDs: `52f87fc6` (mealprepideas-co-v2), `64d5a341` (proteinmeals-co-v2)
- [x] 331 pages (mealprepideas) + 487 pages (proteinmeals) = 818 total

### Phase 7: Bug Fixes & Data Wiring
- [x] Fix component prop mapping (stores, plans, personas had wrong data shapes)
- [x] Remove double BaseLayout wrapping on store/plan/persona pages
- [x] Wire recipe thumbnail images (`img: ''` → `/images/recipes/{slug}.jpg`)
- [x] Add `<img>` tag to DietCategory recipe cards (was missing entirely)
- [x] Fix Stores nav link (was pointing to Trader Joe's instead of `/stores/` index)
- [x] Create stores index page for proteinmeals site

### Phase 8: Dedup & Internal Links
- [x] Deduplicate persona pages: canonical at `/hub/persona/{slug}/`, `/for/{slug}` redirects with noindex + canonical tag
- [x] Deduplicate store/chain pages: canonical at `/hub/store|chain/{slug}/`, `/stores/{slug}` redirects
- [x] Persona facet route renders PersonaConditionPage (not generic DietCategory)
- [x] Store/chain facet route renders RetailerChainPage (not generic DietCategory)
- [x] Hub page internal links expanded: MealPrepHub 72 links, HighProteinHub 94 links (full taxonomy grid)
- [x] Store index pages updated with canonical hub links

## 🔨 In Progress

### Phase 9: Facet-Type Index Pages
- [ ] Create `[facetType]/index.astro` route for both sites (e.g. `/meal-prep/method/`, `/high-protein/diet/`)
- [ ] Each page lists all values for that facet type with links + recipe counts
- [ ] Make "BY METHOD", "BY PERSONA" etc. headers clickable links to these index pages

## 📋 Backlog

### Content Expansion
- [ ] More recipes (target: 100+ per hub for content depth)
- [ ] More plans (target: 15-20 covering all persona/constraint combos)
- [ ] Store SKU-level data (actual product names, prices)
- [ ] Chain modification guides (bunless, sauce swaps, macro ranges)
- [ ] Condition/life-stage pages: "ask your clinician" block, "avoid" lists

### Template Enhancements
- [ ] T1 Hub: "Start here" decision widget improvements
- [ ] T5 Plan: Swap engine (swap a recipe, keep macros in range)
- [ ] T7 Chain: Differentiate from store template (mod suggestions, macro ranges, nearby alternatives)
- [ ] T8 Condition: Medical disclaimer micro-block

### SEO & Technical
- [ ] 301 redirects for wrong-order two-facet URLs (canonical order enforcement)
- [ ] Replace Tailwind CDN with built CSS (production optimization)
- [ ] Performance audit (Core Web Vitals)
- [ ] Mobile responsive QA
- [ ] Analytics setup (GA4)
- [ ] Netlify cache headers + cache tags

### Satellite Packs (Content Expansion Plans)
- [ ] Pack A: High-Protein Frozen Meals (50-150 pages)
- [ ] Pack B: High-Protein Microwave Meals (50-120 pages)
- [ ] Pack C: High-Protein Crockpot / Slow-Cooker (80-250 pages)
- [ ] Pack D: Work Lunch Meal Prep / No Microwave (80-200 pages)
- [ ] Pack E: Weekly / "For the Week" Meal Prep (100-300 pages)
- [ ] Pack F: Picky Eaters / Kids / Toddler (60-180 pages)
- [ ] Pack G: Pregnancy + Postpartum Freezer (50-150 pages)
- [ ] Pack H: PCOS + Bariatric + Cholesterol (60-200 pages)

## 📌 Key Decisions
- **Framework**: Astro 5 (static output with Netlify adapter)
- **Hosting**: Netlify (both sites, one monorepo)
- **Design**: "The Grocery Index" — dark mode (#0F0F0F), neon lime (#D9FF00), glass-morphism, cyberpunk grid
- **Font**: Lexend
- **Package manager**: pnpm (workspaces)
- **Page count**: 818 static pages (331 mealprepideas + 487 proteinmeals)
- **Interactivity**: Alpine.js for decision engine, facet tabs, FAQ accordions
- **Canonical URLs**: Store/chain under hub paths (`/hub/store/{slug}/`), `/stores/` redirects. Personas under `/hub/persona/{slug}/`, `/for/` redirects.
- **Two-facet URL order**: meal > method > diet > goal > constraint > ingredient > persona > store > chain

## 🐛 Known Issues
- Tailwind CDN used for dev/build (works but should be replaced with proper Tailwind build for production)
- Some dynamic Tailwind classes may not purge correctly — may need safelist
- Two-facet pages with no matching recipes show placeholder content (all indexed — Tang decided against noindex)
- No 301 redirects yet for wrong-order two-facet URLs (only matters if external links use wrong order)
