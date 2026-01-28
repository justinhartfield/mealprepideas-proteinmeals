/**
 * Canonical Taxonomy for MealPrepIdeas.co & ProteinMeals.co
 * 
 * This is the universal facet system that drives all programmatic pages.
 * Facet order for URL canonicalization:
 *   meal > method > diet > goal > constraint > ingredient > persona > store > chain
 */

export const hubs = {
  'meal-prep': {
    id: 'meal-prep',
    path: '/meal-prep/',
    name: 'Meal Prep',
    site: 'mealprepideas',
    description: 'Planning, batching, logistics, storage, "for the week"',
  },
  'high-protein': {
    id: 'high-protein',
    path: '/high-protein/',
    name: 'High Protein',
    site: 'proteinmeals',
    description: 'Macro intent, calorie bands, diet constraints, fast food, frozen',
  },
} as const;

export const facets = {
  meal: {
    label: 'Meal',
    values: ['breakfast', 'lunch', 'dinner', 'snacks'],
  },
  method: {
    label: 'Method',
    values: [
      'crockpot', 'slow-cooker', 'instant-pot', 'air-fryer', 'microwave',
      'sheet-pan', 'one-pan', 'no-cook', 'freezer', 'grill', 'oven',
    ],
  },
  diet: {
    label: 'Diet',
    values: [
      'vegan', 'vegetarian', 'low-carb', 'keto', 'low-calorie',
      'gluten-free', 'dairy-free',
    ],
  },
  goal: {
    label: 'Goal',
    values: ['weight-loss', 'muscle-gain', 'healthy'],
  },
  constraint: {
    label: 'Constraint',
    values: [
      'high-fiber', 'low-sodium', 'low-fat', 'cheap', 'budget',
      'quick', 'simple', 'for-the-week', 'no-microwave',
    ],
  },
  persona: {
    label: 'Persona',
    values: [
      'work', 'college', 'picky-eaters', 'kids', 'toddler',
      'pregnancy', 'postpartum', 'bariatric', 'pcos', 'cholesterol',
    ],
  },
  ingredient: {
    label: 'Ingredient',
    values: [
      'chicken', 'ground-beef', 'ground-turkey', 'salmon',
      'shrimp', 'steak', 'salad', 'eggs', 'tofu', 'rice',
      'quinoa', 'broccoli', 'spinach', 'sweet-potato', 'lentils',
      'pasta', 'beans',
    ],
  },
  store: {
    label: 'Store',
    values: [
      'trader-joes', 'costco', 'walmart', 'aldi', 'whole-foods',
      'kroger', 'publix', 'target', 'sams-club', 'heb',
      'safeway', 'sprouts', 'winco',
      'loblaws', 'no-frills', 'superstore', 'metro',
      'sobeys', 'save-on-foods', 'freshco',
    ],
  },
  chain: {
    label: 'Chain',
    values: [
      'chick-fil-a', 'mcdonalds', 'taco-bell', 'panera',
      'chipotle', 'panda-express', 'wendys', 'subway',
      'wingstop', 'raising-canes', 'popeyes', 'five-guys',
      'shake-shack', 'sweetgreen', 'cava', 'pokeworks',
    ],
  },
} as const;

/** Canonical facet order for URL generation (prevents duplicate URLs) */
export const FACET_ORDER = [
  'meal', 'method', 'diet', 'goal', 'constraint',
  'ingredient', 'persona', 'store', 'chain',
] as const;

/** Synonym mapping for slug normalization */
export const synonyms: Record<string, string> = {
  "trader joe's": 'trader-joes',
  'trader joes': 'trader-joes',
  'crock pot': 'crockpot',
  'no cooking': 'no-cook',
  'low calorie': 'low-calorie',
  'slow cooker': 'slow-cooker',
  'air fryer': 'air-fryer',
  'instant pot': 'instant-pot',
  'sheet pan': 'sheet-pan',
  'one pan': 'one-pan',
  'ground beef': 'ground-beef',
  'ground turkey': 'ground-turkey',
  'whole foods': 'whole-foods',
  'picky eaters': 'picky-eaters',
  'weight loss': 'weight-loss',
  'muscle gain': 'muscle-gain',
  'high fiber': 'high-fiber',
  'low sodium': 'low-sodium',
  'low fat': 'low-fat',
  'low carb': 'low-carb',
  'gluten free': 'gluten-free',
  'dairy free': 'dairy-free',
  'for the week': 'for-the-week',
  'no microwave': 'no-microwave',
  'chick fil a': 'chick-fil-a',
  'taco bell': 'taco-bell',
  'panda express': 'panda-express',
  "sam's club": 'sams-club',
  'sams club': 'sams-club',
  'h-e-b': 'heb',
  'sprouts farmers market': 'sprouts',
  'winco foods': 'winco',
  'no frills': 'no-frills',
  'real canadian superstore': 'superstore',
  'save on foods': 'save-on-foods',
  "raising cane's": 'raising-canes',
  'raising canes': 'raising-canes',
  'five guys': 'five-guys',
  'shake shack': 'shake-shack',
};

/** Two-facet combos that should be indexed (by hub) */
export const indexedCombos = {
  'high-protein': [
    ['method', 'goal'],
    ['method', 'diet'],
    ['diet', 'goal'],
    ['diet', 'constraint'],
    ['store', 'constraint'],
    ['store', 'diet'],
    ['chain', 'goal'],
    ['chain', 'diet'],
    ['meal', 'diet'],
    ['meal', 'goal'],
  ],
  'meal-prep': [
    ['persona', 'method'],
    ['persona', 'diet'],
    ['persona', 'goal'],
    ['meal', 'method'],
    ['meal', 'diet'],
    ['meal', 'goal'],
    ['meal', 'constraint'],
    ['method', 'diet'],
    ['method', 'goal'],
    ['method', 'constraint'],
    ['diet', 'goal'],
    ['diet', 'constraint'],
    ['goal', 'constraint'],
  ],
} as const;

/** Facets that are always indexed regardless of volume */
export const alwaysIndexFacets = {
  method: ['microwave', 'freezer'],
  store: true, // all store values
  chain: true, // all chain values
};

export type FacetKey = keyof typeof facets;
export type HubId = keyof typeof hubs;
