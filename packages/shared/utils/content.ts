/**
 * Content Utility Functions
 * Query and filter content data for use in page templates
 */

import { recipes, type Recipe } from '../data/content/recipes';
import { plans, type MealPlan } from '../data/content/plans';
import { stores, type RetailerData } from '../data/content/stores';
import { facetContent, type FacetPageContent } from '../data/content/facetContent';
import { translateRecipe, translateRecipes } from '../data/content/recipeTranslations';
import type { Lang } from '../i18n/utils';

/**
 * Get translated recipes for a language.
 * Returns all recipes with text fields translated to the specified language.
 * Falls back to English for any recipe without a translation.
 */
export function getTranslatedRecipes(lang: Lang): Recipe[] {
  return translateRecipes(recipes, lang);
}

/**
 * Get recipes matching facet criteria with optional language translation.
 */
export function getRecipesMatchingFacetTranslated(
  hub: 'meal-prep' | 'high-protein',
  facetType: string,
  facetValue: string,
  lang: Lang = 'en'
): Recipe[] {
  const matched = getRecipesMatchingAnyFacet(hub, facetType, facetValue);
  return lang === 'en' ? matched : translateRecipes(matched, lang);
}

/**
 * Get related recipes with optional language translation.
 */
export function getRelatedRecipesTranslated(recipe: Recipe, limit: number = 4, lang: Lang = 'en'): Recipe[] {
  const related = getRelatedRecipes(recipe, limit);
  return lang === 'en' ? related : translateRecipes(related, lang);
}

/**
 * Get recipes matching specific facet criteria for a given hub.
 * Matches if the recipe contains ALL specified facets.
 */
export function getRecipesForFacets(
  hub: 'meal-prep' | 'high-protein',
  facets: Record<string, string> = {}
): Recipe[] {
  return recipes.filter((recipe) => {
    // Must match hub
    if (recipe.hub !== hub) return false;

    // Must match all provided facets
    for (const [key, value] of Object.entries(facets)) {
      const recipeFacetValue = recipe.facets[key as keyof typeof recipe.facets];
      if (!recipeFacetValue || recipeFacetValue !== value) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Get recipes that match ANY of the specified facet values (union match).
 * Useful for broader content matching on category pages.
 */
export function getRecipesMatchingAnyFacet(
  hub: 'meal-prep' | 'high-protein',
  facetType: string,
  facetValue: string
): Recipe[] {
  return recipes.filter((recipe) => {
    if (recipe.hub !== hub) return false;
    const val = recipe.facets[facetType as keyof typeof recipe.facets];
    return val === facetValue;
  });
}

/**
 * Get all recipes for a specific hub.
 */
export function getRecipesForHub(hub: 'meal-prep' | 'high-protein'): Recipe[] {
  return recipes.filter((r) => r.hub === hub);
}

/**
 * Get a single recipe by slug.
 */
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug);
}

/**
 * Get all meal plans for a given hub.
 */
export function getPlansForHub(hub: 'meal-prep' | 'high-protein'): MealPlan[] {
  return plans.filter((p) => p.hub === hub);
}

/**
 * Get a single plan by slug.
 */
export function getPlanBySlug(slug: string): MealPlan | undefined {
  return plans.find((p) => p.slug === slug);
}

/**
 * Get retailer/chain data by slug.
 */
export function getRetailerData(slug: string): RetailerData | undefined {
  return stores.find((s) => s.slug === slug);
}

/**
 * Get all retailers of a given type.
 */
export function getRetailersByType(type: 'grocery' | 'fast-food'): RetailerData[] {
  return stores.filter((s) => s.type === type);
}

/**
 * Get all retailers for a given hub.
 */
export function getRetailersForHub(hub: 'meal-prep' | 'high-protein'): RetailerData[] {
  return stores.filter((s) => s.hub === hub);
}

/**
 * Get SEO content for a facet page.
 *
 * @param facetKey - Single facet: "diet:keto" or combo: "diet+goal:keto+weight-loss"
 * @param hub - The hub to match
 */
export function getFacetContent(
  facetKey: string,
  hub: 'meal-prep' | 'high-protein'
): FacetPageContent | undefined {
  return facetContent.find((fc) => fc.facetKey === facetKey && fc.hub === hub);
}

/**
 * Build a facet key string from facet type and value.
 * Single: buildFacetKey('diet', 'keto') → "diet:keto"
 */
export function buildFacetKey(facetType: string, facetValue: string): string {
  return `${facetType}:${facetValue}`;
}

/**
 * Build a combo facet key from two facet pairs.
 * Combo: buildComboFacetKey('diet', 'keto', 'goal', 'weight-loss') → "diet+goal:keto+weight-loss"
 */
export function buildComboFacetKey(
  typeA: string,
  valueA: string,
  typeB: string,
  valueB: string
): string {
  return `${typeA}+${typeB}:${valueA}+${valueB}`;
}

/**
 * Find related recipes to a given recipe based on overlapping facets.
 * Returns recipes sorted by number of matching facets (most related first).
 */
export function getRelatedRecipes(recipe: Recipe, limit: number = 4): Recipe[] {
  const recipeFacets = Object.entries(recipe.facets).filter(
    ([_, v]) => v !== undefined
  );

  const scored = recipes
    .filter((r) => r.slug !== recipe.slug && r.hub === recipe.hub) // exclude self, same hub only
    .map((candidate) => {
      let score = 0;

      // Same hub gets a base score boost
      if (candidate.hub === recipe.hub) score += 1;

      // Count matching facets
      for (const [key, value] of recipeFacets) {
        const candidateValue =
          candidate.facets[key as keyof typeof candidate.facets];
        if (candidateValue === value) {
          score += 2; // each matching facet is worth 2
        }
      }

      return { recipe: candidate, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.recipe);
}

/**
 * Get top recipes for a hub, sorted by protein content (descending).
 */
export function getTopProteinRecipes(
  hub: 'meal-prep' | 'high-protein',
  limit: number = 6
): Recipe[] {
  return getRecipesForHub(hub)
    .sort((a, b) => b.protein - a.protein)
    .slice(0, limit);
}

/**
 * Get all unique facet values present in recipes for a given hub and facet type.
 * Useful for building facet nav links from actual content.
 */
export function getAvailableFacetValues(
  hub: 'meal-prep' | 'high-protein',
  facetType: string
): string[] {
  const values = new Set<string>();
  for (const recipe of recipes) {
    if (recipe.hub !== hub) continue;
    const val = recipe.facets[facetType as keyof typeof recipe.facets];
    if (val) values.add(val);
  }
  return Array.from(values).sort();
}
