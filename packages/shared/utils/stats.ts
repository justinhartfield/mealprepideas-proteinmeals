/**
 * Dynamic Stats Utility
 * Computes real statistics from the content data layer.
 * Use these instead of hardcoded numbers in components.
 */

import { recipes } from '../data/content/recipes';
import { plans } from '../data/content/plans';
import { stores } from '../data/content/stores';
import { facets } from '../data/taxonomy';

/** Total count of recipes + plans (the "strategies" number) */
export function getTotalStrategies(): number {
  return recipes.length + plans.length;
}

/** Average protein (in grams) across all recipes */
export function getAverageProtein(): number {
  if (recipes.length === 0) return 0;
  const total = recipes.reduce((sum, r) => sum + r.protein, 0);
  return Math.round(total / recipes.length);
}

/** Average calories across all recipes */
export function getAverageCalories(): number {
  if (recipes.length === 0) return 0;
  const total = recipes.reduce((sum, r) => sum + r.calories, 0);
  return Math.round(total / recipes.length);
}

/** Total distinct facet values across all dimensions */
export function getTotalFacetValues(): number {
  let count = 0;
  for (const [, facet] of Object.entries(facets)) {
    count += facet.values.length;
  }
  return count;
}

/** Number of retail/chain stores in the database */
export function getStoreCount(): number {
  return stores.length;
}

/** Number of recipes */
export function getRecipeCount(): number {
  return recipes.length;
}

/** Number of meal plans */
export function getPlanCount(): number {
  return plans.length;
}

/** Fast-food chain stores only */
export function getFastFoodChains() {
  return stores.filter(s => s.type === 'fast-food');
}

/** Grocery stores only */
export function getGroceryStores() {
  return stores.filter(s => s.type === 'grocery');
}

/** Average daily protein from all plans */
export function getAveragePlanProtein(): number {
  if (plans.length === 0) return 0;
  const total = plans.reduce((sum, p) => sum + p.dailyProtein, 0);
  return Math.round(total / plans.length);
}

/** Average grocery budget from all plans (returns display string) */
export function getAveragePlanBudget(): string {
  // Parse the middle value from budget ranges like "$50-60"
  const budgets = plans.map(p => {
    const match = p.groceryBudget.match(/\$(\d+)/);
    return match ? parseInt(match[1], 10) : 50;
  });
  const avg = Math.round(budgets.reduce((a, b) => a + b, 0) / budgets.length);
  return `$${avg}`;
}

/** Average total meals per plan day (meals per day * 5 days) */
export function getAverageMealsPerPlan(): number {
  if (plans.length === 0) return 15;
  const totals = plans.map(p => {
    return p.days.reduce((sum, day) => sum + day.meals.length, 0);
  });
  return Math.round(totals.reduce((a, b) => a + b, 0) / totals.length);
}

/** Meal-prep specific recipe count */
export function getMealPrepRecipeCount(): number {
  return recipes.filter(r => r.hub === 'meal-prep').length;
}

/** High-protein specific recipe count */
export function getHighProteinRecipeCount(): number {
  return recipes.filter(r => r.hub === 'high-protein').length;
}

/** Average protein for high-protein hub recipes */
export function getHighProteinAverageProtein(): number {
  const hpRecipes = recipes.filter(r => r.hub === 'high-protein');
  if (hpRecipes.length === 0) return 0;
  const total = hpRecipes.reduce((sum, r) => sum + r.protein, 0);
  return Math.round(total / hpRecipes.length);
}

/** Average calories for high-protein hub recipes */
export function getHighProteinAverageCalories(): number {
  const hpRecipes = recipes.filter(r => r.hub === 'high-protein');
  if (hpRecipes.length === 0) return 0;
  const total = hpRecipes.reduce((sum, r) => sum + r.calories, 0);
  return Math.round(total / hpRecipes.length);
}

/** Get the first plan (for displaying a real shopping list) */
export function getFirstPlan() {
  return plans[0] ?? null;
}

/** Get the first plan's shopping list */
export function getFirstPlanShoppingList() {
  const plan = plans[0];
  if (!plan) return [];
  // Flatten all items from all categories
  return plan.shoppingList.flatMap(cat => cat.items).slice(0, 6);
}
