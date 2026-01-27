# 🍗 MealPrepIdeas.co & ProteinMeals.co

Monorepo for two authority meal prep & high protein sites.

## Architecture

```
├── packages/shared/     # Shared design system, components, taxonomy data
│   ├── components/      # Reusable Astro components (T1-T8 templates)
│   ├── layouts/         # Base layouts
│   ├── styles/          # Global CSS + Tailwind preset
│   ├── data/            # Taxonomy (facets, hubs, combos)
│   └── utils/           # URL generation, slug normalization
├── sites/
│   ├── mealprepideas/   # mealprepideas.co (Astro + Netlify)
│   └── proteinmeals/    # proteinmeals.co (Astro + Netlify)
└── docs/
    └── templates-reference/  # Original HTML mockups
```

## Tech Stack

- **Framework**: Astro 5 (hybrid mode — static core + SSR tail)
- **Styling**: Tailwind CSS + "Modern Organic Tactical" design system
- **Font**: Lexend
- **Hosting**: Netlify (both sites from one repo)
- **Rendering**: Static for hubs/facets, SSR+cache for long tail

## Development

```bash
pnpm install
pnpm dev:mealprepideas   # Start mealprepideas.co dev server
pnpm dev:proteinmeals    # Start proteinmeals.co dev server
pnpm build:all           # Build both sites
```

## Taxonomy

Two hubs: `/meal-prep/` and `/high-protein/`  
9 facet dimensions: meal, method, diet, goal, constraint, ingredient, persona, store, chain  
Programmatic pages from facet combinations (2-facet indexed, 3+ noindex)

See `KANBAN.md` for project status.
