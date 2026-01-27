/**
 * Dynamic Content Generation for Two-Facet Combo (T3) Pages
 * Generates hero descriptions, target stats, logistics content, and sibling pages
 * for any arbitrary two-facet combination.
 */

// ─── Hero Descriptions ──────────────────────────────────────────────

const dietDescriptions: Record<string, string> = {
  'vegetarian': 'plant-based protein pairing without meat',
  'vegan': 'complete amino-acid profiling from 100% plant sources',
  'keto': 'ultra-low-carb macro engineering under 25g net carbs',
  'low-carb': 'controlled carbohydrate intake under 100g daily',
  'low-calorie': 'calorie-deficit optimization without nutrient gaps',
  'gluten-free': 'wheat-free formulation with zero cross-contamination risk',
  'dairy-free': 'dairy-eliminated protocols using plant-based alternatives',
};

const goalDescriptions: Record<string, string> = {
  'muscle-gain': 'hypertrophy-grade protein density targeting 1.6–2.2g/kg bodyweight',
  'weight-loss': 'thermogenic deficit protocols with satiety-first macro ratios',
  'healthy': 'balanced micronutrient profiling for whole-body wellness',
};

const methodDescriptions: Record<string, string> = {
  'crockpot': 'hands-off slow-cooking logistics for maximum batch efficiency',
  'slow-cooker': 'low-and-slow thermal processing for tender proteins',
  'instant-pot': 'pressure-cook acceleration cutting prep time by 60%',
  'air-fryer': 'rapid convection crisping with 80% less oil',
  'microwave': 'zero-equipment reheating optimized for office and dorm',
  'sheet-pan': 'single-pan oven roasting with synchronized cook times',
  'one-pan': 'minimal-cleanup stovetop batch processing',
  'no-cook': 'zero-heat assembly using pre-cooked and raw ingredients',
  'freezer': 'deep-freeze batch storage extending shelf life to 90 days',
  'grill': 'high-heat char-grilling for peak flavor development',
  'oven': 'convection batch-roasting at scale',
};

const constraintDescriptions: Record<string, string> = {
  'high-fiber': 'fiber-forward formulation targeting 25g+ daily intake',
  'low-sodium': 'sodium-restricted protocols under 1500mg per day',
  'low-fat': 'fat-minimized preparations without sacrificing flavor',
  'cheap': 'cost-optimized sourcing under $3 per serving',
  'budget': 'budget-conscious batch buying and bulk prep strategies',
  'quick': 'speed-optimized protocols finishing in under 20 minutes',
  'simple': 'minimal-ingredient recipes with 5 or fewer components',
  'for-the-week': 'full 5-day cycle prep designed for Sunday batching',
  'no-microwave': 'microwave-free reheating and cold-serve options',
};

const personaDescriptions: Record<string, string> = {
  'work': 'office-friendly formats that reheat cleanly and eat at a desk',
  'college': 'dorm-ready, budget-proof meals requiring minimal equipment',
  'picky-eaters': 'familiar flavors and textures that won\'t get rejected',
  'kids': 'kid-tested portions with hidden nutrition and fun presentation',
  'toddler': 'soft-textured, allergen-conscious finger foods for small hands',
  'pregnancy': 'folate-rich, mercury-safe nutrition for prenatal support',
  'postpartum': 'recovery-focused meals supporting lactation and healing',
  'bariatric': 'portion-controlled, protein-first meals for post-surgery needs',
  'pcos': 'insulin-balancing, anti-inflammatory meal protocols',
  'cholesterol': 'heart-healthy, LDL-lowering meal strategies',
};

function getDescriptionFragment(facetType: string, facetValue: string): string {
  const maps: Record<string, Record<string, string>> = {
    diet: dietDescriptions,
    goal: goalDescriptions,
    method: methodDescriptions,
    constraint: constraintDescriptions,
    persona: personaDescriptions,
  };
  return maps[facetType]?.[facetValue] || `${facetValue.replace(/-/g, ' ')} optimization`;
}

/**
 * Generate a hero description paragraph for a two-facet combo page.
 */
export function generateHeroDescription(
  facetTypeA: string, facetValueA: string, displayA: string,
  facetTypeB: string, facetValueB: string, displayB: string,
): string {
  const fragA = getDescriptionFragment(facetTypeA, facetValueA);
  const fragB = getDescriptionFragment(facetTypeB, facetValueB);

  // Diet + Goal combos
  if (facetTypeA === 'diet' && facetTypeB === 'goal') {
    return `Solving the intersection of ${fragA} and ${fragB}. This index filters for 30g+ protein per serving while engineering meals that satisfy both ${displayA.toLowerCase()} dietary requirements and ${displayB.toLowerCase()} macro targets — no compromises.`;
  }
  if (facetTypeA === 'goal' && facetTypeB === 'diet') {
    return `Solving the intersection of ${fragB} and ${fragA}. This index filters for 30g+ protein per serving while engineering meals that satisfy both ${displayB.toLowerCase()} dietary requirements and ${displayA.toLowerCase()} macro targets — no compromises.`;
  }

  // Method + Constraint combos
  if (facetTypeA === 'method' && facetTypeB === 'constraint') {
    return `Combining ${fragA} with ${fragB}. Every protocol in this matrix is optimized for ${displayA.toLowerCase()} cooking while enforcing the ${displayB.toLowerCase()} constraint across all servings.`;
  }
  if (facetTypeA === 'constraint' && facetTypeB === 'method') {
    return `Combining ${fragB} with ${fragA}. Every protocol is optimized for ${displayB.toLowerCase()} cooking while enforcing the ${displayA.toLowerCase()} constraint across all servings.`;
  }

  // Diet + Constraint
  if (facetTypeA === 'diet' && facetTypeB === 'constraint') {
    return `Engineering ${displayA.toLowerCase()} meals that meet the ${displayB.toLowerCase()} requirement without nutritional gaps. Each recipe balances ${fragA} with ${fragB} for practical, repeatable results.`;
  }
  if (facetTypeA === 'constraint' && facetTypeB === 'diet') {
    return `Engineering ${displayB.toLowerCase()} meals that meet the ${displayA.toLowerCase()} requirement without nutritional gaps. Each recipe balances ${fragB} with ${fragA} for practical, repeatable results.`;
  }

  // Persona + Method
  if (facetTypeA === 'persona' || facetTypeB === 'persona') {
    const personaFrag = facetTypeA === 'persona' ? fragA : fragB;
    const otherFrag = facetTypeA === 'persona' ? fragB : fragA;
    return `Tailored for ${personaFrag}, using ${otherFrag}. Every recipe in this collection is built for real-world constraints — not theoretical nutrition.`;
  }

  // Meal + Constraint
  if (facetTypeA === 'meal' || facetTypeB === 'meal') {
    return `${displayA} meets ${displayB}. Purpose-built ${(facetTypeA === 'meal' ? facetValueA : facetValueB).replace(/-/g, ' ')} recipes engineered for ${facetTypeA === 'meal' ? fragB : fragA}.`;
  }

  // Generic fallback
  return `Solving the intersection of ${fragA} and ${fragB}. Data-backed protocols at the crossroads of ${displayA.toLowerCase()} and ${displayB.toLowerCase()}, each optimized for maximum efficiency and nutritional impact.`;
}

// ─── Target Stats ────────────────────────────────────────────────────

/**
 * Generate a target stat card for the hero section based on facets.
 */
export function generateTargetStat(
  facetTypeA: string, facetValueA: string,
  facetTypeB: string, facetValueB: string,
): { label: string; value: string; unit?: string } {
  // Check for goal facet first
  const goalValue = facetTypeA === 'goal' ? facetValueA : facetTypeB === 'goal' ? facetValueB : null;
  if (goalValue) {
    switch (goalValue) {
      case 'muscle-gain': return { label: 'Target Protein Floor', value: '1.2g', unit: '/ LB' };
      case 'weight-loss': return { label: 'Target Calorie Deficit', value: '500', unit: 'cal/day' };
      case 'healthy': return { label: 'Macro Balance', value: '40/30/30', unit: 'P/C/F' };
    }
  }

  // Check for constraint facet
  const constraintValue = facetTypeA === 'constraint' ? facetValueA : facetTypeB === 'constraint' ? facetValueB : null;
  if (constraintValue) {
    switch (constraintValue) {
      case 'high-fiber': return { label: 'Fiber Target', value: '25g+', unit: '/ day' };
      case 'low-sodium': return { label: 'Sodium Ceiling', value: '<1500', unit: 'mg/day' };
      case 'low-fat': return { label: 'Fat Budget', value: '<15g', unit: '/ meal' };
      case 'cheap': case 'budget': return { label: 'Cost Ceiling', value: '<$3', unit: '/ serving' };
      case 'quick': return { label: 'Max Cook Time', value: '20', unit: 'min' };
      case 'for-the-week': return { label: 'Batch Cycle', value: '5', unit: 'days' };
    }
  }

  // Default: protein target
  return { label: 'Protein Minimum', value: '30g', unit: '/ serving' };
}

// ─── Logistics Content ───────────────────────────────────────────────

interface LogisticsCard {
  heading: string;
  items: { title: string; description: string }[];
}

/**
 * Generate logistics section content for any two-facet combo.
 */
export function generateLogistics(
  facetTypeA: string, facetValueA: string, displayA: string,
  facetTypeB: string, facetValueB: string, displayB: string,
): {
  title: string;
  description: string;
  prepTime: string;
  cards: LogisticsCard[];
} {
  // Diet + Goal → diet storage + goal macros
  if (
    (facetTypeA === 'diet' && facetTypeB === 'goal') ||
    (facetTypeA === 'goal' && facetTypeB === 'diet')
  ) {
    const diet = facetTypeA === 'diet' ? displayA : displayB;
    const goal = facetTypeA === 'goal' ? displayA : displayB;
    const goalVal = facetTypeA === 'goal' ? facetValueA : facetValueB;

    return {
      title: `${goal}\nLogistics`,
      description: `${diet} ${goal.toLowerCase()} requires consistent batching to avoid falling back on suboptimal defaults. Follow these logistics for a successful 5-day cycle.`,
      prepTime: '90m',
      cards: [
        {
          heading: 'Storage Protocols',
          items: [
            { title: `${diet} Protein Storage`, description: `Store ${diet.toLowerCase()} proteins in airtight glass containers. Separate wet sauces from dry components to maintain texture through day 5.` },
            { title: 'Grain Base Prep', description: 'Cook grains in 2lb batches. Use glass containers and cool completely before sealing to prevent soggy texture during storage.' },
          ],
        },
        {
          heading: goalVal === 'muscle-gain' ? 'Macro Optimization' : goalVal === 'weight-loss' ? 'Deficit Strategy' : 'Balance Protocols',
          items: [
            { title: goalVal === 'muscle-gain' ? 'Protein Stacking' : goalVal === 'weight-loss' ? 'Portion Control' : 'Macro Distribution', description: goalVal === 'muscle-gain' ? `Layer protein sources per meal to hit 40g+. Combine legumes with dairy or soy for complete amino acid profiles.` : goalVal === 'weight-loss' ? `Pre-portion every container to 400-500 calories. Use a kitchen scale for the first week to calibrate your eye.` : `Distribute macros evenly across meals: 30-35% protein, 35-40% carbs, 25-30% fat per container.` },
            { title: goalVal === 'muscle-gain' ? 'Calorie Surplus Control' : goalVal === 'weight-loss' ? 'Satiety Engineering' : 'Micronutrient Coverage', description: goalVal === 'muscle-gain' ? `Maintain a 200-300 calorie surplus with pre-measured portions. Add calorie-dense toppings (nuts, seeds, oil) in measured amounts.` : goalVal === 'weight-loss' ? `Prioritize fiber and protein in each container for maximum satiety per calorie. Add volume with leafy greens and cruciferous vegetables.` : `Rotate protein sources weekly and include 3+ colors of vegetables per prep session to cover micronutrient bases.` },
          ],
        },
      ],
    };
  }

  // Method + Constraint → method logistics + constraint rules
  if (
    (facetTypeA === 'method' || facetTypeB === 'method') &&
    (facetTypeA === 'constraint' || facetTypeB === 'constraint')
  ) {
    const method = facetTypeA === 'method' ? displayA : displayB;
    const constraint = facetTypeA === 'constraint' ? displayA : displayB;

    return {
      title: `${method}\nLogistics`,
      description: `${method} batch cooking with the ${constraint.toLowerCase()} constraint requires specific sequencing and equipment prep. Optimize your workflow for maximum throughput.`,
      prepTime: '60m',
      cards: [
        {
          heading: `${method} Workflow`,
          items: [
            { title: 'Equipment Setup', description: `Prep all ${method.toLowerCase()} equipment before starting. Preheat and have all ingredients measured and ready for sequential batching.` },
            { title: 'Batch Sequencing', description: `Run proteins first (longest cook time), then vegetables, then starches. Keep the equipment hot between batches for efficiency.` },
          ],
        },
        {
          heading: `${constraint} Rules`,
          items: [
            { title: 'Compliance Check', description: `Verify every ingredient meets the ${constraint.toLowerCase()} threshold before adding. Label containers with the specific constraint metric.` },
            { title: 'Storage & Reheating', description: `Store in portion-controlled containers labeled with macros. Reheat per ${method.toLowerCase()} guidelines for best texture retention.` },
          ],
        },
      ],
    };
  }

  // Meal + Constraint
  if (facetTypeA === 'meal' || facetTypeB === 'meal') {
    const meal = facetTypeA === 'meal' ? displayA : displayB;
    const other = facetTypeA === 'meal' ? displayB : displayA;

    return {
      title: `${meal} Prep\nLogistics`,
      description: `Optimizing ${meal.toLowerCase()} prep with ${other.toLowerCase()} requirements. Batch efficiently and store for grab-and-go convenience.`,
      prepTime: '75m',
      cards: [
        {
          heading: `${meal} Storage`,
          items: [
            { title: 'Container Strategy', description: `Use meal-specific containers — ${meal.toLowerCase()} portions should be grab-ready with no assembly needed during the week.` },
            { title: 'Freshness Timeline', description: `Most ${meal.toLowerCase()} preps last 4-5 days. Prepare two batches for the week if your schedule allows.` },
          ],
        },
        {
          heading: `${other} Optimization`,
          items: [
            { title: 'Ingredient Selection', description: `Choose ingredients that satisfy the ${other.toLowerCase()} requirement while suiting ${meal.toLowerCase()} formats and timing.` },
            { title: 'Macro Targeting', description: `Calibrate each ${meal.toLowerCase()} container to hit daily macro splits appropriate for that time of day.` },
          ],
        },
      ],
    };
  }

  // Generic fallback
  return {
    title: `${displayA}\nLogistics`,
    description: `Optimizing the intersection of ${displayA.toLowerCase()} and ${displayB.toLowerCase()} for batch prep efficiency and nutritional consistency.`,
    prepTime: '90m',
    cards: [
      {
        heading: 'Storage Protocols',
        items: [
          { title: 'Container System', description: 'Use glass containers with airtight seals. Separate wet and dry components for maximum shelf life.' },
          { title: 'Shelf Life', description: 'Most preps last 4-5 days in the fridge. Freeze extras in single-serve portions for up to 90 days.' },
        ],
      },
      {
        heading: 'Optimization Tips',
        items: [
          { title: 'Batch Efficiency', description: 'Cook proteins and grains simultaneously. Use oven and stovetop in parallel to cut total prep time by 40%.' },
          { title: 'Macro Verification', description: 'Weigh portions with a kitchen scale during the first prep session. After that, you can eyeball consistently.' },
        ],
      },
    ],
  };
}

// ─── Sibling Pages ───────────────────────────────────────────────────

import { facets, FACET_ORDER, type FacetKey } from '../taxonomy';

interface SiblingPage {
  swapLabel: string;
  title: string;
  href: string;
}

/**
 * Generate sibling / cross-reference pages for a two-facet combo.
 */
export function generateSiblingPages(
  hub: string,
  facetTypeA: string, facetValueA: string, displayA: string,
  facetTypeB: string, facetValueB: string, displayB: string,
): SiblingPage[] {
  const hubPath = hub === 'meal-prep' ? '/meal-prep/' : '/high-protein/';
  const siblings: SiblingPage[] = [];

  // 1. Switch facet B: same A, different B
  const facetBDef = facets[facetTypeB as FacetKey];
  if (facetBDef) {
    const altB = facetBDef.values.find(v => v !== facetValueB);
    if (altB) {
      const altBDisplay = altB.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      // Maintain canonical order
      const aIdx = FACET_ORDER.indexOf(facetTypeA as FacetKey);
      const bIdx = FACET_ORDER.indexOf(facetTypeB as FacetKey);
      const href = aIdx <= bIdx
        ? `${hubPath}${facetTypeA}/${facetValueA}/${facetTypeB}/${altB}/`
        : `${hubPath}${facetTypeB}/${altB}/${facetTypeA}/${facetValueA}/`;
      siblings.push({
        swapLabel: `Switch ${facetBDef.label}`,
        title: `${displayA} ${altBDisplay}`,
        href,
      });
    }
  }

  // 2. Switch facet A: same B, different A
  const facetADef = facets[facetTypeA as FacetKey];
  if (facetADef) {
    const altA = facetADef.values.find(v => v !== facetValueA);
    if (altA) {
      const altADisplay = altA.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const aIdx = FACET_ORDER.indexOf(facetTypeA as FacetKey);
      const bIdx = FACET_ORDER.indexOf(facetTypeB as FacetKey);
      const href = aIdx <= bIdx
        ? `${hubPath}${facetTypeA}/${altA}/${facetTypeB}/${facetValueB}/`
        : `${hubPath}${facetTypeB}/${facetValueB}/${facetTypeA}/${altA}/`;
      siblings.push({
        swapLabel: `Switch ${facetADef.label}`,
        title: `${altADisplay} ${displayB}`,
        href,
      });
    }
  }

  // 3. Target Constraint: link to a constraint combo if not already constraint-based
  if (facetTypeA !== 'constraint' && facetTypeB !== 'constraint') {
    const primaryType = facetTypeA === 'diet' ? facetTypeA : facetTypeB === 'diet' ? facetTypeB : facetTypeA;
    const primaryValue = primaryType === facetTypeA ? facetValueA : facetValueB;
    const aIdx = FACET_ORDER.indexOf(primaryType as FacetKey);
    const bIdx = FACET_ORDER.indexOf('constraint' as FacetKey);
    const constraintVal = 'high-fiber';
    const href = aIdx <= bIdx
      ? `${hubPath}${primaryType}/${primaryValue}/constraint/${constraintVal}/`
      : `${hubPath}constraint/${constraintVal}/${primaryType}/${primaryValue}/`;
    siblings.push({
      swapLabel: 'Target Constraint',
      title: `High Fiber ${primaryValue.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`,
      href,
    });
  } else {
    // Already constraint-based, link to goal combo
    const nonConstraintType = facetTypeA !== 'constraint' ? facetTypeA : facetTypeB;
    const nonConstraintValue = nonConstraintType === facetTypeA ? facetValueA : facetValueB;
    const aIdx = FACET_ORDER.indexOf(nonConstraintType as FacetKey);
    const bIdx = FACET_ORDER.indexOf('goal' as FacetKey);
    const href = aIdx <= bIdx
      ? `${hubPath}${nonConstraintType}/${nonConstraintValue}/goal/muscle-gain/`
      : `${hubPath}goal/muscle-gain/${nonConstraintType}/${nonConstraintValue}/`;
    siblings.push({
      swapLabel: 'Target Goal',
      title: `Muscle Gain ${nonConstraintValue.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}`,
      href,
    });
  }

  // 4. Logistic Hub: link to the parent hub page
  siblings.push({
    swapLabel: 'Logistic Hub',
    title: hub === 'meal-prep' ? '5-Day Planning Hub' : 'High-Protein Index',
    href: hubPath,
  });

  return siblings;
}

// ─── Matrix ID Generator ─────────────────────────────────────────────

/**
 * Generate a deterministic matrix ID from facet types and values.
 */
export function generateMatrixId(facetTypeA: string, facetValueA: string, facetTypeB: string, facetValueB: string): string {
  const combined = `${facetTypeA}:${facetValueA}:${facetTypeB}:${facetValueB}`;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const chr = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  const num = Math.abs(hash) % 1000;
  return `T3-${String(num).padStart(3, '0')}`;
}
