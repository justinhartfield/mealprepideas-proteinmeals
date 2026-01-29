/**
 * 5-Day Meal Plans - Batch 2 (Spanish Translation)
 * 10 planes adicionales para diversas audiencias
 */

import type { MealPlan } from './plans';

export const plansBatch2Es: MealPlan[] = [
  // ─── PLAN 1: Preparación Económica Familiar ──────────────────────
  {
    slug: 'budget-family-meal-prep-5-day',
    title: 'Preparación Familiar Económica: Alimenta a 4 por Menos de $75',
    description: 'Alimenta a toda tu familia por menos de $75 a la semana. Recetas aprobadas por niños con estrategias inteligentes de cocina en lote. Ingredientes simples, grandes sabores, cero desperdicio.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', title: 'Panqueques en bandeja con jarabe', calories: 380, protein: 10 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Tazones de Burrito de Pollo', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-slow-cooker-beef-stroganoff', title: 'Stroganoff de Res en Olla de Cocción Lenta', calories: 520, protein: 32 },
          { type: 'snack', title: 'Rodajas de manzana con mantequilla de maní', calories: 200, protein: 6 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', title: 'Avena nocturna con plátano', calories: 340, protein: 12 },
          { type: 'lunch', recipeSlug: 'crockpot-chicken-burrito-bowls', title: 'Tazones de Burrito de Pollo', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Salteado de Pollo Económico con Arroz', calories: 480, protein: 35 },
          { type: 'snack', title: 'Queso en tiras y galletas', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', title: 'Huevos revueltos con tostada', calories: 350, protein: 18 },
          { type: 'lunch', title: 'Stroganoff de res sobrante', calories: 520, protein: 32 },
          { type: 'dinner', recipeSlug: 'budget-ground-turkey-taco-meat', title: 'Noche de Tacos de Pavo', calories: 460, protein: 28 },
          { type: 'snack', title: 'Plátano y yogur', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', title: 'Panqueques en bandeja (sobrantes)', calories: 380, protein: 10 },
          { type: 'lunch', recipeSlug: 'budget-chicken-stir-fry-meal-prep', title: 'Salteado de Pollo Económico', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'mp-one-pan-lemon-garlic-chicken-thighs', title: 'Muslos de Pollo al Limón y Ajo', calories: 490, protein: 42 },
          { type: 'snack', title: 'Palitos de zanahoria con ranch', calories: 120, protein: 2 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', title: 'Avena nocturna con plátano', calories: 340, protein: 12 },
          { type: 'lunch', title: 'Quesadillas de taco de pavo (sobrantes)', calories: 420, protein: 24 },
          { type: 'dinner', title: 'Noche de pizza (casera o pedida)', calories: 600, protein: 24 },
          { type: 'snack', title: 'Palomitas de maíz', calories: 150, protein: 3 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas',
        items: [
          'Pechugas de pollo (2 kg) — $10',
          'Muslos de pollo con hueso (1.5 kg) — $6',
          'Pavo molido 93% magro (1 kg) — $7',
          'Carne molida 80/20 (1 kg) — $8',
          'Huevos (2 docenas) — $5',
        ],
      },
      {
        category: 'Granos y Carbohidratos',
        items: [
          'Arroz jazmín (bolsa de 2.5 kg) — $5',
          'Fideos de huevo (500g) — $2',
          'Tortillas de harina (20 unidades) — $4',
          'Conchas para tacos (12 unidades) — $2',
          'Mezcla para panqueques (1 kg) — $3',
          'Avena en hojuelas — $3',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Plátanos (racimo de 6) — $1',
          'Manzanas (bolsa de 1.5 kg) — $4',
          'Zanahorias (bolsa de 1 kg) — $2',
          'Cebollas (bolsa de 1.5 kg) — $2',
          'Verduras congeladas para saltear (2 bolsas) — $4',
          'Limones (3) — $1',
          'Ajo (1 cabeza) — $0.50',
        ],
      },
      {
        category: 'Lácteos y Despensa',
        items: [
          'Queso rallado (500g) — $4',
          'Yogur griego (1 kg) — $4',
          'Crema agria — $2',
          'Salsa (700ml) — $3',
          'Sopa de champiñones (2 latas) — $3',
          'Salsa de soya — $2',
          'Mantequilla de maní — $3',
          'Jarabe de maple — $4',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Iniciar stroganoff de res en olla de cocción lenta', duration: '10 min' },
      { step: 2, task: 'Cocinar arroz jazmín en lote grande (8 tazas secas)', duration: '20 min' },
      { step: 3, task: 'Hornear panqueques en bandeja para la semana', duration: '25 min' },
      { step: 4, task: 'Marinar y hornear pechugas de pollo para tazones', duration: '30 min' },
      { step: 5, task: 'Dorar pavo molido con condimento para tacos', duration: '15 min' },
      { step: 6, task: 'Preparar avena nocturna (4 frascos)', duration: '10 min' },
      { step: 7, task: 'Preparar pollo salteado y porcionar', duration: '20 min' },
      { step: 8, task: 'Ensamblar y porcionar todos los recipientes', duration: '15 min' },
    ],
  },

  // ─── PLAN 2: Preparación Vegetariana Alta en Proteína ────────────
  {
    slug: 'vegetarian-high-protein-5-day',
    title: 'Preparación Vegetariana de 5 Días (100g+ de Proteína)',
    description: 'Demuestra que comer a base de plantas puede ser alto en proteína. Más de 100g diarios de huevos, legumbres, tofu y lácteos. Comidas satisfactorias que no te dejarán con hambre.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-veggie-egg-muffin-cups', title: 'Moldes de Huevo con Vegetales (3)', calories: 330, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp2-spicy-tofu-rice-bowls', title: 'Tazones de Tofu Picante con Arroz', calories: 450, protein: 28 },
          { type: 'dinner', recipeSlug: 'mp2-indian-chickpea-spinach-curry', title: 'Curry de Garbanzos y Espinacas con Arroz', calories: 480, protein: 18 },
          { type: 'snack', title: 'Yogur griego con miel y nueces', calories: 320, protein: 22 },
          { type: 'snack', title: 'Requesón con frutos rojos', calories: 200, protein: 18 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', recipeSlug: 'cottage-cheese-protein-pancakes', title: 'Panqueques de Proteína con Requesón', calories: 380, protein: 35 },
          { type: 'lunch', recipeSlug: 'mp2-mediterranean-chickpea-salad', title: 'Ensalada Mediterránea de Garbanzos', calories: 380, protein: 14 },
          { type: 'dinner', recipeSlug: 'mp2-sheet-pan-tofu-and-broccoli', title: 'Tofu y Brócoli en Bandeja', calories: 420, protein: 32 },
          { type: 'snack', title: 'Edamame (1 taza desgranado)', calories: 190, protein: 17 },
          { type: 'snack', title: 'Queso en tiras (2) con manzana', calories: 220, protein: 14 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-veggie-egg-muffin-cups', title: 'Moldes de Huevo con Vegetales (3)', calories: 330, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp2-quinoa-stuffed-peppers', title: 'Pimientos Rellenos de Quinoa', calories: 400, protein: 16 },
          { type: 'dinner', recipeSlug: 'vegan-lentil-bolognese-high-protein', title: 'Boloñesa de Lentejas con Pasta', calories: 420, protein: 25 },
          { type: 'snack', title: 'Hummus con pita y vegetales', calories: 280, protein: 10 },
          { type: 'snack', title: 'Batido de proteína (leche + mantequilla de maní + plátano)', calories: 350, protein: 18 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', recipeSlug: 'cottage-cheese-protein-pancakes', title: 'Panqueques de Proteína con Requesón', calories: 380, protein: 35 },
          { type: 'lunch', recipeSlug: 'mp2-spicy-tofu-rice-bowls', title: 'Tazones de Tofu Picante con Arroz', calories: 450, protein: 28 },
          { type: 'dinner', recipeSlug: 'mp2-spinach-bean-enchilada-bake', title: 'Gratinado de Enchiladas de Espinaca y Frijoles', calories: 460, protein: 22 },
          { type: 'snack', title: 'Parfait de yogur griego', calories: 280, protein: 20 },
          { type: 'snack', title: 'Huevos duros (2)', calories: 140, protein: 12 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-veggie-egg-muffin-cups', title: 'Moldes de Huevo con Vegetales (3)', calories: 330, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp2-mediterranean-chickpea-salad', title: 'Ensalada Mediterránea de Garbanzos', calories: 380, protein: 14 },
          { type: 'dinner', title: 'Boloñesa de lentejas sobrante o salir a comer', calories: 450, protein: 22 },
          { type: 'snack', title: 'Requesón con piña', calories: 220, protein: 18 },
          { type: 'snack', title: 'Mezcla de frutos secos', calories: 200, protein: 6 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas',
        items: [
          'Tofu extra firme (3 bloques de 400g)',
          'Huevos (2 docenas)',
          'Requesón (1 kg)',
          'Yogur griego (1 kg)',
          'Garbanzos (3 latas)',
          'Frijoles negros (2 latas)',
          'Lentejas rojas (500g)',
          'Edamame congelado desgranado (500g)',
        ],
      },
      {
        category: 'Granos',
        items: [
          'Arroz integral (1 kg)',
          'Quinoa (500g)',
          'Pasta integral (500g)',
          'Tortillas integrales (8)',
          'Pan pita integral (6)',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Pimientos (6)',
          'Brócoli (2 cabezas)',
          'Espinaca fresca (2 bolsas)',
          'Cebollas (3)',
          'Ajo (1 cabeza)',
          'Tomates (4)',
          'Pepinos (2)',
          'Plátanos (5)',
          'Manzanas (3)',
          'Frutos rojos frescos (2 paquetes)',
        ],
      },
      {
        category: 'Despensa y Lácteos',
        items: [
          'Tomates triturados (800g)',
          'Leche de coco (1 lata)',
          'Salsa para enchiladas (450ml)',
          'Hummus (300g)',
          'Queso rallado (250g)',
          'Mantequilla de maní',
          'Miel',
          'Sriracha',
          'Curry en polvo, comino, pimentón ahumado',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Hornear 12 moldes de huevo con vegetales', duration: '25 min' },
      { step: 2, task: 'Prensar y hornear tofu para tazones (2 bloques)', duration: '30 min' },
      { step: 3, task: 'Cocinar arroz integral y quinoa', duration: '20 min' },
      { step: 4, task: 'Preparar salsa boloñesa de lentejas', duration: '25 min' },
      { step: 5, task: 'Preparar curry de garbanzos y espinacas', duration: '20 min' },
      { step: 6, task: 'Ensamblar gratinado de enchiladas (hornear el día de)', duration: '15 min' },
      { step: 7, task: 'Preparar ensalada mediterránea de garbanzos', duration: '10 min' },
      { step: 8, task: 'Hervir 6 huevos', duration: '12 min' },
      { step: 9, task: 'Porcionar todo en recipientes', duration: '10 min' },
    ],
  },

  // ─── PLAN 3: Preparación Dieta Mediterránea ──────────────────────
  {
    slug: 'mediterranean-diet-5-day-prep',
    title: 'Preparación de Dieta Mediterránea de 5 Días',
    description: 'Alimentación mediterránea saludable para el corazón hecha fácil. Aceite de oliva, pescado, granos enteros y vegetales frescos. Comida deliciosa clínicamente probada para apoyar la longevidad.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', title: 'Yogur griego con miel, nueces e higos frescos', calories: 380, protein: 18 },
          { type: 'lunch', recipeSlug: 'one-pan-mediterranean-chicken', title: 'Pollo Mediterráneo en Una Sartén', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'hp1-mediterranean-baked-cod', title: 'Bacalao Mediterráneo al Horno con Tomates', calories: 380, protein: 35 },
          { type: 'snack', title: 'Hummus con pepino y aceitunas', calories: 180, protein: 6 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp2-mediterranean-egg-bake', title: 'Horneado de Huevo Mediterráneo', calories: 320, protein: 22 },
          { type: 'lunch', recipeSlug: 'mp-mediterranean-chickpea-salad-boxes', title: 'Ensalada Mediterránea de Garbanzos', calories: 380, protein: 14 },
          { type: 'dinner', recipeSlug: 'sheet-pan-lemon-herb-salmon-dinner', title: 'Salmón con Hierbas y Limón con Vegetales', calories: 480, protein: 38 },
          { type: 'snack', title: 'Galletas integrales con queso feta y tomate', calories: 200, protein: 8 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', title: 'Avena nocturna con almendras y albaricoques secos', calories: 380, protein: 14 },
          { type: 'lunch', recipeSlug: 'one-pan-mediterranean-chicken', title: 'Pollo Mediterráneo en Una Sartén', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp2-greek-lentil-rice-bowls', title: 'Tazones Griegos de Lentejas y Arroz', calories: 420, protein: 18 },
          { type: 'snack', title: 'Frutos secos y frutas deshidratadas', calories: 220, protein: 6 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp2-mediterranean-egg-bake', title: 'Horneado de Huevo Mediterráneo', calories: 320, protein: 22 },
          { type: 'lunch', title: 'Tazón de lentejas sobrante con queso feta adicional', calories: 450, protein: 20 },
          { type: 'dinner', recipeSlug: 'one-pan-shrimp-scampi-dinner', title: 'Camarones al Ajillo con Pasta Integral', calories: 480, protein: 32 },
          { type: 'snack', title: 'Yogur griego con miel', calories: 180, protein: 15 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', title: 'Tostada integral con aguacate y tomate', calories: 350, protein: 10 },
          { type: 'lunch', recipeSlug: 'mp-mediterranean-chickpea-salad-boxes', title: 'Ensalada Mediterránea de Garbanzos', calories: 380, protein: 14 },
          { type: 'dinner', title: 'Pescado o pollo a la parrilla con ensalada (flexible)', calories: 450, protein: 35 },
          { type: 'snack', title: 'Fruta fresca y un puñado pequeño de almendras', calories: 200, protein: 5 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas',
        items: [
          'Filetes de salmón (4 de 170g)',
          'Filetes de bacalao (4 de 140g)',
          'Pechugas de pollo (1 kg)',
          'Camarones grandes (500g)',
          'Huevos (1 docena)',
          'Garbanzos (2 latas)',
          'Lentejas verdes (1 taza secas)',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Tomates cherry (2 paquetes)',
          'Tomates roma (4)',
          'Pepinos (3)',
          'Cebolla morada (2)',
          'Espinaca fresca (1 bolsa)',
          'Limones (5)',
          'Ajo (2 cabezas)',
          'Hierbas frescas: eneldo, perejil, orégano',
          'Aguacates (2)',
          'Higos frescos o albaricoques secos',
        ],
      },
      {
        category: 'Básicos Mediterráneos',
        items: [
          'Aceite de oliva extra virgen',
          'Aceitunas kalamata (1 frasco)',
          'Queso feta (250g)',
          'Yogur griego (1 kg)',
          'Hummus (300g)',
          'Pasta integral (500g)',
          'Pan integral',
          'Arroz integral (500g)',
          'Avena en hojuelas',
          'Nueces y almendras',
          'Miel',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Hornear horneado de huevo mediterráneo (6 porciones)', duration: '30 min' },
      { step: 2, task: 'Preparar y hornear pollo mediterráneo (2 bandejas)', duration: '35 min' },
      { step: 3, task: 'Hacer base de tazones de lentejas y arroz griego', duration: '25 min' },
      { step: 4, task: 'Preparar ensalada mediterránea de garbanzos', duration: '15 min' },
      { step: 5, task: 'Hacer avena nocturna (2 frascos)', duration: '5 min' },
      { step: 6, task: 'Porcionar salmón y bacalao con marinadas para cocinar fácilmente', duration: '10 min' },
      { step: 7, task: 'Lavar y preparar todos los vegetales', duration: '10 min' },
      { step: 8, task: 'Ensamblar recipientes', duration: '10 min' },
    ],
  },

  // ─── PLAN 4: Preparación Amigable con Keto ───────────────────────
  {
    slug: 'keto-friendly-meal-prep-5-day',
    title: 'Plan de Preparación Keto de 5 Días (Menos de 30g Carbos)',
    description: 'Mantente en cetosis sin adivinar. Menos de 30g de carbohidratos netos diarios con comidas altas en grasa y moderadas en proteína. Perfecto para principiantes o veteranos ocupados de keto.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Moldes de Huevo Keto (3)', calories: 495, protein: 36 },
          { type: 'lunch', recipeSlug: 'hp1-beef-broccoli-low-carb-bowl', title: 'Tazón de Res y Brócoli Bajo en Carbos', calories: 420, protein: 35 },
          { type: 'dinner', recipeSlug: 'hp-air-fryer-salmon-greens', title: 'Salmón en Freidora de Aire con Verduras', calories: 480, protein: 40 },
          { type: 'snack', title: 'Apio con queso crema', calories: 150, protein: 3 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', title: 'Huevos revueltos (3) con tocino (3 tiras) y aguacate', calories: 520, protein: 28 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Envolturas de Lechuga con Ensalada de Atún', calories: 280, protein: 40 },
          { type: 'dinner', recipeSlug: 'steak-and-egg-protein-plate', title: 'Plato de Bistec y Huevo', calories: 490, protein: 62 },
          { type: 'snack', title: 'Queso en tiras (2) y almendras', calories: 260, protein: 16 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Moldes de Huevo Keto (3)', calories: 495, protein: 36 },
          { type: 'lunch', recipeSlug: 'hp1-asian-ground-turkey-lettuce-wraps', title: 'Envolturas de Lechuga con Pavo Asiático', calories: 340, protein: 32 },
          { type: 'dinner', recipeSlug: 'low-carb-shrimp-stir-fry', title: 'Salteado de Camarones Bajo en Carbos', calories: 310, protein: 38 },
          { type: 'snack', title: 'Chicharrones con guacamole', calories: 220, protein: 12 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', title: 'Café keto con aceite MCT + 2 huevos duros', calories: 380, protein: 12 },
          { type: 'lunch', recipeSlug: 'hp1-beef-broccoli-low-carb-bowl', title: 'Tazón de Res y Brócoli Bajo en Carbos', calories: 420, protein: 35 },
          { type: 'dinner', recipeSlug: 'protein-packed-air-fryer-chicken-thighs', title: 'Muslos de Pollo Crujientes en Freidora de Aire', calories: 420, protein: 48 },
          { type: 'snack', title: 'Rodajas de pepino con queso crema everything', calories: 140, protein: 4 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', recipeSlug: 'keto-egg-muffin-cups', title: 'Moldes de Huevo Keto (3)', calories: 495, protein: 36 },
          { type: 'lunch', recipeSlug: 'high-protein-tuna-salad-lettuce-wraps', title: 'Envolturas de Lechuga con Ensalada de Atún', calories: 280, protein: 40 },
          { type: 'dinner', title: 'Hamburguesas sin pan con queso, tocino y ensalada', calories: 580, protein: 48 },
          { type: 'snack', title: 'Carne seca (60g)', calories: 160, protein: 24 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas',
        items: [
          'Bistec ribeye o sirloin (1 kg)',
          'Muslos de pollo con hueso (1.5 kg)',
          'Carne molida 80/20 (700g)',
          'Pavo molido (500g)',
          'Filetes de salmón (2 de 170g)',
          'Camarones grandes (500g)',
          'Tocino (500g)',
          'Huevos (3 docenas)',
          'Atún enlatado (4 latas)',
          'Carne seca (120g)',
        ],
      },
      {
        category: 'Vegetales Bajos en Carbos',
        items: [
          'Brócoli (3 cabezas)',
          'Lechuga mantequilla (2 cabezas)',
          'Corazones de lechuga romana (1 paquete)',
          'Espinaca baby (2 bolsas)',
          'Apio (1 manojo)',
          'Pepinos (3)',
          'Aguacates (4)',
          'Pimientos (2)',
          'Calabacín (2)',
        ],
      },
      {
        category: 'Lácteos y Grasas',
        items: [
          'Queso crema (500g)',
          'Queso cheddar rallado (250g)',
          'Queso en tiras (8 unidades)',
          'Crema para batir (500ml)',
          'Mantequilla (500g)',
          'Aceite MCT',
        ],
      },
      {
        category: 'Despensa',
        items: [
          'Chicharrones',
          'Almendras (250g)',
          'Coconut aminos o salsa de soya',
          'Sazonador everything bagel',
          'Mayonesa',
          'Mostaza dijon',
          'Salsa picante',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Hornear 12 moldes de huevo keto', duration: '25 min' },
      { step: 2, task: 'Cocinar carne molida para tazones de res y brócoli', duration: '15 min' },
      { step: 3, task: 'Cocer al vapor brócoli y porcionar', duration: '10 min' },
      { step: 4, task: 'Hacer ensalada de atún para envolturas de lechuga', duration: '10 min' },
      { step: 5, task: 'Cocinar pavo molido con condimentos asiáticos', duration: '15 min' },
      { step: 6, task: 'Formar hamburguesas y refrigerar', duration: '10 min' },
      { step: 7, task: 'Hervir 6 huevos', duration: '12 min' },
      { step: 8, task: 'Lavar y preparar todos los vegetales', duration: '10 min' },
      { step: 9, task: 'Empacar todo en recipientes', duration: '10 min' },
    ],
  },

  // ─── PLAN 5: Semana de Preparación Rápida de 30 Minutos ──────────
  {
    slug: 'quick-30-minute-meal-prep-week',
    title: 'La Semana de Preparación en 30 Minutos',
    description: '¿Odias pasar horas en la cocina? Toda la preparación de esta semana toma solo 30 minutos. Atajos inteligentes, opciones sin cocinar y limpieza mínima.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', title: 'Parfait de yogur griego (preparado con anticipación)', calories: 350, protein: 22 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Caja de Wrap Mediterráneo', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Pollo rostizado + arroz de microondas + brócoli al vapor', calories: 520, protein: 42 },
          { type: 'snack', title: 'Manzana con mantequilla de almendras', calories: 220, protein: 5 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', recipeSlug: 'overnight-oats-berry-meal-prep', title: 'Avena Nocturna con Frutos Rojos', calories: 320, protein: 12 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Caja de Wrap Mediterráneo', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Rollitos de pavo del deli con queso, galletas y vegetales', calories: 420, protein: 32 },
          { type: 'snack', title: 'Queso en tiras y uvas', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', title: 'Parfait de yogur griego', calories: 350, protein: 22 },
          { type: 'lunch', title: 'Ensalada de pollo rostizado sobrante', calories: 400, protein: 35 },
          { type: 'dinner', title: 'Comida congelada (Trader Joe\'s o similar) + ensalada', calories: 480, protein: 28 },
          { type: 'snack', title: 'Hummus con zanahorias baby', calories: 150, protein: 5 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', recipeSlug: 'overnight-oats-berry-meal-prep', title: 'Avena Nocturna con Frutos Rojos', calories: 320, protein: 12 },
          { type: 'lunch', recipeSlug: 'no-cook-mediterranean-wrap-boxes', title: 'Caja de Wrap Mediterráneo', calories: 395, protein: 18 },
          { type: 'dinner', title: 'Nachos en bandeja con pollo precocido', calories: 550, protein: 32 },
          { type: 'snack', title: 'Requesón con piña', calories: 180, protein: 16 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', title: 'Parfait de yogur griego', calories: 350, protein: 22 },
          { type: 'lunch', title: 'Wrap de pollo sobrante o carne del deli', calories: 380, protein: 28 },
          { type: 'dinner', title: 'Noche de pizza o salir a comer', calories: 600, protein: 25 },
          { type: 'snack', title: 'Mezcla de frutos secos', calories: 180, protein: 5 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas Listas para Comer',
        items: [
          'Pollo rostizado (1 entero)',
          'Pavo en rebanadas del deli (500g)',
          'Jamón en rebanadas del deli (250g)',
          'Yogur griego (1 kg)',
          'Requesón (500g)',
          'Queso en tiras (8 unidades)',
          'Queso rallado (250g)',
        ],
      },
      {
        category: 'Artículos Sin Cocinar',
        items: [
          'Wraps integrales grandes (5)',
          'Hummus (300g)',
          'Aceitunas kalamata',
          'Queso feta (120g)',
          'Galletas saladas',
          'Totopos',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Mezcla de lechugas (1 bolsa)',
          'Tomates cherry (1 paquete)',
          'Pepino (2)',
          'Zanahorias baby (1 bolsa)',
          'Manzanas (3)',
          'Uvas (1 racimo)',
          'Plátanos (3)',
          'Frutos rojos mixtos (2 paquetes)',
          'Trozos de piña (1 recipiente)',
        ],
      },
      {
        category: 'Despensa y Congelados',
        items: [
          'Avena en hojuelas',
          'Granola',
          'Mantequilla de almendras',
          'Miel',
          'Mezcla de frutos secos',
          'Paquetes de arroz para microondas (3)',
          'Brócoli congelado (1 bolsa)',
          'Comidas congeladas (2-3 de tu elección)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Ensamblar 3 cajas de wrap mediterráneo (¡sin cocinar!)', duration: '8 min' },
      { step: 2, task: 'Hacer 2 frascos de avena nocturna', duration: '5 min' },
      { step: 3, task: 'Armar 3 parfaits de yogur en frascos', duration: '5 min' },
      { step: 4, task: 'Lavar y porcionar todos los vegetales para snacks', duration: '7 min' },
      { step: 5, task: 'Porcionar pollo rostizado en recipientes', duration: '5 min' },
    ],
  },

  // ─── PLAN 6: Preparación en Lote para Congelador ─────────────────
  {
    slug: 'freezer-friendly-bulk-prep-5-day',
    title: 'Preparación en Lote para Congelador (Cocina Una Vez, Come por Semanas)',
    description: 'Pasa una tarde cocinando y llena tu congelador para semanas. Todo se congela perfectamente y se recalienta en minutos. Perfecto para familias ocupadas o entusiastas de la cocina en lote.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-breakfast-burritos', title: 'Burrito de Desayuno del Congelador', calories: 420, protein: 24 },
          { type: 'lunch', recipeSlug: 'freezer-chicken-burrito-bowls', title: 'Tazón de Burrito de Pollo (del congelador)', calories: 450, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-freezer-lasagna-roll-ups', title: 'Rollitos de Lasaña del Congelador', calories: 480, protein: 28 },
          { type: 'snack', title: 'Batido de frutas congeladas', calories: 220, protein: 8 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-breakfast-burritos', title: 'Burrito de Desayuno del Congelador', calories: 420, protein: 24 },
          { type: 'lunch', recipeSlug: 'hp2-freezer-friendly-turkey-chili', title: 'Chili de Pavo (del congelador)', calories: 380, protein: 34 },
          { type: 'dinner', recipeSlug: 'freezer-stuffed-peppers-dinner', title: 'Pimientos Rellenos del Congelador', calories: 420, protein: 28 },
          { type: 'snack', title: 'Queso en tiras y manzana', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-pancake-wraps', title: 'Wraps de Panqueque del Congelador', calories: 285, protein: 14 },
          { type: 'lunch', recipeSlug: 'freezer-soup-cups-variety', title: 'Vaso de Sopa del Congelador (Pollo con Fideos)', calories: 280, protein: 22 },
          { type: 'dinner', recipeSlug: 'hp-freezer-chicken-teriyaki-bowls', title: 'Tazones de Pollo Teriyaki del Congelador', calories: 520, protein: 42 },
          { type: 'snack', title: 'Corteza de yogur congelado', calories: 180, protein: 8 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-breakfast-burritos', title: 'Burrito de Desayuno del Congelador', calories: 420, protein: 24 },
          { type: 'lunch', recipeSlug: 'hp2-freezer-friendly-turkey-chili', title: 'Chili de Pavo (del congelador)', calories: 380, protein: 34 },
          { type: 'dinner', recipeSlug: 'mp-freezer-lasagna-roll-ups', title: 'Rollitos de Lasaña del Congelador', calories: 480, protein: 28 },
          { type: 'snack', title: 'Plátano congelado con mantequilla de maní', calories: 200, protein: 5 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', recipeSlug: 'freezer-friendly-pancake-wraps', title: 'Wraps de Panqueque del Congelador', calories: 285, protein: 14 },
          { type: 'lunch', recipeSlug: 'freezer-chicken-burrito-bowls', title: 'Tazón de Burrito de Pollo (del congelador)', calories: 450, protein: 38 },
          { type: 'dinner', title: 'Flexible: salir a comer o terminar comidas del congelador', calories: 500, protein: 30 },
          { type: 'snack', title: 'Uvas congeladas', calories: 100, protein: 1 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas (En Lote)',
        items: [
          'Pechugas de pollo (2.5 kg)',
          'Pavo molido 93% magro (1.5 kg)',
          'Carne molida 85/15 (1 kg)',
          'Salchicha italiana (500g)',
          'Huevos (3 docenas)',
          'Tocino (500g)',
          'Salchichas de pavo (12)',
        ],
      },
      {
        category: 'Granos y Pastas',
        items: [
          'Tortillas de harina grandes (20)',
          'Fideos de lasaña (1 caja)',
          'Arroz blanco (bolsa de 2.5 kg)',
          'Mezcla para panqueques (1 kg)',
          'Fideos de huevo (500g)',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Pimientos (12)',
          'Cebollas (5)',
          'Ajo (3 cabezas)',
          'Apio (1 manojo)',
          'Zanahorias (bolsa de 1 kg)',
          'Vegetales mixtos congelados (2 bolsas)',
          'Plátanos (6 — congela algunos)',
          'Manzanas (4)',
          'Uvas (1 racimo grande)',
        ],
      },
      {
        category: 'Enlatados y Frascos',
        items: [
          'Tomates triturados (2 latas grandes)',
          'Tomates picados (4 latas)',
          'Frijoles negros (3 latas)',
          'Frijoles rojos (2 latas)',
          'Caldo de pollo (2 cartones)',
          'Salsa marinara (2 frascos)',
          'Salsa (700ml)',
          'Salsa teriyaki (350ml)',
        ],
      },
      {
        category: 'Lácteos y Congelados',
        items: [
          'Queso ricotta (1 kg)',
          'Mozzarella rallada (500g)',
          'Cheddar rallado (500g)',
          'Queso en tiras (8 unidades)',
          'Yogur griego (1 kg)',
          'Mezcla de frutas congeladas (2 bolsas)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Iniciar chili de pavo en olla grande (hace 10+ porciones)', duration: '45 min total' },
      { step: 2, task: 'Ensamblar 12 burritos de desayuno y envolver para congelador', duration: '30 min' },
      { step: 3, task: 'Hacer rollitos de lasaña (12 rollitos)', duration: '40 min' },
      { step: 4, task: 'Cocinar y desmenuzar pollo para tazones de burrito y teriyaki', duration: '25 min' },
      { step: 5, task: 'Rellenar pimientos y porcionar para congelar', duration: '20 min' },
      { step: 6, task: 'Hacer wraps de panqueque (8 wraps)', duration: '20 min' },
      { step: 7, task: 'Porcionar sopa de pollo en vasos para congelador', duration: '10 min' },
      { step: 8, task: 'Hacer corteza de yogur y congelar', duration: '10 min' },
      { step: 9, task: 'Etiquetar todo y organizar el congelador', duration: '10 min' },
    ],
  },

  // ─── PLAN 7: Bajo en Sodio Saludable para el Corazón ─────────────
  {
    slug: 'low-sodium-heart-healthy-5-day',
    title: 'Plan Bajo en Sodio Saludable para el Corazón de 5 Días',
    description: 'Preparación de comidas con mentalidad clínica para la salud cardíaca. Menos de 1500mg de sodio diario con alimentos ricos en potasio. Recomendado por médicos, aprobado por dietistas, realmente delicioso.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-low-sodium-overnight-oats', title: 'Avena Nocturna Baja en Sodio con Plátano', calories: 340, protein: 12 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-herb-chicken-rice', title: 'Pollo con Hierbas y Arroz Integral', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-low-sodium-salmon-lemon-dill', title: 'Salmón al Limón y Eneldo con Vegetales', calories: 450, protein: 36 },
          { type: 'snack', title: 'Almendras sin sal y fruta fresca', calories: 200, protein: 6 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', title: 'Yogur griego natural con miel y frutos rojos frescos', calories: 280, protein: 18 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-black-bean-sweet-potato-bowls', title: 'Tazones de Frijol Negro y Camote', calories: 380, protein: 14 },
          { type: 'dinner', recipeSlug: 'mp-low-sodium-turkey-veggie-meatballs', title: 'Albóndigas de Pavo y Vegetales con Quinoa', calories: 420, protein: 32 },
          { type: 'snack', title: 'Plátano y mantequilla de maní sin sal', calories: 250, protein: 7 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'mp-low-sodium-overnight-oats', title: 'Avena Nocturna Baja en Sodio', calories: 340, protein: 12 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-chicken-veggie-soup', title: 'Sopa Casera de Pollo y Vegetales', calories: 280, protein: 28 },
          { type: 'dinner', title: 'Pechuga de pollo a la parrilla con papas asadas y brócoli al vapor', calories: 480, protein: 42 },
          { type: 'snack', title: 'Rodajas de manzana fresca con mantequilla de almendras', calories: 220, protein: 5 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', title: 'Claras de huevo revueltas (4) con vegetales y tostada integral', calories: 280, protein: 24 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-herb-chicken-rice', title: 'Pollo con Hierbas y Arroz Integral', calories: 420, protein: 38 },
          { type: 'dinner', recipeSlug: 'mp-low-sodium-salmon-lemon-dill', title: 'Salmón al Limón y Eneldo con Vegetales', calories: 450, protein: 36 },
          { type: 'snack', title: 'Apio con mantequilla de almendras sin sal', calories: 160, protein: 5 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', title: 'Avena natural con frutos rojos frescos y nueces', calories: 320, protein: 10 },
          { type: 'lunch', recipeSlug: 'mp-low-sodium-chicken-veggie-soup', title: 'Sopa Casera de Pollo y Vegetales', calories: 280, protein: 28 },
          { type: 'dinner', title: 'Bacalao al horno con costra de hierbas y vegetales al vapor', calories: 380, protein: 35 },
          { type: 'snack', title: 'Ensalada de frutas frescas', calories: 150, protein: 2 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas Frescas',
        items: [
          'Pechugas de pollo (1.5 kg) — sin sodio añadido',
          'Filetes de salmón (4 de 170g)',
          'Filetes de bacalao (2 de 140g)',
          'Pavo molido 93% magro (700g)',
          'Huevos (1 docena)',
          'Yogur griego natural — sin sal añadida (1 kg)',
        ],
      },
      {
        category: 'Vegetales (Ricos en Potasio)',
        items: [
          'Plátanos (6)',
          'Camotes (4)',
          'Papas (1 kg)',
          'Brócoli (3 cabezas)',
          'Espinaca (2 bolsas)',
          'Zanahorias (bolsa de 500g)',
          'Apio (1 manojo)',
          'Cebollas (3)',
          'Ajo (2 cabezas)',
          'Limones (5)',
          'Hierbas frescas: eneldo, perejil, romero, tomillo',
          'Frutos rojos frescos (2 paquetes)',
          'Manzanas (4)',
        ],
      },
      {
        category: 'Granos',
        items: [
          'Arroz integral (1 kg)',
          'Quinoa (500g)',
          'Avena en hojuelas',
          'Pan integral — bajo en sodio',
        ],
      },
      {
        category: 'Despensa — Bajo/Sin Sodio',
        items: [
          'Frijoles negros sin sal añadida (2 latas)',
          'Tomates picados sin sal añadida (2 latas)',
          'Caldo de pollo bajo en sodio (2 cartones)',
          'Almendras y nueces sin sal',
          'Mantequilla de maní sin sal',
          'Mantequilla de almendras sin sal',
          'Aceite de oliva',
          'Miel',
          'Hierbas y especias secas (mezclas sin sal)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Hacer un gran lote de sopa de pollo y vegetales baja en sodio', duration: '40 min' },
      { step: 2, task: 'Hornear pechugas de pollo sazonadas con hierbas', duration: '30 min' },
      { step: 3, task: 'Cocinar arroz integral y quinoa', duration: '25 min' },
      { step: 4, task: 'Hacer albóndigas de pavo y vegetales', duration: '25 min' },
      { step: 5, task: 'Preparar componentes del tazón de frijol negro y camote', duration: '20 min' },
      { step: 6, task: 'Hacer avena nocturna (3 frascos)', duration: '5 min' },
      { step: 7, task: 'Sazonar y porcionar salmón para cocinar fácilmente', duration: '10 min' },
      { step: 8, task: 'Lavar y porcionar todos los vegetales', duration: '10 min' },
    ],
  },

  // ─── PLAN 8: Preparación Post-Entrenamiento para Atletas ─────────
  {
    slug: 'post-workout-athlete-prep-5-day',
    title: 'Preparación de Comidas Post-Entrenamiento para Atletas de 5 Días',
    description: 'Optimizado para recuperación y rendimiento. Temporización estratégica de carbohidratos, más de 180g de proteína diaria y alimentos antiinflamatorios. Diseñado para atletas serios que entrenan duro.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'Burrito de Desayuno Alto en Proteína', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'ground-beef-power-bowls', title: 'Tazón Poderoso de Carne Molida', calories: 550, protein: 44 },
          { type: 'dinner', recipeSlug: 'hp1-grilled-steak-sweet-potato-plate', title: 'Plato de Bistec a la Parrilla y Camote', calories: 620, protein: 52 },
          { type: 'snack', title: 'Batido post-entrenamiento: 2 medidas de whey + plátano + avena', calories: 480, protein: 52 },
          { type: 'snack', title: 'Requesón (1 taza) con piña', calories: 240, protein: 28 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-steak-and-eggs-power-breakfast', title: 'Desayuno Poderoso de Bistec y Huevos', calories: 560, protein: 48 },
          { type: 'lunch', recipeSlug: 'hp1-sheet-pan-chicken-shawarma', title: 'Tazón de Pollo Shawarma', calories: 520, protein: 46 },
          { type: 'dinner', recipeSlug: 'hp-quinoa-salmon-bowl', title: 'Tazón Poderoso de Quinoa y Salmón', calories: 580, protein: 46 },
          { type: 'snack', title: 'Yogur griego (2 tazas) con granola y frutos rojos', calories: 450, protein: 40 },
          { type: 'snack', title: 'Galletas de arroz con mantequilla de maní y plátano', calories: 320, protein: 10 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'Burrito de Desayuno Alto en Proteína', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'hp1-grilled-chicken-quinoa-power-bowl', title: 'Tazón de Pollo a la Parrilla y Quinoa', calories: 520, protein: 48 },
          { type: 'dinner', recipeSlug: 'hp2-grilled-chimichurri-flank-steak', title: 'Falda de Res al Chimichurri con Arroz', calories: 580, protein: 52 },
          { type: 'snack', title: 'Batido post-entrenamiento: 2 medidas de whey + plátano + avena', calories: 480, protein: 52 },
          { type: 'snack', title: 'Huevos duros (4) con sazonador everything', calories: 300, protein: 26 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-steak-and-eggs-power-breakfast', title: 'Desayuno Poderoso de Bistec y Huevos', calories: 560, protein: 48 },
          { type: 'lunch', recipeSlug: 'ground-beef-power-bowls', title: 'Tazón Poderoso de Carne Molida', calories: 550, protein: 44 },
          { type: 'dinner', recipeSlug: 'hp-sheet-pan-shrimp-veggies', title: 'Camarones y Vegetales en Bandeja', calories: 420, protein: 42 },
          { type: 'snack', title: 'Batido de proteína: whey + mantequilla de maní + leche + plátano', calories: 480, protein: 42 },
          { type: 'snack', title: 'Rollitos de pavo y queso (6 rebanadas)', calories: 300, protein: 30 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', recipeSlug: 'high-protein-breakfast-burrito', title: 'Burrito de Desayuno Alto en Proteína', calories: 580, protein: 50 },
          { type: 'lunch', recipeSlug: 'hp1-sheet-pan-chicken-shawarma', title: 'Tazón de Pollo Shawarma', calories: 520, protein: 46 },
          { type: 'dinner', title: 'Cena de día de descanso: comida más ligera o salir a comer', calories: 600, protein: 40 },
          { type: 'snack', title: 'Batido de caseína antes de dormir', calories: 240, protein: 30 },
          { type: 'snack', title: 'Frutos secos mixtos (1/2 taza)', calories: 280, protein: 8 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas (Alto Volumen)',
        items: [
          'Pechugas de pollo (2.5 kg)',
          'Falda de res (1 kg)',
          'Bistec sirloin (1 kg)',
          'Carne molida magra 90/10 (1.5 kg)',
          'Filetes de salmón (4 de 170g)',
          'Camarones grandes (1 kg)',
          'Huevos (4 docenas)',
          'Pavo del deli (500g)',
          'Salchichas de pollo (12)',
        ],
      },
      {
        category: 'Lácteos y Suplementos de Proteína',
        items: [
          'Proteína whey en polvo (1 kg)',
          'Proteína caseína en polvo (500g)',
          'Yogur griego (2 kg)',
          'Requesón (1 kg)',
          'Leche (4 litros)',
          'Queso rallado (500g)',
          'Queso en rebanadas (12 rebanadas)',
        ],
      },
      {
        category: 'Carbohidratos para Recuperación',
        items: [
          'Arroz blanco (bolsa de 2.5 kg)',
          'Quinoa (1 kg)',
          'Camotes (6)',
          'Avena en hojuelas',
          'Tortillas de harina grandes (12)',
          'Galletas de arroz',
          'Granola',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Plátanos (10)',
          'Frutos rojos mixtos (2 paquetes)',
          'Trozos de piña (1 recipiente)',
          'Brócoli (3 cabezas)',
          'Pimientos (6)',
          'Cebollas (4)',
          'Ajo (2 cabezas)',
          'Cilantro y perejil frescos',
          'Limones y limas',
        ],
      },
      {
        category: 'Despensa',
        items: [
          'Mantequilla de maní (frasco grande)',
          'Frutos secos mixtos (500g)',
          'Sazonador everything bagel',
          'Mezcla de especias shawarma',
          'Salsa chimichurri o ingredientes',
          'Aceite de oliva',
          'Salsa de soya',
          'Miel',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Cocinar 8 tazas de arroz blanco y 4 tazas de quinoa', duration: '25 min' },
      { step: 2, task: 'Asar/hornear todas las pechugas de pollo con condimento shawarma', duration: '30 min' },
      { step: 3, task: 'Cocinar carne molida para tazones poderosos', duration: '15 min' },
      { step: 4, task: 'Hacer 4 burritos de desayuno y envolver', duration: '20 min' },
      { step: 5, task: 'Sazonar y porcionar bistecs para cocinar fácilmente', duration: '10 min' },
      { step: 6, task: 'Hervir 12 huevos', duration: '15 min' },
      { step: 7, task: 'Asar camotes', duration: '35 min' },
      { step: 8, task: 'Preparar camarones y vegetales para bandeja', duration: '10 min' },
      { step: 9, task: 'Porcionar todas las comidas en recipientes', duration: '15 min' },
    ],
  },

  // ─── PLAN 9: Preparación Pescetariana de Mariscos ────────────────
  {
    slug: 'pescatarian-seafood-prep-5-day',
    title: 'Preparación Pescetariana de Mariscos de 5 Días',
    description: 'Preparación de comidas del océano a la mesa con salmón, camarones, bacalao y atún. Alto en omega-3, proteínas sostenibles y sabores inspirados en el Mediterráneo. Sin carne, todo mariscos.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-smoked-salmon-egg-white-wrap', title: 'Wrap de Claras de Huevo con Salmón Ahumado', calories: 320, protein: 32 },
          { type: 'lunch', recipeSlug: 'hp1-salmon-avocado-poke-bowl', title: 'Tazón Poke de Salmón y Aguacate', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'one-pan-shrimp-veggie-stir-fry', title: 'Salteado de Camarones y Vegetales', calories: 380, protein: 32 },
          { type: 'snack', title: 'Yogur griego con miel y nueces', calories: 280, protein: 18 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', title: 'Avena nocturna con semillas de chía y frutos rojos', calories: 360, protein: 14 },
          { type: 'lunch', recipeSlug: 'hp1-tuna-white-bean-salad', title: 'Ensalada de Atún y Frijoles Blancos', calories: 380, protein: 34 },
          { type: 'dinner', recipeSlug: 'sheet-pan-lemon-herb-salmon-dinner', title: 'Salmón con Hierbas y Limón con Vegetales', calories: 480, protein: 38 },
          { type: 'snack', title: 'Requesón con piña', calories: 200, protein: 18 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp1-smoked-salmon-egg-white-wrap', title: 'Wrap de Claras de Huevo con Salmón Ahumado', calories: 320, protein: 32 },
          { type: 'lunch', recipeSlug: 'mp-shrimp-fried-rice-meal-prep', title: 'Arroz Frito con Camarones', calories: 450, protein: 28 },
          { type: 'dinner', recipeSlug: 'hp1-mediterranean-baked-cod', title: 'Bacalao Mediterráneo al Horno', calories: 380, protein: 35 },
          { type: 'snack', title: 'Edamame (1 taza) con sal de mar', calories: 190, protein: 17 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', title: 'Huevos revueltos con salmón ahumado y aguacate', calories: 420, protein: 30 },
          { type: 'lunch', recipeSlug: 'hp1-salmon-avocado-poke-bowl', title: 'Tazón Poke de Salmón y Aguacate', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'instant-pot-shrimp-jambalaya', title: 'Jambalaya de Camarones', calories: 460, protein: 32 },
          { type: 'snack', title: 'Hummus con vegetales', calories: 180, protein: 6 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', title: 'Avena nocturna con semillas de chía y frutos rojos', calories: 360, protein: 14 },
          { type: 'lunch', recipeSlug: 'hp1-tuna-white-bean-salad', title: 'Ensalada de Atún y Frijoles Blancos', calories: 380, protein: 34 },
          { type: 'dinner', title: 'Tacos de pescado a la parrilla o noche de sushi (flexible)', calories: 500, protein: 30 },
          { type: 'snack', title: 'Frutos secos mixtos y frutas deshidratadas', calories: 220, protein: 6 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Mariscos',
        items: [
          'Filetes de salmón (6 de 140g)',
          'Salmón grado sushi para poke (500g)',
          'Camarones grandes (1 kg)',
          'Filetes de bacalao (2 de 170g)',
          'Salmón ahumado (250g)',
          'Atún albacora enlatado (4 latas)',
        ],
      },
      {
        category: 'Huevos y Lácteos',
        items: [
          'Huevos (2 docenas)',
          'Claras de huevo (1 cartón)',
          'Yogur griego (1 kg)',
          'Requesón (500g)',
        ],
      },
      {
        category: 'Vegetales',
        items: [
          'Aguacates (4)',
          'Limones (6)',
          'Limas (4)',
          'Jengibre fresco',
          'Ajo (2 cabezas)',
          'Cebolletas (2 manojos)',
          'Pepino (3)',
          'Edamame congelado (500g)',
          'Vegetales mixtos para saltear (2 bolsas)',
          'Tomates cherry (2 paquetes)',
          'Hierbas frescas: eneldo, cilantro, perejil',
          'Frutos rojos mixtos (2 paquetes)',
        ],
      },
      {
        category: 'Granos y Despensa',
        items: [
          'Arroz para sushi (1 kg)',
          'Arroz jazmín (1 kg)',
          'Avena en hojuelas',
          'Semillas de chía',
          'Tortillas integrales (6)',
          'Frijoles blancos (2 latas)',
          'Salsa de soya o coconut aminos',
          'Aceite de sésamo',
          'Vinagre de arroz',
          'Miel',
          'Sriracha',
          'Hummus (300g)',
          'Nueces y frutos secos mixtos',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Marinar y hornear filetes de salmón', duration: '25 min' },
      { step: 2, task: 'Cocinar arroz para sushi y arroz jazmín', duration: '25 min' },
      { step: 3, task: 'Hacer base del tazón poke de salmón (cortar salmón, preparar toppings)', duration: '15 min' },
      { step: 4, task: 'Cocinar camarones para salteado y arroz frito', duration: '15 min' },
      { step: 5, task: 'Hacer ensalada de atún y frijoles blancos', duration: '10 min' },
      { step: 6, task: 'Preparar base de jambalaya de camarones (cocinar el día de)', duration: '15 min' },
      { step: 7, task: 'Hacer avena nocturna (2 frascos)', duration: '5 min' },
      { step: 8, task: 'Ensamblar wraps de salmón ahumado', duration: '10 min' },
      { step: 9, task: 'Porcionar todo en recipientes', duration: '10 min' },
    ],
  },

  // ─── PLAN 10: Preparación de Fusión Asiática ─────────────────────
  {
    slug: 'asian-fusion-meal-prep-5-day',
    title: 'Preparación de Fusión Asiática de 5 Días',
    description: 'Sabores audaces de toda Asia: teriyaki, BBQ coreano, maní tailandés y más. Comidas de calidad de restaurante preparadas en casa por una fracción del costo.',
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
        day: 'Lunes',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp2-korean-egg-toast-gyeran-ppang', title: 'Tostada de Huevo Coreana', calories: 380, protein: 20 },
          { type: 'lunch', recipeSlug: 'hp2-korean-bibimbap-ground-turkey', title: 'Tazón de Bibimbap Coreano', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'sheet-pan-teriyaki-salmon-vegetables', title: 'Salmón Teriyaki con Vegetales', calories: 520, protein: 38 },
          { type: 'snack', title: 'Edamame con sal de mar', calories: 190, protein: 17 },
        ],
      },
      {
        day: 'Martes',
        meals: [
          { type: 'breakfast', title: 'Congee (arroz porridge) con huevo pasado', calories: 320, protein: 14 },
          { type: 'lunch', recipeSlug: 'hp1-asian-ground-turkey-lettuce-wraps', title: 'Envolturas de Lechuga con Pavo Asiático', calories: 340, protein: 32 },
          { type: 'dinner', recipeSlug: 'hp2-thai-basil-ground-turkey-bowls', title: 'Tazones de Pavo con Albahaca Tailandesa', calories: 450, protein: 38 },
          { type: 'snack', title: 'Rodajas de mango con tajín', calories: 120, protein: 1 },
        ],
      },
      {
        day: 'Miércoles',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp2-korean-egg-toast-gyeran-ppang', title: 'Tostada de Huevo Coreana', calories: 380, protein: 20 },
          { type: 'lunch', recipeSlug: 'mp-asian-peanut-tofu-noodle-bowls', title: 'Tazones de Fideos con Tofu y Maní Tailandés', calories: 450, protein: 22 },
          { type: 'dinner', recipeSlug: 'hp-quinoa-shrimp-stir-fry', title: 'Salteado de Camarones al Ajo', calories: 420, protein: 38 },
          { type: 'snack', title: 'Snacks de alga y galletas de arroz', calories: 150, protein: 4 },
        ],
      },
      {
        day: 'Jueves',
        meals: [
          { type: 'breakfast', title: 'Desayuno estilo japonés: arroz, huevo y encurtidos', calories: 380, protein: 16 },
          { type: 'lunch', recipeSlug: 'hp2-korean-bibimbap-ground-turkey', title: 'Tazón de Bibimbap Coreano', calories: 480, protein: 35 },
          { type: 'dinner', recipeSlug: 'hp2-crockpot-korean-pulled-pork', title: 'Cerdo Deshebrado Coreano con Arroz', calories: 520, protein: 38 },
          { type: 'snack', title: 'Kimchi de pepino', calories: 50, protein: 2 },
        ],
      },
      {
        day: 'Viernes',
        meals: [
          { type: 'breakfast', recipeSlug: 'hp2-korean-egg-toast-gyeran-ppang', title: 'Tostada de Huevo Coreana', calories: 380, protein: 20 },
          { type: 'lunch', recipeSlug: 'hp1-asian-ground-turkey-lettuce-wraps', title: 'Envolturas de Lechuga con Pavo Asiático', calories: 340, protein: 32 },
          { type: 'dinner', title: 'Flexible: pedir comida asiática o terminar sobrantes', calories: 550, protein: 30 },
          { type: 'snack', title: 'Fruta fresca con coco', calories: 180, protein: 2 },
        ],
      },
    ],
    shoppingList: [
      {
        category: 'Proteínas',
        items: [
          'Filetes de salmón (4 de 140g)',
          'Camarones grandes (700g)',
          'Pavo molido 93% magro (1 kg)',
          'Paleta o lomo de cerdo (1 kg)',
          'Tofu extra firme (2 bloques)',
          'Huevos (2 docenas)',
        ],
      },
      {
        category: 'Vegetales Asiáticos',
        items: [
          'Lechuga mantequilla (2 cabezas)',
          'Col napa (1 cabeza pequeña)',
          'Germinado de soya (1 bolsa)',
          'Cebolletas (3 manojos)',
          'Jengibre fresco (pieza grande)',
          'Ajo (3 cabezas)',
          'Albahaca tailandesa (1 manojo)',
          'Cilantro (2 manojos)',
          'Zanahorias (500g)',
          'Pepino (3)',
          'Calabacín (2)',
          'Mango (2)',
          'Edamame congelado (500g)',
        ],
      },
      {
        category: 'Granos y Fideos',
        items: [
          'Arroz jazmín (bolsa de 2.5 kg)',
          'Fideos de arroz (250g)',
          'Arroz de grano corto para bibimbap (1 kg)',
          'Pan de molde (para tostada de huevo)',
        ],
      },
      {
        category: 'Esenciales de Despensa Asiática',
        items: [
          'Salsa de soya',
          'Gochujang (pasta de chile coreana)',
          'Aceite de sésamo',
          'Vinagre de arroz',
          'Mirin',
          'Salsa de pescado',
          'Mantequilla de maní',
          'Leche de coco (1 lata)',
          'Salsa teriyaki (o hacer desde cero)',
          'Semillas de sésamo',
          'Snacks de alga',
          'Galletas de arroz',
          'Kimchi (1 frasco)',
        ],
      },
    ],
    prepSchedule: [
      { step: 1, task: 'Iniciar cerdo deshebrado coreano en olla de cocción lenta (6-8 horas)', duration: '10 min' },
      { step: 2, task: 'Cocinar arroz jazmín y arroz de grano corto', duration: '25 min' },
      { step: 3, task: 'Preparar toppings de bibimbap (zanahorias, espinaca, germinado)', duration: '20 min' },
      { step: 4, task: 'Marinar y hornear salmón teriyaki', duration: '25 min' },
      { step: 5, task: 'Cocinar pavo molido con condimentos asiáticos', duration: '15 min' },
      { step: 6, task: 'Prensar y marinar tofu para fideos con maní', duration: '15 min' },
      { step: 7, task: 'Hacer salsa de albahaca tailandesa', duration: '5 min' },
      { step: 8, task: 'Preparar todos los rellenos para envolturas de lechuga', duration: '10 min' },
      { step: 9, task: 'Desmenuzar cerdo deshebrado y porcionar todas las comidas', duration: '15 min' },
    ],
  },
];

export default plansBatch2Es;
