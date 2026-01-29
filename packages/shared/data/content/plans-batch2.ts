/**
 * 5-Day Meal Plans - Batch 2
 * 10 additional plans targeting diverse audiences
 */

import type { MealPlan } from './plans';

export const plansBatch2: MealPlan[] = [
  // ─── PLAN 1: Budget Family Meal Prep ─────────────────────────────
  {
    slug: 'budget-family-meal-prep-5-day',
    title: 'Budget Family Meal Prep: Feed 4 for Under $75',
    description: 'Feed your whole family for less than $75 a week. Kid-approved recipes with smart bulk cooking strategies. Simple ingredients, big flavors, zero food waste.',
    hub: 'meal-prep',
    facets: {
      constraint: 'budget',
      persona: 'kids',
    },
    totalPrepTime: 120,
    dailyCalories: 1900,
    dailyProtein: 95,
    groceryBudget: '$70-75',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', title: 'Sheet pan pancakes with syrup', calories: 380, protein: 10 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowls', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-slow-cooker-beef-stroganoff', title: 'Slow Cooker Beef Stroganoff with Egg Noodles', calories: 520, protein: 32 },
          { type: 'snack', title: 'Apple slices with peanut butter', calories: 200, protein: 6 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana', calories: 340, protein: 12 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Chicken Burrito Bowls', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Budget Chicken Stir-Fry with Rice', calories: 480, protein: 35 },
          { type: 'snack', title: 'String cheese and crackers', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Scrambled eggs with toast', calories: 350, protein: 18 },
          { type: 'lunch', title: 'Leftover beef stroganoff', calories: 520, protein: 32 },
          { type: 'dinner', recipeSlug: 'budget-ground-turkey-taco-meat', title: 'Turkey Taco Night with Shells', calories: 460, protein: 28 },
          { type: 'snack', title: 'Banana and yogurt', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Sheet pan pancakes (leftover)', calories: 380, protein: 10 },
          { type: 'lunch', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Budget Chicken Stir-Fry', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'mp-one-pan-lemon-garlic-chicken-thighs', title: 'One-Pan Lemon Garlic Chicken Thighs', calories: 490, protein: 42 },
          { type: 'snack', title: 'Carrot sticks with ranch', calories: 120, protein: 2 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with banana', calories: 340, protein: 12 },
          { type: 'lunch', title: 'Turkey taco quesadillas (leftovers)', calories: 420, protein: 24 },
          { type: 'dinner', title: 'Pizza night (homemade or takeout)', calories: 600, protein: 24 },
          { type: 'snack', title: 'Popcorn', calories: 150, protein: 3 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          'Chicken breasts (4 lbs) — $10',
          'Chicken thighs bone-in (3 lbs) — $6',
          'Ground turkey 93% lean (2 lbs) — $7',
          'Ground beef 80/20 (2 lbs) — $8',
          'Eggs (2 dozen) — $5',
        ],
      },
      {
        category: 'Grains & Carbs',
        items: [
          'Jasmine rice (5 lb bag) — $5',
          'Egg noodles (1 lb) — $2',
          'Flour tortillas (20 count) — $4',
          'Taco shells (12 count) — $2',
          'Pancake mix (2 lb) — $3',
          'Rolled oats — $3',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Bananas (bunch of 6) — $1',
          'Apples (3 lbs bag) — $4',
          'Carrots (2 lb bag) — $2',
          'Onions (3 lb bag) — $2',
          'Frozen stir-fry vegetables (2 bags) — $4',
          'Lemons (3) — $1',
          'Garlic (1 head) — $0.50',
        ],
      },
      {
        category: 'Dairy & Pantry',
        items: [
          'Shredded cheese (16 oz) — $4',
          'Greek yogurt (32 oz) — $4',
          'Sour cream — $2',
          'Salsa (24 oz) — $3',
          'Mushroom soup (2 cans) — $3',
          'Soy sauce — $2',
          'Peanut butter — $3',
          'Maple syrup — $4',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Start slow cooker beef stroganoff (will be ready by dinner)', duration: '10 min' },
      { step: 2, task: 'Cook bulk jasmine rice (8 cups dry) in large pot', duration: '20 min' },
      { step: 3, task: 'Bake sheet pan pancakes for the week', duration: '25 min' },
      { step: 4, task: 'Marinate and bake chicken breasts for burrito bowls', duration: '30 min' },
      { step: 5, task: 'Brown ground turkey with taco seasoning', duration: '15 min' },
      { step: 6, task: 'Make overnight oats (4 jars)', duration: '10 min' },
      { step: 7, task: 'Prep stir-fry chicken and portion', duration: '20 min' },
      { step: 8, task: 'Assemble and portion all containers', duration: '15 min' },
    ],
  },

  // ─── PLAN 2: Vegetarian High-Protein Meal Prep ───────────────────
  {
    slug: 'vegetarian-high-protein-5-day',
    title: '5-Day Vegetarian Meal Prep (100g+ Protein)',
    description: 'Prove that plant-based eating can be high protein. Over 100g daily from eggs, legumes, tofu, and dairy. Satisfying meals that won\'t leave you hungry.',
    hub: 'high-protein',
    facets: {
      diet: 'vegetarian',
      goal: 'muscle-gain',
    },
    totalPrepTime: 100,
    dailyCalories: 2000,
    dailyProtein: 110,
    groceryBudget: '$55-65',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-veggie-egg-muffin-cups', title: 'Veggie Egg Muffin Cups (3)', calories: 330, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp2-spicy-tofu-rice-bowls', title: 'Spicy Tofu Rice Bowls', calories: 450, protein: 28 },
          { type: 'dinner', recipeSlug: 'mp2-indian-chickpea-spinach-curry', title: 'Chickpea Spinach Curry with Rice', calories: 480, protein: 18 },
          { type: 'snack', title: 'Greek yogurt with honey and walnuts', calories: 320, protein: 22 },
          { type: 'snack', title: 'Cottage cheese with berries', calories: 200, protein: 18 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'cottage-cheese-protein-pancakes', title: 'Cottage Cheese Protein Pancakes', calories: 380, protein: 35 },
          { type: 'lunch', recipeSlug: 'mp2-mediterranean-chickpea-salad', title: 'Mediterranean Chickpea Salad', calories: 380, protein: 14 },
          { type: 'dinner', recipeSlug: 'mp2-sheet-pan-tofu-and-broccoli', title: 'Sheet Pan Tofu & Broccoli', calories: 420, protein: 32 },
          { type: 'snack', title: 'Edamame (1 cup shelled)', calories: 190, protein: 17 },
          { type: 'snack', title: 'String cheese (2) with apple', calories: 220, protein: 14 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-veggie-egg-muffin-cups', title: 'Veggie Egg Muffin Cups (3)', calories: 330, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp2-quinoa-stuffed-peppers', title: 'Quinoa Stuffed Peppers', calories: 400, protein: 16 },
          { type: 'dinner', recipeSlug: 'vegan-lentil-bolognese-high-protein', title: 'Lentil Bolognese with Pasta', calories: 420, protein: 25 },
          { type: 'snack', title: 'Hummus with pita and veggies', calories: 280, protein: 10 },
          { type: 'snack', title: 'Protein smoothie (milk + PB + banana)', calories: 350, protein: 18 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'cottage-cheese-protein-pancakes', title: 'Cottage Cheese Protein Pancakes', calories: 380, protein: 35 },
          { type: 'lunch', recipeSlug: 'mp2-spicy-tofu-rice-bowls', title: 'Spicy Tofu Rice Bowls', calories: 450, protein: 28 },
          { type: 'dinner', recipeSlug: 'mp2-spinach-bean-enchilada-bake', title: 'Spinach Bean Enchilada Bake', calories: 460, protein: 22 },
          { type: 'snack', title: 'Greek yogurt parfait', calories: 280, protein: 20 },
          { type: 'snack', title: 'Hard-boiled eggs (2)', calories: 140, protein: 12 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-veggie-egg-muffin-cups', title: 'Veggie Egg Muffin Cups (3)', calories: 330, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp2-mediterranean-chickpea-salad', title: 'Mediterranean Chickpea Salad', calories: 380, protein: 14 },
          { type: 'dinner', title: 'Leftover lentil bolognese or eat out (veggie option)', calories: 450, protein: 22 },
          { type: 'snack', title: 'Cottage cheese with pineapple', calories: 220, protein: 18 },
          { type: 'snack', title: 'Trail mix with nuts', calories: 200, protein: 6 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          'Extra-firm tofu (3 blocks, 14 oz each)',
          'Eggs (2 dozen)',
          'Cottage cheese (32 oz)',
          'Greek yogurt (32 oz)',
          'Chickpeas (3 cans)',
          'Black beans (2 cans)',
          'Red lentils (1 lb)',
          'Edamame, frozen shelled (1 lb)',
        ],
      },
      {
        category: 'Grains',
        items: [
          'Brown rice (2 lbs)',
          'Quinoa (1 lb)',
          'Whole wheat pasta (1 lb)',
          'Whole wheat tortillas (8)',
          'Whole wheat pita (6)',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Bell peppers (6)',
          'Broccoli (2 heads)',
          'Fresh spinach (2 bags)',
          'Onions (3)',
          'Garlic (1 head)',
          'Tomatoes (4)',
          'Cucumbers (2)',
          'Bananas (5)',
          'Apples (3)',
          'Fresh berries (2 pints)',
        ],
      },
      {
        category: 'Pantry & Dairy',
        items: [
          'Crushed tomatoes (28 oz)',
          'Coconut milk (1 can)',
          'Enchilada sauce (15 oz)',
          'Hummus (10 oz)',
          'Shredded cheese (8 oz)',
          'Peanut butter',
          'Honey',
          'Sriracha',
          'Curry powder, cumin, smoked paprika',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Bake 12 veggie egg muffin cups', duration: '25 min' },
      { step: 2, task: 'Press and bake tofu for rice bowls (2 blocks)', duration: '30 min' },
      { step: 3, task: 'Cook brown rice and quinoa', duration: '20 min' },
      { step: 4, task: 'Make lentil bolognese sauce', duration: '25 min' },
      { step: 5, task: 'Prepare chickpea spinach curry', duration: '20 min' },
      { step: 6, task: 'Assemble spinach bean enchilada bake (bake on day of)', duration: '15 min' },
      { step: 7, task: 'Make Mediterranean chickpea salad', duration: '10 min' },
      { step: 8, task: 'Hard-boil 6 eggs', duration: '12 min' },
      { step: 9, task: 'Portion everything into containers', duration: '10 min' },
    ],
  },

  // ─── PLAN 3: Mediterranean Diet Meal Prep ────────────────────────
  {
    slug: 'mediterranean-diet-5-day-prep',
    title: '5-Day Mediterranean Diet Meal Prep',
    description: 'Heart-healthy Mediterranean eating made easy. Olive oil, fish, whole grains, and fresh vegetables. Delicious food that\'s clinically proven to support longevity.',
    hub: 'meal-prep',
    facets: {
      diet: 'mediterranean',
      goal: 'healthy',
    },
    totalPrepTime: 110,
    dailyCalories: 1850,
    dailyProtein: 85,
    groceryBudget: '$65-80',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt with honey, walnuts, and fresh figs', calories: 380, protein: 18 },
          { type: 'lunch', recipeSlug: 'one-pan-mediterranean-chicken', title: 'One-Pan Mediterranean Chicken', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'hp1-mediterranean-baked-cod', title: 'Mediterranean Baked Cod with Tomatoes', calories: 380, protein: 35 },
          { type: 'snack', title: 'Hummus with cucumber and olives', calories: 180, protein: 6 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp2-mediterranean-egg-bake', title: 'Mediterranean Egg Bake', calories: 320, protein: 22 },
          { type: 'lunch', recipeSlug: 'mp-mediterranean-chickpea-salad-boxes', title: 'Mediterranean Chickpea Salad', calories: 380, protein: 14 },
          { type: 'dinner', recipeSlug: 'sheet-pan-lemon-herb-salmon-dinner', title: 'Lemon Herb Salmon with Vegetables', calories: 480, protein: 38 },
          { type: 'snack', title: 'Whole grain crackers with feta and tomato', calories: 200, protein: 8 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with almonds and dried apricots', calories: 380, protein: 14 },
          { type: 'lunch', recipeSlug: 'one-pan-mediterranean-chicken', title: 'One-Pan Mediterranean Chicken', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp2-greek-lentil-rice-bowls', title: 'Greek Lentil Rice Bowls', calories: 420, protein: 18 },
          { type: 'snack', title: 'Mixed nuts and dried fruit', calories: 220, protein: 6 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp2-mediterranean-egg-bake', title: 'Mediterranean Egg Bake', calories: 320, protein: 22 },
          { type: 'lunch', title: 'Leftover lentil bowl with added feta', calories: 450, protein: 20 },
          { type: 'dinner', recipeSlug: 'one-pan-shrimp-scampi-dinner', title: 'Shrimp Scampi with Whole Wheat Pasta', calories: 480, protein: 32 },
          { type: 'snack', title: 'Greek yogurt with honey', calories: 180, protein: 15 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Whole grain toast with avocado and tomato', calories: 350, protein: 10 },
          { type: 'lunch', recipeSlug: 'mp-mediterranean-chickpea-salad-boxes', title: 'Mediterranean Chickpea Salad', calories: 380, protein: 14 },
          { type: 'dinner', title: 'Grilled fish or chicken with salad (flexible)', calories: 450, protein: 35 },
          { type: 'snack', title: 'Fresh fruit and a small handful of almonds', calories: 200, protein: 5 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          'Salmon fillets (4, 6 oz each)',
          'Cod fillets (4, 5 oz each)',
          'Chicken breasts (2 lbs)',
          'Large shrimp (1 lb)',
          'Eggs (1 dozen)',
          'Chickpeas (2 cans)',
          'Green lentils (1 cup dry)',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Cherry tomatoes (2 pints)',
          'Roma tomatoes (4)',
          'Cucumbers (3)',
          'Red onion (2)',
          'Fresh spinach (1 bag)',
          'Lemons (5)',
          'Garlic (2 heads)',
          'Fresh herbs: dill, parsley, oregano',
          'Avocados (2)',
          'Fresh figs or dried apricots',
        ],
      },
      {
        category: 'Mediterranean Staples',
        items: [
          'Extra virgin olive oil',
          'Kalamata olives (1 jar)',
          'Feta cheese (8 oz)',
          'Greek yogurt (32 oz)',
          'Hummus (10 oz)',
          'Whole wheat pasta (1 lb)',
          'Whole grain bread',
          'Brown rice (1 lb)',
          'Rolled oats',
          'Walnuts and almonds',
          'Honey',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Bake Mediterranean egg bake (6 portions)', duration: '30 min' },
      { step: 2, task: 'Prep and bake Mediterranean chicken (2 sheet pans)', duration: '35 min' },
      { step: 3, task: 'Make Greek lentil rice bowls base', duration: '25 min' },
      { step: 4, task: 'Prepare Mediterranean chickpea salad', duration: '15 min' },
      { step: 5, task: 'Make overnight oats (2 jars)', duration: '5 min' },
      { step: 6, task: 'Portion salmon and cod with marinades for easy cooking', duration: '10 min' },
      { step: 7, task: 'Wash and prep all vegetables', duration: '10 min' },
      { step: 8, task: 'Assemble containers', duration: '10 min' },
    ],
  },

  // ─── PLAN 4: Keto-Friendly Meal Prep ─────────────────────────────
  {
    slug: 'keto-friendly-meal-prep-5-day',
    title: '5-Day Keto Meal Prep Plan (Under 30g Carbs)',
    description: 'Stay in ketosis with zero guesswork. Under 30g net carbs daily with satisfying high-fat, moderate-protein meals. Perfect for keto beginners or busy veterans.',
    hub: 'high-protein',
    facets: {
      diet: 'keto',
      goal: 'weight-loss',
    },
    totalPrepTime: 95,
    dailyCalories: 1700,
    dailyProtein: 120,
    groceryBudget: '$70-85',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Keto Egg Muffin Cups (3)', calories: 495, protein: 36 },
          { type: 'lunch', recipeSlug: 'hp1-beef-broccoli-low-carb-bowl', title: 'Beef & Broccoli Low-Carb Bowl', calories: 420, protein: 35 },
          { type: 'dinner', recipeSlug: 'hp-air-fryer-salmon-greens', title: 'Air Fryer Salmon with Greens', calories: 480, protein: 40 },
          { type: 'snack', title: 'Celery with cream cheese', calories: 150, protein: 3 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Scrambled eggs (3) with bacon (3 strips) and avocado', calories: 520, protein: 28 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Tuna Salad Lettuce Wraps', calories: 280, protein: 40 },
          { type: 'dinner', recipeSlug: 'steak-and-egg-protein-plate', title: 'Steak & Egg Protein Plate', calories: 490, protein: 62 },
          { type: 'snack', title: 'String cheese (2) and almonds', calories: 260, protein: 16 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Keto Egg Muffin Cups (3)', calories: 495, protein: 36 },
          { type: 'lunch', recipeSlug: 'hp1-asian-ground-turkey-lettuce-wraps', title: 'Asian Turkey Lettuce Wraps', calories: 340, protein: 32 },
          { type: 'dinner', recipeSlug: 'low-carb-shrimp-stir-fry', title: 'Low-Carb Shrimp Stir-Fry', calories: 310, protein: 38 },
          { type: 'snack', title: 'Pork rinds with guacamole', calories: 220, protein: 12 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Keto coffee with MCT oil + 2 hard-boiled eggs', calories: 380, protein: 12 },
          { type: 'lunch', recipeSlug: 'hp1-beef-broccoli-low-carb-bowl', title: 'Beef & Broccoli Low-Carb Bowl', calories: 420, protein: 35 },
          { type: 'dinner', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Crispy Air Fryer Chicken Thighs', calories: 420, protein: 48 },
          { type: 'snack', title: 'Cucumber slices with everything seasoning cream cheese', calories: 140, protein: 4 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Keto Egg Muffin Cups (3)', calories: 495, protein: 36 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Tuna Salad Lettuce Wraps', calories: 280, protein: 40 },
          { type: 'dinner', title: 'Bunless burgers with cheese, bacon, and side salad', calories: 580, protein: 48 },
          { type: 'snack', title: 'Beef jerky (2 oz)', calories: 160, protein: 24 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          'Ribeye or sirloin steak (2 lbs)',
          'Chicken thighs bone-in (3 lbs)',
          'Ground beef 80/20 (1.5 lbs)',
          'Ground turkey (1 lb)',
          'Salmon fillets (2, 6 oz each)',
          'Large shrimp (1 lb)',
          'Bacon (1 lb)',
          'Eggs (3 dozen)',
          'Canned tuna (4 cans)',
          'Beef jerky (4 oz)',
        ],
      },
      {
        category: 'Low-Carb Vegetables',
        items: [
          'Broccoli (3 heads)',
          'Butter lettuce (2 heads)',
          'Romaine hearts (1 pack)',
          'Baby spinach (2 bags)',
          'Celery (1 bunch)',
          'Cucumbers (3)',
          'Avocados (4)',
          'Bell peppers (2)',
          'Zucchini (2)',
        ],
      },
      {
        category: 'Dairy & Fats',
        items: [
          'Cream cheese (16 oz)',
          'Shredded cheddar (8 oz)',
          'String cheese (8 pack)',
          'Heavy cream (1 pint)',
          'Butter (1 lb)',
          'MCT oil',
        ],
      },
      {
        category: 'Pantry',
        items: [
          'Pork rinds',
          'Almonds (8 oz)',
          'Coconut aminos or soy sauce',
          'Everything bagel seasoning',
          'Mayonnaise',
          'Dijon mustard',
          'Hot sauce',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Bake 12 keto egg muffin cups', duration: '25 min' },
      { step: 2, task: 'Cook ground beef for beef broccoli bowls', duration: '15 min' },
      { step: 3, task: 'Steam broccoli and portion', duration: '10 min' },
      { step: 4, task: 'Make tuna salad for lettuce wraps', duration: '10 min' },
      { step: 5, task: 'Cook ground turkey with Asian seasonings', duration: '15 min' },
      { step: 6, task: 'Form burger patties and refrigerate', duration: '10 min' },
      { step: 7, task: 'Hard-boil 6 eggs', duration: '12 min' },
      { step: 8, task: 'Wash and prep all vegetables', duration: '10 min' },
      { step: 9, task: 'Package everything into containers', duration: '10 min' },
    ],
  },

  // ─── PLAN 5: Quick 30-Minute Prep Week ───────────────────────────
  {
    slug: 'quick-30-minute-meal-prep-week',
    title: 'The 30-Minute Meal Prep Week',
    description: 'Hate spending hours in the kitchen? This entire week\'s prep takes just 30 minutes. Smart shortcuts, no-cook options, and minimal cleanup.',
    hub: 'meal-prep',
    facets: {
      constraint: 'quick',
      method: 'no-cook',
    },
    totalPrepTime: 30,
    dailyCalories: 1700,
    dailyProtein: 90,
    groceryBudget: '$50-60',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt parfait (prep ahead)', calories: 350, protein: 22 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Rotisserie chicken + microwave rice + steamed broccoli', calories: 520, protein: 42 },
          { type: 'snack', title: 'Apple with almond butter', calories: 220, protein: 5 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'overnight-oats-berry-meal-prep', title: 'Berry Overnight Oats', calories: 320, protein: 12 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Deli turkey roll-ups with cheese, crackers, and veggies', calories: 420, protein: 32 },
          { type: 'snack', title: 'String cheese and grapes', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt parfait', calories: 350, protein: 22 },
          { type: 'lunch', title: 'Leftover rotisserie chicken salad', calories: 400, protein: 35 },
          { type: 'dinner', title: 'Frozen meal (Trader Joe\'s or similar) + side salad', calories: 480, protein: 28 },
          { type: 'snack', title: 'Hummus with baby carrots', calories: 150, protein: 5 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'overnight-oats-berry-meal-prep', title: 'Berry Overnight Oats', calories: 320, protein: 12 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Mediterranean Wrap Box', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Sheet pan nachos with pre-cooked chicken', calories: 550, protein: 32 },
          { type: 'snack', title: 'Cottage cheese with pineapple', calories: 180, protein: 16 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Greek yogurt parfait', calories: 350, protein: 22 },
          { type: 'lunch', title: 'Leftover chicken or deli meat wrap', calories: 380, protein: 28 },
          { type: 'dinner', title: 'Pizza night or eat out', calories: 600, protein: 25 },
          { type: 'snack', title: 'Trail mix', calories: 180, protein: 5 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Ready-to-Eat Proteins',
        items: [
          'Rotisserie chicken (1 whole)',
          'Deli turkey slices (1 lb)',
          'Deli ham slices (8 oz)',
          'Greek yogurt (32 oz)',
          'Cottage cheese (16 oz)',
          'String cheese (8 pack)',
          'Shredded cheese (8 oz)',
        ],
      },
      {
        category: 'No-Cook Items',
        items: [
          'Large whole wheat wraps (5)',
          'Hummus (10 oz)',
          'Kalamata olives',
          'Feta cheese (4 oz)',
          'Crackers',
          'Tortilla chips',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Mixed greens (1 bag)',
          'Cherry tomatoes (1 pint)',
          'Cucumber (2)',
          'Baby carrots (1 bag)',
          'Apples (3)',
          'Grapes (1 bunch)',
          'Bananas (3)',
          'Mixed berries (2 pints)',
          'Pineapple chunks (1 container)',
        ],
      },
      {
        category: 'Pantry & Frozen',
        items: [
          'Rolled oats',
          'Granola',
          'Almond butter',
          'Honey',
          'Trail mix',
          'Microwave rice packets (3)',
          'Frozen broccoli (1 bag)',
          'Frozen meals (2-3 of your choice)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Assemble 3 Mediterranean wrap boxes (no cooking!)', duration: '8 min' },
      { step: 2, task: 'Make 2 overnight oats jars', duration: '5 min' },
      { step: 3, task: 'Layer 3 yogurt parfaits in jars', duration: '5 min' },
      { step: 4, task: 'Wash and portion all produce for snacks', duration: '7 min' },
      { step: 5, task: 'Portion rotisserie chicken into containers', duration: '5 min' },
    ],
  },

  // ─── PLAN 6: Freezer-Friendly Bulk Prep ──────────────────────────
  {
    slug: 'freezer-friendly-bulk-prep-5-day',
    title: 'Freezer-Friendly Bulk Prep (Cook Once, Eat for Weeks)',
    description: 'Spend one afternoon cooking and stock your freezer for weeks. Everything freezes beautifully and reheats in minutes. Perfect for busy families or batch cooking enthusiasts.',
    hub: 'meal-prep',
    facets: {
      method: 'freezer',
      constraint: 'for-the-week',
    },
    totalPrepTime: 180,
    dailyCalories: 1850,
    dailyProtein: 100,
    groceryBudget: '$80-95',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-breakfast-burritos', title: 'Freezer Breakfast Burrito', calories: 420, protein: 24 },
          { type: 'lunch', recipeSlug: 'freezer-chicken-burrito-bowls', title: 'Chicken Burrito Bowl (from freezer)', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-freezer-lasagna-roll-ups', title: 'Freezer Lasagna Roll-Ups', calories: 480, protein: 28 },
          { type: 'snack', title: 'Frozen fruit smoothie', calories: 220, protein: 8 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-breakfast-burritos', title: 'Freezer Breakfast Burrito', calories: 420, protein: 24 },
          { type: 'lunch', recipeSlug: 'hp2-freezer-friendly-turkey-chili', title: 'Turkey Chili (from freezer)', calories: 380, protein: 34 },
          { type: 'dinner', recipeSlug: 'freezer-stuffed-peppers-dinner', title: 'Freezer Stuffed Peppers', calories: 420, protein: 28 },
          { type: 'snack', title: 'String cheese and apple', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-pancake-wraps', title: 'Freezer Pancake Wraps', calories: 285, protein: 14 },
          { type: 'lunch', recipeSlug: 'freezer-soup-cups-variety', title: 'Freezer Soup Cup (Chicken Noodle)', calories: 280, protein: 22 },
          { type: 'dinner', recipeSlug: 'hp-freezer-chicken-teriyaki-bowls', title: 'Freezer Chicken Teriyaki Bowls', calories: 520, protein: 42 },
          { type: 'snack', title: 'Frozen yogurt bark', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-breakfast-burritos', title: 'Freezer Breakfast Burrito', calories: 420, protein: 24 },
          { type: 'lunch', recipeSlug: 'hp2-freezer-friendly-turkey-chili', title: 'Turkey Chili (from freezer)', calories: 380, protein: 34 },
          { type: 'dinner', recipeSlug: 'mp-freezer-lasagna-roll-ups', title: 'Freezer Lasagna Roll-Ups', calories: 480, protein: 28 },
          { type: 'snack', title: 'Frozen banana with peanut butter', calories: 200, protein: 5 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-pancake-wraps', title: 'Freezer Pancake Wraps', calories: 285, protein: 14 },
          { type: 'lunch', recipeSlug: 'freezer-chicken-burrito-bowls', title: 'Chicken Burrito Bowl (from freezer)', calories: 450, protein: 38 },
          { type: 'dinner', title: 'Flexible: eat out or finish freezer meals', calories: 500, protein: 30 },
          { type: 'snack', title: 'Frozen grapes', calories: 100, protein: 1 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins (Bulk)',
        items: [
          'Chicken breasts (5 lbs)',
          'Ground turkey 93% lean (3 lbs)',
          'Ground beef 85/15 (2 lbs)',
          'Italian sausage (1 lb)',
          'Eggs (3 dozen)',
          'Bacon (1 lb)',
          'Turkey sausage links (12)',
        ],
      },
      {
        category: 'Grains & Pasta',
        items: [
          'Large flour tortillas (20)',
          'Lasagna noodles (1 box)',
          'White rice (5 lb bag)',
          'Pancake mix (2 lb)',
          'Egg noodles (1 lb)',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Bell peppers (12)',
          'Onions (5)',
          'Garlic (3 heads)',
          'Celery (1 bunch)',
          'Carrots (2 lb bag)',
          'Frozen mixed vegetables (2 bags)',
          'Bananas (6 — freeze some)',
          'Apples (4)',
          'Grapes (1 large bunch)',
        ],
      },
      {
        category: 'Canned & Jarred',
        items: [
          'Crushed tomatoes (2 large cans)',
          'Diced tomatoes (4 cans)',
          'Black beans (3 cans)',
          'Kidney beans (2 cans)',
          'Chicken broth (2 cartons)',
          'Marinara sauce (2 jars)',
          'Salsa (24 oz)',
          'Teriyaki sauce (12 oz)',
        ],
      },
      {
        category: 'Dairy & Freezer',
        items: [
          'Ricotta cheese (32 oz)',
          'Mozzarella shredded (16 oz)',
          'Cheddar shredded (16 oz)',
          'String cheese (8 pack)',
          'Greek yogurt (32 oz)',
          'Frozen fruit mix (2 bags)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Start turkey chili in large pot (makes 10+ servings)', duration: '45 min total' },
      { step: 2, task: 'Assemble 12 breakfast burritos and wrap for freezer', duration: '30 min' },
      { step: 3, task: 'Make lasagna roll-ups (12 rolls)', duration: '40 min' },
      { step: 4, task: 'Cook and shred chicken for burrito bowls and teriyaki', duration: '25 min' },
      { step: 5, task: 'Stuff peppers and portion for freezing', duration: '20 min' },
      { step: 6, task: 'Make pancake wraps (8 wraps)', duration: '20 min' },
      { step: 7, task: 'Portion chicken soup into freezer cups', duration: '10 min' },
      { step: 8, task: 'Make yogurt bark and freeze', duration: '10 min' },
      { step: 9, task: 'Label everything and organize freezer', duration: '10 min' },
    ],
  },

  // ─── PLAN 7: Low-Sodium Heart Healthy ────────────────────────────
  {
    slug: 'low-sodium-heart-healthy-5-day',
    title: '5-Day Low-Sodium Heart Healthy Plan',
    description: 'Clinically-minded meal prep for heart health. Under 1500mg sodium daily with potassium-rich foods. Doctor-recommended, dietitian-approved, actually delicious.',
    hub: 'meal-prep',
    facets: {
      constraint: 'low-sodium',
      goal: 'healthy',
      persona: 'cholesterol',
    },
    totalPrepTime: 100,
    dailyCalories: 1750,
    dailyProtein: 90,
    groceryBudget: '$60-75',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-low-sodium-overnight-oats', title: 'Low-Sodium Overnight Oats with Banana', calories: 340, protein: 12 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-herb-chicken-rice', title: 'Herb Chicken with Brown Rice', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-low-sodium-salmon-lemon-dill', title: 'Lemon Dill Salmon with Vegetables', calories: 450, protein: 36 },
          { type: 'snack', title: 'Unsalted almonds and fresh fruit', calories: 200, protein: 6 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Plain Greek yogurt with honey and fresh berries', calories: 280, protein: 18 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-black-bean-sweet-potato-bowls', title: 'Black Bean Sweet Potato Bowls', calories: 380, protein: 14 },
          { type: 'dinner', recipeSlug: 'mp-low-sodium-turkey-veggie-meatballs', title: 'Turkey Veggie Meatballs with Quinoa', calories: 420, protein: 32 },
          { type: 'snack', title: 'Banana and unsalted peanut butter', calories: 250, protein: 7 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-low-sodium-overnight-oats', title: 'Low-Sodium Overnight Oats', calories: 340, protein: 12 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-chicken-veggie-soup', title: 'Homemade Chicken Veggie Soup', calories: 280, protein: 28 },
          { type: 'dinner', title: 'Grilled chicken breast with roasted potatoes and steamed broccoli', calories: 480, protein: 42 },
          { type: 'snack', title: 'Fresh apple slices with almond butter', calories: 220, protein: 5 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Scrambled egg whites (4) with vegetables and whole grain toast', calories: 280, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-herb-chicken-rice', title: 'Herb Chicken with Brown Rice', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-low-sodium-salmon-lemon-dill', title: 'Lemon Dill Salmon with Vegetables', calories: 450, protein: 36 },
          { type: 'snack', title: 'Celery with unsalted almond butter', calories: 160, protein: 5 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Plain oatmeal with fresh berries and walnuts', calories: 320, protein: 10 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-chicken-veggie-soup', title: 'Homemade Chicken Veggie Soup', calories: 280, protein: 28 },
          { type: 'dinner', title: 'Baked cod with herb crust and steamed vegetables', calories: 380, protein: 35 },
          { type: 'snack', title: 'Fresh fruit salad', calories: 150, protein: 2 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Fresh Proteins',
        items: [
          'Chicken breasts (3 lbs) — no added sodium',
          'Salmon fillets (4, 6 oz each)',
          'Cod fillets (2, 5 oz each)',
          'Ground turkey 93% lean (1.5 lbs)',
          'Eggs (1 dozen)',
          'Plain Greek yogurt — no salt added (32 oz)',
        ],
      },
      {
        category: 'Produce (Potassium-Rich)',
        items: [
          'Bananas (6)',
          'Sweet potatoes (4)',
          'Potatoes (2 lbs)',
          'Broccoli (3 heads)',
          'Spinach (2 bags)',
          'Carrots (1 lb bag)',
          'Celery (1 bunch)',
          'Onions (3)',
          'Garlic (2 heads)',
          'Lemons (5)',
          'Fresh herbs: dill, parsley, rosemary, thyme',
          'Fresh berries (2 pints)',
          'Apples (4)',
        ],
      },
      {
        category: 'Grains',
        items: [
          'Brown rice (2 lbs)',
          'Quinoa (1 lb)',
          'Rolled oats',
          'Whole grain bread — low sodium',
        ],
      },
      {
        category: 'Pantry — Low/No Sodium',
        items: [
          'No-salt-added black beans (2 cans)',
          'No-salt-added diced tomatoes (2 cans)',
          'Low-sodium chicken broth (2 cartons)',
          'Unsalted almonds and walnuts',
          'Unsalted peanut butter',
          'Unsalted almond butter',
          'Olive oil',
          'Honey',
          'Dried herbs and spices (no salt blends)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Make large batch low-sodium chicken veggie soup', duration: '40 min' },
      { step: 2, task: 'Bake herb-seasoned chicken breasts', duration: '30 min' },
      { step: 3, task: 'Cook brown rice and quinoa', duration: '25 min' },
      { step: 4, task: 'Make turkey veggie meatballs', duration: '25 min' },
      { step: 5, task: 'Prep black bean sweet potato bowl components', duration: '20 min' },
      { step: 6, task: 'Make overnight oats (3 jars)', duration: '5 min' },
      { step: 7, task: 'Season and portion salmon for easy cooking', duration: '10 min' },
      { step: 8, task: 'Wash and portion all produce', duration: '10 min' },
    ],
  },

  // ─── PLAN 8: Post-Workout Athlete Prep ───────────────────────────
  {
    slug: 'post-workout-athlete-prep-5-day',
    title: '5-Day Post-Workout Athlete Meal Prep',
    description: 'Optimized for recovery and performance. Strategic carb timing, 180g+ protein daily, and anti-inflammatory foods. Built for serious athletes who train hard.',
    hub: 'high-protein',
    facets: {
      goal: 'muscle-gain',
      persona: 'athlete',
    },
    totalPrepTime: 130,
    dailyCalories: 2800,
    dailyProtein: 185,
    groceryBudget: '$90-110',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'High Protein Breakfast Burrito', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'ground-beef-power-bowls', title: 'Ground Beef Power Bowl', calories: 550, protein: 44 },
          { type: 'dinner', recipeSlug: 'hp1-grilled-steak-sweet-potato-plate', title: 'Grilled Steak & Sweet Potato Plate', calories: 620, protein: 52 },
          { type: 'snack', title: 'Post-workout shake: 2 scoops whey + banana + oats', calories: 480, protein: 52 },
          { type: 'snack', title: 'Cottage cheese (1 cup) with pineapple', calories: 240, protein: 28 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-steak-and-eggs-power-breakfast', title: 'Steak & Eggs Power Breakfast', calories: 560, protein: 48 },
          { type: 'lunch', recipeSlug: 'hp1-sheet-pan-chicken-shawarma', title: 'Chicken Shawarma Bowl', calories: 520, protein: 46 },
          { type: 'dinner', recipeSlug: 'hp-quinoa-salmon-bowl', title: 'Quinoa Salmon Power Bowl', calories: 580, protein: 46 },
          { type: 'snack', title: 'Greek yogurt (2 cups) with granola and berries', calories: 450, protein: 40 },
          { type: 'snack', title: 'Rice cakes with peanut butter and banana', calories: 320, protein: 10 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'High Protein Breakfast Burrito', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'hp1-grilled-chicken-quinoa-power-bowl', title: 'Grilled Chicken Quinoa Bowl', calories: 520, protein: 48 },
          { type: 'dinner', recipeSlug: 'hp2-grilled-chimichurri-flank-steak', title: 'Chimichurri Flank Steak with Rice', calories: 580, protein: 52 },
          { type: 'snack', title: 'Post-workout shake: 2 scoops whey + banana + oats', calories: 480, protein: 52 },
          { type: 'snack', title: 'Hard-boiled eggs (4) with everything seasoning', calories: 300, protein: 26 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-steak-and-eggs-power-breakfast', title: 'Steak & Eggs Power Breakfast', calories: 560, protein: 48 },
          { type: 'lunch', recipeSlug: 'ground-beef-power-bowls', title: 'Ground Beef Power Bowl', calories: 550, protein: 44 },
          { type: 'dinner', recipeSlug: 'hp-sheet-pan-shrimp-veggies', title: 'Sheet Pan Shrimp & Vegetables', calories: 420, protein: 42 },
          { type: 'snack', title: 'Protein smoothie: whey + PB + milk + banana', calories: 480, protein: 42 },
          { type: 'snack', title: 'Turkey and cheese roll-ups (6 slices)', calories: 300, protein: 30 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'High Protein Breakfast Burrito', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'hp1-sheet-pan-chicken-shawarma', title: 'Chicken Shawarma Bowl', calories: 520, protein: 46 },
          { type: 'dinner', title: 'Rest day dinner: lighter meal or eat out', calories: 600, protein: 40 },
          { type: 'snack', title: 'Casein shake before bed', calories: 240, protein: 30 },
          { type: 'snack', title: 'Mixed nuts (1/2 cup)', calories: 280, protein: 8 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins (High Volume)',
        items: [
          'Chicken breasts (5 lbs)',
          'Flank steak (2 lbs)',
          'Sirloin steak (2 lbs)',
          'Lean ground beef 90/10 (3 lbs)',
          'Salmon fillets (4, 6 oz each)',
          'Large shrimp (2 lbs)',
          'Eggs (4 dozen)',
          'Deli turkey (1 lb)',
          'Chicken sausage links (12)',
        ],
      },
      {
        category: 'Dairy & Protein Supplements',
        items: [
          'Whey protein powder (2 lb tub)',
          'Casein protein powder (1 lb)',
          'Greek yogurt (64 oz)',
          'Cottage cheese (32 oz)',
          'Milk (1 gallon)',
          'Shredded cheese (16 oz)',
          'Sliced cheese (12 pack)',
        ],
      },
      {
        category: 'Carbs for Recovery',
        items: [
          'White rice (5 lb bag)',
          'Quinoa (2 lbs)',
          'Sweet potatoes (6)',
          'Rolled oats',
          'Large flour tortillas (12)',
          'Rice cakes',
          'Granola',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Bananas (10)',
          'Mixed berries (2 pints)',
          'Pineapple chunks (1 container)',
          'Broccoli (3 heads)',
          'Bell peppers (6)',
          'Onions (4)',
          'Garlic (2 heads)',
          'Fresh cilantro and parsley',
          'Lemons and limes',
        ],
      },
      {
        category: 'Pantry',
        items: [
          'Peanut butter (large jar)',
          'Mixed nuts (1 lb)',
          'Everything bagel seasoning',
          'Shawarma spice blend',
          'Chimichurri sauce or ingredients',
          'Olive oil',
          'Soy sauce',
          'Honey',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Cook 8 cups white rice and 4 cups quinoa', duration: '25 min' },
      { step: 2, task: 'Grill/bake all chicken breasts with shawarma seasoning', duration: '30 min' },
      { step: 3, task: 'Cook ground beef for power bowls', duration: '15 min' },
      { step: 4, task: 'Make 4 breakfast burritos and wrap', duration: '20 min' },
      { step: 5, task: 'Season and portion steaks for easy cooking', duration: '10 min' },
      { step: 6, task: 'Hard-boil 12 eggs', duration: '15 min' },
      { step: 7, task: 'Roast sweet potatoes', duration: '35 min' },
      { step: 8, task: 'Prep shrimp and vegetables for sheet pan', duration: '10 min' },
      { step: 9, task: 'Portion all meals into containers', duration: '15 min' },
    ],
  },

  // ─── PLAN 9: Pescatarian Seafood Prep ────────────────────────────
  {
    slug: 'pescatarian-seafood-prep-5-day',
    title: '5-Day Pescatarian Seafood Meal Prep',
    description: 'Ocean-to-table meal prep featuring salmon, shrimp, cod, and tuna. High omega-3s, sustainable proteins, and Mediterranean-inspired flavors. No meat, all seafood.',
    hub: 'meal-prep',
    facets: {
      diet: 'pescatarian',
      ingredient: 'seafood',
    },
    totalPrepTime: 95,
    dailyCalories: 1900,
    dailyProtein: 105,
    groceryBudget: '$85-100',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-smoked-salmon-egg-white-wrap', title: 'Smoked Salmon Egg White Wrap', calories: 320, protein: 32 },
          { type: 'lunch', recipeSlug: 'hp1-salmon-avocado-poke-bowl', title: 'Salmon Avocado Poke Bowl', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'one-pan-shrimp-veggie-stir-fry', title: 'Shrimp Veggie Stir-Fry', calories: 380, protein: 32 },
          { type: 'snack', title: 'Greek yogurt with honey and walnuts', calories: 280, protein: 18 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with chia seeds and berries', calories: 360, protein: 14 },
          { type: 'lunch', recipeSlug: 'hp1-tuna-white-bean-salad', title: 'Tuna White Bean Salad', calories: 380, protein: 34 },
          { type: 'dinner', recipeSlug: 'sheet-pan-lemon-herb-salmon-dinner', title: 'Lemon Herb Salmon with Vegetables', calories: 480, protein: 38 },
          { type: 'snack', title: 'Cottage cheese with pineapple', calories: 200, protein: 18 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-smoked-salmon-egg-white-wrap', title: 'Smoked Salmon Egg White Wrap', calories: 320, protein: 32 },
          { type: 'lunch', recipeSlug: 'mp-shrimp-fried-rice-meal-prep', title: 'Shrimp Fried Rice', calories: 450, protein: 28 },
          { type: 'dinner', recipeSlug: 'hp1-mediterranean-baked-cod', title: 'Mediterranean Baked Cod', calories: 380, protein: 35 },
          { type: 'snack', title: 'Edamame (1 cup) with sea salt', calories: 190, protein: 17 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Scrambled eggs with smoked salmon and avocado', calories: 420, protein: 30 },
          { type: 'lunch', recipeSlug: 'hp1-salmon-avocado-poke-bowl', title: 'Salmon Avocado Poke Bowl', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'instant-pot-shrimp-jambalaya', title: 'Shrimp Jambalaya', calories: 460, protein: 32 },
          { type: 'snack', title: 'Hummus with vegetables', calories: 180, protein: 6 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', title: 'Overnight oats with chia seeds and berries', calories: 360, protein: 14 },
          { type: 'lunch', recipeSlug: 'hp1-tuna-white-bean-salad', title: 'Tuna White Bean Salad', calories: 380, protein: 34 },
          { type: 'dinner', title: 'Grilled fish tacos or sushi night (flexible)', calories: 500, protein: 30 },
          { type: 'snack', title: 'Mixed nuts and dried fruit', calories: 220, protein: 6 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Seafood',
        items: [
          'Salmon fillets (6, 5 oz each)',
          'Sushi-grade salmon for poke (1 lb)',
          'Large shrimp (2 lbs)',
          'Cod fillets (2, 6 oz each)',
          'Smoked salmon (8 oz)',
          'Canned albacore tuna (4 cans)',
        ],
      },
      {
        category: 'Eggs & Dairy',
        items: [
          'Eggs (2 dozen)',
          'Egg whites (1 carton)',
          'Greek yogurt (32 oz)',
          'Cottage cheese (16 oz)',
        ],
      },
      {
        category: 'Produce',
        items: [
          'Avocados (4)',
          'Lemons (6)',
          'Limes (4)',
          'Fresh ginger',
          'Garlic (2 heads)',
          'Green onions (2 bunches)',
          'Cucumber (3)',
          'Edamame frozen (1 lb)',
          'Mixed stir-fry vegetables (2 bags)',
          'Cherry tomatoes (2 pints)',
          'Fresh herbs: dill, cilantro, parsley',
          'Mixed berries (2 pints)',
        ],
      },
      {
        category: 'Grains & Pantry',
        items: [
          'Sushi rice (2 lbs)',
          'Jasmine rice (2 lbs)',
          'Rolled oats',
          'Chia seeds',
          'Whole wheat tortillas (6)',
          'White beans (2 cans)',
          'Soy sauce or coconut aminos',
          'Sesame oil',
          'Rice vinegar',
          'Honey',
          'Sriracha',
          'Hummus (10 oz)',
          'Walnuts and mixed nuts',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Marinate and bake salmon fillets', duration: '25 min' },
      { step: 2, task: 'Cook sushi rice and jasmine rice', duration: '25 min' },
      { step: 3, task: 'Make salmon poke bowl base (dice salmon, prep toppings)', duration: '15 min' },
      { step: 4, task: 'Cook shrimp for stir-fry and fried rice', duration: '15 min' },
      { step: 5, task: 'Make tuna white bean salad', duration: '10 min' },
      { step: 6, task: 'Prep shrimp jambalaya base (cook day-of)', duration: '15 min' },
      { step: 7, task: 'Make overnight oats (2 jars)', duration: '5 min' },
      { step: 8, task: 'Assemble smoked salmon wraps', duration: '10 min' },
      { step: 9, task: 'Portion everything into containers', duration: '10 min' },
    ],
  },

  // ─── PLAN 10: Asian Fusion Meal Prep ─────────────────────────────
  {
    slug: 'asian-fusion-meal-prep-5-day',
    title: '5-Day Asian Fusion Meal Prep',
    description: 'Bold flavors from across Asia: teriyaki, Korean BBQ, Thai peanut, and more. Restaurant-quality meals prepped at home for a fraction of the cost.',
    hub: 'meal-prep',
    facets: {
      cuisine: 'asian',
      method: 'stir-fry',
    },
    totalPrepTime: 110,
    dailyCalories: 1900,
    dailyProtein: 100,
    groceryBudget: '$65-80',
    days: [
      {
        day: 'Monday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp2-korean-egg-toast-gyeran-ppang', title: 'Korean Egg Toast', calories: 380, protein: 20 },
          { type: 'lunch', recipeSlug: 'hp2-korean-bibimbap-ground-turkey', title: 'Korean Bibimbap Bowl', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'sheet-pan-teriyaki-salmon-vegetables', title: 'Teriyaki Salmon with Vegetables', calories: 520, protein: 38 },
          { type: 'snack', title: 'Edamame with sea salt', calories: 190, protein: 17 },
        ],
      },
      {
        day: 'Tuesday',
        meals: [
          { type: 'breakfast', title: 'Rice porridge (congee) with soft-boiled egg', calories: 320, protein: 14 },
          { type: 'lunch', recipeSlug: 'hp1-asian-ground-turkey-lettuce-wraps', title: 'Asian Turkey Lettuce Wraps', calories: 340, protein: 32 },
          { type: 'dinner', recipeSlug: 'hp2-thai-basil-ground-turkey-bowls', title: 'Thai Basil Turkey Bowls', calories: 450, protein: 38 },
          { type: 'snack', title: 'Mango slices with tajin', calories: 120, protein: 1 },
        ],
      },
      {
        day: 'Wednesday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp2-korean-egg-toast-gyeran-ppang', title: 'Korean Egg Toast', calories: 380, protein: 20 },
          { type: 'lunch', recipeSlug: 'mp-asian-peanut-tofu-noodle-bowls', title: 'Thai Peanut Tofu Noodle Bowls', calories: 450, protein: 22 },
          { type: 'dinner', recipeSlug: 'hp-quinoa-shrimp-stir-fry', title: 'Garlic Shrimp Stir-Fry', calories: 420, protein: 38 },
          { type: 'snack', title: 'Seaweed snacks and rice crackers', calories: 150, protein: 4 },
        ],
      },
      {
        day: 'Thursday',
        meals: [
          { type: 'breakfast', title: 'Japanese-style breakfast: rice, egg, and pickles', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'hp2-korean-bibimbap-ground-turkey', title: 'Korean Bibimbap Bowl', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'hp2-crockpot-korean-pulled-pork', title: 'Korean Pulled Pork with Rice', calories: 520, protein: 38 },
          { type: 'snack', title: 'Cucumber kimchi', calories: 50, protein: 2 },
        ],
      },
      {
        day: 'Friday',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp2-korean-egg-toast-gyeran-ppang', title: 'Korean Egg Toast', calories: 380, protein: 20 },
          { type: 'lunch', recipeSlug: 'hp1-asian-ground-turkey-lettuce-wraps', title: 'Asian Turkey Lettuce Wraps', calories: 340, protein: 32 },
          { type: 'dinner', title: 'Flexible: order Asian takeout or finish leftovers', calories: 550, protein: 30 },
          { type: 'snack', title: 'Fresh fruit with coconut', calories: 180, protein: 2 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteins',
        items: [
          'Salmon fillets (4, 5 oz each)',
          'Large shrimp (1.5 lbs)',
          'Ground turkey 93% lean (2 lbs)',
          'Pork shoulder or butt (2 lbs)',
          'Extra-firm tofu (2 blocks)',
          'Eggs (2 dozen)',
        ],
      },
      {
        category: 'Asian Produce',
        items: [
          'Butter lettuce (2 heads)',
          'Napa cabbage (1 small head)',
          'Bean sprouts (1 bag)',
          'Green onions (3 bunches)',
          'Fresh ginger (large piece)',
          'Garlic (3 heads)',
          'Thai basil (1 bunch)',
          'Cilantro (2 bunches)',
          'Carrots (1 lb)',
          'Cucumber (3)',
          'Zucchini (2)',
          'Mango (2)',
          'Edamame frozen (1 lb)',
        ],
      },
      {
        category: 'Grains & Noodles',
        items: [
          'Jasmine rice (5 lb bag)',
          'Rice noodles (8 oz)',
          'Short-grain rice for bibimbap (2 lbs)',
          'Sandwich bread (for egg toast)',
        ],
      },
      {
        category: 'Asian Pantry Essentials',
        items: [
          'Soy sauce',
          'Gochujang (Korean chili paste)',
          'Sesame oil',
          'Rice vinegar',
          'Mirin',
          'Fish sauce',
          'Peanut butter',
          'Coconut milk (1 can)',
          'Teriyaki sauce (or make from scratch)',
          'Sesame seeds',
          'Seaweed snacks',
          'Rice crackers',
          'Kimchi (1 jar)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Start slow cooker Korean pulled pork (6-8 hours)', duration: '10 min' },
      { step: 2, task: 'Cook jasmine rice and short-grain rice', duration: '25 min' },
      { step: 3, task: 'Prep bibimbap toppings (carrots, spinach, bean sprouts)', duration: '20 min' },
      { step: 4, task: 'Marinate and bake teriyaki salmon', duration: '25 min' },
      { step: 5, task: 'Cook ground turkey with Asian seasonings', duration: '15 min' },
      { step: 6, task: 'Press and marinate tofu for peanut noodles', duration: '15 min' },
      { step: 7, task: 'Make Thai basil sauce', duration: '5 min' },
      { step: 8, task: 'Prep all lettuce wraps fillings', duration: '10 min' },
      { step: 9, task: 'Shred pulled pork and portion all meals', duration: '15 min' },
    ],
  },
];

export default plansBatch2;
