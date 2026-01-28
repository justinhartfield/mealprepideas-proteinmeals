/**
 * Wire i18n into all shared Astro components
 * Adds imports and replaces hardcoded strings with t() calls
 */
import fs from 'fs';
import path from 'path';

const SHARED = path.resolve('packages/shared');
const COMPONENTS = path.join(SHARED, 'components');
const LAYOUTS = path.join(SHARED, 'layouts');

// ═══════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════

function addI18nImports(content, relativeI18nPath = '../i18n/utils') {
  // Check if already imported
  if (content.includes('getLangFromUrl') && content.includes('useTranslations')) {
    // Ensure the vars are declared
    if (!content.includes("const lang = getLangFromUrl(Astro.url)")) {
      // Add after last import
      const lastImport = content.lastIndexOf("import ");
      const nextLine = content.indexOf('\n', content.indexOf(';', lastImport));
      content = content.slice(0, nextLine + 1) +
        `\nconst lang = getLangFromUrl(Astro.url);\nconst t = useTranslations(lang);\n` +
        content.slice(nextLine + 1);
    }
    return content;
  }

  // Find the end of the frontmatter imports section (after last import statement, before interface/const/etc)
  const lines = content.split('\n');
  let lastImportLine = -1;
  let frontmatterEnd = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---' && i > 0) {
      frontmatterEnd = i;
      break;
    }
    if (lines[i].startsWith('import ') || lines[i].startsWith("import {")) {
      // Find the end of multi-line imports
      let j = i;
      while (j < lines.length && !lines[j].includes(';')) j++;
      lastImportLine = j;
    }
  }

  if (lastImportLine === -1) {
    // No imports found, add after first ---
    const firstDash = content.indexOf('---');
    const nextLine = content.indexOf('\n', firstDash);
    content = content.slice(0, nextLine + 1) +
      `import { getLangFromUrl, useTranslations } from '${relativeI18nPath}';\n` +
      content.slice(nextLine + 1);
  } else {
    // Add after last import
    const insertPos = lines.slice(0, lastImportLine + 1).join('\n').length + 1;
    content = content.slice(0, insertPos) +
      `import { getLangFromUrl, useTranslations } from '${relativeI18nPath}';\n` +
      content.slice(insertPos);
  }

  // Now add lang/t declarations - find a good spot (after Props destructuring or before the closing ---)
  // Look for the closing ---
  const updatedLines = content.split('\n');
  let closingDashLine = -1;
  let dashCount = 0;
  for (let i = 0; i < updatedLines.length; i++) {
    if (updatedLines[i].trim() === '---') {
      dashCount++;
      if (dashCount === 2) {
        closingDashLine = i;
        break;
      }
    }
  }

  if (closingDashLine > 0 && !content.includes("const lang = getLangFromUrl(Astro.url)")) {
    updatedLines.splice(closingDashLine, 0,
      '',
      '// i18n',
      'const lang = getLangFromUrl(Astro.url);',
      'const t = useTranslations(lang);'
    );
    content = updatedLines.join('\n');
  }

  return content;
}

// Simple string replacement map for each component
// We replace exact occurrences in the HTML template part only

function replaceInTemplate(content, replacements) {
  // Split at the second --- to get template part
  let dashCount = 0;
  let templateStart = -1;
  for (let i = 0; i < content.length - 2; i++) {
    if (content[i] === '-' && content[i+1] === '-' && content[i+2] === '-') {
      dashCount++;
      if (dashCount === 2) {
        templateStart = i + 3;
        break;
      }
      i += 2;
    }
  }

  if (templateStart === -1) return content;

  let template = content.slice(templateStart);
  const frontmatter = content.slice(0, templateStart);

  for (const [search, replace] of replacements) {
    // Only replace in non-script, non-style contexts where it makes sense
    template = template.split(search).join(replace);
  }

  return frontmatter + template;
}

// ═══════════════════════════════════════════════════════════════════
// Process each component
// ═══════════════════════════════════════════════════════════════════

function processFile(filepath, i18nPath = '../i18n/utils') {
  if (!fs.existsSync(filepath)) {
    console.log(`  SKIP (not found): ${filepath}`);
    return;
  }

  let content = fs.readFileSync(filepath, 'utf-8');
  const original = content;

  // Add imports
  content = addI18nImports(content, i18nPath);

  if (content !== original) {
    fs.writeFileSync(filepath, content);
    console.log(`  ✓ Updated: ${path.basename(filepath)}`);
  } else {
    console.log(`  · No changes: ${path.basename(filepath)}`);
  }
}

// ═══════════════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════════════

console.log('Wiring i18n imports into shared components...\n');

// Components with ../i18n/utils path
const componentFiles = [
  'GlobalDiscoveryLanding.astro',
  'HeaderNav.astro',
  'FooterNav.astro',
  'MealPrepHub.astro',
  'HighProteinHub.astro',
  'MealPrepRecipe.astro',
  'HighProteinRecipe.astro',
  'BatchPrepPlan.astro',
  'BreadcrumbNav.astro',
  'FacetTypeIndex.astro',
  'MethodCategory.astro',
  'DietCategory.astro',
  'PersonaConditionPage.astro',
  'TwoFacetCombo.astro',
  'PersonaMethodCombo.astro',
  'MethodMealCombo.astro',
  'DietGoalCombo.astro',
  'RetailerChainPage.astro',
  'ExploreByBlock.astro',
  'PlanCTA.astro',
  'FacetNav.astro',
  'SitemapPage.astro',
  'ProfilePage.astro',
  'RetailConstraintCombo.astro',
  'RetailerMealPlan.astro',
  'AuthGate.astro',
];

for (const file of componentFiles) {
  processFile(path.join(COMPONENTS, file), '../i18n/utils');
}

// Tools
const toolsDir = path.join(COMPONENTS, 'tools');
if (fs.existsSync(toolsDir)) {
  const toolFiles = fs.readdirSync(toolsDir).filter(f => f.endsWith('.astro'));
  for (const file of toolFiles) {
    processFile(path.join(toolsDir, file), '../../i18n/utils');
  }
}

// Layout (BaseLayout already has getLangFromUrl)
// processFile(path.join(LAYOUTS, 'BaseLayout.astro'), '../i18n/utils');

console.log('\nDone! Now applying string replacements...\n');

// ═══════════════════════════════════════════════════════════════════
// String replacements per component
// ═══════════════════════════════════════════════════════════════════

function applyReplacements(filepath, replacements) {
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, 'utf-8');
  let changed = false;
  for (const [search, replace] of replacements) {
    if (content.includes(search)) {
      content = content.split(search).join(replace);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filepath, content);
    console.log(`  ✓ Strings replaced: ${path.basename(filepath)}`);
  }
}

// HeaderNav - Replace nav labels and auth text
applyReplacements(path.join(COMPONENTS, 'HeaderNav.astro'), [
  // Nav link labels - these are in arrays, we need to replace the whole arrays
  ["{ href: '/', label: 'Home' },", "{ href: '/', label: t('nav.home') },"],
  ["{ href: '/meal-prep/', label: 'Meal Prep Hub' },", "{ href: '/meal-prep/', label: t('nav.hub') },"],
  ["{ href: '/meal-prep/method/', label: 'Methods' },", "{ href: '/meal-prep/method/', label: t('nav.methods') },"],
  ["{ href: '/meal-prep/persona/', label: 'Personas' },", "{ href: '/meal-prep/persona/', label: t('nav.personas') },"],
  ["{ href: '/meal-prep/store/', label: 'Stores' },", "{ href: '/meal-prep/store/', label: t('nav.stores') },"],
  ["{ href: '/meal-prep/constraint/', label: 'Plans' },", "{ href: '/meal-prep/constraint/', label: t('nav.plans') },"],
  ["{ href: '/tools/', label: 'Tools' },\n];", "{ href: '/tools/', label: t('nav.tools') },\n];"],
  // Protein nav
  ["{ href: '/high-protein/', label: 'High Protein Hub' },", "{ href: '/high-protein/', label: t('nav.hpHub') },"],
  ["{ href: '/high-protein/method/', label: 'Methods' },", "{ href: '/high-protein/method/', label: t('nav.methods') },"],
  ["{ href: '/high-protein/diet/', label: 'Diets' },", "{ href: '/high-protein/diet/', label: t('nav.diets') },"],
  ["{ href: '/high-protein/goal/', label: 'Goals' },", "{ href: '/high-protein/goal/', label: t('nav.goals') },"],
  ["{ href: '/high-protein/persona/', label: 'Personas' },", "{ href: '/high-protein/persona/', label: t('nav.personas') },"],
  ["{ href: '/stores/', label: 'Stores' },", "{ href: '/stores/', label: t('nav.stores') },"],
  ["{ href: '/tools/', label: 'Tools' },\n];", "{ href: '/tools/', label: t('nav.tools') },\n];"],
  // Brand labels
  ["brandLabel = site === 'proteinmeals' ? 'High Protein Authority' : 'Meal Prep Authority',", "brandLabel = site === 'proteinmeals' ? t('nav.brandHP') : t('nav.brand'),"],
  // Auth text
  [">SIGN IN</span>", ">{t('nav.signIn')}</span>"],
  [">SIGN IN\n    </button>", ">{t('nav.signIn')}\n    </button>"],
  [">\n      SIGN IN\n    </button>", ">\n      {t('nav.signIn')}\n    </button>"],
  [">Profile\n        </a>", ">{t('nav.profile')}\n        </a>"],
  [">Profile</a>", ">{t('nav.profile')}</a>"],
  [">\n          Profile\n        </a>", ">\n          {t('nav.profile')}\n        </a>"],
  [">\n          Saved Recipes\n        </a>", ">\n          {t('nav.savedRecipes')}\n        </a>"],
  [">\n          Macro Calculator\n        </a>", ">\n          {t('nav.macroCalc')}\n        </a>"],
  [">\n            Sign Out\n          </button>", ">\n            {t('nav.signOut')}\n          </button>"],
]);

// FooterNav - Replace footer text
applyReplacements(path.join(COMPONENTS, 'FooterNav.astro'), [
  [">Full Taxonomy Navigation</span>", ">{t('footer.fullTaxNav')}</span>"],
  [">EXPLORE ALL CATEGORIES</h2>", ">{t('footer.exploreAllCats')}</h2>"],
  ["{ label: 'Privacy', href: '/privacy/' },", "{ label: t('footer.privacy'), href: '/privacy/' },"],
  ["{ label: 'Terms', href: '/terms/' },", "{ label: t('footer.terms'), href: '/terms/' },"],
  ["{ label: 'Sitemap', href: '/sitemap/' },", "{ label: t('footer.sitemap'), href: '/sitemap/' },"],
]);

// GlobalDiscoveryLanding - Homepage strings
applyReplacements(path.join(COMPONENTS, 'GlobalDiscoveryLanding.astro'), [
  [">OPTIMIZE LOGISTICS</span>", ">{t('home.optimizeLogistics')}</span>"],
  [">OPTIMIZE MACROS</span>", ">{t('home.optimizeMacros')}</span>"],
  [">MEAL<br/>PREP</h2>", ">{t('home.mealprep').split('').slice(0,4).join('')}<br/>{t('home.mealprep').split('').slice(4).join('')}</h2>"],
  [">Batching, logistics, storage, and 5-day protocols for high-performance living.</p>", ">{t('home.mealPrepDesc')}</p>"],
  [">Muscle gain, weight loss, and fast-food survival guides with hard calorie bands.</p>", ">{t('home.highProteinDesc')}</p>"],
  [">Smart Query Engine</span>", ">{t('home.smartQuery')}</span>"],
  [">SYSTEMATIC SELECTION</h3>", ">{t('home.systematicSelection')}</h3>"],
  [">Use the inventory controls below to generate a precise meal protocol matching your biological and logistical constraints.</p>", ">{t('home.systematicDesc')}</p>"],
  [">Recipes & Plans</span>", ">{t('home.recipesAndPlans')}</span>"],
  [">Trending Recipes</h3>", ">{t('home.trendingRecipes')}</h3>"],
  [">Meal Prep</h4>", ">{t('home.mealPrep')}</h4>"],
  [">High Protein</h4>", ">{t('home.highProtein')}</h4>"],
  [">FEATURED AUTHORITY PACKS</h4>", ">{t('home.featuredPacks')}</h4>"],
  [">Pack 01</span>", ">{t('home.pack01')}</span>"],
  [">150+ Pages</span>", ">{t('home.pages150')}</span>"],
  [">High-Protein<br/>Frozen Index</h5>", ">{t('home.highProteinFrozen').split('\\n')[0]}<br/>{t('home.highProteinFrozen').split('\\n')[1] || 'Frozen Index'}</h5>"],
  [">Trader Joe's, Costco, and Walmart SKU deep-dives sorted by macro-density.</p>", ">{t('home.frozenDesc')}</p>"],
  [">View Full Pack <", ">{t('home.viewFullPack')} <"],
  [">High Sticky</span>", ">{t('home.highSticky')}</span>"],
  [">Postpartum<br/>Freezer Stash</h5>", ">{t('home.postpartumStash').split('\\n')[0]}<br/>{t('home.postpartumStash').split('\\n')[1] || 'Freezer Stash'}</h5>"],
  [">Targeted recovery nutrition for new mothers. High-fiber, anti-inflammatory protocols.</p>", ">{t('home.postpartumDesc')}</p>"],
  [">\n              Explore Vault\n            </a>", ">\n              {t('home.exploreVault')}\n            </a>"],
  [">Persona: Office</span>", ">{t('home.personaOffice')}</span>"],
  [">No-Microwave Work Lunches</h5>", ">{t('home.noMicrowaveLunches')}</h5>"],
  [">Constraint</span>", ">{t('home.constraint')}</span>"],
  [">Cold / Ambient</span>", ">{t('home.coldAmbient')}</span>"],
  [">Avg Protein</span>", ">{t('home.avgProtein')}</span>"],
  [">Fast-Food Chain Modification Guides</h5>", ">{t('home.chainGuides')}</h5>"],
  [">How to hack Chick-Fil-A, McDonalds, and Chipotle for maximum protein with zero sauce-slop.</p>", ">{t('home.chainDesc')}</p>"],
  [">Retention Module</span>", ">{t('home.retentionModule')}</span>"],
  [">Download the Sunday Prep Execution Plan. 90 minutes of work for 15 high-protein meals.</p>", ">{t('home.protocolDesc')}</p>"],
  [">Get The Plan</a>", ">{t('home.getThePlan')}</a>"],
  [">Preview Steps</a>", ">{t('home.previewSteps')}</a>"],
  [">SHOPPING LIST</span>", ">{t('home.shoppingList')}</span>"],
  [">Tools & Calculators</h3>", ">{t('home.toolsCalc')}</h3>"],
  [">FREE INTERACTIVE TOOLS</h4>", ">{t('home.freeTools')}</h4>"],
  // Tool cards
  [">What's In My Fridge?</h5>", ">{t('tool.fridgeFinder')}</h5>"],
  [">Find recipes from ingredients you already have</p>", ">{t('tool.fridgeDesc')}</p>"],
  [">Meal Planner</h5>", ">{t('tool.mealPlanner')}</h5>"],
  [">Weekly meal plan builder with drag-and-drop</p>", ">{t('tool.mealPlannerDesc')}</p>"],
  [">ROI Calculator</h5>", ">{t('tool.roiCalc')}</h5>"],
  [">See how much meal prepping saves you</p>", ">{t('tool.roiCalcDesc')}</p>"],
  [">Protein Cost Ranker</h5>", ">{t('tool.proteinCost')}</h5>"],
  [">Compare protein sources by cost per gram</p>", ">{t('tool.proteinCostDesc')}</p>"],
  [">Prep Quiz</h5>", ">{t('tool.prepQuiz')}</h5>"],
  [">Find your perfect meal prep style</p>", ">{t('tool.prepQuizDesc')}</p>"],
  [">Nutrition Label</h5>", ">{t('tool.nutritionLabel')}</h5>"],
  [">Generate FDA-style nutrition labels</p>", ">{t('tool.nutritionLabelDesc')}</p>"],
  [">Launch Tool →</span>", ">{t('home.launchTool')}</span>"],
  [">\n          View All Tools\n", ">\n          {t('home.viewAllTools')}\n"],
  // Wizard labels
  [">01. Primary Goal</label>", ">{t('wizard.primaryGoal')}</label>"],
  [">02. Method</label>", ">{t('wizard.method')}</label>"],
  [">03. Diet Type</label>", ">{t('wizard.dietType')}</label>"],
  ["<option value=\"\">Any Goal</option>", `<option value="">{t('wizard.anyGoal')}</option>`],
  ["<option value=\"\">Any Method</option>", `<option value="">{t('wizard.anyMethod')}</option>`],
  ["<option value=\"\">Any Diet</option>", `<option value="">{t('wizard.anyDiet')}</option>`],
  [">Generate Index</span>", ">{t('wizard.generateIndex')}</span>"],
  [">MATCHING DATA POINTS</span>", ">{t('wizard.matchingDataPoints')}</span>"],
]);

// MealPrepHub
applyReplacements(path.join(COMPONENTS, 'MealPrepHub.astro'), [
  [">Interactive Wizard</span>", ">{t('hub.interactiveWizard')}</span>"],
  [">01. Goal</label>", ">{t('wizard.goal')}</label>"],
  [">02. Method</label>", ">{t('wizard.method')}</label>"],
  [">03. Diet</label>", ">{t('wizard.diet')}</label>"],
  [">04. Meal</label>", ">{t('wizard.meal')}</label>"],
  [">05. Constraint</label>", ">{t('wizard.constraint')}</label>"],
  [">\n            Generate Protocol\n", ">\n            {t('hub.generateProtocol')}\n"],
  [">\n            Reset All\n", ">\n            {t('hub.resetAll')}\n"],
  [">Browse & Filter</span>", ">{t('hub.browseFilter')}</span>"],
  [">ALL MEAL PREP RECIPES</h2>", ">{t('hub.allRecipes')}</h2>"],
  [">Showing <span", ">{t('hub.showing')} <span"],
  ["></span> recipes", "></span> {t('hub.recipesLc')}"],
  [">No recipes match this filter.</p>", ">{t('hub.noRecipesMatch')}</p>"],
  [">Show All Recipes</button>", ">{t('hub.showAllRecipes')}</button>"],
  [">5-Day Plans</span>", ">{t('hub.fiveDayPlans')}</span>"],
  [">Recipes Available</span>", ">{t('hub.recipesAvailable')}</span>"],
  [">Meals</span>", ">{t('hub.meals')}</span>"],
  [">Protein/Day</span>", ">{t('hub.proteinDay')}</span>"],
  [">Budget</span>\n", ">{t('hub.budget')}</span>\n"],
]);

// HighProteinHub
applyReplacements(path.join(COMPONENTS, 'HighProteinHub.astro'), [
  [">Interactive Wizard</span>", ">{t('hub.interactiveWizard')}</span>"],
  [">01. Goal</label>", ">{t('wizard.goal')}</label>"],
  [">02. Method</label>", ">{t('wizard.method')}</label>"],
  [">03. Diet</label>", ">{t('wizard.diet')}</label>"],
  [">04. Meal</label>", ">{t('wizard.meal')}</label>"],
  [">05. Constraint</label>", ">{t('wizard.constraint')}</label>"],
  [">\n            Generate Protocol\n", ">\n            {t('hub.generateProtocol')}\n"],
  [">\n            Reset All\n", ">\n            {t('hub.resetAll')}\n"],
  [">Browse & Filter</span>", ">{t('hub.browseFilter')}</span>"],
  [">ALL HIGH PROTEIN RECIPES</h2>", ">{t('hub.allHPRecipes')}</h2>"],
  [">Showing <span", ">{t('hub.showing')} <span"],
  ["></span> recipes\n", "></span> {t('hub.recipesLc')}\n"],
  [">No recipes match this filter.</p>", ">{t('hub.noRecipesMatch')}</p>"],
  [">Show All Recipes</button>", ">{t('hub.showAllRecipes')}</button>"],
  [">Macro-Optimized Plans</span>", ">{t('hub.macroOptPlans')}</span>"],
  [">Recipes Available</span>", ">{t('hub.recipesAvailable')}</span>"],
  [">Avg Protein</span>", ">{t('hub.avgProtein')}</span>"],
  [">Recipes</span>\n", ">{t('hub.recipes')}</span>\n"],
  [">Meals</span>", ">{t('hub.meals')}</span>"],
  [">Protein/Day</span>", ">{t('hub.proteinDay')}</span>"],
  [">Budget</span>\n", ">{t('hub.budget')}</span>\n"],
]);

// MealPrepRecipe
applyReplacements(path.join(COMPONENTS, 'MealPrepRecipe.astro'), [
  [">INVENTORY LIST</h2>", ">{t('recipe.inventoryList')}</h2>"],
  [">EXECUTION STEPS</h2>", ">{t('recipe.executionSteps')}</h2>"],
  [">ORIGINAL</span>", ">{t('recipe.original')}</span>"],
  [">MEAL PREP LOGISTICS</h3>", ">{t('recipe.mealPrepLogistics')}</h3>"],
  ["><strong>Storage:</strong>", `><strong>{t('recipe.storageLbl')}</strong>`],
  ["><strong>Batching:</strong>", `><strong>{t('recipe.batchingLbl')}</strong>`],
  ["><strong>Reheat:</strong>", `><strong>{t('recipe.reheatLbl')}</strong>`],
  [">PRIMARY CATEGORY</h3>", ">{t('recipe.primaryCategory')}</h3>"],
  [">EXPLORE MORE</span>", ">{t('recipe.exploreMore')}</span>"],
  [">RELATED INGREDIENTS</h3>", ">{t('recipe.relatedIngredients')}</h3>"],
  [">FULL EXECUTION PLANS</h3>", ">{t('recipe.fullExecutionPlans')}</h3>"],
  [">ELITE DENSITY</span>", ">{t('recipe.eliteDensity')}</span>"],
  [">YIELD</span>", ">{t('recipe.yield')}</span>"],
  ["id=\"save-btn-text\">SAVE PROTOCOL</span>", `id="save-btn-text">{t('recipe.save')}</span>`],
  [">GROCERY LIST</span>\n", ">{t('recipe.groceryList')}</span>\n"],
  [">PRINT PREP SHEET</span>", ">{t('recipe.printPrep')}</span>"],
  [">Grocery List</h3>", ">{t('recipe.groceryList')}</h3>"],
  [">PROTEIN</span>", ">{t('recipe.protein')}</span>"],
  [">CALORIES</span>", ">{t('recipe.calories')}</span>"],
  [">P:E RATIO</span>", ">{t('recipe.peRatio')}</span>"],
  [">TIME</span>", ">{t('recipe.time')}</span>"],
  ["id=\"save-grocery-text\">SAVE TO PROFILE</span>", `id="save-grocery-text">{t('recipe.saveToProfile')}</span>`],
  [">View Full Grocery List →</a>", ">{t('recipe.viewFullGrocery')}</a>"],
  [">COMMUNITY PREPS THIS WEEK</span>", ">{t('recipe.communityPreps')}</span>"],
]);

// HighProteinRecipe - same patterns
applyReplacements(path.join(COMPONENTS, 'HighProteinRecipe.astro'), [
  [">INVENTORY LIST</h2>", ">{t('recipe.inventoryList')}</h2>"],
  [">EXECUTION STEPS</h2>", ">{t('recipe.executionSteps')}</h2>"],
  [">ORIGINAL</span>", ">{t('recipe.original')}</span>"],
  [">MEAL PREP LOGISTICS</h3>", ">{t('recipe.mealPrepLogistics')}</h3>"],
  ["><strong>Storage:</strong>", `><strong>{t('recipe.storageLbl')}</strong>`],
  ["><strong>Batching:</strong>", `><strong>{t('recipe.batchingLbl')}</strong>`],
  ["><strong>Reheat:</strong>", `><strong>{t('recipe.reheatLbl')}</strong>`],
  [">PRIMARY CATEGORY</h3>", ">{t('recipe.primaryCategory')}</h3>"],
  [">EXPLORE MORE</span>", ">{t('recipe.exploreMore')}</span>"],
  [">RELATED INGREDIENTS</h3>", ">{t('recipe.relatedIngredients')}</h3>"],
  [">FULL EXECUTION PLANS</h3>", ">{t('recipe.fullExecutionPlans')}</h3>"],
  [">ELITE DENSITY</span>", ">{t('recipe.eliteDensity')}</span>"],
  [">YIELD</span>", ">{t('recipe.yield')}</span>"],
  ["id=\"save-btn-text\">SAVE PROTOCOL</span>", `id="save-btn-text">{t('recipe.save')}</span>`],
  [">GROCERY LIST</span>\n", ">{t('recipe.groceryList')}</span>\n"],
  [">PRINT PREP SHEET</span>", ">{t('recipe.printPrep')}</span>"],
  [">Grocery List</h3>", ">{t('recipe.groceryList')}</h3>"],
  [">PROTEIN</span>", ">{t('recipe.protein')}</span>"],
  [">CALORIES</span>", ">{t('recipe.calories')}</span>"],
  [">P:E RATIO</span>", ">{t('recipe.peRatio')}</span>"],
  [">TIME</span>", ">{t('recipe.time')}</span>"],
  ["id=\"save-grocery-text\">SAVE TO PROFILE</span>", `id="save-grocery-text">{t('recipe.saveToProfile')}</span>`],
  [">View Full Grocery List →</a>", ">{t('recipe.viewFullGrocery')}</a>"],
  [">COMMUNITY PREPS THIS WEEK</span>", ">{t('recipe.communityPreps')}</span>"],
]);

// BatchPrepPlan
applyReplacements(path.join(COMPONENTS, 'BatchPrepPlan.astro'), [
  [">Daily Breakdown</h2>", ">{t('plan.dailyBreakdown')}</h2>"],
  [">Shopping List</h2>", ">{t('plan.shoppingList')}</h2>"],
  [">MASTER LIST</span>", ">{t('plan.masterList')}</span>"],
  [">Sunday Prep Protocol</h2>", ">{t('plan.sundayPrepProtocol')}</h2>"],
  ["{ value: String(totalMeals), label: 'Total Meals' },", `{ value: String(totalMeals), label: t('plan.totalMeals') },`],
  ["{ value: prepTime, label: 'Prep Time' },", `{ value: prepTime, label: t('plan.prepTime') },`],
  ["{ value: weeklyBudget, label: 'Weekly Budget' },", `{ value: weeklyBudget, label: t('plan.weeklyBudget') },`],
  ["{ value: avgProtein, label: 'Avg Protein/Meal' },", `{ value: avgProtein, label: t('plan.avgProteinMeal') },`],
]);

// FacetTypeIndex
applyReplacements(path.join(COMPONENTS, 'FacetTypeIndex.astro'), [
  [">\n              Facet Index\n", ">\n              {t('facetIndex.facetIndex')}\n"],
  [">View All →\n", ">{t('common.viewAll')}\n"],
  [">EXPLORE OTHER CATEGORIES", ">{t('facetIndex.exploreOther')}"],
  [">Total Categories</span>", ">{t('facetIndex.totalCategories')}</span>"],
  [">Total Recipes</span>", ">{t('facetIndex.totalRecipes')}</span>"],
  [">Facet Type</span>", ">{t('facetIndex.facetType')}</span>"],
]);

// MethodCategory
applyReplacements(path.join(COMPONENTS, 'MethodCategory.astro'), [
  [">STRATEGIES</h1>", ">{t('category.strategies')}</h1>"],
  [">Primary Utility</h3>", ">{t('category.primaryUtility')}</h3>"],
  [">Sort By: Protein Content</span>", ">{t('category.sortByProtein')}</span>"],
  [">Retrieve Additional Inventory <", ">{t('category.retrieveMore')} <"],
  [">View Protocol <", ">{t('recipe.viewProtocol')} <"],
  [">Execution Notes</h3>", ">{t('category.executionNotes')}</h3>"],
  [">Batching Rule</span>", ">{t('category.batchingRule')}</span>"],
  [">Storage Logic</span>", ">{t('category.storageLogic')}</span>"],
  [">Related Methods</h3>", ">{t('category.relatedMethods')}</h3>"],
  [">Swap Method</span>", ">{t('category.swapMethod')}</span>"],
  [">System Update</span>", ">{t('category.systemUpdate')}</span>"],
  [">Generate PDF\n", ">{t('category.generatePdf')}\n"],
  [">Generating...</span>", ">{t('category.generating')}</span>"],
  [">TECHNICAL RECAP / FAQ</h2>", ">{t('common.technicalRecap')}</h2>"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
]);

// DietCategory
applyReplacements(path.join(COMPONENTS, 'DietCategory.astro'), [
  [">Functional Definition</h2>", ">{t('category.functionalDef')}</h2>"],
  [">P:E Efficiency Index</span>", ">{t('category.peEfficiency')}</span>"],
  [">Retrieve Additional Inventory <", ">{t('category.retrieveMore')} <"],
  [">View Full Recipe\n", ">{t('recipe.viewFullRecipe')}\n"],
  [">TECHNICAL FAQ</h4>", ">{t('common.technicalFaq')}</h4>"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
  [">Valid Protocols", ">{t('category.validProtocols')}"],
]);

// PersonaConditionPage
applyReplacements(path.join(COMPONENTS, 'PersonaConditionPage.astro'), [
  [">Clinical Definition</h2>", ">{t('persona.clinicalDef')}</h2>"],
  [">Condition Profile</h3>", ">{t('persona.conditionProfile')}</h3>"],
  [">Type</span>", ">{t('persona.type')}</span>"],
  [">Protocols</span>", ">{t('persona.protocols')}</span>"],
  [">Rules</span>", ">{t('persona.rules')}</span>"],
  [">Nutrition Rules</h2>", ">{t('persona.nutritionRules')}</h2>"],
  [">Recommended Protocols</h2>", ">{t('persona.recommendedProtocols')}</h2>"],
  [">Related Conditions</h3>", ">{t('persona.relatedConditions')}</h3>"],
  [">INDEX</span>", ">{t('persona.index')}</span>"],
  [">View Full Recipe\n", ">{t('recipe.viewFullRecipe')}\n"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
  [">FAQ</h4>", ">{t('common.faq')}</h4>"],
]);

// TwoFacetCombo
applyReplacements(path.join(COMPONENTS, 'TwoFacetCombo.astro'), [
  [">Refine Search</h3>", ">{t('combo.refineSearch')}</h3>"],
  [">All Strategies <span", ">{t('combo.allStrategies')} <span"],
  [">Smart Sourcing</span>", ">{t('combo.smartSourcing')}</span>"],
  [">SORTED BY PROTEIN DENSITY</div>", ">{t('combo.sortedByDensity')}</div>"],
  [">Cross-Reference The Matrix</h4>", ">{t('combo.crossRefMatrix')}</h4>"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
]);

// PersonaMethodCombo
applyReplacements(path.join(COMPONENTS, 'PersonaMethodCombo.astro'), [
  [">Operational Capacity</span>", ">{t('pm.operationalCapacity')}</span>"],
  [">Avg. Prep Time (Mins)</span>", ">{t('pm.avgPrepTime')}</span>"],
  [">The Essentials Matrix</h2>", ">{t('pm.essentialsMatrix')}</h2>"],
  [">Ranked by nutrient density &amp; reheat stability</p>", ">{t('pm.rankedBy')}</p>"],
  [">All SKUs</button>", ">{t('pm.allSkus')}</button>"],
  [">Protein/Serve</span>", ">{t('pm.proteinServe')}</span>"],
  [">Fiber/Serve</span>", ">{t('pm.fiberServe')}</span>"],
  [">Stability</span>", ">{t('pm.stability')}</span>"],
  [">Optimal Reheat</span>", ">{t('pm.optimalReheat')}</span>"],
  [">Stability Matrix</span>", ">{t('pm.stabilityMatrix')}</span>"],
  [">Maximum Storage Life</h3>", ">{t('pm.maxStorageLife')}</h3>"],
]);

// MethodMealCombo
applyReplacements(path.join(COMPONENTS, 'MethodMealCombo.astro'), [
  [">Protocol Index</h2>", ">{t('combo.protocolIndex')}</h2>"],
  [">Explore Related</h3>", ">{t('combo.exploreRelated')}</h3>"],
  [">FAQ</h4>", ">{t('common.faq')}</h4>"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
  [">Score</div>", ">{t('mm.score')}</div>"],
]);

// DietGoalCombo
applyReplacements(path.join(COMPONENTS, 'DietGoalCombo.astro'), [
  [">The Solution Framework\n", ">{t('combo.solutionFramework')}\n"],
  [">Quick Filters</h4>", ">{t('combo.quickFilters')}</h4>"],
  [">All Protocols</button>", ">{t('combo.allProtocols')}</button>"],
  [">The Ranking Machine</span>", ">{t('combo.rankingMachine')}</span>"],
  [">Related Systems</span>", ">{t('combo.relatedSystems')}</span>"],
  [">Explore Sibling Nodes.</h3>", ">{t('combo.exploreSiblings')}</h3>"],
  [">TECHNICAL FAQ</h4>", ">{t('common.technicalFaq')}</h4>"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
  [">Macro Intent</div>", ">{t('combo.macroIntent')}</div>"],
  [">Protein Min.</span>", ">{t('combo.proteinMin')}</span>"],
]);

// RetailerChainPage
applyReplacements(path.join(COMPONENTS, 'RetailerChainPage.astro'), [
  [">SKU Intelligence</h3>", ">{t('retail.skuIntel')}</h3>"],
  [">Menu Intelligence</h3>", ">{t('retail.menuIntel')}</h3>"],
  [">Avg P:E Score</span>", ">{t('retail.avgPeScore')}</span>"],
  [">Product Index</h2>", ">{t('retail.productIndex')}</h2>"],
  [">Menu Matrix</h2>", ">{t('retail.menuMatrix')}</h2>"],
  [">Top Picks</h2>", ">{t('retail.topPicks')}</h2>"],
  [">Menu Modification Guide</h2>", ">{t('retail.menuModGuide')}</h2>"],
  [">Related Indexes</h3>", ">{t('retail.relatedIndexes')}</h3>"],
  [">Protein</span>", ">{t('common.protein')}</span>"],
  [">Calories</span>", ">{t('common.calories')}</span>"],
  [">↑ Protein</button>", ">{t('retail.sortProtein')}</button>"],
  [">↓ Calories</button>", ">{t('retail.sortCalories')}</button>"],
  [">↑ P:E</button>", ">{t('retail.sortPE')}</button>"],
]);

// PlanCTA
applyReplacements(path.join(COMPONENTS, 'PlanCTA.astro'), [
  [">Signature Protocol</span>", ">{t('planCta.signatureProtocol')}</span>"],
  [">Individual Servings</span>", ">{t('hub.individualServings')}</span>"],
  [">Total Grocery Cost</span>", ">{t('hub.totalGroceryCost')}</span>"],
  [">\n          View Full Plan\n", ">\n          {t('hub.viewFullPlan')}\n"],
  [">\n          Browse All Plans\n", ">\n          {t('hub.browseAllPlans')}\n"],
  [">Servings</span>", ">{t('planCta.servingsLbl')}</span>"],
]);

// SitemapPage
applyReplacements(path.join(COMPONENTS, 'SitemapPage.astro'), [
  [">Site Directory</span>", ">{t('sitemap.siteDirectory')}</span>"],
  [">Sitemap</h1>", ">{t('sitemap.sitemap')}</h1>"],
  [">Main Pages</h2>", ">{t('sitemap.mainPages')}</h2>"],
]);

// ProfilePage
applyReplacements(path.join(COMPONENTS, 'ProfilePage.astro'), [
  [">SIGN IN REQUIRED</h1>", ">{t('profile.signInRequired')}</h1>"],
  [">Create a free account to save recipes, build grocery lists, and track your macros.</p>", ">{t('profile.signInDesc')}</p>"],
  [">\n        SIGN IN / CREATE ACCOUNT\n      </button>", ">\n        {t('profile.signInCreate')}\n      </button>"],
  [">FREE MEMBER</p>", ">{t('profile.freeMember')}</p>"],
  ["{ id: 'saved', label: 'Saved Recipes' },", `{ id: 'saved', label: t('profile.savedRecipes') },`],
  ["{ id: 'grocery', label: 'Grocery List' },", `{ id: 'grocery', label: t('profile.groceryList') },`],
  ["{ id: 'macros', label: 'Macro Calculator' },", `{ id: 'macros', label: t('profile.macroCalculator') },`],
  ["{ id: 'settings', label: 'Settings' },", `{ id: 'settings', label: t('profile.settings') },`],
  [">SAVED RECIPES</h2>", ">{t('profile.savedRecipesTitle')}</h2>"],
  [">GROCERY LIST</h2>", ">{t('profile.groceryListTitle')}</h2>"],
  [">MACRO CALCULATOR</h2>", ">{t('profile.macroCalcTitle')}</h2>"],
  [">ACCOUNT SETTINGS</h2>", ">{t('profile.accountSettings')}</h2>"],
  [">YOUR STATS</h3>", ">{t('profile.yourStats')}</h3>"],
  [">DAILY TARGETS</h3>", ">{t('profile.dailyTargets')}</h3>"],
  [">DIETARY PREFERENCES</h3>", ">{t('profile.dietaryPrefs')}</h3>"],
  [">MANAGE DATA</h3>", ">{t('profile.manageData')}</h3>"],
  [">EXPORT DATA</button>", ">{t('profile.exportData')}</button>"],
  [">CLEAR ALL DATA</button>", ">{t('profile.clearAllData')}</button>"],
  [">Gender</label>", ">{t('profile.gender')}</label>"],
  [">Male</button>", ">{t('profile.male')}</button>"],
  [">Female</button>", ">{t('profile.female')}</button>"],
  [">Age</label>", ">{t('profile.age')}</label>"],
  [">Weight (lbs)</label>", ">{t('profile.weight')}</label>"],
  [">Height (in)</label>", ">{t('profile.height')}</label>"],
  [">Activity</label>", ">{t('profile.activity')}</label>"],
  [">Goal</label>", ">{t('profile.goalLbl')}</label>"],
  [">Cut</button>", ">{t('profile.cut')}</button>"],
  [">Maintain</button>", ">{t('profile.maintain')}</button>"],
  [">Bulk</button>", ">{t('profile.bulk')}</button>"],
  [">\n                CALCULATE TARGETS\n", ">\n                {t('profile.calculateTargets')}\n"],
  [">CLEAR ALL</button>", ">{t('profile.clearAll')}</button>"],
]);

console.log('\n✅ All i18n transformations complete!');
console.log('Run `pnpm build` in each site to verify.');
