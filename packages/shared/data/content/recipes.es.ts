/**
 * Spanish translations for seed recipes (recipes.ts)
 *
 * Keyed by slug (must match exactly). Contains only translatable text fields.
 * Measurements are kept in their original units (cups, tbsp, tsp, lbs, oz, °F).
 */

export const recipesEs: Record<
  string,
  {
    title: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    tips: string[];
    storageInstructions: string;
    reheatingInstructions?: string;
    imageAlt: string;
  }
> = {
  // ─── MEAL-PREP HUB RECIPES (first 10) ────────────────────────────

  'greek-chicken-meal-prep-bowls': {
    title: 'Bowls de Pollo Griego para Preparación de Comidas',
    description:
      'Jugoso pollo con hierbas y limón acompañado de quinoa, ensalada de pepino y tzatziki casero. Perfecto para una semana entera de almuerzos en menos de 45 minutos.',
    ingredients: [
      '2 lbs de muslos de pollo deshuesados y sin piel',
      '2 tbsp de aceite de oliva',
      '2 tbsp de jugo de limón',
      '1 tbsp de orégano seco',
      '4 dientes de ajo, picados',
      '1 tsp de sal',
      '1/2 tsp de pimienta negra',
      '2 cups de quinoa seca',
      '2 pepinos ingleses, cortados en cubos',
      '1 pinta de tomates cherry, cortados por la mitad',
      '1/2 cebolla morada, cortada en rodajas finas',
      '1/2 cup de aceitunas kalamata, cortadas por la mitad',
      '1 cup de yogur griego natural',
      '1 tbsp de eneldo fresco, picado',
      '1/4 cup de queso feta desmenuzado por bowl',
    ],
    instructions: [
      'Precalentar el horno a 425°F. Forrar una bandeja con papel pergamino.',
      'Mezclar los muslos de pollo con aceite de oliva, jugo de limón, orégano, ajo, sal y pimienta. Distribuir en la bandeja en una sola capa.',
      'Hornear durante 22-25 minutos hasta que la temperatura interna alcance 165°F. Dejar reposar 5 minutos y luego cortar en rodajas.',
      'Mientras se hornea el pollo, cocinar la quinoa según las instrucciones del paquete (unos 15 min). Esponjar con un tenedor y dejar enfriar ligeramente.',
      'Mezclar los pepinos, tomates, cebolla morada y aceitunas en un bowl grande.',
      'Preparar el tzatziki: combinar el yogur griego, el eneldo, un chorrito de limón y una pizca de sal.',
      'Repartir la quinoa, el pollo en rodajas, la ensalada de pepino y una cucharada de tzatziki en 5 recipientes para meal prep. Añadir el queso feta por encima.',
    ],
    tips: [
      'Guardar el tzatziki en un recipiente pequeño aparte para evitar que todo se ablande.',
      'Los muslos de pollo quedan más jugosos que las pechugas después de recalentar.',
      'Agregar un chorrito de aceite de oliva antes de cerrar los recipientes para mantener la humedad.',
    ],
    storageInstructions:
      'Guardar en recipientes herméticos en la nevera hasta por 5 días. Mantener el tzatziki por separado.',
    reheatingInstructions:
      'Calentar el pollo y la quinoa en el microondas durante 2 minutos. Agregar la ensalada fría de pepino y el tzatziki después de recalentar.',
    imageAlt:
      'Cinco recipientes de vidrio para meal prep con bowls de pollo griego: rodajas de pollo dorado, quinoa esponjosa, ensalada de pepino y tomate, y salsa blanca de tzatziki',
  },

  'sheet-pan-teriyaki-salmon-vegetables': {
    title: 'Salmón Teriyaki con Verduras en Bandeja',
    description:
      'Salmón teriyaki con brócoli y camote en una sola bandeja. Una cena sin complicaciones que te da 4 porciones perfectas ricas en omega-3.',
    ingredients: [
      '4 filetes de salmón (6 oz cada uno)',
      '2 camotes grandes, cortados en cubos (de 3/4 de pulgada)',
      '4 cups de floretes de brócoli',
      '2 tbsp de aceite de aguacate',
      '1/4 cup de salsa de soya (o tamari sin gluten)',
      '2 tbsp de miel',
      '1 tbsp de vinagre de arroz',
      '1 tbsp de aceite de sésamo',
      '2 dientes de ajo, picados',
      '1 tsp de jengibre fresco, rallado',
      '1 tbsp de semillas de sésamo',
      '2 cebollines, cortados en rodajas',
    ],
    instructions: [
      'Precalentar el horno a 400°F. Forrar una bandeja grande con papel aluminio y rociar con aceite en aerosol.',
      'Mezclar los cubos de camote con 1 tbsp de aceite de aguacate y distribuir en la bandeja. Hornear durante 10 minutos.',
      'Mientras se hornean los camotes, batir la salsa de soya, la miel, el vinagre de arroz, el aceite de sésamo, el ajo y el jengibre para preparar el glaseado teriyaki.',
      'Retirar la bandeja, empujar los camotes hacia los lados. Colocar los filetes de salmón en el centro y agregar el brócoli alrededor. Rociar el brócoli con el aceite de aguacate restante.',
      'Untar la mitad del glaseado teriyaki sobre el salmón.',
      'Regresar al horno y hornear 12-15 minutos hasta que el salmón se desmenuce fácilmente y alcance 145°F.',
      'Rociar el glaseado restante sobre todo. Decorar con semillas de sésamo y cebollines.',
      'Dividir en 4 recipientes con un filete de salmón, camotes y brócoli en cada uno.',
    ],
    tips: [
      'Usar papel pergamino en lugar de aluminio para una limpieza más fácil.',
      'Cortar los camotes de forma uniforme para que se cocinen parejo.',
      'Reservar salsa teriyaki extra aparte — queda genial al rociarla al recalentar.',
    ],
    storageInstructions:
      'Refrigerar en recipientes sellados hasta por 4 días. El salmón queda mejor si se consume dentro de los primeros 3 días.',
    reheatingInstructions:
      'Calentar en el microondas durante 90 segundos a 70% de potencia para evitar que el salmón se reseque. También se puede recalentar en el horno a 350°F por 8-10 minutos.',
    imageAlt:
      'Bandeja de horno con filetes de salmón glaseados con teriyaki rodeados de brócoli asado y cubos de camote con semillas de sésamo',
  },

  'crockpot-chicken-burrito-bowls': {
    title: 'Bowls de Burrito de Pollo en Olla de Cocción Lenta',
    description:
      'Pollo con salsa que se prepara solo, acompañado de arroz con cilantro y limón y frijoles negros. Pon 5 ingredientes por la mañana y prepara los bowls a la hora de la cena.',
    ingredients: [
      '2.5 lbs de pechugas de pollo deshuesadas y sin piel',
      '1 frasco (16 oz) de salsa verde o salsa roja',
      '1 sobre de sazonador para tacos',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '1 lata (15 oz) de maíz, escurrido',
      '3 cups de arroz blanco o integral cocido',
      '2 limones',
      '1/4 cup de cilantro fresco, picado',
      'Toppings: queso rallado, crema agria, aguacate, pico de gallo',
    ],
    instructions: [
      'Colocar las pechugas de pollo en la olla de cocción lenta. Verter la salsa sobre el pollo y espolvorear el sazonador para tacos encima.',
      'Cocinar en LOW durante 6-8 horas o en HIGH durante 3-4 horas hasta que el pollo se deshebra fácilmente.',
      'Deshebrar el pollo con dos tenedores directamente en la olla. Mezclar para cubrir con la salsa.',
      'Cocinar el arroz según las instrucciones del paquete. Una vez listo, mezclar con jugo de limón y cilantro picado.',
      'Calentar los frijoles negros y el maíz en una olla pequeña o en el microondas.',
      'Armar los bowls: arroz con cilantro y limón en la base, luego frijoles negros, maíz y pollo deshebrado con salsa encima.',
    ],
    tips: [
      'Congelar el pollo deshebrado en porciones para armar cenas rápidas entre semana.',
      'Se pueden usar pechugas congeladas — solo agregar 1 hora más de cocción.',
      'Esta receta es muy versátil. Cambia los frijoles, agrega pimientos, usa cualquier salsa que te guste.',
    ],
    storageInstructions:
      'Guardar los bowls armados hasta por 5 días en la nevera. El pollo solo se congela bien hasta por 3 meses.',
    reheatingInstructions:
      'Calentar en el microondas durante 2-2.5 minutos. Agregar los toppings fríos (aguacate, crema agria) después de recalentar.',
    imageAlt:
      'Seis recipientes de meal prep con coloridos bowls de burrito: pollo deshebrado, arroz con cilantro y limón, frijoles negros, maíz y toppings frescos',
  },

  'freezer-friendly-breakfast-burritos': {
    title: 'Burritos de Desayuno para Congelar',
    description:
      'Prepara 12 burritos de desayuno llenos de proteína en 30 minutos. Saca uno del congelador cualquier mañana y tendrás un desayuno caliente y llenador en 2 minutos.',
    ingredients: [
      '12 tortillas grandes de harina (tamaño burrito)',
      '18 huevos grandes',
      '1 lb de salchicha para desayuno (o salchicha de pavo)',
      '2 cups de queso cheddar rallado',
      '1 lb de papas hash brown congeladas',
      '1 pimiento rojo, cortado en cubos',
      '1/2 cebolla, cortada en cubos',
      'Sal y pimienta al gusto',
      'Salsa picante (opcional)',
    ],
    instructions: [
      'Cocinar los hash browns en un sartén grande según las instrucciones del paquete hasta que estén crujientes. Reservar.',
      'En el mismo sartén, cocinar la salchicha a fuego medio-alto, desmenuzándola con una cuchara, hasta que esté dorada (8-10 min). Retirar y reservar.',
      'Saltear el pimiento y la cebolla en la grasa de la salchicha durante 3-4 minutos hasta que se ablanden.',
      'Batir los huevos con sal y pimienta. Verter en el sartén con las verduras y revolver hasta que estén apenas cuajados (no cocinarlos de más — se recalentarán después).',
      'Combinar los huevos, la salchicha y los hash browns en un bowl grande.',
      'Extender las tortillas. Repartir el relleno equitativamente (aproximadamente 1/2 cup por tortilla). Agregar un poco de queso a cada una.',
      'Doblar: la parte inferior hacia arriba, los lados hacia adentro, y luego enrollar firmemente. Envolver cada burrito individualmente en papel aluminio o film plástico.',
    ],
    tips: [
      'Cocinar los huevos ligeramente menos — terminarán de cocerse al recalentar.',
      'Dejar enfriar completamente los burritos antes de congelar para evitar cristales de hielo.',
      'Etiquetar los burritos con la fecha. Consumir dentro de 3 meses para la mejor calidad.',
      'Para bajo en carbohidratos: usar tortillas bajas en carbohidratos y omitir los hash browns.',
    ],
    storageInstructions:
      'Envolver individualmente en aluminio, luego colocar en una bolsa de congelador de galón. Congelar en posición plana hasta por 3 meses.',
    reheatingInstructions:
      'Retirar el aluminio. Envolver en una toalla de papel húmeda. Calentar en el microondas 2-2.5 minutos, volteando a la mitad. O descongelar en la nevera durante la noche y calentar en el microondas 60-90 segundos.',
    imageAlt:
      'Pila de burritos de desayuno envueltos en aluminio con uno cortado por la mitad mostrando huevos revueltos, salchicha, queso derretido y hash browns',
  },

  'budget-chicken-stir-fry-meal-prep': {
    title: 'Salteado de Pollo Económico para Meal Prep',
    description:
      'Aliméntate por menos de $2 por comida con este sencillo salteado de pollo. Arroz jazmín, verduras crujientes y una sabrosa salsa de soya y jengibre.',
    ingredients: [
      '2 lbs de pechuga de pollo, cortada en trozos de 1 pulgada',
      '1 bolsa (16 oz) de verduras para salteado congeladas',
      '3 cups de arroz jazmín cocido',
      '3 tbsp de salsa de soya',
      '1 tbsp de miel',
      '1 tbsp de vinagre de arroz',
      '2 tsp de aceite de sésamo',
      '1 tsp de maicena',
      '2 dientes de ajo, picados',
      '1 tsp de jengibre fresco, rallado (o 1/2 tsp de jengibre molido)',
      '1 tbsp de aceite vegetal',
      'Semillas de sésamo y cebollines para decorar',
    ],
    instructions: [
      'Cocinar el arroz jazmín según las instrucciones del paquete. Reservar.',
      'Preparar la salsa: batir la salsa de soya, la miel, el vinagre de arroz, el aceite de sésamo, la maicena, el ajo y el jengibre.',
      'Calentar el aceite vegetal en un sartén grande o wok a fuego alto hasta que humee.',
      'Agregar los trozos de pollo en una sola capa. No revolver durante 2 minutos para lograr un buen sellado. Luego revolver y cocinar hasta dorar (5-6 minutos en total). Retirar el pollo.',
      'Agregar las verduras congeladas al sartén caliente. Saltear durante 3-4 minutos hasta que estén calientes y ligeramente caramelizadas.',
      'Regresar el pollo al sartén. Verter la salsa sobre todo y mezclar durante 1-2 minutos hasta que la salsa espese y cubra uniformemente.',
      'Dividir el arroz y el salteado en 5 recipientes. Decorar con semillas de sésamo y cebollines.',
    ],
    tips: [
      'Las verduras congeladas para salteado son más baratas y igual de nutritivas que las frescas para esta receta.',
      'Comprar muslos de pollo en oferta para ahorrar aún más — funcionan muy bien aquí.',
      'Hacer el doble de salsa y guardarla en un frasco para la próxima semana.',
    ],
    storageInstructions:
      'Guardar en recipientes herméticos en la nevera hasta por 5 días.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Rociar unas gotas de agua sobre el arroz antes de recalentar para restaurar la humedad.',
    imageAlt:
      'Cinco recipientes de meal prep con salteado dorado de pollo sobre arroz jazmín blanco con verduras coloridas y semillas de sésamo',
  },

  'keto-egg-muffin-cups': {
    title: 'Muffins de Huevo Keto',
    description:
      'Desayuno keto listo para llevar en molde de muffins. Llenos de tocino, queso y espinacas — solo 2g de carbohidratos netos y 18g de proteína por muffin.',
    ingredients: [
      '12 huevos grandes',
      '6 tiras de tocino, cocido y desmenuzado',
      '1 cup de queso cheddar rallado',
      '2 cups de espinaca fresca, picada',
      '1/4 cup de pimiento morrón cortado en cubos',
      '2 tbsp de crema para batir',
      '1/2 tsp de ajo en polvo',
      '1/2 tsp de sal',
      '1/4 tsp de pimienta negra',
      'Aceite en aerosol',
    ],
    instructions: [
      'Precalentar el horno a 375°F. Rociar generosamente un molde de 12 muffins con aceite en aerosol.',
      'Cocinar el tocino hasta que esté crujiente. Desmenuzar y repartir equitativamente en los moldes.',
      'Agregar la espinaca picada y el pimiento morrón a cada molde.',
      'Batir los huevos con la crema, el ajo en polvo, la sal y la pimienta hasta que estén bien combinados.',
      'Verter la mezcla de huevo de manera uniforme en los moldes, llenándolos aproximadamente 3/4.',
      'Cubrir cada uno con queso cheddar rallado.',
      'Hornear 18-20 minutos hasta que los huevos estén cuajados y la superficie esté ligeramente dorada.',
      'Dejar enfriar en el molde durante 5 minutos antes de desmoldar.',
    ],
    tips: [
      'Usar moldes de silicona para desmoldar fácilmente y sin residuos pegados.',
      'Sustituir el tocino por salchicha de pavo o jamón para variar.',
      'Se congelan de maravilla — prepara el doble de la receta.',
    ],
    storageInstructions:
      'Refrigerar en un recipiente sellado hasta por 5 días, o congelar envueltos individualmente hasta por 2 meses.',
    reheatingInstructions:
      'Desde la nevera, calentar en el microondas 30-45 segundos. Desde congelado, calentar en el microondas 60-90 segundos.',
    imageAlt:
      'Muffins de huevo dorados en un molde con trocitos visibles de tocino, queso derretido y espinacas verdes',
  },

  'vegan-chickpea-curry-meal-prep': {
    title: 'Curry Vegano de Garbanzos para Meal Prep',
    description:
      'Cremoso curry de garbanzos con leche de coco y espinacas sobre arroz basmati. Rico en proteína vegetal y fibra — una preparación vegana satisfactoria por menos de $1.50 por porción.',
    ingredients: [
      '2 latas (15 oz cada una) de garbanzos, escurridos y enjuagados',
      '1 lata (14 oz) de leche de coco entera',
      '1 lata (14 oz) de tomates cortados en cubos',
      '2 cups de espinaca fresca',
      '1 cebolla grande, cortada en cubos',
      '3 dientes de ajo, picados',
      '1 tbsp de jengibre fresco, rallado',
      '2 tbsp de curry en polvo',
      '1 tsp de cúrcuma',
      '1 tsp de comino',
      '1/2 tsp de pimienta cayena (opcional)',
      '1 tbsp de aceite de oliva',
      'Sal al gusto',
      '3 cups de arroz basmati cocido',
      'Cilantro fresco y rodajas de limón para servir',
    ],
    instructions: [
      'Calentar el aceite de oliva en una olla grande a fuego medio. Saltear la cebolla durante 4-5 minutos hasta que esté traslúcida.',
      'Agregar el ajo y el jengibre. Cocinar 1 minuto hasta que estén fragantes.',
      'Agregar el curry en polvo, la cúrcuma, el comino y la cayena. Revolver durante 30 segundos para tostar las especias.',
      'Verter los tomates en cubos y la leche de coco. Mezclar bien.',
      'Agregar los garbanzos y llevar a fuego lento. Cocinar durante 15 minutos, revolviendo ocasionalmente, hasta que la salsa espese.',
      'Incorporar las espinacas y cocinar 2 minutos hasta que se marchiten. Sazonar con sal.',
      'Repartir el arroz basmati y el curry en 5 recipientes. Decorar con cilantro.',
    ],
    tips: [
      'Duplicar la receta del curry y congelar la mitad — en realidad sabe mejor después de que los sabores se integren.',
      'Agregar una cucharada de mantequilla de maní para más cremosidad y proteína.',
      'Cambiar los garbanzos por lentejas o frijoles blancos para variar.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días. El curry se congela bien hasta por 3 meses (congelar sin el arroz).',
    reheatingInstructions:
      'Calentar en el microondas durante 2-2.5 minutos, revolviendo a la mitad. Agregar un chorrito de agua o leche de coco si el curry ha espesado mucho.',
    imageAlt:
      'Cremoso curry dorado de garbanzos con espinacas marchitas servido sobre arroz basmati blanco y esponjoso en recipientes de meal prep',
  },

  'air-fryer-turkey-meatballs-sweet-potato': {
    title: 'Albóndigas de Pavo en Air Fryer con Camote',
    description:
      'Jugosas albóndigas italianas de pavo en air fryer en 12 minutos con camote asado. Alta en proteína, sin complicaciones — un básico del meal prep.',
    ingredients: [
      '2 lbs de pavo molido (93% magro)',
      '1/2 cup de harina de almendra (o pan rallado)',
      '1 huevo',
      '2 dientes de ajo, picados',
      '1 tsp de sazonador italiano',
      '1/2 tsp de cebolla en polvo',
      '1/2 tsp de sal',
      '1/4 tsp de hojuelas de chile rojo',
      '2 camotes grandes, cortados en cubos',
      '1 tbsp de aceite de oliva',
      '4 cups de brócoli al vapor',
      '1/2 cup de salsa marinara (opcional)',
    ],
    instructions: [
      'En un bowl grande, combinar el pavo molido, la harina de almendra, el huevo, el ajo, el sazonador italiano, la cebolla en polvo, la sal y las hojuelas de chile rojo. Mezclar hasta que se integre.',
      'Formar 20 albóndigas (de aproximadamente 1.5 pulgadas cada una).',
      'Precalentar el air fryer a 380°F. Rociar la canasta con aceite en aerosol.',
      'Cocinar las albóndigas en tandas (sin amontonar) durante 10-12 minutos, agitando la canasta a la mitad, hasta que la temperatura interna alcance 165°F.',
      'Mientras se cocinan las albóndigas, mezclar los cubos de camote con aceite de oliva y cocinar en el microondas 5-6 minutos hasta que estén tiernos, o asar a 400°F durante 20 minutos.',
      'Cocinar el brócoli al vapor hasta que esté verde brillante y tierno-crujiente (3-4 minutos).',
      'Dividir en 5 recipientes: 4 albóndigas, camote y brócoli por porción. Agregar la marinara aparte si se desea.',
    ],
    tips: [
      'No mezclar demasiado la masa de las albóndigas — eso las pone duras.',
      'Cocinar el doble y congelar la mitad de las albóndigas antes de freírlas en el air fryer. Cocinar directamente de congeladas, agregando 3-4 minutos.',
      'La harina de almendra mantiene estas albóndigas naturalmente más bajas en carbohidratos que el pan rallado.',
    ],
    storageInstructions:
      'Guardar en recipientes herméticos hasta por 5 días en la nevera. Las albóndigas crudas se congelan bien hasta por 3 meses.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Para mejor textura, recalentar las albóndigas en el air fryer a 350°F por 4 minutos.',
    imageAlt:
      'Albóndigas doradas de pavo hechas en air fryer en recipientes de meal prep junto a cubos de camote anaranjado y brócoli verde brillante',
  },

  'no-cook-mediterranean-wrap-boxes': {
    title: 'Wraps Mediterráneos Sin Cocción',
    description:
      'Sin cocina, sin excusas. Wraps de hummus con verduras frescas, queso feta y aceitunas. Arma 5 días de almuerzos en 15 minutos exactos.',
    ingredients: [
      '5 wraps grandes de trigo integral (o de espinaca)',
      '1 recipiente (10 oz) de hummus clásico',
      '1 pepino inglés, cortado en tiras',
      '2 cups de mezcla de lechugas verdes',
      '1 pinta de tomates cherry, cortados por la mitad',
      '1/2 cup de aceitunas kalamata, rebanadas',
      '1/2 cup de queso feta desmenuzado',
      '1/4 de cebolla morada, cortada en rodajas finas',
      '5 pepperoncini (chiles en escabeche)',
      '2 tbsp de aceite de oliva',
      '1 tbsp de vinagre de vino tinto',
      'Orégano seco, sal, pimienta',
    ],
    instructions: [
      'En un bowl pequeño, batir el aceite de oliva, el vinagre de vino tinto, el orégano, la sal y la pimienta para hacer un aderezo rápido.',
      'Extender los 5 wraps sobre una superficie limpia.',
      'Untar 2-3 cucharadas de hummus en el centro de cada wrap.',
      'Agregar capas de mezcla de lechugas, tiras de pepino, tomates cherry, aceitunas, cebolla morada y queso feta sobre cada wrap.',
      'Rociar ligeramente con el aderezo.',
      'Enrollar firmemente: doblar la parte inferior hacia arriba, luego los lados hacia adentro y enrollar hacia adelante.',
      'Cortar cada wrap por la mitad en diagonal. Colocar en recipientes con un pepperoncini al lado.',
    ],
    tips: [
      'Envolver firmemente en aluminio o papel pergamino antes de guardar para mantener la forma.',
      'Guardar el aderezo por separado si prefieres los wraps menos húmedos.',
      'Agregar pollo rostizado para un aporte fácil de 15g extra de proteína.',
    ],
    storageInstructions:
      'Envolver firmemente en aluminio. Guardar en la nevera hasta por 4 días. Se consumen mejor dentro de los primeros 3 días.',
    imageAlt:
      'Coloridos wraps mediterráneos cortados por la mitad mostrando capas de hummus, verduras frescas, queso feta y aceitunas, dispuestos en recipientes transparentes',
  },

  'sunday-prep-honey-garlic-chicken-rice': {
    title: 'Preparación Dominical: Pollo con Miel y Ajo con Arroz',
    description:
      'La receta definitiva para empezar tu meal prep del domingo. Muslos de pollo glaseados con miel y ajo con arroz jazmín y ejotes asados en 40 minutos.',
    ingredients: [
      '2.5 lbs de muslos de pollo con hueso (con piel opcional)',
      '1/4 cup de miel',
      '3 tbsp de salsa de soya',
      '2 tbsp de kétchup',
      '4 dientes de ajo, picados',
      '1 tbsp de aceite de oliva',
      '1 tsp de sriracha (opcional)',
      '3 cups de arroz jazmín cocido',
      '1 lb de ejotes, con las puntas cortadas',
      '1 tbsp de aceite de oliva para los ejotes',
      'Sal, pimienta, ajo en polvo para los ejotes',
    ],
    instructions: [
      'Precalentar el horno a 425°F.',
      'Batir la miel, la salsa de soya, el kétchup, el ajo, el aceite de oliva y la sriracha.',
      'Colocar los muslos de pollo en una bandeja forrada. Verter la mitad de la salsa sobre el pollo.',
      'En una segunda bandeja (o alrededor del pollo), mezclar los ejotes con aceite de oliva, sal, pimienta y ajo en polvo.',
      'Hornear ambas bandejas durante 25-30 minutos. Barnizar el pollo con la salsa restante a los 15 minutos.',
      'Arroz: cocinar según las instrucciones del paquete y esponjar.',
      'Dejar reposar el pollo 5 minutos, luego repartir en 5 recipientes con arroz y ejotes. Agregar los jugos de la bandeja sobre el pollo.',
    ],
    tips: [
      'Los muslos con hueso dan el mejor sabor, pero los deshuesados reducen 10 minutos de cocción.',
      'Preparar salsa extra — se conserva en la nevera por 2 semanas y funciona con cerdo, tofu o salmón.',
      'Esta es la "receta de entrada" para principiantes del meal prep. Simple, flexible y le gusta a todos.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días en recipientes herméticos.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Rociar un poco de agua sobre el arroz antes de recalentar.',
    imageAlt:
      'Muslos de pollo brillantes con glaseado de miel y ajo sobre arroz jazmín blanco con ejotes asados en recipientes de vidrio para meal prep',
  },

  // ─── MEAL-PREP HUB RECIPES (Phase 7 — 10 more) ───────────────────

  'instant-pot-chicken-burrito-bowls': {
    title: 'Bowls de Burrito de Pollo en Instant Pot',
    description:
      'Pollo perfectamente sazonado en Instant Pot con arroz de cilantro y limón, frijoles negros y maíz. Un meal prep sin gluten en menos de 30 minutos.',
    ingredients: [
      '2 lbs de pechugas de pollo deshuesadas y sin piel',
      '1 cup de arroz blanco de grano largo',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '1 cup de granos de maíz congelados',
      '1 cup de caldo de pollo',
      '1 frasco (16 oz) de salsa verde',
      '1 sobre de sazonador para tacos',
      '2 limones, exprimidos',
      '1/4 cup de cilantro fresco, picado',
      '1 aguacate, cortado en cubos',
      '1/2 cup de mezcla de quesos mexicanos rallados',
      'Crema agria para decorar (opcional)',
    ],
    instructions: [
      'Colocar las pechugas de pollo en el Instant Pot. Verter la salsa verde por encima y espolvorear el sazonador para tacos de manera uniforme.',
      'Cerrar la tapa, colocar la válvula en sellado y cocinar en Alta Presión durante 12 minutos.',
      'Mientras se cocina el pollo, preparar el arroz con cilantro y limón: cocinar el arroz según las instrucciones del paquete, luego mezclar con jugo de limón y cilantro picado.',
      'Hacer liberación rápida de presión. Deshebrar el pollo con dos tenedores directamente en la olla y mezclar para cubrir.',
      'Calentar los frijoles negros y el maíz en el microondas durante 2 minutos.',
      'Armar los bowls: base de arroz con cilantro y limón, pollo deshebrado, frijoles negros, maíz, aguacate en cubos, queso y una cucharada de crema agria.',
    ],
    tips: [
      'Se pueden usar pechugas congeladas — solo agregar 5 minutos al tiempo de cocción.',
      'El método de liberación natural mantiene el pollo aún más jugoso (esperar 10 min antes de la liberación rápida).',
      'Preparar una gran cantidad de arroz con cilantro y limón y congelarlo en porciones para futuros meal preps.',
    ],
    storageInstructions:
      'Guardar en recipientes herméticos hasta por 5 días. Mantener el aguacate por separado y agregarlo fresco.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Agregar el aguacate fresco y un chorrito de limón después de recalentar.',
    imageAlt:
      'Seis recipientes de meal prep con bowls de burrito de pollo en Instant Pot: pollo deshebrado, arroz con cilantro y limón, frijoles negros, maíz y aguacate',
  },

  'no-cook-greek-salad-jars': {
    title: 'Ensalada Griega en Frascos Sin Cocción',
    description:
      'Capas de verduras frescas, queso feta y aderezo griego casero en frascos mason para almuerzos listos para llevar. Sin cocción, 10 minutos de preparación en total.',
    ingredients: [
      '5 frascos mason de boca ancha (32 oz)',
      '1/3 cup de aceite de oliva extra virgen',
      '3 tbsp de vinagre de vino tinto',
      '1 tsp de orégano seco',
      '1 diente de ajo, picado',
      'Sal y pimienta al gusto',
      '2 pepinos ingleses, cortados en cubos',
      '2 pintas de tomates cherry, cortados por la mitad',
      '1 lata (15 oz) de garbanzos, escurridos y enjuagados',
      '1/2 cebolla morada, cortada en rodajas finas',
      '1 cup de aceitunas kalamata, cortadas por la mitad',
      '8 oz de queso feta desmenuzado',
      '5 cups de lechuga romana picada',
    ],
    instructions: [
      'Preparar el aderezo griego: batir el aceite de oliva, el vinagre de vino tinto, el orégano, el ajo, la sal y la pimienta.',
      'Verter 2 cucharadas de aderezo en el fondo de cada frasco mason.',
      'Agregar las capas en orden (de húmedo a seco): garbanzos, pepinos, tomates, cebolla morada, aceitunas, queso feta.',
      'Colocar la lechuga romana encima, presionando suavemente para llenar el frasco.',
      'Sellar firmemente y guardar en posición vertical en la nevera.',
      'Para comer: agitar el frasco para distribuir el aderezo, luego verter en un bowl o comer directamente del frasco.',
    ],
    tips: [
      'Siempre poner el aderezo en el fondo y la lechuga arriba — esto mantiene todo crujiente por días.',
      'Agregar pollo a la parrilla o atún en lata para un aporte de proteína (20g+ extra).',
      'Los frascos de boca ancha son esenciales — los de boca regular son imposibles de armar y comer.',
    ],
    storageInstructions:
      'Guardar en posición vertical en la nevera hasta por 5 días. No congelar.',
    imageAlt:
      'Cinco ensaladas en frascos mason con capas de aderezo griego, verduras coloridas, garbanzos, queso feta y lechuga romana crujiente',
  },

  'sheet-pan-sausage-and-veggies': {
    title: 'Salchicha con Verduras en Bandeja',
    description:
      'Salchicha ahumada con pimientos, cebollas y papas asadas en una sola bandeja. Limpieza mínima, máximo sabor para una cena simple de meal prep.',
    ingredients: [
      '1.5 lbs de salchicha ahumada (kielbasa o andouille), cortada en rodajas de 1 pulgada',
      '3 pimientos medianos (colores variados), cortados en trozos',
      '1 cebolla morada grande, cortada en gajos',
      '1.5 lbs de papas cambray, cortadas por la mitad',
      '2 cups de floretes de brócoli',
      '3 tbsp de aceite de oliva',
      '1 tsp de pimentón ahumado',
      '1 tsp de ajo en polvo',
      '1/2 tsp de sazonador italiano',
      '1 tsp de sal',
      '1/2 tsp de pimienta negra',
    ],
    instructions: [
      'Precalentar el horno a 425°F. Forrar dos bandejas grandes con papel pergamino.',
      'Mezclar las papas cambray cortadas por la mitad con 1 tbsp de aceite de oliva, sal y pimienta. Distribuir en la primera bandeja y asar durante 10 minutos.',
      'Mientras tanto, mezclar la salchicha, los pimientos, la cebolla y el brócoli con el aceite de oliva restante, el pimentón, el ajo en polvo y el sazonador italiano.',
      'Después de 10 minutos, agregar la mezcla de salchicha y verduras a la bandeja (o a la segunda bandeja). Regresar al horno.',
      'Asar 15 minutos más, revolviendo a la mitad, hasta que la salchicha esté dorada y las papas estén crujientes.',
      'Dividir equitativamente en 5 recipientes de meal prep.',
    ],
    tips: [
      'Usar salchicha precocida como kielbasa — solo necesita dorarse, ahorrando tiempo de cocción.',
      'Cambiar las verduras según lo que esté en oferta: calabacín, ejotes y coles de Bruselas también funcionan.',
      'Rociar un poco de vinagre balsámico antes de servir para un toque extra de sabor.',
    ],
    storageInstructions:
      'Guardar en recipientes herméticos en la nevera hasta por 5 días.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Para resultados más crujientes, recalentar en el horno a 375°F por 8 minutos.',
    imageAlt:
      'Bandeja de horno llena de rodajas doradas de salchicha, pimientos asados de colores, gajos de cebolla morada, papas cambray doradas y brócoli',
  },

  'freezer-breakfast-sandwiches': {
    title: 'Sándwiches de Desayuno para Congelar',
    description:
      'Prepara 12 sándwiches de desayuno con huevo, queso y salchicha de pavo. Congela y luego calienta en el microondas para un desayuno caliente en 90 segundos.',
    ingredients: [
      '12 muffins ingleses, partidos por la mitad',
      '12 huevos grandes',
      '12 rebanadas de queso cheddar o americano',
      '12 tortitas de salchicha de pavo (o salchicha de cerdo regular)',
      '2 tbsp de mantequilla',
      'Sal y pimienta al gusto',
      'Aceite en aerosol',
    ],
    instructions: [
      'Precalentar el horno a 350°F. Rociar un molde de 9x13 con aceite en aerosol.',
      'Batir los 12 huevos con sal y pimienta. Verter en el molde.',
      'Hornear durante 15 minutos hasta que los huevos estén completamente cuajados. Dejar enfriar ligeramente y cortar en 12 cuadrados.',
      'Mientras los huevos se hornean, cocinar las tortitas de salchicha de pavo en un sartén hasta que estén doradas por ambos lados (unos 3 min por lado).',
      'Tostar ligeramente los muffins ingleses.',
      'Armar cada sándwich: mitad inferior del muffin, cuadrado de huevo, tortita de salchicha, rebanada de queso, mitad superior del muffin.',
      'Dejar enfriar completamente. Envolver cada sándwich firmemente en aluminio o film plástico.',
    ],
    tips: [
      'Hornear los huevos en un molde es el secreto para hacer 12 tortillas de huevo perfectamente planas de una vez.',
      'Dejar los sándwiches enfriar al 100% antes de congelar — esto evita cristales de hielo y pan húmedo.',
      'Sustituir los muffins ingleses por croissants, bagels o wraps bajos en carbohidratos para variar.',
    ],
    storageInstructions:
      'Envolver individualmente en aluminio, colocar en una bolsa de congelador. Congelar hasta por 2 meses.',
    reheatingInstructions:
      'Retirar el aluminio. Envolver en una toalla de papel y calentar en el microondas durante 90 segundos desde congelado, volteando a la mitad.',
    imageAlt:
      'Pila de sándwiches de desayuno para congelar en muffins ingleses con huevo, queso derretido y salchicha de pavo, uno cortado por la mitad mostrando las capas',
  },

  'crockpot-pulled-pork': {
    title: 'Cerdo Deshebrado en Olla de Cocción Lenta',
    description:
      'Cerdo tierno que se deshace, con salsa BBQ ahumada. Déjalo cocinarse 8 horas sin preocuparte. Perfecto para bowls de meal prep, tacos o sándwiches.',
    ingredients: [
      '4 lbs de paleta de cerdo con hueso (Boston butt)',
      '1 cup de salsa BBQ (tu marca favorita)',
      '1/2 cup de vinagre de sidra de manzana',
      '1/4 cup de azúcar morena',
      '2 tbsp de pimentón ahumado',
      '1 tbsp de ajo en polvo',
      '1 tbsp de cebolla en polvo',
      '1 tsp de comino',
      '1 tsp de sal',
      '1/2 tsp de pimienta cayena',
      '1 cup de caldo de pollo',
      '10 panes de hamburguesa o bollos',
      'Ensalada coleslaw para decorar (opcional)',
    ],
    instructions: [
      'Mezclar el pimentón ahumado, el ajo en polvo, la cebolla en polvo, el comino, la sal y la cayena para hacer un adobo seco.',
      'Secar la paleta de cerdo con toallas de papel y cubrir generosamente con el adobo por todos los lados.',
      'Colocar la carne en la olla de cocción lenta. Verter el caldo de pollo, el vinagre de sidra y el azúcar morena alrededor.',
      'Cocinar en LOW durante 8-10 horas o HIGH durante 5-6 horas hasta que la carne esté tierna y se deshaga con un tenedor.',
      'Retirar la carne y deshebrar con dos tenedores, descartando el hueso y el exceso de grasa.',
      'Regresar la carne deshebrada a la olla. Agregar la salsa BBQ y mezclar. Cocinar 15 minutos más.',
      'Servir en los panes con coleslaw, o repartir en recipientes para la semana.',
    ],
    tips: [
      'Cocción lenta y prolongada es la clave — resiste la tentación de apurar. 8 horas en LOW siempre gana a 5 horas en HIGH.',
      'Esta receta rinde MUCHO. Congela la mitad en bolsas porcionadas para un meal prep instantáneo en el futuro.',
      'Usa la carne deshebrada para tacos, nachos, quesadillas, papas al horno rellenas o bowls de arroz durante toda la semana.',
    ],
    storageInstructions:
      'Refrigerar en recipientes herméticos hasta por 5 días. Congelar en bolsas porcionadas hasta por 3 meses.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos con un chorrito de caldo o salsa BBQ para mantenerlo jugoso.',
    imageAlt:
      'Olla de cocción lenta llena de cerdo deshebrado tierno en salsa BBQ ahumada, con sándwiches de cerdo deshebrado servidos al lado',
  },

  'one-pan-pasta-primavera': {
    title: 'Pasta Primavera en Un Solo Sartén',
    description:
      'Cremosa pasta vegetariana llena de verduras de temporada, todo cocinado en un solo sartén. Una cena reconfortante de meal prep lista en 25 minutos.',
    ingredients: [
      '1 lb de pasta penne',
      '2 cups de floretes de brócoli',
      '1 calabacín grande, cortado en medias lunas',
      '1 pimiento rojo, cortado en cubos',
      '1 cup de tomates cherry, cortados por la mitad',
      '3 dientes de ajo, picados',
      '2 tbsp de aceite de oliva',
      '1 cup de crema para batir (o media crema)',
      '1/2 cup de queso parmesano rallado',
      '1 tsp de sazonador italiano',
      '1/2 tsp de hojuelas de chile rojo',
      'Sal y pimienta al gusto',
      'Albahaca fresca para decorar',
    ],
    instructions: [
      'Cocinar la pasta penne en una olla grande con agua salada hirviendo hasta que esté al dente. Reservar 1 cup del agua de cocción antes de escurrir.',
      'En la misma olla, calentar el aceite de oliva a fuego medio. Saltear el ajo 30 segundos hasta que esté fragante.',
      'Agregar el brócoli, el calabacín y el pimiento. Cocinar 5 minutos hasta que estén tiernos pero crujientes.',
      'Agregar los tomates cherry, el sazonador italiano y las hojuelas de chile rojo. Cocinar 2 minutos más.',
      'Verter la crema y 1/2 cup del agua reservada de la pasta. Mezclar y dejar hervir a fuego lento durante 2 minutos.',
      'Regresar la pasta a la olla. Agregar el parmesano y mezclar todo. Agregar más agua de pasta si es necesario para la consistencia.',
      'Sazonar con sal y pimienta. Dividir en 5 recipientes y decorar con albahaca fresca.',
    ],
    tips: [
      'Reserva esa agua de pasta — el almidón es oro líquido para hacer salsas cremosas.',
      'Usa cualquier verdura de temporada que tengas: espárragos, chícharos chinos y champiñones también quedan excelentes.',
      'Para versión vegana: sustituir la crema por crema de anacardos y el parmesano por levadura nutricional.',
    ],
    storageInstructions:
      'Guardar en recipientes herméticos hasta por 4 días. La pasta absorbe la salsa durante la noche, así que agrega un chorrito de agua al recalentar.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos, agregando una cucharada de agua para restaurar la cremosidad.',
    imageAlt:
      'Cremosa pasta penne primavera con brócoli, calabacín, pimientos rojos y tomates cherry coloridos en un sartén grande, coronada con parmesano y albahaca',
  },

  'budget-ground-turkey-taco-meat': {
    title: 'Carne de Taco de Pavo Molido Económica',
    description:
      'Pavo molido sazonado para tacos por menos de $1.50 por porción. Prepara una gran cantidad y úsala toda la semana para tacos, bowls, nachos y más.',
    ingredients: [
      '2 lbs de pavo molido (93% magro)',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '1 lata (15 oz) de tomates en cubos con chiles verdes',
      '2 tbsp de chile en polvo',
      '1 tbsp de comino',
      '1 tsp de ajo en polvo',
      '1 tsp de cebolla en polvo',
      '1/2 tsp de pimentón ahumado',
      '1/2 tsp de sal',
      '1/4 tsp de pimienta cayena (opcional)',
      '1/2 cup de agua',
      'Tortillas para tacos, arroz o lechuga para servir',
    ],
    instructions: [
      'Calentar un sartén grande a fuego medio-alto. Agregar el pavo molido y desmenuzar con una cuchara de madera.',
      'Cocinar durante 6-8 minutos hasta que ya no esté rosado, escurriendo cualquier exceso de líquido.',
      'Agregar el chile en polvo, el comino, el ajo en polvo, la cebolla en polvo, el pimentón ahumado, la sal y la cayena. Revolver para cubrir la carne.',
      'Verter los tomates en cubos con chiles verdes y el agua. Mezclar bien.',
      'Agregar los frijoles negros y revolver para combinar.',
      'Reducir el fuego a medio-bajo y cocinar a fuego lento 8-10 minutos hasta que la salsa espese.',
      'Dividir en 8 porciones. Usar durante toda la semana para tacos, bowls de burrito, nachos, pimientos rellenos o en ensaladas.',
    ],
    tips: [
      'Esta receta cuesta aproximadamente $1.25-$1.50 por porción — uno de los meal preps altos en proteína más baratos que puedes preparar.',
      'El pavo molido suele estar en oferta en supermercados. Compra de más y congela crudo.',
      'Duplica la receta — la carne de taco cocida se congela perfectamente y se descongela en minutos.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días. Congelar en bolsas porcionadas hasta por 3 meses.',
    reheatingInstructions:
      'Calentar en el microondas durante 90 segundos, revolviendo a la mitad. Agregar un chorrito de agua si la carne se ve seca.',
    imageAlt:
      'Sartén grande lleno de carne de taco de pavo molido sazonada con frijoles negros y tomates en cubos, servido con tortillas para tacos y rodajas de limón',
  },

  'air-fryer-salmon-bites': {
    title: 'Bocados de Salmón en Air Fryer',
    description:
      'Crujientes bocados de salmón sazonados en air fryer en 10 minutos. Un meal prep saludable rico en omega-3 con sabor de restaurante hecho en casa.',
    ingredients: [
      '1.5 lbs de filetes de salmón fresco, sin piel, cortados en cubos de 1 pulgada',
      '2 tbsp de aceite de oliva',
      '1 tbsp de salsa de soya',
      '1 tsp de pimentón ahumado',
      '1 tsp de ajo en polvo',
      '1/2 tsp de cebolla en polvo',
      '1/2 tsp de pimienta negra',
      '1 limón, cortado en gajos',
      '2 cups de arroz integral cocido',
      '2 cups de espárragos al vapor',
      'Salsa tártara o salsa de yogur con eneldo y limón para mojar',
    ],
    instructions: [
      'Cortar el salmón en cubos de 1 pulgada, retirando cualquier espina.',
      'En un bowl, mezclar suavemente los cubos de salmón con aceite de oliva, salsa de soya, pimentón ahumado, ajo en polvo, cebolla en polvo y pimienta negra.',
      'Precalentar el air fryer a 400°F.',
      'Colocar los bocados de salmón en una sola capa en la canasta del air fryer — no amontonar.',
      'Cocinar en el air fryer durante 8-10 minutos, agitando la canasta a la mitad, hasta que estén dorados y se desmenucen fácilmente.',
      'Servir con arroz integral, espárragos al vapor y gajos de limón. Agregar la salsa para mojar al lado.',
    ],
    tips: [
      'Secar el salmón completamente antes de sazonar — la humedad es el enemigo de lo crujiente.',
      'El salmón con piel también funciona, solo colocarlo con la piel hacia abajo y se despega fácilmente después de la cocción.',
      'Preparar una salsa rápida para mojar: mezclar yogur griego, jugo de limón, eneldo, sal y un toque de ajo.',
    ],
    storageInstructions:
      'Guardar los bocados de salmón en la nevera hasta por 3 días. Se comen mejor dentro de los primeros 2 días para la textura óptima.',
    reheatingInstructions:
      'Recalentar en el air fryer a 350°F por 3-4 minutos. Evitar el microondas — deja el salmón gomoso.',
    imageAlt:
      'Bocados dorados y crujientes de salmón en air fryer dispuestos en un plato con gajos de limón, espárragos al vapor y arroz integral',
  },

  'microwave-egg-cups': {
    title: 'Huevos en Taza de Microondas',
    description:
      'Huevos individuales preparados en una taza usando solo el microondas. Listos en 3 minutos exactos — el desayuno alto en proteína más rápido que existe.',
    ingredients: [
      '2 huevos grandes',
      '2 tbsp de queso cheddar rallado',
      '2 tbsp de pimiento morrón cortado en cubos',
      '1 tbsp de cebolla cortada en cubos',
      '1 rebanada de jamón de deli, cortada en cubos (o 2 rebanadas de tocino de pavo, desmenuzado)',
      '1 tbsp de leche',
      'Sal y pimienta al gusto',
      'Aceite en aerosol',
    ],
    instructions: [
      'Rociar generosamente una taza apta para microondas con aceite en aerosol.',
      'Romper 2 huevos en la taza y agregar la leche. Batir con un tenedor hasta que quede homogéneo.',
      'Agregar el pimiento, la cebolla, el jamón, la sal y la pimienta. Mezclar para combinar.',
      'Calentar en el microondas en HIGH durante 60 segundos. Revolver con un tenedor.',
      'Calentar en el microondas otros 30-60 segundos hasta que los huevos estén completamente cuajados.',
      'Cubrir con queso cheddar rallado y dejar que se derrita durante 30 segundos.',
    ],
    tips: [
      'Rociar MUY BIEN la taza o pasarás 20 minutos tallando huevo pegado.',
      'Preparar los ingredientes con anticipación — cortar las verduras y porcionarlas en recipientes pequeños para la semana.',
      'Esta receta se puede escalar: usar un bowl más grande apto para microondas con 4 huevos si quieres una porción mayor.',
    ],
    storageInstructions:
      'Se prepara mejor fresco. Los ingredientes cortados se pueden guardar en la nevera por 5 días.',
    reheatingInstructions:
      'Se prepara fresco cada vez — el tiempo de cocción es solo de 2-3 minutos.',
    imageAlt:
      'Una taza apta para microondas llena de huevos revueltos esponjosos, pimientos picados, jamón y queso cheddar derretido',
  },

  'grill-chicken-fajita-prep': {
    title: 'Fajitas de Pollo a la Parrilla para Meal Prep',
    description:
      'Fajitas de pollo ahumado a la parrilla con pimientos y cebollas caramelizados. Prepara toda la tanda en la parrilla en 20 minutos para recipientes de almuerzo fáciles.',
    ingredients: [
      '2 lbs de pechugas de pollo deshuesadas y sin piel',
      '3 pimientos grandes (colores variados), cortados en tiras',
      '2 cebollas grandes, cortadas en aros gruesos',
      '3 tbsp de aceite de oliva',
      '2 tbsp de sazonador para fajitas (o 1 tbsp de chile en polvo, 1 tsp de comino, 1 tsp de ajo en polvo, 1/2 tsp de pimentón ahumado)',
      '2 limones, exprimidos',
      '12 tortillas pequeñas de harina o maíz',
      'Toppings: salsa, crema agria, guacamole, queso rallado',
      '2 cups de arroz español cocido (opcional)',
    ],
    instructions: [
      'Mezclar el aceite de oliva, el sazonador para fajitas y el jugo de limón en un bowl. Reservar 2 tbsp para las verduras.',
      'Cubrir las pechugas de pollo de manera uniforme con el marinado. Dejar reposar al menos 10 minutos (o marinar toda la noche).',
      'Mezclar las tiras de pimiento y los aros de cebolla con el marinado reservado.',
      'Precalentar la parrilla a fuego medio-alto (400-450°F). Limpiar y aceitar las rejillas.',
      'Asar el pollo 5-7 minutos por lado hasta que la temperatura interna alcance 165°F. Dejar reposar 5 minutos y luego cortar en tiras.',
      'Asar los pimientos y las cebollas en una canasta para parrilla (o directamente sobre las rejillas) durante 8-10 minutos, volteando ocasionalmente.',
      'Dividir las tiras de pollo, los pimientos y las cebollas asadas en 6 recipientes. Agregar las tortillas y los toppings aparte.',
    ],
    tips: [
      'Aplanar el pollo a un grosor uniforme antes de asarlo — esto evita bordes secos y centro crudo.',
      'Usar una canasta para parrilla para las verduras — de lo contrario se caen entre las rejillas.',
      'Marinar toda la noche para máximo sabor. Incluso 30 minutos hacen una gran diferencia.',
    ],
    storageInstructions:
      'Guardar el pollo y las verduras en la nevera hasta por 5 días. Mantener las tortillas por separado.',
    reheatingInstructions:
      'Calentar el pollo y las verduras en el microondas durante 90 segundos. Calentar las tortillas aparte en el microondas durante 15 segundos.',
    imageAlt:
      'Tiras de pollo fajita a la parrilla con pimientos y cebollas caramelizados en recipientes de meal prep, con tortillas calientes al lado',
  },

  // ─── HIGH-PROTEIN HUB RECIPES (first 10) ─────────────────────────

  'high-protein-breakfast-burrito': {
    title: 'Burrito de Desayuno Alto en Proteína (50g de Proteína)',
    description:
      'Comienza tu día con 50g de proteína. Huevos revueltos, salchicha de pollo, frijoles negros y queso en una tortilla integral. Listo en 15 minutos.',
    ingredients: [
      '6 huevos grandes',
      '2 tortillas grandes de trigo integral',
      '4 salchichas de pollo (tipo Aidells), rebanadas',
      '1/2 cup de frijoles negros, escurridos',
      '1/2 cup de mezcla de quesos mexicanos rallados',
      '1/4 cup de salsa',
      '2 tbsp de yogur griego natural',
      'Sal, pimienta, ajo en polvo',
      'Salsa picante al gusto',
    ],
    instructions: [
      'Calentar un sartén a fuego medio. Cocinar las rodajas de salchicha de pollo durante 3-4 minutos hasta que estén doradas. Reservar.',
      'En el mismo sartén, revolver los huevos con sal, pimienta y ajo en polvo hasta que estén apenas cuajados (unos 2 minutos).',
      'Calentar las tortillas en el microondas durante 15 segundos.',
      'En cada tortilla colocar: huevos, salchicha, frijoles negros, queso, salsa y yogur griego.',
      'Doblar y enrollar firmemente. Cortar por la mitad si se desea.',
    ],
    tips: [
      'Agregar solo claras de huevo para aumentar la proteína sin mucha grasa adicional.',
      'Usar queso cottage en lugar de queso regular para aún más proteína.',
      'Envolver en aluminio para un desayuno para llevar.',
    ],
    storageInstructions:
      'Envolver individualmente en aluminio y refrigerar hasta por 3 días, o congelar por 2 meses.',
    reheatingInstructions:
      'Calentar en el microondas 90 segundos desde la nevera, 2.5 minutos desde congelado. Voltear a la mitad.',
    imageAlt:
      'Dos burritos grandes de desayuno cortados por la mitad mostrando huevos revueltos, salchicha de pollo dorada, frijoles negros y queso derretido',
  },

  'ground-beef-power-bowls': {
    title: 'Power Bowls de Carne Molida',
    description:
      'Bowl de carne molida estilo coreano con 44g de proteína por porción. Carne sazonada, verduras encurtidas y un huevo frito sobre arroz en 20 minutos.',
    ingredients: [
      '1.5 lbs de carne molida magra (90/10)',
      '3 cups de arroz blanco cocido',
      '4 huevos',
      '1/4 cup de salsa de soya',
      '2 tbsp de azúcar morena',
      '1 tbsp de aceite de sésamo',
      '3 dientes de ajo, picados',
      '1 tsp de jengibre fresco, rallado',
      '1 tsp de sriracha',
      '1 pepino inglés, en espiral o cortado en rodajas finas',
      '2 tbsp de vinagre de arroz',
      '1 tsp de azúcar',
      'Semillas de sésamo y cebollines para decorar',
    ],
    instructions: [
      'Encurtido rápido de pepino: mezclar el pepino rebanado con vinagre de arroz, azúcar y una pizca de sal. Reservar.',
      'Preparar la salsa: combinar la salsa de soya, el azúcar morena, el aceite de sésamo, el ajo, el jengibre y la sriracha.',
      'Cocinar la carne molida en un sartén grande a fuego alto, desmenuzándola, durante 6-8 minutos hasta que esté dorada. Escurrir el exceso de grasa.',
      'Verter la salsa sobre la carne y cocinar 2 minutos más hasta que esté glaseada.',
      'En un sartén aparte, freír 4 huevos al gusto (se recomiendan yemas líquidas).',
      'Dividir el arroz en 4 bowls. Cubrir con la carne, el pepino encurtido y un huevo frito. Decorar con semillas de sésamo y cebollines.',
    ],
    tips: [
      'Usar carne molida 93/7 para reducir más grasa sin sacrificar proteína.',
      'La salsa también funciona con pavo molido o tempeh desmenuzado.',
      'Para meal prep, guardar el huevo aparte y freírlo fresco al recalentar.',
    ],
    storageInstructions:
      'Guardar la carne y el arroz juntos hasta por 4 días. Mantener el pepino encurtido por separado.',
    reheatingInstructions:
      'Calentar la carne y el arroz en el microondas durante 2 minutos. Freír un huevo fresco para ponerlo encima.',
    imageAlt:
      'Power bowl de carne molida estilo coreano con arroz blanco, carne glaseada brillante, pepino encurtido y un huevo estrellado con yema líquida encima',
  },

  'protein-packed-air-fryer-chicken-thighs': {
    title: 'Muslos de Pollo en Air Fryer Llenos de Proteína',
    description:
      'Muslos de pollo con piel crujiente y jugosos por dentro, 48g de proteína por porción. Magia del air fryer en 22 minutos. Acompaña con cualquier guarnición baja en carbohidratos.',
    ingredients: [
      '8 muslos de pollo con hueso y piel (aproximadamente 3 lbs)',
      '1 tbsp de aceite de oliva',
      '1 tsp de pimentón ahumado',
      '1 tsp de ajo en polvo',
      '1 tsp de cebolla en polvo',
      '1/2 tsp de comino',
      '1/2 tsp de tomillo seco',
      '1 tsp de sal',
      '1/2 tsp de pimienta negra',
    ],
    instructions: [
      'Secar los muslos de pollo completamente con toallas de papel (es fundamental para una piel crujiente).',
      'Frotar con aceite de oliva, luego sazonar generosamente con todas las especias por ambos lados.',
      'Colocar los muslos de pollo con la piel hacia abajo en la canasta del air fryer. No encimar.',
      'Cocinar en el air fryer a 380°F durante 10 minutos.',
      'Voltear con la piel hacia arriba y cocinar otros 10-12 minutos hasta que la temperatura interna alcance 185°F y la piel esté dorada y crujiente.',
      'Dejar reposar 5 minutos antes de servir.',
    ],
    tips: [
      'La temperatura interna más alta (185°F en vez de 165°F) derrite más grasa de los muslos, haciéndolos increíblemente tiernos.',
      'Secar bien es el paso #1 más importante para lograr piel crujiente.',
      'Cocinar en tandas si es necesario — no llenar la canasta o la piel no quedará crujiente.',
    ],
    storageInstructions:
      'Refrigerar hasta por 4 días. Se recalienta mejor en el air fryer para recuperar lo crujiente.',
    reheatingInstructions:
      'Air fryer: 350°F por 5 minutos. Evitar el microondas — arruina la piel crujiente.',
    imageAlt:
      'Muslos de pollo dorados en air fryer con piel perfectamente crujiente dispuestos en un plato blanco con hierbas frescas',
  },

  'cottage-cheese-protein-pancakes': {
    title: 'Hotcakes de Proteína con Queso Cottage',
    description:
      'Esponjosos hotcakes de proteína hechos con queso cottage y avena — 35g de proteína por porción. Sin necesidad de proteína en polvo. Un básico del desayuno fitness.',
    ingredients: [
      '1 cup de queso cottage (2% o entero)',
      '1 cup de avena en hojuelas',
      '4 huevos grandes',
      '1 tsp de extracto de vainilla',
      '1 tsp de polvo para hornear',
      '1/2 tsp de canela',
      'Una pizca de sal',
      'Mantequilla o aceite en aerosol para el sartén',
      'Toppings: moras, yogur griego, miel de maple, mantequilla de nuez',
    ],
    instructions: [
      'Agregar el queso cottage, la avena, los huevos, la vainilla, el polvo para hornear, la canela y la sal a una licuadora.',
      'Licuar hasta que quede homogéneo (unos 30 segundos). Dejar reposar la mezcla 2 minutos.',
      'Calentar un sartén antiadherente o plancha a fuego medio-bajo. Engrasar ligeramente.',
      'Verter aproximadamente 1/4 cup de mezcla por hotcake. Cocinar hasta que se formen burbujas en la superficie y los bordes se vean cuajados (unos 2-3 minutos).',
      'Voltear con cuidado y cocinar 1-2 minutos más hasta que estén dorados.',
      'Apilar y servir con los toppings de tu preferencia.',
    ],
    tips: [
      'El fuego medio-bajo es clave — estos se queman más rápido que los hotcakes regulares por el contenido de proteína.',
      'El queso cottage entero hace hotcakes más esponjosos que el bajo en grasa.',
      'La mezcla se espesa conforme reposa. Agregar un chorrito de leche si haces una segunda tanda.',
    ],
    storageInstructions:
      'Guardar los hotcakes cocidos en la nevera por 3 días o congelar con papel pergamino entre las capas hasta por 2 meses.',
    reheatingInstructions:
      'Calentar en el microondas 30 segundos. El horno tostador funciona aún mejor — 2 minutos a 350°F.',
    imageAlt:
      'Pila de esponjosos hotcakes dorados de proteína coronados con arándanos frescos, una cucharada de yogur griego y un chorrito de miel de maple',
  },

  'vegan-lentil-bolognese-high-protein': {
    title: 'Boloñesa Vegana de Lentejas (25g de Proteína)',
    description:
      'Una abundante boloñesa a base de plantas con lentejas rojas y champiñones. Sabe como la original con 25g de proteína por porción. Nadie notará que es vegana.',
    ingredients: [
      '1.5 cups de lentejas rojas secas',
      '8 oz de champiñones cremini, cortados en cubos finos',
      '1 lata (28 oz) de tomates triturados',
      '1 cebolla mediana, cortada en cubos',
      '3 dientes de ajo, picados',
      '2 zanahorias, ralladas finamente',
      '2 tallos de apio, cortados en cubos',
      '2 tbsp de pasta de tomate',
      '1 tbsp de aceite de oliva',
      '2 tsp de sazonador italiano',
      '1 tsp de pimentón ahumado',
      '1/2 cup de caldo de verduras',
      'Sal y pimienta al gusto',
      '1 lb de espagueti o penne de trigo integral',
      'Albahaca fresca y levadura nutricional para servir',
    ],
    instructions: [
      'Cocinar la pasta según las instrucciones del paquete. Escurrir y reservar.',
      'Calentar el aceite de oliva en una olla grande. Saltear la cebolla, las zanahorias y el apio durante 5 minutos hasta que se ablanden.',
      'Agregar los champiñones y el ajo. Cocinar 4-5 minutos hasta que los champiñones suelten su líquido y comiencen a dorarse.',
      'Incorporar la pasta de tomate, el sazonador italiano y el pimentón ahumado. Cocinar 1 minuto.',
      'Agregar los tomates triturados, el caldo de verduras y las lentejas rojas. Mezclar bien.',
      'Llevar a ebullición, luego reducir a fuego lento. Cocinar 20-25 minutos, revolviendo ocasionalmente, hasta que las lentejas estén tiernas y la salsa esté espesa.',
      'Sazonar con sal y pimienta. Servir sobre la pasta con albahaca y levadura nutricional.',
    ],
    tips: [
      'Cortar los champiñones en cubos finos les da una textura "carnosa" que imita la boloñesa tradicional.',
      'Las lentejas rojas se deshacen en la salsa — son invisibles pero aportan mucha proteína.',
      'Esta salsa se congela increíblemente bien. Haz el doble de la receta cada vez.',
    ],
    storageInstructions:
      'Guardar la salsa y la pasta por separado. La salsa se conserva 5 días en la nevera, 3 meses congelada. La pasta se conserva 3-4 días.',
    reheatingInstructions:
      'Calentar la pasta y la salsa en el microondas durante 2 minutos. Agregar un chorrito de agua para aflojar la salsa.',
    imageAlt:
      'Un abundante bowl de boloñesa vegana de lentejas sobre penne de trigo integral, coronado con albahaca fresca y levadura nutricional espolvoreada',
  },

  'high-protein-tuna-salad-lettuce-wraps': {
    title: 'Wraps de Lechuga con Ensalada de Atún Alta en Proteína',
    description:
      'Ligeras, crujientes y con 40g de proteína por porción. Ensalada de atún con yogur griego en hojas de lechuga mantequilla. Sin cocción.',
    ingredients: [
      '3 latas (5 oz cada una) de atún blanco albacore sólido, escurrido',
      '1/3 cup de yogur griego natural',
      '1 tbsp de mostaza Dijon',
      '1 tbsp de jugo de limón',
      '2 tallos de apio, cortados en cubos finos',
      '2 tbsp de cebolla morada, picada finamente',
      '1 tbsp de eneldo fresco (o 1 tsp de seco)',
      'Sal y pimienta al gusto',
      '1 cabeza de lechuga mantequilla, con las hojas separadas',
      'Tomates cherry y rodajas de aguacate para servir',
    ],
    instructions: [
      'Escurrir bien el atún y desmenuzarlo en un bowl.',
      'Agregar el yogur griego, la mostaza Dijon, el jugo de limón, el apio, la cebolla morada y el eneldo. Mezclar hasta combinar.',
      'Sazonar con sal y pimienta al gusto.',
      'Separar las hojas de lechuga mantequilla y lavarlas/secarlas bien.',
      'Servir la ensalada de atún en las hojas de lechuga. Acompañar con tomates cherry y aguacate.',
    ],
    tips: [
      'El yogur griego en lugar de mayonesa reduce las calorías un 60% mientras agrega 8g de proteína.',
      'Agregar sazonador tipo everything bagel para un toque moderno.',
      'Empacar las hojas de lechuga por separado de la ensalada de atún para meal prep y mantenerlas crujientes.',
    ],
    storageInstructions:
      'La ensalada de atún se conserva 3 días en la nevera. Guardar la lechuga por separado.',
    imageAlt:
      'Hojas frescas de lechuga mantequilla rellenas de cremosa ensalada de atún, decoradas con eneldo, tomates cherry y rodajas de aguacate',
  },

  'steak-and-egg-protein-plate': {
    title: 'Plato de Proteína con Bistec y Huevo (62g de Proteína)',
    description:
      'La comida definitiva alta en proteína: bistec de sirloin sellado con huevos y espinacas salteadas. 62g de proteína, menos de 500 calorías. Puro combustible.',
    ingredients: [
      '2 bistecs de sirloin (8 oz cada uno, 1 pulgada de grosor)',
      '4 huevos grandes',
      '4 cups de espinaca fresca',
      '2 tbsp de mantequilla',
      '2 dientes de ajo, picados',
      '1 tsp de sal',
      '1/2 tsp de pimienta negra',
      '1/2 tsp de ajo en polvo',
      'Sal de mar en escamas para terminar',
    ],
    instructions: [
      'Sacar los bistecs de la nevera 30 minutos antes de cocinar. Secar bien y sazonar generosamente con sal, pimienta y ajo en polvo por ambos lados.',
      'Calentar un sartén de hierro fundido a fuego alto hasta que humee. Agregar 1 tbsp de mantequilla.',
      'Sellar los bistecs durante 4 minutos por lado para término medio (ajustar según preferencia). Dejar reposar 5 minutos.',
      'En el mismo sartén, agregar la mantequilla restante y el ajo. Cocinar 30 segundos.',
      'Agregar las espinacas y saltear 2 minutos hasta que se marchiten.',
      'Empujar las espinacas a un lado y romper los huevos en el sartén. Cocinar al gusto (2-3 min para estrellados).',
      'Emplatar: rebanar el bistec en contra de la fibra, abanicarlo en el plato con los huevos y las espinacas. Terminar con sal de mar en escamas.',
    ],
    tips: [
      'Dejar reposar el bistec es innegociable — redistribuye los jugos y evita que quede seco.',
      'Usar los jugos del bistec para cocinar los huevos y las espinacas para un sabor increíble.',
      'El sirloin tiene la mejor relación proteína-precio para bistec. Busca ofertas y compra en cantidad.',
    ],
    storageInstructions:
      'Se come mejor fresco. El bistec rebanado se puede guardar 2-3 días pero la calidad disminuye. No se recomienda para meal prep semanal.',
    reheatingInstructions:
      'Si necesitas recalentar, usar el horno a baja temperatura (250°F) por 10 minutos. El microondas cocerá de más el bistec.',
    imageAlt:
      'Plato de hierro fundido con bistec de sirloin rebanado a término medio, dos huevos estrellados con yema líquida y espinacas salteadas con ajo',
  },

  'slow-cooker-shredded-chicken-tacos': {
    title: 'Tacos de Pollo Deshebrado en Olla de Cocción Lenta',
    description:
      'Pon 5 ingredientes, deshebra y sirve. Pollo tierno en olla lenta con 38g de proteína por porción de tacos. Perfecto para alimentar a muchos o preparar con anticipación.',
    ingredients: [
      '3 lbs de pechugas de pollo deshuesadas y sin piel',
      '1 frasco (16 oz) de salsa (cualquier nivel de picante)',
      '1 sobre de sazonador para tacos',
      '1 lata (15 oz) de frijoles negros, escurridos',
      '1 cup de maíz congelado',
      '16 tortillas pequeñas de maíz (o de harina)',
      'Toppings: lechuga rallada, tomates picados, crema agria, queso rallado, gajos de limón, cilantro',
    ],
    instructions: [
      'Colocar el pollo en la olla de cocción lenta.',
      'Verter la salsa sobre el pollo y espolvorear el sazonador para tacos uniformemente encima.',
      'Cocinar en LOW durante 6-8 horas o en HIGH durante 3-4 horas.',
      'Deshebrar el pollo con dos tenedores. Agregar los frijoles negros y el maíz, revolver y cocinar 15 minutos más.',
      'Calentar las tortillas: envolver en una toalla de papel húmeda y calentar en el microondas 30 segundos.',
      'Servir el pollo en las tortillas con los toppings de tu preferencia.',
    ],
    tips: [
      'Esta es posiblemente la receta alta en proteína más fácil que existe. 5 minutos de trabajo real.',
      'Usa el pollo deshebrado para bowls de burrito, ensaladas, quesadillas o nachos durante toda la semana.',
      'A los niños les encanta porque pueden personalizar sus propios tacos.',
    ],
    storageInstructions:
      'El pollo deshebrado se guarda en la nevera por 5 días o se congela por 3 meses en bolsas porcionadas.',
    reheatingInstructions:
      'Calentar el pollo en el microondas durante 90 segundos. Calentar las tortillas por separado.',
    imageAlt:
      'Tacos de tortilla de maíz rellenos de jugoso pollo deshebrado, frijoles negros y maíz, coronados con cilantro fresco y limón',
  },

  'shrimp-quinoa-power-bowl': {
    title: 'Power Bowl de Camarones y Quinoa',
    description:
      'Camarones al ajillo con mantequilla sobre quinoa con aguacate y pimientos asados. 42g de proteína, listo en 20 minutos. Una máquina de proteína magra y limpia.',
    ingredients: [
      '1.5 lbs de camarones grandes, pelados y desvenados',
      '2 cups de quinoa seca, cocida',
      '2 aguacates, rebanados',
      '1 frasco (12 oz) de pimientos rojos asados, escurridos y rebanados',
      '2 tbsp de mantequilla',
      '4 dientes de ajo, picados',
      '1 tsp de pimentón ahumado',
      '1/2 tsp de hojuelas de chile rojo',
      'Jugo de 1 limón',
      '4 cups de arúgula baby',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Cocinar la quinoa según las instrucciones del paquete.',
      'Secar bien los camarones. Sazonar con pimentón ahumado, sal y pimienta.',
      'Derretir la mantequilla en un sartén grande a fuego medio-alto. Agregar el ajo y las hojuelas de chile rojo, cocinar 30 segundos.',
      'Agregar los camarones en una sola capa. Cocinar 2-3 minutos por lado hasta que estén rosados y opacos.',
      'Exprimir el jugo de limón sobre los camarones.',
      'Armar los bowls: base de quinoa, arúgula, camarones, pimientos rojos asados y rodajas de aguacate.',
    ],
    tips: [
      'Comprar camarones congelados pelados — son más baratos y se preparan más rápido que los frescos. Descongelar en agua fría por 10 minutos.',
      'No mover los camarones en el sartén — déjalos sellarse para obtener una buena costra.',
      'El aguacate se oscurece rápido, así que agregarlo fresco al servir o exprimirle limón encima.',
    ],
    storageInstructions:
      'Guardar los camarones y la quinoa hasta por 3 días. Agregar el aguacate fresco al comer.',
    reheatingInstructions:
      'Calentar los camarones y la quinoa en el microondas durante 90 segundos. No sobrecalentar o los camarones se ponen gomosos.',
    imageAlt:
      'Colorido power bowl con camarones al ajillo con mantequilla sobre quinoa esponjosa, rodajas de aguacate verde brillante, pimientos rojos asados y arúgula baby',
  },

  'baked-salmon-protein-bowl': {
    title: 'Bowl de Proteína de Salmón al Horno con Edamame',
    description:
      'Bowl de salmón rico en omega-3 con edamame, arroz integral y aderezo de miso. 46g de proteína y cargado de nutrientes que potencian el cerebro.',
    ingredients: [
      '4 filetes de salmón (6 oz cada uno)',
      '2 cups de arroz integral cocido',
      '1.5 cups de edamame sin cáscara',
      '1 pepino grande, cortado en cubos',
      '1 aguacate, rebanado',
      '2 tbsp de pasta de miso blanco',
      '2 tbsp de vinagre de arroz',
      '1 tbsp de aceite de sésamo',
      '1 tbsp de salsa de soya',
      '1 tsp de miel',
      '1 tsp de jengibre fresco, rallado',
      '2 tbsp de semillas de sésamo',
      '2 cebollines, rebanados',
      'Jengibre encurtido (opcional)',
    ],
    instructions: [
      'Precalentar el horno a 400°F. Forrar una bandeja con papel pergamino.',
      'Sazonar el salmón con sal, pimienta y un chorrito de salsa de soya. Colocar con la piel hacia abajo en la bandeja.',
      'Hornear 12-15 minutos hasta que el salmón se desmenuce fácilmente con un tenedor.',
      'Mientras se hornea el salmón, preparar el aderezo de miso: batir la pasta de miso, el vinagre de arroz, el aceite de sésamo, la salsa de soya, la miel y el jengibre.',
      'Cocinar el edamame según las instrucciones del paquete (generalmente 3-4 minutos en agua hirviendo o microondas).',
      'Armar los bowls: arroz integral, pepino, edamame y salmón desmenuzado. Rociar con el aderezo de miso. Decorar con aguacate, semillas de sésamo y cebollines.',
    ],
    tips: [
      'El salmón salvaje tiene más omega-3 que el de cultivo. En Costco hay excelente salmón rojo salvaje congelado.',
      'Preparar aderezo de miso extra — se conserva por 2 semanas en la nevera y queda bien con todo.',
      'Para meal prep, guardar el aderezo y el aguacate por separado hasta la hora de servir.',
    ],
    storageInstructions:
      'Guardar los bowls armados (sin aguacate) por 3-4 días. Mantener el aderezo en un recipiente aparte.',
    reheatingInstructions:
      'Comer frío (estilo japonés) o calentar suavemente en el microondas por 90 segundos a 70% de potencia.',
    imageAlt:
      'Hermoso bowl de proteína de salmón con salmón rosa desmenuzado sobre arroz integral, edamame verde brillante, pepino, aguacate rebanado y aderezo de miso con sésamo',
  },

  // ─── HIGH-PROTEIN HUB RECIPES (Phase 7 — 10 more) ─────────────────

  'keto-bacon-egg-cups': {
    title: 'Tazas de Huevo con Tocino Keto',
    description:
      'Tazas de huevo envueltas en tocino crujiente horneadas a la perfección. Solo 1g de carbohidratos netos y 24g de proteína cada una — el desayuno keto definitivo para bajar de peso.',
    ingredients: [
      '12 tiras de tocino',
      '12 huevos grandes',
      '1/2 cup de queso cheddar rallado',
      '2 tbsp de cebollín picado',
      'Sal y pimienta al gusto',
      'Aceite en aerosol',
    ],
    instructions: [
      'Precalentar el horno a 375°F. Rociar un molde de 12 muffins con aceite en aerosol.',
      'Pre-cocinar el tocino en el microondas durante 2 minutos (debe quedar flexible, no crujiente).',
      'Forrar cada cavidad del molde con una tira de tocino, formando un anillo alrededor de la pared interior.',
      'Romper un huevo dentro de cada cavidad forrada con tocino.',
      'Sazonar con sal y pimienta, luego cubrir cada uno con una pizca de queso cheddar rallado.',
      'Hornear durante 18-20 minutos hasta que las claras estén cuajadas y las yemas al punto deseado.',
      'Dejar enfriar 3 minutos en el molde, luego retirar cuidadosamente con una cuchara. Decorar con cebollín.',
    ],
    tips: [
      'Pre-cocinar el tocino es esencial — el tocino crudo no se cocina completamente en 20 minutos en el horno.',
      'Para yemas líquidas, retirar a los 15 minutos. Para yemas completamente cuajadas, dejar los 20 minutos completos.',
      'Son ideales para meal prep: prepara una docena el domingo y recalienta 2 cada mañana.',
    ],
    storageInstructions:
      'Refrigerar en un recipiente hermético hasta por 4 días. Congelar hasta por 2 meses.',
    reheatingInstructions:
      'Desde la nevera, calentar en el microondas 30-45 segundos. Desde congelado, calentar en el microondas 90 segundos.',
    imageAlt:
      'Tazas doradas de huevo envueltas en tocino en un molde de muffins con queso cheddar derretido encima y cebollín picado',
  },

  'vegan-lentil-power-bowls': {
    title: 'Power Bowls Veganos de Lentejas',
    description:
      'Bowls veganos llenos de proteína con lentejas sazonadas, camote asado y aderezo de tahini. 28g de proteína vegetal como combustible serio para ganar músculo.',
    ingredients: [
      '1.5 cups de lentejas verdes o cafés secas',
      '2 camotes grandes, cortados en cubos',
      '1 lata (15 oz) de garbanzos, escurridos y enjuagados',
      '4 cups de espinaca baby',
      '1 aguacate, rebanado',
      '2 tbsp de aceite de oliva',
      '1 tsp de comino',
      '1 tsp de pimentón ahumado',
      'Sal y pimienta al gusto',
      '3 tbsp de tahini',
      '2 tbsp de jugo de limón',
      '1 tbsp de miel de maple',
      '2 tbsp de agua tibia',
      '1 diente de ajo, picado',
    ],
    instructions: [
      'Precalentar el horno a 425°F. Mezclar los cubos de camote con 1 tbsp de aceite de oliva, comino, sal y pimienta. Distribuir en una bandeja.',
      'Asar los camotes durante 25-30 minutos, volteándolos a la mitad, hasta que estén dorados y tiernos.',
      'Mientras se asan los camotes, cocinar las lentejas: enjuagar y colocar en una olla con 3 cups de agua. Llevar a ebullición, reducir a fuego lento y cocinar 20-25 minutos hasta que estén tiernas. Escurrir el exceso de agua.',
      'Sazonar las lentejas con pimentón ahumado, sal y el aceite de oliva restante.',
      'Preparar el aderezo de tahini: batir el tahini, el jugo de limón, la miel de maple, el agua tibia, el ajo y una pizca de sal hasta que quede homogéneo.',
      'Armar los bowls: lentejas, camote asado, garbanzos, espinaca baby y aguacate. Rociar con el aderezo de tahini.',
    ],
    tips: [
      'Las lentejas verdes mantienen mejor su forma que las rojas — importante para bowls donde quieres textura.',
      'Cocinar lentejas en lote y congelar en porciones de 1 cup para futuros armados rápidos.',
      'El aderezo de tahini se conserva por 2 semanas en la nevera. Prepara el doble.',
    ],
    storageInstructions:
      'Guardar los bowls (sin aguacate) hasta por 5 días. Mantener el aderezo por separado. Agregar aguacate fresco.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Agregar el aguacate fresco y rociar el tahini después de recalentar.',
    imageAlt:
      'Vibrante power bowl vegano con lentejas verdes sazonadas, cubos de camote asado, garbanzos, espinaca baby, aguacate y cremoso aderezo de tahini',
  },

  'low-carb-shrimp-stir-fry': {
    title: 'Salteado de Camarones Bajo en Carbohidratos',
    description:
      'Camarones salteados con ajo y jengibre con verduras crujientes sobre arroz de coliflor. 38g de proteína y solo 12g de carbohidratos por porción. Listo en 15 minutos.',
    ingredients: [
      '1.5 lbs de camarones grandes, pelados y desvenados',
      '4 cups de arroz de coliflor (fresco o congelado)',
      '2 cups de chícharos chinos, con las puntas cortadas',
      '1 pimiento rojo, cortado en tiras finas',
      '3 dientes de ajo, picados',
      '1 tbsp de jengibre fresco, rallado',
      '3 tbsp de aminoácidos de coco (o salsa de soya)',
      '1 tbsp de aceite de sésamo',
      '1 tbsp de aceite de aguacate',
      '1 tsp de sriracha (opcional)',
      '2 cebollines, rebanados',
      'Semillas de sésamo para decorar',
    ],
    instructions: [
      'Calentar el aceite de aguacate en un wok grande o sartén a fuego alto.',
      'Secar los camarones, sazonar con sal y pimienta. Sellar en una sola capa durante 2 minutos por lado. Retirar y reservar.',
      'Agregar el aceite de sésamo al sartén. Saltear los chícharos chinos y el pimiento durante 3 minutos hasta que estén tiernos pero crujientes.',
      'Agregar el ajo y el jengibre, cocinar 30 segundos hasta que estén fragantes.',
      'Empujar las verduras a un lado. Agregar el arroz de coliflor y cocinar 3-4 minutos hasta que esté caliente.',
      'Regresar los camarones al sartén. Agregar los aminoácidos de coco y la sriracha. Mezclar todo durante 1 minuto.',
      'Servir decorado con cebollines y semillas de sésamo.',
    ],
    tips: [
      'Los aminoácidos de coco tienen menos sodio y menos carbohidratos que la salsa de soya — ideales para alimentación baja en carbohidratos.',
      'El arroz de coliflor congelado ahorra muchísimo tiempo y sabe igual de bien que el fresco.',
      'La clave del salteado: sartén bien caliente, ingredientes secos y no llenar demasiado el sartén.',
    ],
    storageInstructions:
      'Guardar hasta por 3 días. El salteado de camarones se consume mejor dentro de los primeros 2 días por la textura.',
    reheatingInstructions:
      'Calentar en el microondas durante 90 segundos. Revolver a la mitad para calentar uniformemente.',
    imageAlt:
      'Camarones salteados chisporroteantes con chícharos chinos coloridos, pimiento rojo y arroz de coliflor en un wok, decorados con semillas de sésamo',
  },

  'dairy-free-protein-smoothie-bowls': {
    title: 'Smoothie Bowls de Proteína Sin Lácteos',
    description:
      'Smoothie bowls espesos y cremosos con 30g de proteína y cero lácteos. Cargados de fruta, semillas y granola. El desayuno alto en proteína más rápido.',
    ingredients: [
      '2 scoops de proteína en polvo a base de plantas (vainilla o chocolate)',
      '2 plátanos congelados',
      '1 cup de mezcla de moras congeladas',
      '1 cup de leche de almendra sin azúcar (o leche de avena)',
      '2 tbsp de mantequilla de almendra',
      '1 tbsp de semillas de chía',
      'Toppings: plátano rebanado, moras frescas, granola, hojuelas de coco, semillas de cáñamo',
    ],
    instructions: [
      'Agregar la proteína en polvo, los plátanos congelados, las moras congeladas, la leche de almendra y la mantequilla de almendra a una licuadora de alta potencia.',
      'Licuar a alta velocidad hasta que quede espeso y homogéneo — debe quedar más espeso que un smoothie regular (como helado suave).',
      'Si queda muy espeso, agregar leche de almendra 1 cucharada a la vez. Si queda muy líquido, agregar más fruta congelada.',
      'Verter en dos bowls.',
      'Decorar con plátano rebanado, moras frescas, granola, hojuelas de coco, semillas de chía y semillas de cáñamo.',
      'Comer de inmediato — los smoothie bowls no se conservan bien una vez preparados.',
    ],
    tips: [
      'Congelar los plátanos cuando empiecen a tener manchas — licúan una base super cremosa.',
      'Usar menos líquido de lo que crees. El bowl debe comerse con cuchara, no beberse.',
      'Preparar packs de smoothie: porcionar la fruta congelada + proteína en polvo en bolsas. Solo agregar leche y licuar.',
    ],
    storageInstructions:
      'Se come mejor de inmediato. Preparar packs de smoothie (ingredientes secos + fruta congelada) en bolsas de congelador hasta por 3 meses.',
    imageAlt:
      'Dos smoothie bowls espesos y cremosos decorados con plátano rebanado, moras frescas, granola, hojuelas de coco y semillas de chía',
  },

  'budget-chicken-drumstick-meal-prep': {
    title: 'Meal Prep Económico de Piernas de Pollo',
    description:
      'Piernas de pollo horneadas y crujientes con arroz y verduras por menos de $1.50 por porción. El meal prep alto en proteína más barato para presupuestos universitarios.',
    ingredients: [
      '10 piernas de pollo (aproximadamente 3 lbs)',
      '2 tbsp de aceite de oliva',
      '1 tbsp de pimentón ahumado',
      '1 tsp de ajo en polvo',
      '1 tsp de cebolla en polvo',
      '1/2 tsp de comino',
      '1 tsp de sal',
      '1/2 tsp de pimienta negra',
      '3 cups de arroz blanco cocido',
      '1 lb de ejotes o brócoli congelado',
      'Salsa picante o salsa BBQ para servir',
    ],
    instructions: [
      'Precalentar el horno a 425°F. Forrar una bandeja con aluminio y colocar una rejilla encima (o usar solo aluminio).',
      'Secar las piernas de pollo con toallas de papel.',
      'Mezclar el pimentón, el ajo en polvo, la cebolla en polvo, el comino, la sal y la pimienta en un bowl pequeño.',
      'Mezclar las piernas de pollo con aceite de oliva, luego cubrir uniformemente con la mezcla de especias.',
      'Colocar en la rejilla en una sola capa. Hornear durante 35-40 minutos, volteando una vez a los 20 minutos, hasta que la piel esté crujiente y la temperatura interna sea de 185°F.',
      'Mientras se hornean las piernas, cocinar el arroz y cocer las verduras congeladas al vapor.',
      'Dividir en 5 recipientes: 2 piernas, arroz y verduras por porción.',
    ],
    tips: [
      'Las piernas de pollo son el corte más barato — a menudo cuestan menos de $1/lb. Compra el paquete familiar.',
      'Una rejilla es el secreto para piel crujiente por todos lados — el aire circula bajo el pollo.',
      'Esta comida completa cuesta aproximadamente $1.25-$1.50 por porción. Difícil de superar eso con 38g de proteína.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días. Las piernas de pollo se conservan increíblemente bien para meal prep.',
    reheatingInstructions:
      'Calentar en el microondas durante 2 minutos. Para piel crujiente, recalentar en el horno a 400°F por 10 minutos.',
    imageAlt:
      'Piernas de pollo crujientes horneadas con piel dorada y sazonada junto a arroz blanco y ejotes al vapor en recipientes de meal prep',
  },

  'high-fiber-turkey-chili': {
    title: 'Chili de Pavo Alto en Fibra',
    description:
      'Abundante chili de pavo cargado de frijoles y verduras. 34g de proteína y 14g de fibra por bowl. Una cena reconfortante de una sola olla para toda la semana.',
    ingredients: [
      '2 lbs de pavo molido (93% magro)',
      '1 lata (15 oz) de frijoles rojos, escurridos y enjuagados',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '1 lata (28 oz) de tomates triturados',
      '1 lata (15 oz) de tomates en cubos',
      '1 cebolla grande, cortada en cubos',
      '3 dientes de ajo, picados',
      '2 pimientos morrones, cortados en cubos',
      '2 tbsp de chile en polvo',
      '1 tbsp de comino',
      '1 tsp de pimentón ahumado',
      '1/2 tsp de pimienta cayena',
      '1 tbsp de aceite de oliva',
      'Sal y pimienta al gusto',
      'Toppings: queso rallado, crema agria, aguacate en cubos, cilantro',
    ],
    instructions: [
      'Calentar el aceite de oliva en una olla grande o Dutch oven a fuego medio-alto.',
      'Agregar el pavo molido y desmenuzar. Cocinar 6-8 minutos hasta que esté dorado. Escurrir el exceso de grasa.',
      'Agregar la cebolla, el ajo y los pimientos. Cocinar 4-5 minutos hasta que se ablanden.',
      'Incorporar el chile en polvo, el comino, el pimentón ahumado y la cayena. Cocinar 1 minuto hasta que estén fragantes.',
      'Agregar los tomates triturados, los tomates en cubos, los frijoles rojos y los frijoles negros. Mezclar bien.',
      'Llevar a ebullición, luego reducir a fuego lento. Cocinar sin tapa durante 25-30 minutos, revolviendo ocasionalmente.',
      'Sazonar con sal y pimienta. Servir en bowls y agregar tus toppings favoritos.',
    ],
    tips: [
      'El chili siempre sabe mejor al día siguiente cuando los sabores se integran. Perfecto para meal prep.',
      'Duplica la receta y congela la mitad — el chili es uno de los mejores alimentos para congelar.',
      'Los dos tipos de frijoles elevan la fibra a 14g por porción, lo cual es excelente para la salud intestinal.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días. Congelar en porciones hasta por 3 meses.',
    reheatingInstructions:
      'Calentar en el microondas 2-3 minutos, revolviendo a la mitad. En estufa: calentar a fuego medio por 5 minutos.',
    imageAlt:
      'Un gran bowl de abundante chili de pavo con frijoles rojos, frijoles negros y pimientos en cubos, coronado con queso rallado y crema agria',
  },

  'gluten-free-steak-bowls': {
    title: 'Bowls de Bistec Sin Gluten',
    description:
      'Bistec de falda marinado sobre arroz de coliflor con cilantro y limón con verduras asadas. 52g de proteína, completamente sin gluten, diseñado para ganar músculo.',
    ingredients: [
      '1.5 lbs de bistec de falda (flank steak)',
      '4 cups de arroz de coliflor',
      '2 cups de pimientos y cebollas asadas',
      '1 aguacate, rebanado',
      '3 tbsp de aceite de oliva, dividido',
      '3 tbsp de aminoácidos de coco',
      '2 tbsp de jugo de limón',
      '2 dientes de ajo, picados',
      '1 tsp de comino',
      '1 tsp de pimentón ahumado',
      'Sal y pimienta al gusto',
      '2 tbsp de cilantro fresco, picado',
      'Gajos de limón para servir',
    ],
    instructions: [
      'Marinar el bistec de falda: combinar 2 tbsp de aceite de oliva, aminoácidos de coco, jugo de limón, ajo, comino, pimentón, sal y pimienta en una bolsa. Agregar el bistec y marinar al menos 30 minutos (o toda la noche).',
      'Precalentar la parrilla o sartén de hierro fundido a fuego alto.',
      'Sellar el bistec 4-5 minutos por lado para término medio (135°F interno). Dejar reposar 10 minutos, luego cortar en rebanadas finas en contra de la fibra.',
      'Mientras reposa el bistec, calentar el aceite de oliva restante en un sartén. Saltear el arroz de coliflor 4-5 minutos. Sazonar con sal y agregar el cilantro picado y un chorrito de limón.',
      'Asar las rebanadas de pimiento y cebolla a 425°F durante 15 minutos (o mientras el bistec se marina).',
      'Armar los bowls: arroz de coliflor con cilantro y limón, bistec rebanado, verduras asadas y rodajas de aguacate. Servir con gajos de limón.',
    ],
    tips: [
      'Cortar en contra de la fibra es fundamental para el bistec de falda — convierte un corte duro en rebanadas suaves como mantequilla.',
      'Los aminoácidos de coco reemplazan la salsa de soya y son naturalmente sin gluten con menos sodio.',
      'Dejar que el bistec llegue a temperatura ambiente antes de cocinar para resultados más uniformes.',
    ],
    storageInstructions:
      'Guardar hasta por 4 días. El bistec queda mejor dentro de los primeros 3 días. Mantener el aguacate por separado.',
    reheatingInstructions:
      'Calentar en el microondas 90 segundos a 70% de potencia. O comer frío — los bowls de bistec quedan genial a temperatura ambiente.',
    imageAlt:
      'Bistec de falda rebanado abanicado sobre arroz de coliflor con cilantro y limón, pimientos asados, cebollas y rodajas de aguacate en bowls de vidrio',
  },

  'low-sodium-chicken-soup': {
    title: 'Sopa de Pollo Baja en Sodio',
    description:
      'Reconfortante sopa casera de pollo con solo 280mg de sodio por bowl. Cargada de verduras y 32g de proteína. Saludable para el corazón y aprobada por doctores.',
    ingredients: [
      '2 lbs de pechugas de pollo deshuesadas y sin piel',
      '8 cups de caldo de pollo bajo en sodio',
      '3 zanahorias, peladas y rebanadas',
      '3 tallos de apio, rebanados',
      '1 cebolla grande, cortada en cubos',
      '3 dientes de ajo, picados',
      '2 cups de pasta de huevo tipo nido (o pasta de trigo integral)',
      '2 hojas de laurel',
      '1 tsp de tomillo seco',
      '1/2 tsp de romero seco',
      '1 tbsp de aceite de oliva',
      '2 tbsp de perejil fresco, picado',
      'Pimienta negra al gusto',
      'Jugo de 1 limón',
    ],
    instructions: [
      'Calentar el aceite de oliva en una olla grande a fuego medio. Agregar la cebolla, las zanahorias y el apio. Cocinar 5 minutos hasta que se ablanden.',
      'Agregar el ajo y cocinar 30 segundos hasta que esté fragante.',
      'Verter el caldo de pollo bajo en sodio. Agregar las hojas de laurel, el tomillo y el romero.',
      'Agregar las pechugas de pollo enteras a la olla. Llevar a ebullición, luego reducir a fuego suave.',
      'Cocinar durante 20 minutos hasta que el pollo esté cocido (165°F interno).',
      'Retirar el pollo, deshebrar con dos tenedores y regresar a la olla.',
      'Agregar la pasta de huevo y cocinar 6-8 minutos hasta que esté tierna.',
      'Retirar las hojas de laurel. Agregar el jugo de limón y el perejil fresco. Sazonar con pimienta negra.',
    ],
    tips: [
      'Hacer tu propio caldo con un pollo entero te da control total del sodio y un sabor más rico.',
      'El jugo de limón realza el sabor sin necesidad de más sal — un gran truco bajo en sodio.',
      'Usar hierbas y especias generosamente para compensar la reducción de sal. Las hierbas frescas hacen una gran diferencia.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días. Congelar sin la pasta (se pone blanda) hasta por 3 meses.',
    reheatingInstructions:
      'En estufa: calentar a fuego medio por 5 minutos. En microondas: 2-3 minutos, revolviendo una vez.',
    imageAlt:
      'Un reconfortante bowl de sopa casera de pollo con pollo deshebrado, pasta de huevo, zanahorias, apio y perejil fresco',
  },

  'toddler-friendly-protein-nuggets': {
    title: 'Nuggets de Proteína para Niños Pequeños',
    description:
      'Suaves nuggets de pollo horneados que a los niños les encantan. Con verduras ocultas, 18g de proteína por porción y sin ingredientes raros. Aprobados por niños y sencillos.',
    ingredients: [
      '1.5 lbs de pollo molido',
      '1/2 cup de calabacín finamente rallado (escurrido y bien exprimido)',
      '1/4 cup de zanahorias finamente ralladas',
      '1/3 cup de pan rallado (o harina de avena para sin gluten)',
      '1 huevo',
      '1 tsp de ajo en polvo',
      '1/2 tsp de cebolla en polvo',
      '1/2 tsp de sal',
      '1/2 cup de pan rallado Panko (para empanizar)',
      '2 tbsp de aceite de oliva',
      'Kétchup, mostaza con miel o aderezo ranch para mojar',
    ],
    instructions: [
      'Precalentar el horno a 400°F. Forrar una bandeja con papel pergamino.',
      'Exprimir el calabacín rallado en una toalla de papel para eliminar el exceso de humedad.',
      'En un bowl grande, mezclar el pollo molido, el calabacín rallado, las zanahorias ralladas, el pan rallado, el huevo, el ajo en polvo, la cebolla en polvo y la sal hasta que se combinen.',
      'Formar la mezcla en pequeñas formas de nuggets (aproximadamente 2 cucharadas cada uno). Debes obtener unos 24 nuggets.',
      'Pasar cada nugget por el pan rallado Panko y colocar en la bandeja.',
      'Rociar o pincelar ligeramente la parte superior con aceite de oliva.',
      'Hornear durante 16-18 minutos, volteando a la mitad, hasta que estén dorados y cocidos por dentro (165°F interno).',
    ],
    tips: [
      'Exprimir bien el calabacín es esencial — el calabacín húmedo hace que los nuggets se desmoronen.',
      'Las verduras ocultas son completamente indetectables. Incluso los más quisquillosos devoran estos nuggets.',
      'Preparar el triple de la receta y congelar los nuggets crudos en una bandeja, luego transferir a una bolsa.',
    ],
    storageInstructions:
      'Refrigerar hasta por 4 días. Congelar cocidos o crudos hasta por 3 meses.',
    reheatingInstructions:
      'Horno: 375°F por 8 minutos. Air fryer: 350°F por 5 minutos. El microondas funciona pero los nuggets pierden lo crujiente.',
    imageAlt:
      'Nuggets de pollo dorados horneados dispuestos en un plato con pequeños bowls de kétchup y mostaza con miel para mojar, presentación amigable para niños',
  },

  'bariatric-friendly-egg-white-bites': {
    title: 'Bocaditos de Clara de Huevo Aptos para Bariátricos',
    description:
      'Suaves bocaditos densos en proteína de clara de huevo diseñados para pacientes bariátricos. Solo 85 calorías y 14g de proteína cada uno con mínima grasa. Fáciles de digerir.',
    ingredients: [
      '2 cups de claras de huevo líquidas (aproximadamente 16 oz)',
      '1/2 cup de queso cottage bajo en grasa',
      '1/4 cup de mozzarella rallada sin grasa',
      '1/4 cup de pimientos rojos asados cortados en cubos',
      '2 tbsp de espinaca fresca picada',
      '1/4 tsp de ajo en polvo',
      '1/4 tsp de sal',
      'Una pizca de pimienta negra',
      'Aceite en aerosol',
    ],
    instructions: [
      'Precalentar el horno a 325°F. Rociar generosamente un molde de 12 muffins con aceite en aerosol.',
      'En una licuadora, combinar las claras de huevo y el queso cottage. Licuar hasta que quede completamente homogéneo.',
      'Verter la mezcla de claras de huevo uniformemente en las 12 cavidades del molde, llenando cada una aproximadamente 2/3.',
      'Colocar unos trozos de pimiento rojo asado y espinaca en cada cavidad.',
      'Espolvorear mozzarella sin grasa encima de cada uno.',
      'Sazonar con ajo en polvo, sal y pimienta.',
      'Hornear durante 22-25 minutos hasta que estén inflados y cuajados en el centro. Se desinflarán ligeramente al enfriarse.',
    ],
    tips: [
      'Licuar el queso cottage con las claras de huevo crea una textura tipo sous vide estilo Starbucks.',
      'Estos están específicamente porcionados para pacientes post-cirugía bariátrica — suaves, pequeños y densos en proteína.',
      'Usar moldes de silicona para desmoldar más fácilmente sin que se peguen.',
    ],
    storageInstructions:
      'Refrigerar hasta por 5 días. Congelar hasta por 2 meses.',
    reheatingInstructions:
      'Calentar en el microondas 20-30 segundos. No sobrecalentar o se ponen gomosos.',
    imageAlt:
      'Esponjosos bocaditos blancos de clara de huevo en un molde de muffins con trocitos visibles de pimiento rojo y espinaca, textura ligera y aireada',
  },
};
