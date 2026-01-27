# 🍗 MealPrepIdeas.co + ProteinMeals.co — Kanban Board

_Last updated: 2026-01-27_

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
- [x] Both sites build successfully (mealprepideas: 233 pages, proteinmeals: 231 pages)
- [x] Netlify build config (`netlify.toml`) for both sites with monorepo root install
- [x] Verify component quality against original HTML templates (all full conversions, no stubs)
- [x] All CSS from design system preserved: grain overlay, pantry-card, label-text, scrollbar, perspective-container, hero-split, btn-system, bg-mesh, sidebar-link, fade animations

## 🔨 In Progress
_(nothing currently in progress)_

## 📋 Backlog

### Phase 3: Content Generation
- [ ] Recipe content (AI-generated, human-reviewed)
- [ ] 5-Day plan content
- [ ] Store "What to Buy" lists
- [ ] Fast food chain best orders
- [ ] Life-stage/condition pages content
- [ ] AI image generation for recipes/plans
- [ ] Replace ALL placeholder/dummy recipe data with real content

### Phase 4: SEO & Deploy
- [ ] Schema.org markup (Recipe, HowTo, FAQPage, BreadcrumbList, ItemList)
- [ ] Sitemap generation (per-site)
- [ ] robots.txt (index rules for 2-facet pages, noindex 3+ facets)
- [ ] Deploy to Netlify (mealprepideas.netlify.app + proteinmeals.netlify.app)
- [ ] Netlify cache headers + cache tags + purge API
- [ ] Domain setup via GoDaddy (mealprepideas.co + proteinmeals.co)

### Phase 5: Polish
- [ ] Performance audit (Core Web Vitals)
- [ ] Mobile responsive QA
- [ ] Cross-browser testing
- [ ] Analytics setup
- [ ] Replace Tailwind CDN with built CSS (production optimization)

## 📌 Key Decisions
- **Framework**: Astro 5 (static output with Netlify adapter)
- **Hosting**: Netlify (both sites, one monorepo)
- **Styling**: Tailwind CSS + custom design system ("Modern Organic Tactical")
- **Font**: Lexend
- **Palette**: Pantry Cream (#F9F7F2), Slate (#2D3436), Sage (#7E9680), Accent (#E67E22)
- **Package manager**: pnpm (workspaces)
- **Page count**: ~464 static pages (233 mealprepideas + 231 proteinmeals)
- **Interactivity**: Alpine.js for decision engine, facet tabs, FAQ accordions

## 🐛 Known Issues
- Tailwind CDN used for dev/build (works but should be replaced with proper Tailwind build for production)
- Some dynamic Tailwind classes (e.g., `text-${color}-700`) won't be purged correctly — may need safelist or explicit classes
- Placeholder recipe data throughout — needs real content in Phase 3
