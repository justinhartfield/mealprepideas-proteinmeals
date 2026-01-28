/**
 * Recipe Translation Layer
 * Merges Spanish translations over English base recipes based on language.
 * Falls back to English if a translation is missing for any recipe.
 */
import type { Recipe } from './recipes';
import type { Lang } from '../../i18n/utils';

// Spanish translation maps (keyed by slug)
import { recipesEs } from './recipes.es';
import { recipesBatchHp1Es } from './recipes-batch-hp1.es';
import { recipesBatchHp2Es } from './recipes-batch-hp2.es';
import { recipesBatchMp1Es } from './recipes-batch-mp1.es';
import { recipesBatchMp2Es } from './recipes-batch-mp2.es';
import { recipesGeneratedEs } from './recipes-generated.es';

/** Combined Spanish translation map */
const allSpanishTranslations: Record<string, {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  tips: string[];
  storageInstructions: string;
  reheatingInstructions?: string;
  imageAlt: string;
}> = {
  ...recipesEs,
  ...recipesBatchHp1Es,
  ...recipesBatchHp2Es,
  ...recipesBatchMp1Es,
  ...recipesBatchMp2Es,
  ...recipesGeneratedEs,
};

/** Translate a single recipe — merges Spanish text fields over the English base */
export function translateRecipe(recipe: Recipe, lang: Lang): Recipe {
  if (lang === 'en') return recipe;

  const translation = allSpanishTranslations[recipe.slug];
  if (!translation) return recipe; // Fallback to English if no translation

  return {
    ...recipe,
    title: translation.title,
    description: translation.description,
    ingredients: translation.ingredients,
    instructions: translation.instructions,
    tips: translation.tips,
    storageInstructions: translation.storageInstructions,
    reheatingInstructions: translation.reheatingInstructions ?? recipe.reheatingInstructions,
    imageAlt: translation.imageAlt,
  };
}

/** Translate an array of recipes */
export function translateRecipes(recipes: Recipe[], lang: Lang): Recipe[] {
  if (lang === 'en') return recipes;
  return recipes.map(r => translateRecipe(r, lang));
}

/** Check if a recipe has a Spanish translation available */
export function hasTranslation(slug: string, lang: Lang): boolean {
  if (lang === 'en') return true;
  return slug in allSpanishTranslations;
}

/** Get translation coverage stats */
export function getTranslationStats(recipes: Recipe[]): { total: number; translated: number; missing: string[] } {
  const total = recipes.length;
  const missing = recipes.filter((r: Recipe) => !(r.slug in allSpanishTranslations)).map((r: Recipe) => r.slug);
  return { total, translated: total - missing.length, missing };
}
