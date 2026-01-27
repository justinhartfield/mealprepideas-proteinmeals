/**
 * Method Logistics Data
 * Method-specific protocols, steps, and storage data for PersonaMethodCombo pages
 */

export interface MethodLogistics {
  slug: string;
  logisticsTitle: string;
  steps: { title: string; description: string }[];
  storageCards: { label: string; value: string }[];
}

export const methodLogistics: MethodLogistics[] = [
  {
    slug: 'freezer',
    logisticsTitle: 'The Freeze Protocol',
    steps: [
      {
        title: 'Flash Freeze First',
        description: 'Layout burritos or muffins on a tray for 2 hours before bagging. This prevents the "ice block" effect and allows for single-serving removal.',
      },
      {
        title: 'Dual Labeling System',
        description: 'Use masking tape for: 1. Item Name, 2. Preparation Date, and 3. Reheat instructions (e.g., "1 min high, flip, 1 min").',
      },
      {
        title: 'Vertical Inventory',
        description: 'Store freezer bags vertically like a file folder system. Use "First In, First Out" (FIFO) to ensure nutrients stay fresh.',
      },
    ],
    storageCards: [
      { label: 'Soups & Stews', value: '6 Months' },
      { label: 'Cooked Meats', value: '3 Months' },
      { label: 'Oatmeal Cups', value: '2 Months' },
      { label: 'Burritos (Wrapped)', value: '4 Months' },
    ],
  },
  {
    slug: 'crockpot',
    logisticsTitle: 'The Batch Timing Protocol',
    steps: [
      {
        title: 'Overnight Prep Window',
        description: 'Set crockpot on LOW before bed (10pm). By 6am you have 8 hours of slow-cooked protein. Portion into containers while still warm for best texture.',
      },
      {
        title: 'Liquid Ratio Mastery',
        description: 'Use 1:1.5 protein-to-liquid ratio for stews, 1:0.5 for shredded meats. Too much liquid dilutes nutrients; too little dries protein fibers.',
      },
      {
        title: 'Batch Multiplication',
        description: 'Double every recipe by default. One batch for the fridge (5 days), one for the freezer (3 months). Label both with date and reheat instructions.',
      },
    ],
    storageCards: [
      { label: 'Shredded Meats', value: '5 Days' },
      { label: 'Stews & Chilis', value: '7 Days' },
      { label: 'Frozen Portions', value: '3 Months' },
      { label: 'Bone Broths', value: '5 Days' },
    ],
  },
  {
    slug: 'slow-cooker',
    logisticsTitle: 'The Slow Cook Protocol',
    steps: [
      {
        title: 'Layer Loading Order',
        description: 'Root vegetables on the bottom (closest to heat), proteins in the middle, delicate greens on top. This ensures even cooking across all ingredients.',
      },
      {
        title: 'Prep-Ahead Dump Bags',
        description: 'Assemble all ingredients into freezer bags on Sunday. Label with cook time (LOW 6h / HIGH 4h). Dump directly into slow cooker — zero morning prep required.',
      },
      {
        title: 'Liquid Recovery Method',
        description: 'Reserve cooking liquid separately. Use it as a nutrient-rich base for reheating — prevents dry protein and adds back micronutrients lost during cooking.',
      },
    ],
    storageCards: [
      { label: 'Pulled Proteins', value: '5 Days' },
      { label: 'Soups & Stews', value: '7 Days' },
      { label: 'Dump Bags (Frozen)', value: '3 Months' },
      { label: 'Cooking Liquid', value: '4 Days' },
    ],
  },
  {
    slug: 'air-fryer',
    logisticsTitle: 'The Crisp Reheat Protocol',
    steps: [
      {
        title: 'Preheat to 375°F Always',
        description: 'Never skip preheating. Cold starts cause uneven crisping and rubbery protein exteriors. 3 minutes of preheat saves 5 minutes of cook time.',
      },
      {
        title: 'Single Layer Rule',
        description: 'Overlapping pieces trap moisture and create soggy spots. Work in batches — 2 quick batches beats 1 crowded basket every time.',
      },
      {
        title: 'Oil Mist Technique',
        description: 'Light spray of avocado oil at 30-second mark into cooking. This activates the Maillard reaction for crispy exteriors while keeping interiors moist.',
      },
    ],
    storageCards: [
      { label: 'Prepped Proteins', value: '4 Days' },
      { label: 'Breaded Items', value: '3 Days' },
      { label: 'Frozen → Air Fry', value: '3 Months' },
      { label: 'Reheated Leftovers', value: 'Same Day' },
    ],
  },
  {
    slug: 'microwave',
    logisticsTitle: 'The Power Settings Protocol',
    steps: [
      {
        title: 'The 70% Power Rule',
        description: 'Always reheat at 70% power. Full power creates hot spots that destroy protein structure and create rubbery textures. Lower power = even heating.',
      },
      {
        title: 'Damp Paper Towel Cover',
        description: 'Place a damp paper towel over containers to create steam. This prevents moisture loss and keeps grains, rice, and proteins from drying out.',
      },
      {
        title: 'Container Compatibility',
        description: 'Glass containers only for microwave prep. BPA-free plastic degrades over 100+ cycles. Invest in a 12-piece glass set with snap-lock lids.',
      },
    ],
    storageCards: [
      { label: 'Rice & Grains', value: '5 Days' },
      { label: 'Cooked Proteins', value: '4 Days' },
      { label: 'Sauced Dishes', value: '3 Days' },
      { label: 'Frozen Meals', value: '3 Months' },
    ],
  },
  {
    slug: 'no-cook',
    logisticsTitle: 'The Assembly Line Protocol',
    steps: [
      {
        title: 'Mise en Place Stations',
        description: 'Set up 4 stations: proteins (pre-cooked/cured), bases (greens/grains), toppings (nuts/seeds/cheese), dressings. Assemble in order for consistent nutrition per container.',
      },
      {
        title: 'Moisture Barrier Method',
        description: 'Always place wet ingredients (dressings, tomatoes) in separate compartments or small containers. Soggy greens kill meal prep compliance on Day 3+.',
      },
      {
        title: 'Protein Pre-Treatment',
        description: 'Canned tuna/salmon, rotisserie chicken, deli turkey, hard-boiled eggs, and Greek yogurt are your no-cook protein arsenal. Buy in bulk every Sunday.',
      },
    ],
    storageCards: [
      { label: 'Assembled Salads', value: '3 Days' },
      { label: 'Wraps & Rolls', value: '2 Days' },
      { label: 'Overnight Oats', value: '5 Days' },
      { label: 'Protein Boxes', value: '4 Days' },
    ],
  },
  {
    slug: 'instant-pot',
    logisticsTitle: 'The Pressure Batch Protocol',
    steps: [
      {
        title: 'Natural Release for Protein',
        description: 'Always use natural pressure release (NPR) for meats. Quick release toughens protein fibers. Budget 15 extra minutes — your texture will thank you.',
      },
      {
        title: 'Pot-in-Pot Stacking',
        description: 'Use stackable insert pans to cook rice/grains AND protein simultaneously. One 25-minute cycle produces a complete meal for 6 containers.',
      },
      {
        title: 'Deglaze Before Pressure',
        description: 'After sautéing, always deglaze with broth before sealing. Burnt-on bits trigger the BURN warning and waste an entire batch cycle.',
      },
    ],
    storageCards: [
      { label: 'Pressure-Cooked Meats', value: '5 Days' },
      { label: 'Rice & Grains', value: '6 Days' },
      { label: 'Beans & Legumes', value: '5 Days' },
      { label: 'Frozen Batches', value: '3 Months' },
    ],
  },
  {
    slug: 'sheet-pan',
    logisticsTitle: 'The One-Tray Protocol',
    steps: [
      {
        title: 'Zone Mapping',
        description: 'Divide your sheet pan into zones: dense proteins on one side, quick-cooking vegetables on the other. Stagger start times — add veggies 10 minutes after proteins.',
      },
      {
        title: 'Parchment Lining System',
        description: 'Always line with parchment paper. This cuts cleanup to 30 seconds and prevents protein from sticking, preserving portion integrity for containers.',
      },
      {
        title: 'High Heat Sear Finish',
        description: 'Broil for 2 minutes at the end. This creates caramelized edges that hold up during fridge storage and reheat better than low-temp-only cooking.',
      },
    ],
    storageCards: [
      { label: 'Roasted Proteins', value: '4 Days' },
      { label: 'Roasted Vegetables', value: '5 Days' },
      { label: 'Complete Tray Meals', value: '4 Days' },
      { label: 'Frozen Sheet Pans', value: '2 Months' },
    ],
  },
  {
    slug: 'one-pan',
    logisticsTitle: 'The Single-Skillet Protocol',
    steps: [
      {
        title: 'Heat Zone Control',
        description: 'Use medium-high for searing protein first, then reduce to medium for vegetables. One pan means managing heat zones sequentially, not simultaneously.',
      },
      {
        title: 'Deglaze for Sauce',
        description: 'After removing protein, deglaze with broth or wine. This creates a built-in sauce that adds flavor and moisture during reheating — zero extra work.',
      },
      {
        title: 'Rest Before Portioning',
        description: 'Let the entire pan rest 5 minutes before portioning. Cutting protein immediately releases juices that should be reabsorbed for meal prep moisture retention.',
      },
    ],
    storageCards: [
      { label: 'Skillet Proteins', value: '4 Days' },
      { label: 'Stir-Fry Combos', value: '3 Days' },
      { label: 'Pan Sauces', value: '4 Days' },
      { label: 'Frozen Portions', value: '2 Months' },
    ],
  },
  {
    slug: 'oven',
    logisticsTitle: 'The Batch Oven Protocol',
    steps: [
      {
        title: 'Multi-Rack Strategy',
        description: 'Use all three oven racks simultaneously. Proteins on middle, starches on bottom, vegetables on top. Rotate halfway through for even browning across all levels.',
      },
      {
        title: 'Convection for Batch Scale',
        description: 'If available, use convection mode and reduce temp by 25°F. Circulated air cooks 3 racks evenly — critical when you\'re prepping 12+ containers at once.',
      },
      {
        title: 'Cool-Down Portioning',
        description: 'Let everything cool to room temperature (max 1 hour) before sealing containers. Hot food sealed = condensation = soggy meals by Day 2.',
      },
    ],
    storageCards: [
      { label: 'Baked Proteins', value: '5 Days' },
      { label: 'Roasted Starches', value: '6 Days' },
      { label: 'Casseroles', value: '5 Days' },
      { label: 'Frozen Baked Goods', value: '3 Months' },
    ],
  },
  {
    slug: 'grill',
    logisticsTitle: 'The Grill Batch Protocol',
    steps: [
      {
        title: 'Two-Zone Fire Setup',
        description: 'Create a hot zone (direct heat) and warm zone (indirect). Sear proteins over direct heat, then move to indirect to finish. This prevents charring while ensuring internal temp safety.',
      },
      {
        title: 'Bulk Protein Session',
        description: 'Grill 3-4 proteins simultaneously: chicken thighs, steak strips, shrimp skewers, and vegetable kebabs. One 45-minute session produces 15+ servings.',
      },
      {
        title: 'Post-Grill Marinade Bath',
        description: 'Immediately place grilled proteins into a marinade or sauce bath. This locks in moisture and adds flavor that intensifies over 3-5 days of fridge storage.',
      },
    ],
    storageCards: [
      { label: 'Grilled Chicken', value: '4 Days' },
      { label: 'Grilled Steak', value: '3 Days' },
      { label: 'Grilled Vegetables', value: '5 Days' },
      { label: 'Marinated & Frozen', value: '2 Months' },
    ],
  },
];

/**
 * Get logistics data for a specific method
 */
export function getMethodLogistics(methodSlug: string): MethodLogistics | undefined {
  return methodLogistics.find(m => m.slug === methodSlug);
}
