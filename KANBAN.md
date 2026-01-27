# 🍗 MealPrepIdeas.co + ProteinMeals.co — Kanban Board

_Last updated: 2026-01-27_

## ✅ Done
- [x] Read & analyze all 14 HTML templates + design system + design plan
- [x] Create GitHub monorepo (`justinhartfield/mealprepideas-proteinmeals`)
- [x] Copy reference HTML templates to `docs/templates-reference/`
- [x] Define project structure (monorepo: shared packages + 2 site packages)

## 🔨 In Progress
- [ ] **Phase 1: Astro Scaffolding**
  - [ ] Root workspace `package.json` (pnpm workspaces)
  - [ ] Shared package: design system (Tailwind config, CSS vars, global styles)
  - [ ] Shared package: taxonomy data (YAML → TypeScript)
  - [ ] Shared package: Astro components (T1-T8 templates converted)
  - [ ] Site: mealprepideas — `astro.config.mjs` + Netlify adapter
  - [ ] Site: proteinmeals — `astro.config.mjs` + Netlify adapter
  - [ ] Shared layouts: BaseLayout, HubLayout, FacetLayout, RecipeLayout

## 📋 Backlog

### Phase 2: Template Conversion (HTML → Astro Components)
- [ ] T1: Hub Landing (meal_prep_hub, high_protein_hub)
- [ ] T2: Single-Facet Category (persona_category, diet_category)
- [ ] T3: Two-Facet Combo (persona+method, diet+goal, store+constraint, chain+goal)
- [ ] T4: Recipe Page
- [ ] T5: 5-Day Plan Page
- [ ] T6: Store Landing
- [ ] T7: Fast Food Chain
- [ ] T8: Life-Stage/Condition
- [ ] Global Entry Portal (homepage)

### Phase 3: Taxonomy & Data Layer
- [ ] Taxonomy YAML → TypeScript types
- [ ] Facet slug normalization + synonym mapping
- [ ] URL generation rules (canonical facet order)
- [ ] Programmatic page generation (Astro `getStaticPaths`)
- [ ] Internal link graph logic (hub → facet → combo → recipe)

### Phase 4: Content Generation
- [ ] Recipe content (AI-generated, human-reviewed)
- [ ] 5-Day plan content
- [ ] Store "What to Buy" lists
- [ ] Fast food chain best orders
- [ ] Life-stage/condition pages
- [ ] AI image generation for recipes/plans
- [ ] Replace ALL dummy/placeholder content

### Phase 5: SEO & Deploy
- [ ] Schema.org markup (Recipe, HowTo, FAQPage, BreadcrumbList, ItemList)
- [ ] Sitemap generation (per-site)
- [ ] robots.txt (index rules for 2-facet pages, noindex 3+ facets)
- [ ] Netlify deploy config (both sites from monorepo)
- [ ] Netlify cache headers + cache tags + purge API
- [ ] Hybrid rendering: static core + SSR tail
- [ ] Domain setup via GoDaddy (mealprepideas.co + proteinmeals.co)

### Phase 6: Polish
- [ ] Performance audit (Core Web Vitals)
- [ ] Mobile responsive QA
- [ ] Cross-browser testing
- [ ] Analytics setup
- [ ] Dr. Igor medical review panel (if applicable to nutrition content)

## 📌 Key Decisions
- **Framework**: Astro (hybrid mode)
- **Hosting**: Netlify (both sites, one monorepo)
- **Styling**: Tailwind CSS + custom design system ("Modern Organic Tactical")
- **Font**: Lexend
- **Palette**: Pantry Cream (#F9F7F2), Slate (#2D3436), Sage (#7E9680), Accent (#E67E22)
- **Package manager**: pnpm (workspaces)
- **Static core**: Hubs + single-facet + top two-facet pages
- **SSR tail**: Long-tail combos, cached via Netlify CDN
