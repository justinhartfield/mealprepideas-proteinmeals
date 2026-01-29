/**
 * Auto-populate missing recipe facets
 * Infers: ingredient, diet, goal, method, constraint from recipe data
 */

const fs = require('fs');
const path = require('path');

// Ingredient detection from title/ingredients
const INGREDIENT_PATTERNS = {
  'chicken': /chicken|poultry/i,
  'beef': /beef|steak|ground beef/i,
  'turkey': /turkey/i,
  'salmon': /salmon/i,
  'shrimp': /shrimp|prawn/i,
  'eggs': /egg|eggs|omelette|frittata/i,
  'tofu': /tofu/i,
  'tuna': /tuna/i,
  'pork': /pork|bacon|ham/i,
  'fish': /fish|cod|tilapia|halibut|mahi/i,
  'lentils': /lentil/i,
  'beans': /bean|chickpea/i,
  'quinoa': /quinoa/i,
  'rice': /rice/i,
  'pasta': /pasta|spaghetti|penne/i,
  'greek-yogurt': /greek yogurt|yogurt parfait/i,
  'cottage-cheese': /cottage cheese/i,
  'ground-turkey': /ground turkey/i,
  'ground-beef': /ground beef/i,
};

// Diet detection from ingredients
const DIET_INDICATORS = {
  'vegan': {
    positive: /tofu|tempeh|seitan|vegan|plant-based/i,
    negative: /chicken|beef|turkey|salmon|shrimp|egg|cheese|yogurt|milk|cream|bacon|pork|fish|tuna|meat/i
  },
  'vegetarian': {
    positive: /vegetarian|meatless/i,
    negative: /chicken|beef|turkey|salmon|shrimp|bacon|pork|fish|tuna|meat/i
  },
  'keto': {
    carbThreshold: 15, // net carbs per serving
    fatRatio: 0.6 // fat should be > 60% of macros
  },
  'low-carb': {
    carbThreshold: 30
  },
  'gluten-free': {
    negative: /flour|bread|pasta|wheat|barley|rye|soy sauce(?! tamari)|tortilla|wrap|noodle|couscous|breadcrumb/i
  },
  'dairy-free': {
    negative: /cheese|yogurt|milk|cream|butter(?! peanut)/i
  }
};

// Goal detection based on macros
function detectGoal(recipe) {
  const { protein, calories, carbs, fat } = recipe;
  const proteinRatio = (protein * 4) / calories;
  const carbRatio = (carbs * 4) / calories;
  
  // High protein, low cal = weight loss
  if (protein >= 30 && calories <= 450 && proteinRatio > 0.35) {
    return 'weight-loss';
  }
  // High protein, higher cal = muscle gain
  if (protein >= 40 && calories >= 450) {
    return 'muscle-gain';
  }
  // Balanced macros = healthy
  if (protein >= 25 && carbRatio < 0.5) {
    return 'healthy';
  }
  // High protein in general
  if (protein >= 35) {
    return 'muscle-gain';
  }
  return 'healthy';
}

// Method detection from instructions
const METHOD_PATTERNS = {
  'air-fryer': /air fryer|air-fryer|airfryer/i,
  'instant-pot': /instant pot|pressure cooker/i,
  'slow-cooker': /slow cooker|crockpot|crock pot/i,
  'sheet-pan': /sheet pan|baking sheet|roast.*oven/i,
  'one-pan': /one pan|single pan|skillet/i,
  'grill': /grill|barbecue|bbq/i,
  'oven': /bake|roast|oven/i,
  'microwave': /microwave/i,
  'no-cook': /no.cook|no cooking|raw|cold/i,
  'freezer': /freezer|freeze/i,
  'stovetop': /stovetop|stove|sauté|pan-fry|stir.fry/i,
};

// Constraint detection
function detectConstraint(recipe) {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  if (totalTime <= 15) return 'quick';
  if (totalTime <= 30 && recipe.ingredients.length <= 8) return 'simple';
  if (recipe.servings >= 6) return 'for-the-week';
  return null;
}

// Detect ingredient from title and ingredients list
function detectIngredient(recipe) {
  const searchText = recipe.title + ' ' + recipe.ingredients.join(' ');
  
  for (const [ingredient, pattern] of Object.entries(INGREDIENT_PATTERNS)) {
    if (pattern.test(searchText)) {
      return ingredient;
    }
  }
  return null;
}

// Detect diet from ingredients
function detectDiet(recipe) {
  const ingredientText = recipe.ingredients.join(' ').toLowerCase();
  const { carbs, fat, calories } = recipe;
  
  // Check keto first (macro-based)
  const netCarbs = carbs - (recipe.fiber || 0);
  if (netCarbs <= 15 && fat > 0 && ((fat * 9) / calories) > 0.5) {
    return 'keto';
  }
  
  // Check low-carb
  if (netCarbs <= 25) {
    return 'low-carb';
  }
  
  // Check vegan
  if (DIET_INDICATORS.vegan.positive.test(ingredientText) && 
      !DIET_INDICATORS.vegan.negative.test(ingredientText)) {
    return 'vegan';
  }
  
  // Check vegetarian
  if (!DIET_INDICATORS.vegetarian.negative.test(ingredientText)) {
    return 'vegetarian';
  }
  
  // Check gluten-free
  if (!DIET_INDICATORS['gluten-free'].negative.test(ingredientText)) {
    return 'gluten-free';
  }
  
  return null;
}

// Detect method from instructions
function detectMethod(recipe) {
  const instructionText = recipe.instructions.join(' ');
  
  for (const [method, pattern] of Object.entries(METHOD_PATTERNS)) {
    if (pattern.test(instructionText)) {
      return method;
    }
  }
  return null;
}

// Process a recipe file
function processFile(filePath) {
  console.log(`\nProcessing: ${path.basename(filePath)}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updates = { ingredient: 0, diet: 0, goal: 0, method: 0, constraint: 0 };
  
  // Find all recipe blocks with their facets
  const recipeRegex = /(\{[\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?facets:\s*\{)([^}]*?)(\}[\s\S]*?ingredients:\s*\[[\s\S]*?\][\s\S]*?instructions:\s*\[[\s\S]*?\])/g;
  
  content = content.replace(recipeRegex, (match, prefix, slug, facetsContent, suffix) => {
    // Parse existing facets
    const existingFacets = {};
    const facetMatches = facetsContent.matchAll(/(\w+):\s*['"]([^'"]+)['"]/g);
    for (const m of facetMatches) {
      existingFacets[m[1]] = m[2];
    }
    
    // Extract recipe data for analysis
    const titleMatch = match.match(/title:\s*['"]([^'"]+)['"]/);
    const title = titleMatch ? titleMatch[1] : slug;
    
    const ingredientsMatch = match.match(/ingredients:\s*\[([\s\S]*?)\]/);
    const ingredients = ingredientsMatch 
      ? ingredientsMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || []
      : [];
    
    const instructionsMatch = match.match(/instructions:\s*\[([\s\S]*?)\]/);
    const instructions = instructionsMatch
      ? instructionsMatch[1].match(/['"]([^'"]+)['"]/g)?.map(s => s.replace(/['"]/g, '')) || []
      : [];
    
    const proteinMatch = match.match(/protein:\s*(\d+)/);
    const caloriesMatch = match.match(/calories:\s*(\d+)/);
    const carbsMatch = match.match(/carbs:\s*(\d+)/);
    const fatMatch = match.match(/fat:\s*(\d+)/);
    const fiberMatch = match.match(/fiber:\s*(\d+)/);
    const prepTimeMatch = match.match(/prepTime:\s*(\d+)/);
    const cookTimeMatch = match.match(/cookTime:\s*(\d+)/);
    const servingsMatch = match.match(/servings:\s*(\d+)/);
    
    const recipe = {
      slug,
      title,
      ingredients,
      instructions,
      protein: proteinMatch ? parseInt(proteinMatch[1]) : 0,
      calories: caloriesMatch ? parseInt(caloriesMatch[1]) : 0,
      carbs: carbsMatch ? parseInt(carbsMatch[1]) : 0,
      fat: fatMatch ? parseInt(fatMatch[1]) : 0,
      fiber: fiberMatch ? parseInt(fiberMatch[1]) : 0,
      prepTime: prepTimeMatch ? parseInt(prepTimeMatch[1]) : 0,
      cookTime: cookTimeMatch ? parseInt(cookTimeMatch[1]) : 0,
      servings: servingsMatch ? parseInt(servingsMatch[1]) : 4,
    };
    
    // Detect missing facets
    const newFacets = { ...existingFacets };
    
    if (!existingFacets.ingredient) {
      const detected = detectIngredient(recipe);
      if (detected) {
        newFacets.ingredient = detected;
        updates.ingredient++;
      }
    }
    
    if (!existingFacets.diet) {
      const detected = detectDiet(recipe);
      if (detected) {
        newFacets.diet = detected;
        updates.diet++;
      }
    }
    
    if (!existingFacets.goal) {
      const detected = detectGoal(recipe);
      if (detected) {
        newFacets.goal = detected;
        updates.goal++;
      }
    }
    
    if (!existingFacets.method) {
      const detected = detectMethod(recipe);
      if (detected) {
        newFacets.method = detected;
        updates.method++;
      }
    }
    
    if (!existingFacets.constraint) {
      const detected = detectConstraint(recipe);
      if (detected) {
        newFacets.constraint = detected;
        updates.constraint++;
      }
    }
    
    // Rebuild facets string
    const facetEntries = Object.entries(newFacets)
      .filter(([k, v]) => v)
      .map(([k, v]) => `${k}: '${v}'`)
      .join(', ');
    
    return `${prefix} ${facetEntries} ${suffix}`;
  });
  
  // Write back
  fs.writeFileSync(filePath, content);
  
  console.log(`  Updates: ingredient=${updates.ingredient}, diet=${updates.diet}, goal=${updates.goal}, method=${updates.method}, constraint=${updates.constraint}`);
  return updates;
}

// Main
const contentDir = path.join(__dirname, '../packages/shared/data/content');
const recipeFiles = fs.readdirSync(contentDir)
  .filter(f => f.startsWith('recipes') && f.endsWith('.ts') && !f.includes('.es.'));

console.log('=== AUTO-POPULATING RECIPE FACETS ===');
console.log(`Found ${recipeFiles.length} recipe files\n`);

let totalUpdates = { ingredient: 0, diet: 0, goal: 0, method: 0, constraint: 0 };

for (const file of recipeFiles) {
  const updates = processFile(path.join(contentDir, file));
  for (const key of Object.keys(totalUpdates)) {
    totalUpdates[key] += updates[key];
  }
}

console.log('\n=== TOTAL UPDATES ===');
console.log(JSON.stringify(totalUpdates, null, 2));
console.log(`\nTotal facets added: ${Object.values(totalUpdates).reduce((a, b) => a + b, 0)}`);
