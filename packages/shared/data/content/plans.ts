/**
 * 5-Day Meal Plans
 * At least 5 sample plans across both hubs
 */

export interface MealPlan {
  slug: string;
  title: string;
  description: string;
  hub: 'meal-prep' | 'high-protein';
  facets: Record<string, string>;
  totalPrepTime: number;
  dailyCalories: number;
  dailyProtein: number;
  groceryBudget: string;
  days: {
    day: string;
    meals: {
      type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
      recipeSlug?: string;
      title: string;
      calories: number;
      protein: number;
    }[];
  }[];
  shoppingList: {
    category: string;
    items: string[];
  }[];
  prepSchedule: {
    step: number;
    task: string;
    duration: string;
  }[];
}

export const plans: MealPlan[] = [
  // ─── PLAN 1: Classic Meal Prep for Beginners ─────────────────────
  {
    slug: 'beginner-meal-prep-5-day',
    title: '5-Day Beginner Meal Prep Plan',
    description: 'Your first full week of meal prep. Simple recipes, minimal ingredients, and a clear Sunday prep schedule. Perfect if you\'ve never meal prepped before.',
    hub: 'meal-prep',
    facets: {
      constraint: 'simple',
      persona: 'work',
    },
    totalPrepTime: 90,
    dailyCalories: 1800,
    dailyProtein: 120,
    groceryBudget: '$50-60',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana and peanut butter', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'greek-chicken-meal-prep-bowls', title: 'Greek Chicken Meal Prep Bowl', calories: 485, protein: 42 },
          { type: 'dinner', recipeSlug: 'sunday-prep-honey-garlic-chicken-rice', title: 'Honey Garlic Chicken & Rice', calories: 510, protein: 40 },
          { type: 'snack', title: 'Apple with 2 tbsp almond butter', calories: 260, protein: 7 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana and peanut butter', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'greek-chicken-meal-prep-bowls', title: 'Greek Chicken Meal Prep Bowl', calories: 485, protein: 42 },
          { type: 'dinner', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Budget Chicken Stir-Fry', calories: 420, protein: 35 },
          { type: 'snack', title: 'Greek yogurt with honey', calories: 180, protein: 18 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana and peanut butter', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'greek-chicken-meal-prep-bowls', title: 'Greek Chicken Meal Prep Bowl', calories: 485, protein: 42 },
          { type: 'dinner', recipeSlug: 'sunday-prep-honey-garlic-chicken-rice', title: 'Honey Garlic Chicken & Rice', calories: 510, protein: 40 },
          { type: 'snack', title: 'Celery with hummus', calories: 140, protein: 5 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana and peanut butter', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'greek-chicken-meal-prep-bowls', title: 'Greek Chicken Meal Prep Bowl', calories: 485, protein: 42 },
          { type: 'dinner', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Budget Chicken Stir-Fry', calories: 420, protein: 35 },
          { type: 'snack', title: 'Protein bar', calories: 200, protein: 20 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana and peanut butter', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'greek-chicken-meal-prep-bowls', title: 'Greek Chicken Meal Prep Bowl', calories: 485, protein: 42 },
          { type: 'dinner', title: 'Flexible: eat out or finish leftovers', calories: 500, protein: 30 },
          { type: 'snack', title: 'Trail mix (1/4 cup)', calories: 180, protein: 6 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          '4.5 lbs boneless skinless chicken (thighs + breasts)',
          '18 large eggs',
          '1 container Greek yogurt (32 oz)',
        ],
      },
      {
        category: 'Grains & Carbs',
        items: [
          '2 cups dry quinoa',
          '3 cups dry jasmine rice',
          '5 cups rolled oats',
          '5 large bananas',
        ],
      },
      {
        category: 'Produce',
        items: [
          '2 English cucumbers',
          '1 pint cherry tomatoes',
          '1 red onion',
          '1 lb green beans',
          '1 bag frozen stir-fry vegetables',
          '5 apples',
          '1 bunch celery',
          '1 head garlic',
        ],
      },
      {
        category: 'Pantry',
        items: [
          'Olive oil',
          'Soy sauce',
          'Honey',
          'Lemon juice',
          'Dried oregano',
          'Kalamata olives',
          'Peanut butter',
          'Almond butter',
          'Hummus',
          'Trail mix',
          '5 protein bars',
        ],
      },
      {
        category: 'Dairy',
        items: [
          'Feta cheese (crumbled)',
          'Shredded cheddar',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Make overnight oats for 5 days — layer oats, milk, yogurt, and chia seeds in 5 jars', duration: '10 min' },
      { step: 2, task: 'Marinate Greek chicken thighs with lemon, oregano, and garlic', duration: '5 min' },
      { step: 3, task: 'Bake chicken thighs at 425°F', duration: '25 min' },
      { step: 4, task: 'While chicken bakes: cook quinoa and jasmine rice simultaneously', duration: '15 min' },
      { step: 5, task: 'Make cucumber-tomato salad and tzatziki sauce', duration: '10 min' },
      { step: 6, task: 'Prep honey garlic sauce and season second batch of chicken for dinner', duration: '5 min' },
      { step: 7, task: 'Bake honey garlic chicken and green beans', duration: '30 min' },
      { step: 8, task: 'Cook stir-fry chicken and sauce for dinner containers', duration: '15 min' },
      { step: 9, task: 'Assemble all containers — 5 lunch, 4 dinner', duration: '10 min' },
      { step: 10, task: 'Clean up and store everything', duration: '10 min' },
    ],
  },

  // ─── PLAN 2: High Protein Muscle Gain ─────────────────────────────
  {
    slug: 'high-protein-muscle-gain-5-day',
    title: '5-Day High Protein Muscle Gain Plan',
    description: 'Engineered for serious muscle building. 200g+ protein daily across 4 meals. Paired with a detailed Sunday prep schedule and grocery list.',
    hub: 'high-protein',
    facets: {
      goal: 'muscle-gain',
    },
    totalPrepTime: 120,
    dailyCalories: 2500,
    dailyProtein: 200,
    groceryBudget: '$70-85',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'High Protein Breakfast Burrito', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'ground-beef-power-bowls', title: 'Ground Beef Power Bowl', calories: 550, protein: 44 },
          { type: 'dinner', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Air Fryer Chicken Thighs + Sweet Potato', calories: 580, protein: 52 },
          { type: 'snack', title: 'Protein shake with banana and PB (2 scoops)', calories: 420, protein: 52 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'cottage-cheese-protein-pancakes', title: 'Cottage Cheese Protein Pancakes', calories: 380, protein: 35 },
          { type: 'lunch', recipeSlug: 'shrimp-quinoa-power-bowl', title: 'Shrimp & Quinoa Power Bowl', calories: 430, protein: 42 },
          { type: 'dinner', recipeSlug: 'steak-and-egg-protein-plate', title: 'Steak & Egg Protein Plate', calories: 490, protein: 62 },
          { type: 'snack', title: 'Cottage cheese (1 cup) with berries + almonds', calories: 320, protein: 32 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'High Protein Breakfast Burrito', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'ground-beef-power-bowls', title: 'Ground Beef Power Bowl', calories: 550, protein: 44 },
          { type: 'dinner', recipeSlug: 'baked-salmon-protein-bowl', title: 'Baked Salmon Protein Bowl', calories: 510, protein: 46 },
          { type: 'snack', title: 'Greek yogurt (2 cups) with granola', calories: 400, protein: 40 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'cottage-cheese-protein-pancakes', title: 'Cottage Cheese Protein Pancakes', calories: 380, protein: 35 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Tuna Salad Lettuce Wraps + Rice Cakes', calories: 400, protein: 44 },
          { type: 'dinner', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Air Fryer Chicken Thighs + Brown Rice', calories: 560, protein: 52 },
          { type: 'snack', title: 'Protein shake with banana and PB (2 scoops)', calories: 420, protein: 52 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'High Protein Breakfast Burrito', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'shrimp-quinoa-power-bowl', title: 'Shrimp & Quinoa Power Bowl', calories: 430, protein: 42 },
          { type: 'dinner', recipeSlug: 'slow-cooker-shredded-chicken-tacos', title: 'Slow Cooker Chicken Tacos (double portion)', calories: 520, protein: 48 },
          { type: 'snack', title: 'Hard boiled eggs (4) with hot sauce', calories: 300, protein: 26 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          '3 lbs chicken thighs (bone-in)',
          '3 lbs chicken breasts',
          '1.5 lbs lean ground beef (90/10)',
          '1.5 lbs large shrimp',
          '4 salmon fillets (6 oz each)',
          '2 sirloin steaks (8 oz each)',
          '3 cans albacore tuna',
          '24 eggs',
          'Chicken sausage links (8)',
        ],
      },
      {
        category: 'Dairy & Substitutes',
        items: [
          '1 container cottage cheese (32 oz)',
          '1 container Greek yogurt (32 oz)',
          'Shredded Mexican cheese blend',
          'Butter',
        ],
      },
      {
        category: 'Grains',
        items: [
          'Brown rice (4 cups dry)',
          'Quinoa (2 cups dry)',
          'Rolled oats (2 cups)',
          'Whole wheat tortillas (large, 6)',
          'Corn tortillas (16)',
        ],
      },
      {
        category: 'Produce',
        items: [
          '6 bananas',
          '2 avocados',
          'Baby arugula (1 bag)',
          'Fresh spinach (1 bag)',
          'Butter lettuce (1 head)',
          'English cucumber',
          'Celery',
          'Red onion',
          'Lemons (3)',
          'Limes (2)',
          'Green onions',
          'Fresh ginger',
          'Fresh dill',
          'Garlic (1 head)',
          'Sweet potatoes (2)',
          'Cherry tomatoes',
        ],
      },
      {
        category: 'Pantry',
        items: [
          'Whey protein powder (2 lb tub)',
          'Peanut butter',
          'Almonds',
          'Soy sauce',
          'Sesame oil',
          'Rice vinegar',
          'Brown sugar',
          'Sriracha',
          'Dijon mustard',
          'Taco seasoning (1 packet)',
          'Salsa (1 jar)',
          'Black beans (2 cans)',
          'Roasted red peppers (1 jar)',
          'Smoked paprika, cumin, garlic powder',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Start slow cooker chicken for tacos (set to LOW for 6 hours)', duration: '5 min' },
      { step: 2, task: 'Season and bake chicken thighs (or air fry in batches)', duration: '25 min' },
      { step: 3, task: 'Cook brown rice and quinoa on stovetop simultaneously', duration: '20 min' },
      { step: 4, task: 'Cook ground beef with Korean sauce for power bowls', duration: '15 min' },
      { step: 5, task: 'Make tuna salad for lettuce wraps', duration: '10 min' },
      { step: 6, task: 'Season salmon, wrap in parchment for easy weeknight baking', duration: '5 min' },
      { step: 7, task: 'Hard-boil 8 eggs and store peeled in the fridge', duration: '15 min' },
      { step: 8, task: 'Make breakfast burritos: scramble eggs, assemble and wrap 3 burritos', duration: '15 min' },
      { step: 9, task: 'Shred slow cooker chicken and portion', duration: '10 min' },
      { step: 10, task: 'Assemble all containers and clean up', duration: '15 min' },
    ],
  },

  // ─── PLAN 3: Budget Meal Prep Under $40 ───────────────────────────
  {
    slug: 'budget-meal-prep-under-40',
    title: 'Budget Meal Prep: Full Week Under $40',
    description: 'Eat well on a tight budget. This plan costs under $40 for 5 full days of meals. College-friendly, no fancy ingredients, all flavor.',
    hub: 'meal-prep',
    facets: {
      constraint: 'budget',
      persona: 'college',
    },
    totalPrepTime: 75,
    dailyCalories: 1700,
    dailyProtein: 100,
    groceryBudget: '$35-40',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Egg Muffin Cups (3)', calories: 330, protein: 36 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowl', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'vegan-chickpea-curry-meal-prep', title: 'Chickpea Curry with Rice', calories: 445, protein: 16 },
          { type: 'snack', title: 'Banana with peanut butter', calories: 250, protein: 8 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Egg Muffin Cups (3)', calories: 330, protein: 36 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowl', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Budget Chicken Stir-Fry', calories: 420, protein: 35 },
          { type: 'snack', title: 'Hard boiled eggs (2)', calories: 140, protein: 12 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Egg Muffin Cups (3)', calories: 330, protein: 36 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowl', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'vegan-chickpea-curry-meal-prep', title: 'Chickpea Curry with Rice', calories: 445, protein: 16 },
          { type: 'snack', title: 'Rice cakes with peanut butter', calories: 220, protein: 7 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Egg Muffin Cups (3)', calories: 330, protein: 36 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowl', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Budget Chicken Stir-Fry', calories: 420, protein: 35 },
          { type: 'snack', title: 'Banana with peanut butter', calories: 250, protein: 8 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Leftover egg muffin cups (2) + toast', calories: 350, protein: 28 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowl', calories: 450, protein: 38 },
          { type: 'dinner', title: 'Pasta with leftover chickpea curry sauce', calories: 400, protein: 14 },
          { type: 'snack', title: 'Yogurt with granola', calories: 200, protein: 12 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          '2.5 lbs chicken breasts ($6.00)',
          '2 lbs chicken breast for stir-fry ($5.50)',
          '24 large eggs ($3.50)',
          '6 strips bacon ($2.00)',
        ],
      },
      {
        category: 'Canned Goods',
        items: [
          '2 cans chickpeas ($1.50)',
          '1 can black beans ($0.80)',
          '1 can corn ($0.80)',
          '1 can crushed tomatoes ($1.20)',
          '1 can coconut milk ($1.50)',
        ],
      },
      {
        category: 'Grains',
        items: [
          'Jasmine rice (2 lb bag) ($2.50)',
          'Basmati rice (1 lb) ($1.50)',
          'Flour tortillas (1 pack) ($2.00)',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Fresh spinach ($2.00)',
          'Onion ($0.50)',
          'Garlic ($0.50)',
          'Ginger ($0.50)',
          'Bell pepper ($1.00)',
          'Bananas (5) ($0.75)',
          'Limes (2) ($0.50)',
          'Frozen stir-fry veggies ($2.00)',
        ],
      },
      {
        category: 'Pantry (may already have)',
        items: [
          'Soy sauce',
          'Curry powder',
          'Taco seasoning ($1.00)',
          'Salsa ($2.50)',
          'Peanut butter ($2.50)',
          'Honey',
          'Olive oil',
          'Shredded cheese ($2.50)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Start crockpot chicken with salsa and taco seasoning', duration: '5 min' },
      { step: 2, task: 'Bake egg muffin cups (12 total)', duration: '25 min' },
      { step: 3, task: 'Cook jasmine and basmati rice', duration: '15 min' },
      { step: 4, task: 'Make chickpea curry on the stovetop', duration: '25 min' },
      { step: 5, task: 'Cook chicken stir-fry for dinner portions', duration: '15 min' },
      { step: 6, task: 'Shred crockpot chicken, assemble burrito bowls', duration: '10 min' },
      { step: 7, task: 'Hard-boil 4 eggs for snacks', duration: '12 min' },
      { step: 8, task: 'Package everything into containers', duration: '10 min' },
    ],
  },

  // ─── PLAN 4: Keto Weight Loss ─────────────────────────────────────
  {
    slug: 'keto-weight-loss-5-day',
    title: '5-Day Keto Weight Loss Meal Plan',
    description: 'Strict keto, no guesswork. Under 25g net carbs daily with 150g+ protein. Designed for aggressive fat loss while preserving muscle.',
    hub: 'high-protein',
    facets: {
      diet: 'keto',
      goal: 'weight-loss',
    },
    totalPrepTime: 100,
    dailyCalories: 1800,
    dailyProtein: 155,
    groceryBudget: '$65-75',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Keto Egg Muffin Cups (3)', calories: 495, protein: 54 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Tuna Salad Lettuce Wraps', calories: 280, protein: 40 },
          { type: 'dinner', recipeSlug: 'steak-and-egg-protein-plate', title: 'Steak & Egg Protein Plate', calories: 490, protein: 62 },
          { type: 'snack', title: 'String cheese (2) + almonds (1 oz)', calories: 280, protein: 18 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Keto Egg Muffin Cups (3)', calories: 495, protein: 54 },
          { type: 'lunch', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Air Fryer Chicken Thighs + Side Salad', calories: 420, protein: 50 },
          { type: 'dinner', title: 'Baked salmon with asparagus and butter', calories: 480, protein: 42 },
          { type: 'snack', title: 'Celery with cream cheese', calories: 150, protein: 4 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Scrambled eggs (4) with cheese and avocado', calories: 520, protein: 32 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Tuna Salad Lettuce Wraps', calories: 280, protein: 40 },
          { type: 'dinner', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Air Fryer Chicken Thighs + Sautéed Spinach', calories: 420, protein: 50 },
          { type: 'snack', title: 'Beef jerky (2 oz)', calories: 160, protein: 24 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Keto Egg Muffin Cups (3)', calories: 495, protein: 54 },
          { type: 'lunch', title: 'Leftover salmon salad over greens', calories: 350, protein: 36 },
          { type: 'dinner', recipeSlug: 'steak-and-egg-protein-plate', title: 'Steak & Egg Plate (no starch)', calories: 490, protein: 62 },
          { type: 'snack', title: 'Hard-boiled eggs (2) with hot sauce', calories: 140, protein: 12 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Bacon (4 strips) and eggs (3) with avocado', calories: 560, protein: 34 },
          { type: 'lunch', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Air Fryer Chicken Thighs', calories: 380, protein: 48 },
          { type: 'dinner', title: 'Bunless burger patties (2) with cheddar and pickles', calories: 580, protein: 52 },
          { type: 'snack', title: 'Pork rinds with guacamole', calories: 200, protein: 14 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          '3 lbs chicken thighs (bone-in, skin-on)',
          '2 sirloin steaks (8 oz each)',
          '4 salmon fillets (6 oz each)',
          '1 lb ground beef (80/20)',
          '3 cans albacore tuna',
          '30 eggs',
          '1 lb bacon',
          'Chicken sausage',
          'Beef jerky (4 oz bag)',
        ],
      },
      {
        category: 'Produce',
        items: [
          '3 avocados',
          'Fresh spinach (2 bags)',
          'Butter lettuce (2 heads)',
          'Celery',
          'Asparagus (1 bunch)',
          'Mixed greens (1 large container)',
          'Cherry tomatoes',
          'Lemons',
          'Fresh dill',
          'Garlic',
        ],
      },
      {
        category: 'Dairy & Fats',
        items: [
          'Shredded cheddar cheese',
          'Cream cheese (8 oz)',
          'String cheese (8 pack)',
          'Butter (1 stick)',
          'Heavy cream',
        ],
      },
      {
        category: 'Pantry',
        items: [
          'Almonds (raw)',
          'Pork rinds',
          'Pickles',
          'Hot sauce',
          'Dijon mustard',
          'Olive oil',
          'Smoked paprika, garlic powder, onion powder',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Bake 12 egg muffin cups (breakfast for the week)', duration: '25 min' },
      { step: 2, task: 'Season and air-fry chicken thighs in batches', duration: '30 min' },
      { step: 3, task: 'Make tuna salad for lettuce wraps', duration: '10 min' },
      { step: 4, task: 'Hard-boil 6 eggs for snacks', duration: '12 min' },
      { step: 5, task: 'Wash and prep all vegetables (chop, portion)', duration: '10 min' },
      { step: 6, task: 'Form burger patties, wrap individually', duration: '8 min' },
      { step: 7, task: 'Cook bacon in oven (single sheet pan)', duration: '15 min' },
      { step: 8, task: 'Package everything and clean up', duration: '10 min' },
    ],
  },

  // ─── PLAN 5: Vegan High Protein ───────────────────────────────────
  {
    slug: 'vegan-high-protein-5-day',
    title: '5-Day Vegan High Protein Plan',
    description: 'Who says vegans can\'t hit their protein? 120g+ daily from whole plant foods. Lentils, tofu, tempeh, and legumes in satisfying, prep-friendly meals.',
    hub: 'high-protein',
    facets: {
      diet: 'vegan',
      goal: 'muscle-gain',
    },
    totalPrepTime: 105,
    dailyCalories: 2100,
    dailyProtein: 125,
    groceryBudget: '$45-55',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', title: 'Tofu scramble with veggies and whole wheat toast', calories: 420, protein: 28 },
          { type: 'lunch', recipeSlug: 'vegan-chickpea-curry-meal-prep', title: 'Chickpea Curry with Rice', calories: 445, protein: 16 },
          { type: 'dinner', recipeSlug: 'vegan-lentil-bolognese-high-protein', title: 'Lentil Bolognese with Whole Wheat Pasta', calories: 420, protein: 25 },
          { type: 'snack', title: 'Edamame (1.5 cups shelled) + trail mix', calories: 380, protein: 28 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with soy milk, hemp seeds, and banana', calories: 440, protein: 22 },
          { type: 'lunch', title: 'Tempeh stir-fry with brown rice and broccoli', calories: 480, protein: 32 },
          { type: 'dinner', recipeSlug: 'vegan-chickpea-curry-meal-prep', title: 'Chickpea Curry with Rice', calories: 445, protein: 16 },
          { type: 'snack', title: 'Peanut butter banana smoothie (soy milk)', calories: 400, protein: 24 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Tofu scramble with veggies and whole wheat toast', calories: 420, protein: 28 },
          { type: 'lunch', recipeSlug: 'vegan-lentil-bolognese-high-protein', title: 'Lentil Bolognese with Pasta', calories: 420, protein: 25 },
          { type: 'dinner', title: 'Black bean and sweet potato tacos with avocado', calories: 520, protein: 22 },
          { type: 'snack', title: 'Hummus with veggies + handful of nuts', calories: 320, protein: 14 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with soy milk, hemp seeds, and banana', calories: 440, protein: 22 },
          { type: 'lunch', title: 'Tempeh stir-fry with brown rice and broccoli', calories: 480, protein: 32 },
          { type: 'dinner', recipeSlug: 'vegan-lentil-bolognese-high-protein', title: 'Lentil Bolognese with Pasta', calories: 420, protein: 25 },
          { type: 'snack', title: 'Edamame (1.5 cups) + protein bar', calories: 420, protein: 34 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Tofu scramble with avocado and toast', calories: 450, protein: 28 },
          { type: 'lunch', recipeSlug: 'vegan-chickpea-curry-meal-prep', title: 'Chickpea Curry with Rice', calories: 445, protein: 16 },
          { type: 'dinner', title: 'Flexible: leftovers or eat out (order tofu/tempeh dish)', calories: 500, protein: 25 },
          { type: 'snack', title: 'Peanut butter banana smoothie', calories: 400, protein: 24 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          'Extra-firm tofu (2 blocks, 14 oz each)',
          'Tempeh (2 packages, 8 oz each)',
          'Red lentils (1.5 cups dry)',
          'Chickpeas (2 cans)',
          'Black beans (2 cans)',
          'Edamame, frozen shelled (1 lb bag)',
        ],
      },
      {
        category: 'Grains',
        items: [
          'Whole wheat pasta (1 lb)',
          'Brown rice (3 cups dry)',
          'Basmati rice (2 cups dry)',
          'Rolled oats (2 cups)',
          'Whole wheat bread',
          'Corn tortillas (8)',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Bananas (6)',
          'Avocados (3)',
          'Sweet potatoes (2)',
          'Broccoli (2 heads)',
          'Fresh spinach (1 bag)',
          'Cremini mushrooms (8 oz)',
          'Onions (2)',
          'Carrots (3)',
          'Celery (3 stalks)',
          'Garlic, ginger',
          'Lemons, limes',
          'Fresh cilantro and basil',
          'Bell peppers (2)',
        ],
      },
      {
        category: 'Pantry',
        items: [
          'Coconut milk (1 can)',
          'Crushed tomatoes (28 oz can)',
          'Diced tomatoes (14 oz can)',
          'Tomato paste',
          'Soy sauce',
          'Peanut butter',
          'Hemp seeds',
          'Nutritional yeast',
          'Soy milk (half gallon)',
          'Curry powder, turmeric, cumin',
          'Italian seasoning',
          'Trail mix / mixed nuts',
          'Vegan protein bars (2)',
          'Hummus (1 container)',
          'Olive oil',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Cook lentil bolognese (big batch for 3+ servings)', duration: '30 min' },
      { step: 2, task: 'Make chickpea curry', duration: '25 min' },
      { step: 3, task: 'Cook brown rice and basmati rice', duration: '20 min' },
      { step: 4, task: 'Cook whole wheat pasta, drain, toss with olive oil', duration: '10 min' },
      { step: 5, task: 'Press and crumble tofu for scrambles (store seasoned, cook fresh daily)', duration: '10 min' },
      { step: 6, task: 'Slice and marinate tempeh for stir-fry', duration: '5 min' },
      { step: 7, task: 'Make overnight oats (2 jars)', duration: '5 min' },
      { step: 8, task: 'Portion and package all meals', duration: '10 min' },
    ],
  },

  // ─── PLAN 6: Quick 30-Minute Prep Plan ────────────────────────────
  {
    slug: 'quick-30-min-prep-plan',
    title: '30-Minute Total Prep: The Laziest Plan That Works',
    description: 'Hate spending your whole Sunday in the kitchen? This plan takes just 30 minutes of active prep. No-cook lunches, simple dinners, zero stress.',
    hub: 'meal-prep',
    facets: {
      constraint: 'quick',
      method: 'no-cook',
    },
    totalPrepTime: 30,
    dailyCalories: 1650,
    dailyProtein: 95,
    groceryBudget: '$45-55',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt parfait with granola and berries', calories: 350, protein: 22 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Rotisserie chicken with microwave sweet potato and salad', calories: 520, protein: 40 },
          { type: 'snack', title: 'Apple + string cheese', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt parfait with granola and berries', calories: 350, protein: 22 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Deli turkey roll-ups with cheese, crackers, and veggies', calories: 450, protein: 35 },
          { type: 'snack', title: 'Banana + peanut butter', calories: 250, protein: 8 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats (prep Sunday night)', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Rotisserie chicken with microwave rice and steamed veggies', calories: 480, protein: 38 },
          { type: 'snack', title: 'Hummus and baby carrots', calories: 150, protein: 5 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt parfait with granola and berries', calories: 350, protein: 22 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Frozen pre-made meal (Trader Joe\'s or similar)', calories: 450, protein: 28 },
          { type: 'snack', title: 'Trail mix (1/4 cup)', calories: 180, protein: 6 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Eat out / finish any leftovers', calories: 550, protein: 30 },
          { type: 'snack', title: 'Cottage cheese with fruit', calories: 200, protein: 18 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Grab & Go Proteins',
        items: [
          '1 rotisserie chicken (pre-cooked)',
          'Deli turkey slices (1 lb)',
          'Greek yogurt (32 oz)',
          'Cottage cheese (16 oz)',
          'String cheese (8 pack)',
        ],
      },
      {
        category: 'Wraps & Bread',
        items: [
          '5 large whole wheat wraps',
          'Crackers',
        ],
      },
      {
        category: 'Produce',
        items: [
          '1 English cucumber',
          'Cherry tomatoes (1 pint)',
          'Mixed greens (1 bag)',
          'Baby carrots (1 bag)',
          'Sweet potatoes (2)',
          'Apples (3)',
          'Bananas (3)',
          'Berries (1 pint)',
          'Red onion',
        ],
      },
      {
        category: 'Pantry / Prepped',
        items: [
          'Hummus (10 oz)',
          'Kalamata olives',
          'Feta cheese (crumbled)',
          'Granola',
          'Rolled oats',
          'Peanut butter',
          'Trail mix',
          'Microwave rice packets (2)',
          'Frozen steamable vegetables (2 bags)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Assemble 5 Mediterranean wraps — just spreading and rolling', duration: '10 min' },
      { step: 2, task: 'Make 3 overnight oats jars', duration: '5 min' },
      { step: 3, task: 'Shred rotisserie chicken into 4 portions', duration: '5 min' },
      { step: 4, task: 'Wash and portion all produce (berries, carrots, veggies)', duration: '5 min' },
      { step: 5, task: 'Make yogurt parfait layers in 3 jars', duration: '5 min' },
    ],
  },

  // ─── PLAN 6: College Student Budget Meal Prep ─────────────────────
  {
    slug: "college-student-budget-meal-prep",
    title: "College Student Budget Meal Prep",
    description: "A full week of meals for under $30. Designed for dorm life with minimal equipment. High protein, low effort, and incredibly cheap.",
    hub: "meal-prep",
    facets: {
      persona: "college",
      constraint: "budget",
    },
    totalPrepTime: 60,
    dailyCalories: 1800,
    dailyProtein: 100,
    groceryBudget: "$25-30",
    days: [
      {
        day: "Monday",
        meals: [
          { type: "breakfast", title: "Microwave egg cup with cheese and ham", calories: 280, protein: 22 },
          { type: "lunch", recipeSlug: "no-cook-greek-salad-jars", title: "Greek Salad Jar", calories: 320, protein: 14 },
          { type: "dinner", recipeSlug: "budget-ground-turkey-taco-meat", title: "Turkey Taco Bowl with Rice", calories: 380, protein: 28 },
          { type: "snack", title: "Banana with peanut butter", calories: 290, protein: 8 },
        ],
      },
      {
        day: "Tuesday",
        meals: [
          { type: "breakfast", title: "Overnight oats with protein powder", calories: 380, protein: 26 },
          { type: "lunch", recipeSlug: "budget-chicken-stir-fry-meal-prep", title: "Budget Chicken Stir-Fry", calories: 420, protein: 35 },
          { type: "dinner", recipeSlug: "budget-ground-turkey-taco-meat", title: "Turkey Taco Nachos", calories: 400, protein: 28 },
          { type: "snack", title: "Greek yogurt with honey", calories: 180, protein: 18 },
        ],
      },
      {
        day: "Wednesday",
        meals: [
          { type: "breakfast", title: "Microwave egg cup with cheese and ham", calories: 280, protein: 22 },
          { type: "lunch", recipeSlug: "no-cook-greek-salad-jars", title: "Greek Salad Jar", calories: 320, protein: 14 },
          { type: "dinner", recipeSlug: "budget-chicken-drumstick-meal-prep", title: "Baked Chicken Drumsticks with Rice", calories: 450, protein: 38 },
          { type: "snack", title: "String cheese and crackers", calories: 200, protein: 10 },
        ],
      },
      {
        day: "Thursday",
        meals: [
          { type: "breakfast", title: "Overnight oats with protein powder", calories: 380, protein: 26 },
          { type: "lunch", recipeSlug: "budget-chicken-stir-fry-meal-prep", title: "Budget Chicken Stir-Fry", calories: 420, protein: 35 },
          { type: "dinner", recipeSlug: "budget-ground-turkey-taco-meat", title: "Turkey Taco Lettuce Wraps", calories: 300, protein: 28 },
          { type: "snack", title: "Apple with peanut butter", calories: 260, protein: 7 },
        ],
      },
      {
        day: "Friday",
        meals: [
          { type: "breakfast", title: "Microwave egg cup with veggies", calories: 280, protein: 22 },
          { type: "lunch", recipeSlug: "no-cook-greek-salad-jars", title: "Greek Salad Jar", calories: 320, protein: 14 },
          { type: "dinner", title: "Finish leftovers or eat out (budget: $8)", calories: 500, protein: 25 },
          { type: "snack", title: "Trail mix (1/4 cup)", calories: 180, protein: 6 },
        ],
      },
    ],
    shoppingList: [
      {
        category: "Protein",
        items: [
          "Ground turkey 93% lean (2 lbs) — ~$5",
          "Chicken drumsticks family pack (3 lbs) — ~$3",
          "Chicken breast (2 lbs) — ~$5",
          "Eggs (1 dozen) — ~$3",
          "Deli ham slices (8 oz) — ~$2.50",
        ],
      },
      {
        category: "Pantry Staples",
        items: [
          "White rice (2 lb bag) — ~$1.50",
          "Black beans, 2 cans — ~$1.50",
          "Diced tomatoes with chiles, 1 can — ~$0.80",
          "Rolled oats — ~$2",
          "Peanut butter — ~$2",
          "Soy sauce — ~$1.50",
          "Taco seasoning packet — ~$0.50",
        ],
      },
      {
        category: "Produce & Dairy",
        items: [
          "Frozen stir-fry vegetables (16 oz) — ~$1.50",
          "Chickpeas, 1 can — ~$0.80",
          "Cherry tomatoes (1 pint) — ~$2",
          "Cucumbers (2) — ~$1",
          "Bananas (4) — ~$0.50",
          "Greek yogurt (32 oz) — ~$3",
          "Shredded cheese (8 oz) — ~$2",
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: "Cook ground turkey taco meat in one skillet", duration: "15 min" },
      { step: 2, task: "Season and bake chicken drumsticks", duration: "5 min prep + 40 min bake" },
      { step: 3, task: "Cook 3 cups rice in a pot or rice cooker", duration: "20 min" },
      { step: 4, task: "Assemble 3 Greek salad jars", duration: "10 min" },
      { step: 5, task: "Make 2 overnight oat jars", duration: "5 min" },
      { step: 6, task: "Prep microwave egg cup fillings (dice veggies/ham)", duration: "5 min" },
    ],
  },

  // ─── PLAN 7: Keto High-Protein 5-Day Plan ────────────────────────
  {
    slug: "keto-high-protein-5-day-plan",
    title: "Keto High-Protein 5-Day Plan",
    description: "Hit 150g+ protein daily on strict keto. Under 25g net carbs with high-fat, high-protein meals designed for weight loss and muscle preservation.",
    hub: "high-protein",
    facets: {
      diet: "keto",
      goal: "weight-loss",
    },
    totalPrepTime: 120,
    dailyCalories: 1800,
    dailyProtein: 155,
    groceryBudget: "$60-75",
    days: [
      {
        day: "Monday",
        meals: [
          { type: "breakfast", recipeSlug: "keto-bacon-egg-cups", title: "Keto Bacon Egg Cups (2)", calories: 480, protein: 48 },
          { type: "lunch", recipeSlug: "high-protein-tuna-salad-lettuce-wraps", title: "Tuna Salad Lettuce Wraps", calories: 280, protein: 40 },
          { type: "dinner", recipeSlug: "steak-and-egg-protein-plate", title: "Steak and Egg Plate", calories: 490, protein: 62 },
          { type: "snack", title: "Handful of almonds and string cheese", calories: 250, protein: 14 },
        ],
      },
      {
        day: "Tuesday",
        meals: [
          { type: "breakfast", recipeSlug: "keto-bacon-egg-cups", title: "Keto Bacon Egg Cups (2)", calories: 480, protein: 48 },
          { type: "lunch", recipeSlug: "protein-packed-air-fryer-chicken-thighs", title: "Air Fryer Chicken Thighs with Side Salad", calories: 430, protein: 48 },
          { type: "dinner", recipeSlug: "low-carb-shrimp-stir-fry", title: "Low-Carb Shrimp Stir Fry", calories: 310, protein: 38 },
          { type: "snack", title: "Celery with cream cheese", calories: 150, protein: 4 },
        ],
      },
      {
        day: "Wednesday",
        meals: [
          { type: "breakfast", recipeSlug: "keto-egg-muffin-cups", title: "Keto Egg Muffin Cups (3)", calories: 495, protein: 54 },
          { type: "lunch", recipeSlug: "high-protein-tuna-salad-lettuce-wraps", title: "Tuna Salad Lettuce Wraps", calories: 280, protein: 40 },
          { type: "dinner", recipeSlug: "gluten-free-steak-bowls", title: "Steak Bowl with Cauliflower Rice", calories: 480, protein: 52 },
          { type: "snack", title: "Pork rinds with guacamole", calories: 200, protein: 12 },
        ],
      },
      {
        day: "Thursday",
        meals: [
          { type: "breakfast", recipeSlug: "keto-bacon-egg-cups", title: "Keto Bacon Egg Cups (2)", calories: 480, protein: 48 },
          { type: "lunch", recipeSlug: "protein-packed-air-fryer-chicken-thighs", title: "Air Fryer Chicken Thighs with Avocado", calories: 460, protein: 48 },
          { type: "dinner", recipeSlug: "low-carb-shrimp-stir-fry", title: "Low-Carb Shrimp Stir Fry", calories: 310, protein: 38 },
          { type: "snack", title: "Hard-boiled eggs (2) with everything seasoning", calories: 160, protein: 12 },
        ],
      },
      {
        day: "Friday",
        meals: [
          { type: "breakfast", recipeSlug: "keto-egg-muffin-cups", title: "Keto Egg Muffin Cups (3)", calories: 495, protein: 54 },
          { type: "lunch", recipeSlug: "high-protein-tuna-salad-lettuce-wraps", title: "Tuna Salad Lettuce Wraps", calories: 280, protein: 40 },
          { type: "dinner", recipeSlug: "steak-and-egg-protein-plate", title: "Steak and Egg Plate", calories: 490, protein: 62 },
          { type: "snack", title: "Cheese crisps and pepperoni", calories: 220, protein: 16 },
        ],
      },
    ],
    shoppingList: [
      {
        category: "Protein",
        items: [
          "Sirloin steak (2 lbs)",
          "Flank steak (1.5 lbs)",
          "Chicken thighs bone-in (3 lbs)",
          "Large shrimp (1.5 lbs)",
          "Bacon (1 lb)",
          "Eggs (3 dozen)",
          "Canned tuna (6 cans)",
        ],
      },
      {
        category: "Dairy & Fats",
        items: [
          "Cheddar cheese (shredded, 8 oz)",
          "String cheese (8 pack)",
          "Cream cheese (8 oz)",
          "Heavy cream (1 pint)",
          "Butter (1 stick)",
          "Greek yogurt (16 oz)",
        ],
      },
      {
        category: "Produce",
        items: [
          "Riced cauliflower (2 bags frozen)",
          "Baby spinach (1 bag)",
          "Butter lettuce (2 heads)",
          "Snap peas (1 lb)",
          "Bell peppers (3)",
          "Avocados (4)",
          "Celery",
          "Lemons (3)",
        ],
      },
      {
        category: "Pantry",
        items: [
          "Coconut aminos",
          "Almonds (raw, 8 oz)",
          "Pork rinds",
          "Everything bagel seasoning",
          "Sesame oil",
          "Olive oil",
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: "Bake 12 keto bacon egg cups", duration: "25 min" },
      { step: 2, task: "Bake 12 keto egg muffin cups", duration: "25 min" },
      { step: 3, task: "Air fry chicken thighs in 2 batches", duration: "25 min" },
      { step: 4, task: "Make tuna salad for 3 lunches", duration: "10 min" },
      { step: 5, task: "Prep stir fry veggies (slice peppers, snap peas)", duration: "10 min" },
      { step: 6, task: "Marinate flank steak for Wednesday", duration: "5 min" },
      { step: 7, task: "Hard boil 6 eggs for snacks", duration: "15 min" },
    ],
  },

  // ─── PLAN 8: Postpartum Recovery Meal Plan ────────────────────────
  {
    slug: "postpartum-recovery-meal-plan",
    title: "Postpartum Recovery Meal Plan",
    description: "Nourishing, nutrient-dense meals for new moms. Iron-rich proteins, healthy fats, and anti-inflammatory foods to support postpartum recovery and energy.",
    hub: "meal-prep",
    facets: {
      persona: "postpartum",
      goal: "healthy",
    },
    totalPrepTime: 90,
    dailyCalories: 2200,
    dailyProtein: 110,
    groceryBudget: "$65-80",
    days: [
      {
        day: "Monday",
        meals: [
          { type: "breakfast", title: "Overnight oats with walnuts, flax, and berries", calories: 420, protein: 18 },
          { type: "lunch", recipeSlug: "low-sodium-chicken-soup", title: "Homemade Chicken Soup", calories: 320, protein: 32 },
          { type: "dinner", recipeSlug: "sheet-pan-teriyaki-salmon-vegetables", title: "Teriyaki Salmon with Sweet Potato and Broccoli", calories: 520, protein: 38 },
          { type: "snack", title: "Apple slices with almond butter and honey", calories: 300, protein: 8 },
          { type: "snack", title: "Lactation cookie and glass of milk", calories: 280, protein: 10 },
        ],
      },
      {
        day: "Tuesday",
        meals: [
          { type: "breakfast", recipeSlug: "freezer-breakfast-sandwiches", title: "Freezer Breakfast Sandwich", calories: 340, protein: 22 },
          { type: "lunch", recipeSlug: "low-sodium-chicken-soup", title: "Homemade Chicken Soup", calories: 320, protein: 32 },
          { type: "dinner", recipeSlug: "one-pan-pasta-primavera", title: "One-Pan Pasta Primavera", calories: 410, protein: 16 },
          { type: "snack", title: "Trail mix with dried fruit and dark chocolate", calories: 320, protein: 8 },
          { type: "snack", title: "Greek yogurt with granola", calories: 280, protein: 20 },
        ],
      },
      {
        day: "Wednesday",
        meals: [
          { type: "breakfast", title: "Overnight oats with walnuts, flax, and berries", calories: 420, protein: 18 },
          { type: "lunch", recipeSlug: "instant-pot-chicken-burrito-bowls", title: "Chicken Burrito Bowl", calories: 470, protein: 38 },
          { type: "dinner", recipeSlug: "high-fiber-turkey-chili", title: "Turkey Chili (iron-rich)", calories: 380, protein: 34 },
          { type: "snack", title: "Hummus with whole wheat pita and veggies", calories: 280, protein: 8 },
          { type: "snack", title: "Banana smoothie with spinach and protein powder", calories: 350, protein: 25 },
        ],
      },
      {
        day: "Thursday",
        meals: [
          { type: "breakfast", recipeSlug: "freezer-breakfast-sandwiches", title: "Freezer Breakfast Sandwich", calories: 340, protein: 22 },
          { type: "lunch", recipeSlug: "instant-pot-chicken-burrito-bowls", title: "Chicken Burrito Bowl", calories: 470, protein: 38 },
          { type: "dinner", recipeSlug: "sheet-pan-sausage-and-veggies", title: "Sheet Pan Sausage and Veggies", calories: 440, protein: 24 },
          { type: "snack", title: "Cottage cheese with pineapple", calories: 200, protein: 18 },
          { type: "snack", title: "Handful of almonds and dark chocolate", calories: 250, protein: 8 },
        ],
      },
      {
        day: "Friday",
        meals: [
          { type: "breakfast", title: "Overnight oats with walnuts, flax, and berries", calories: 420, protein: 18 },
          { type: "lunch", recipeSlug: "low-sodium-chicken-soup", title: "Homemade Chicken Soup", calories: 320, protein: 32 },
          { type: "dinner", title: "Leftovers or partner cooks tonight", calories: 500, protein: 30 },
          { type: "snack", title: "Toast with avocado and everything seasoning", calories: 280, protein: 6 },
          { type: "snack", title: "Lactation cookie and glass of milk", calories: 280, protein: 10 },
        ],
      },
    ],
    shoppingList: [
      {
        category: "Protein",
        items: [
          "Salmon fillets (4, 6 oz each)",
          "Chicken breasts (3 lbs)",
          "Ground turkey 93% lean (2 lbs)",
          "Smoked sausage (1.5 lbs)",
          "Eggs (2 dozen)",
          "Turkey sausage patties (12)",
        ],
      },
      {
        category: "Produce",
        items: [
          "Sweet potatoes (3)",
          "Broccoli (2 heads)",
          "Bell peppers (5, mixed colors)",
          "Onions (3)",
          "Carrots (1 lb bag)",
          "Celery (1 bunch)",
          "Baby spinach (2 bags)",
          "Avocados (3)",
          "Bananas (5)",
          "Mixed berries (2 pints)",
          "Apples (3)",
          "Lemons (3)",
        ],
      },
      {
        category: "Dairy & Grains",
        items: [
          "Greek yogurt (32 oz)",
          "Cottage cheese (16 oz)",
          "Milk (1/2 gallon)",
          "English muffins (12 pack)",
          "Whole wheat penne pasta (1 lb)",
          "Rolled oats (large container)",
          "White rice (2 lb bag)",
          "Granola",
        ],
      },
      {
        category: "Pantry & Recovery Foods",
        items: [
          "Walnuts and almonds (8 oz each)",
          "Ground flaxseed",
          "Almond butter",
          "Dark chocolate chips",
          "Hummus (10 oz)",
          "Low-sodium chicken broth (2 cartons)",
          "Kidney beans (1 can)",
          "Black beans (2 cans)",
          "Crushed tomatoes (1 can)",
          "Lactation cookies (store-bought or bake)",
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: "Make a big pot of chicken soup (6 servings)", duration: "45 min" },
      { step: 2, task: "Batch cook Instant Pot chicken for burrito bowls", duration: "25 min" },
      { step: 3, task: "Assemble and freeze 4 breakfast sandwiches", duration: "20 min" },
      { step: 4, task: "Make 3 overnight oat jars", duration: "5 min" },
      { step: 5, task: "Prep sheet pan sausage and veggies (chop, season, store)", duration: "10 min" },
      { step: 6, task: "Wash and portion all produce and snacks", duration: "10 min" },
    ],
  },
];

export default plans;
