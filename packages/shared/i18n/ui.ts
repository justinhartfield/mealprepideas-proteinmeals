/**
 * UI String Translations
 * All user-facing text in the UI components
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.hub': 'Meal Prep Hub',
    'nav.methods': 'Methods',
    'nav.personas': 'Personas',
    'nav.stores': 'Stores',
    'nav.plans': 'Plans',
    'nav.tools': 'Tools',
    'nav.diets': 'Diets',
    'nav.goals': 'Goals',
    'nav.brand': 'Meal Prep Authority',
    'nav.signIn': 'SIGN IN',
    'nav.signOut': 'Sign Out',
    'nav.profile': 'Profile',
    'nav.savedRecipes': 'Saved Recipes',
    'nav.macroCalc': 'Macro Calculator',

    // Recipe page
    'recipe.yield': 'YIELD',
    'recipe.save': 'SAVE PROTOCOL',
    'recipe.saved': '✓ SAVED',
    'recipe.groceryList': 'GROCERY LIST',
    'recipe.printPrep': 'PRINT PREP SHEET',
    'recipe.calories': 'CALORIES',
    'recipe.protein': 'PROTEIN',
    'recipe.peRatio': 'P:E RATIO',
    'recipe.time': 'TIME',
    'recipe.ingredients': 'Ingredients',
    'recipe.instructions': 'Instructions',
    'recipe.tips': 'Tips',
    'recipe.storage': 'Storage',
    'recipe.reheating': 'Reheating',
    'recipe.servings': 'servings',
    'recipe.prepTime': 'Prep',
    'recipe.cookTime': 'Cook',
    'recipe.totalTime': 'Total',
    'recipe.yieldGate': 'Sign up free to unlock 6+ servings!',
    'recipe.copyClipboard': 'COPY TO CLIPBOARD',
    'recipe.copied': '✓ COPIED',

    // Hub / Category
    'hub.exploreAll': 'EXPLORE ALL CATEGORIES',
    'hub.viewAll': 'View All',
    'hub.recipes': 'Recipes',
    'hub.plans': 'Plans',
    'hub.showMore': 'Show More',
    'hub.showLess': 'Show Less',
    'hub.sortBy': 'Sort By',
    'hub.proteinContent': 'Protein Content',
    'hub.allRecipes': 'ALL MEAL PREP RECIPES',
    'hub.signatureProtocol': 'Signature Protocol',
    'hub.viewFullPlan': 'View Full Plan',
    'hub.browseAllPlans': 'Browse All Plans',
    'hub.individualServings': 'Individual Servings',
    'hub.totalGroceryCost': 'Total Grocery Cost',

    // Category facets
    'facet.meal': 'By Meal',
    'facet.method': 'By Method',
    'facet.diet': 'By Diet',
    'facet.goal': 'By Goal & Constraint',
    'facet.persona': 'By Persona',
    'facet.store': 'By Store',

    // Homepage
    'home.optimizeLogistics': 'OPTIMIZE LOGISTICS',
    'home.optimizeMacros': 'OPTIMIZE MACROS',
    'home.mealprep': 'MEALPREP',
    'home.highprotein': 'HIGHPROTEIN',
    'home.mealPrepDesc': 'Batching, logistics, storage, and 5-day protocols for high-performance living.',
    'home.highProteinDesc': 'Muscle gain, weight loss, and fast-food survival guides with hard calorie bands.',
    'home.smartQuery': 'Smart Query Engine',
    'home.systematicSelection': 'SYSTEMATIC SELECTION',

    // Footer
    'footer.copyright': '©',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.sitemap': 'Sitemap',

    // Common
    'common.backToHome': 'Back to Home',
    'common.learnMore': 'Learn More',
    'common.faq': 'FAQ',
    'common.readMore': 'Read More',
    'common.breadcrumbHome': 'Home',
    'common.mealPrep': 'Meal Prep',
    'common.highProtein': 'High Protein',
  },

  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.hub': 'Preparación de Comidas',
    'nav.methods': 'Métodos',
    'nav.personas': 'Perfiles',
    'nav.stores': 'Tiendas',
    'nav.plans': 'Planes',
    'nav.tools': 'Herramientas',
    'nav.diets': 'Dietas',
    'nav.goals': 'Objetivos',
    'nav.brand': 'Autoridad en Meal Prep',
    'nav.signIn': 'INICIAR SESIÓN',
    'nav.signOut': 'Cerrar Sesión',
    'nav.profile': 'Perfil',
    'nav.savedRecipes': 'Recetas Guardadas',
    'nav.macroCalc': 'Calculadora de Macros',

    // Recipe page
    'recipe.yield': 'PORCIONES',
    'recipe.save': 'GUARDAR RECETA',
    'recipe.saved': '✓ GUARDADA',
    'recipe.groceryList': 'LISTA DE COMPRAS',
    'recipe.printPrep': 'IMPRIMIR PREPARACIÓN',
    'recipe.calories': 'CALORÍAS',
    'recipe.protein': 'PROTEÍNA',
    'recipe.peRatio': 'RATIO P:E',
    'recipe.time': 'TIEMPO',
    'recipe.ingredients': 'Ingredientes',
    'recipe.instructions': 'Instrucciones',
    'recipe.tips': 'Consejos',
    'recipe.storage': 'Almacenamiento',
    'recipe.reheating': 'Recalentar',
    'recipe.servings': 'porciones',
    'recipe.prepTime': 'Prep',
    'recipe.cookTime': 'Cocción',
    'recipe.totalTime': 'Total',
    'recipe.yieldGate': '¡Regístrate gratis para desbloquear 6+ porciones!',
    'recipe.copyClipboard': 'COPIAR AL PORTAPAPELES',
    'recipe.copied': '✓ COPIADO',

    // Hub / Category
    'hub.exploreAll': 'EXPLORAR TODAS LAS CATEGORÍAS',
    'hub.viewAll': 'Ver Todo',
    'hub.recipes': 'Recetas',
    'hub.plans': 'Planes',
    'hub.showMore': 'Mostrar Más',
    'hub.showLess': 'Mostrar Menos',
    'hub.sortBy': 'Ordenar Por',
    'hub.proteinContent': 'Contenido de Proteína',
    'hub.allRecipes': 'TODAS LAS RECETAS DE MEAL PREP',
    'hub.signatureProtocol': 'Protocolo Destacado',
    'hub.viewFullPlan': 'Ver Plan Completo',
    'hub.browseAllPlans': 'Ver Todos los Planes',
    'hub.individualServings': 'Porciones Individuales',
    'hub.totalGroceryCost': 'Costo Total de Compras',

    // Category facets
    'facet.meal': 'Por Comida',
    'facet.method': 'Por Método',
    'facet.diet': 'Por Dieta',
    'facet.goal': 'Por Objetivo',
    'facet.persona': 'Por Perfil',
    'facet.store': 'Por Tienda',

    // Homepage
    'home.optimizeLogistics': 'OPTIMIZAR LOGÍSTICA',
    'home.optimizeMacros': 'OPTIMIZAR MACROS',
    'home.mealprep': 'MEALPREP',
    'home.highprotein': 'ALTAPROTEÍNA',
    'home.mealPrepDesc': 'Preparación por lotes, logística, almacenamiento y protocolos de 5 días para una vida de alto rendimiento.',
    'home.highProteinDesc': 'Ganancia muscular, pérdida de peso y guías de comida rápida con rangos calóricos estrictos.',
    'home.smartQuery': 'Motor de Búsqueda Inteligente',
    'home.systematicSelection': 'SELECCIÓN SISTEMÁTICA',

    // Footer
    'footer.copyright': '©',
    'footer.allRightsReserved': 'Todos los derechos reservados.',
    'footer.privacy': 'Privacidad',
    'footer.terms': 'Términos',
    'footer.sitemap': 'Mapa del Sitio',

    // Common
    'common.backToHome': 'Volver al Inicio',
    'common.learnMore': 'Saber Más',
    'common.faq': 'Preguntas Frecuentes',
    'common.readMore': 'Leer Más',
    'common.breadcrumbHome': 'Inicio',
    'common.mealPrep': 'Preparación de Comidas',
    'common.highProtein': 'Alta Proteína',
  },
} as const;
