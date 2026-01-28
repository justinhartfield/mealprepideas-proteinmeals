/**
 * Spanish translations for meal-prep batch 2 recipes
 */
export const recipesBatchMp2Es: Record<
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
  // ============================================================
  // DESAYUNO (12 recetas)
  // ============================================================
  'mp2-freezer-black-bean-breakfast-burritos': {
    title: 'Burritos de Desayuno con Frijoles Negros para Congelar',
    description:
      'Burritos cargados de proteína con frijoles negros que puedes preparar en lote y congelar para las mañanas con prisa. Recalienta desde congelado en minutos para empezar el día con energía.',
    ingredients: [
      '2 latas (15 oz cada una) de frijoles negros, escurridos y enjuagados',
      '8 tortillas de harina grandes (10 pulgadas)',
      '2 cups de arroz integral cocido',
      '1 cup de granos de maíz congelados, descongelados',
      '1 cup de salsa verde',
      '1 teaspoon de comino',
      '1 teaspoon de pimentón ahumado',
      '½ teaspoon de ajo en polvo',
      '½ teaspoon de chile en polvo',
      '¼ cup de levadura nutricional',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'En un sartén grande a fuego medio, combina los frijoles negros, el maíz, el comino, el pimentón ahumado, el ajo en polvo y el chile en polvo. Cocina por 5 minutos, aplastando aproximadamente la mitad de los frijoles con un tenedor.',
      'Incorpora el arroz integral cocido y la salsa verde. Cocina por 3–4 minutos más hasta que esté bien caliente. Retira del fuego y agrega la levadura nutricional.',
      'Extiende las tortillas y divide el relleno equitativamente entre ellas, colocándolo en el tercio inferior-central de cada tortilla.',
      'Dobla el borde inferior sobre el relleno, mete los lados hacia adentro y enrolla firmemente formando un burrito.',
      'Envuelve cada burrito individualmente en papel aluminio o papel pergamino, luego colócalos en una bolsa grande con cierre hermético para congelador.',
      'Etiqueta con la fecha y congela en posición plana por hasta 3 meses.',
    ],
    tips: [
      'Exprime el exceso de humedad del maíz descongelado para evitar burritos aguados.',
      'Deja que los burritos se enfríen completamente antes de envolverlos para evitar la condensación.',
      'Agrega una capa fina de frijoles refritos como "pegamento" para que las tortillas se mantengan selladas.',
    ],
    storageInstructions:
      'Envuelve individualmente en papel aluminio o pergamino, luego guarda en una bolsa para congelador. Congela por hasta 3 meses. Refrigera los burritos sin envolver por hasta 4 días.',
    reheatingInstructions:
      'Retira el papel aluminio y envuelve en una toalla de papel húmeda. Calienta en el microondas desde congelado por 2–3 minutos, volteando a la mitad. Alternativamente, descongela en el refrigerador durante la noche y recalienta en un sartén seco por 2 minutos por cada lado.',
    imageAlt:
      'Pila de burritos de desayuno con frijoles negros envueltos en papel aluminio sobre una tabla de cortar, con uno cortado mostrando el relleno de arroz, frijoles y maíz',
  },
  'mp2-overnight-quinoa-berry-bowls': {
    title: 'Bowls de Quinoa con Frutos Rojos para la Noche',
    description:
      'Una alternativa sin cocción y rica en proteínas a la avena nocturna, preparada con quinoa y frutos rojos variados. Prepara cinco frascos el domingo y toma uno cada mañana.',
    ingredients: [
      '2½ cups de quinoa cocida, enfriada',
      '2½ cups de leche de almendras sin azúcar',
      '1½ cups de frutos rojos variados (arándanos, frambuesas, fresas)',
      '5 tablespoons de semillas de chía',
      '5 tablespoons de jarabe de arce',
      '1 teaspoon de extracto de vainilla',
      '¼ teaspoon de canela',
      'Una pizca de sal',
      '5 tablespoons de almendras laminadas (para decorar)',
    ],
    instructions: [
      'En un bowl grande, combina la quinoa enfriada, la leche de almendras, las semillas de chía, el jarabe de arce, el extracto de vainilla, la canela y la sal. Mezcla bien.',
      'Divide la mezcla de quinoa equitativamente entre 5 frascos de vidrio o recipientes para meal prep (aproximadamente ¾ cup por frasco).',
      'Cubre cada frasco con aproximadamente ⅓ cup de frutos rojos variados. No revuelvas — deja que los frutos queden encima.',
      'Sella bien y refrigera durante la noche o por al menos 4 horas.',
      'Cuando estés listo para comer, revuelve todo junto y decora con 1 tablespoon de almendras laminadas.',
    ],
    tips: [
      'Usa quinoa precocida de una sesión de cocción en lote para ahorrar aún más tiempo.',
      'Los frutos rojos congelados funcionan muy bien y se descongelan durante la noche — además sueltan jugos deliciosos.',
      'Agrega una medida de proteína en polvo a cada frasco para obtener proteína extra durante el embarazo.',
    ],
    storageInstructions:
      'Los frascos sellados se mantienen en el refrigerador por hasta 5 días. No congeles — la textura se vuelve granulosa.',
    reheatingInstructions:
      'Se disfruta mejor frío. Si lo deseas, calienta en el microondas por 1 minuto y revuelve — pero frío es la forma ideal de servirlo.',
    imageAlt:
      'Cinco frascos de vidrio llenos de quinoa cremosa nocturna cubierta con frutos rojos coloridos y almendras laminadas',
  },
  'mp2-sweet-potato-egg-muffin-cups': {
    title: 'Moldes de Huevo con Camote',
    description:
      'Moldes de huevo portátiles con camote rallado y hierbas, horneados en un molde para muffins para una preparación de comidas fácil. Altos en ácido fólico y naturalmente sin gluten.',
    ingredients: [
      '10 huevos grandes',
      '2 camotes medianos, pelados y rallados (aproximadamente 2 cups)',
      '1 cup de espinaca baby, picada toscamente',
      '½ cup de pimiento morrón picado (de cualquier color)',
      '¼ cup de leche de almendras sin azúcar',
      '2 cebollas de cambray, cortadas en rodajas finas',
      '1 teaspoon de ajo en polvo',
      '½ teaspoon de pimentón ahumado',
      '½ teaspoon de sal',
      '¼ teaspoon de pimienta negra',
      'Aceite en spray o aceite de oliva para engrasar',
    ],
    instructions: [
      'Precalienta el horno a 375°F (190°C). Engrasa generosamente un molde para 12 muffins con aceite en spray o aceite de oliva.',
      'Divide el camote rallado equitativamente entre los moldes, presionándolo suavemente para formar un pequeño nido en cada uno.',
      'Coloca una capa de espinaca picada, pimiento morrón y cebollas de cambray sobre el camote.',
      'En un bowl grande, bate los huevos con la leche de almendras, el ajo en polvo, el pimentón ahumado, la sal y la pimienta.',
      'Vierte la mezcla de huevo equitativamente en cada molde, llenando aproximadamente ¾ de su capacidad.',
      'Hornea por 22–25 minutos hasta que los huevos estén cuajados y la parte superior esté ligeramente dorada.',
      'Deja enfriar en el molde por 5 minutos, luego pasa un cuchillo alrededor de cada molde y sácalos.',
    ],
    tips: [
      'Usa un rallador de caja o procesador de alimentos para rallar rápidamente los camotes.',
      'Los moldes de silicona facilitan mucho sacar los huevos y eliminan la necesidad de engrasar.',
      'Se congelan de maravilla — acomódalos en una sola capa sobre una charola para congelar rápido antes de embolsar.',
    ],
    storageInstructions:
      'Guarda en un recipiente hermético en el refrigerador por hasta 5 días. Congela en bolsas con cierre por hasta 2 meses.',
    reheatingInstructions:
      'Calienta en el microondas desde el refrigerador por 45–60 segundos. Desde congelado, calienta en el microondas por 90 segundos o descongela en el refrigerador durante la noche.',
    imageAlt:
      'Moldes de huevo con camote dorados enfriándose en una rejilla con un molde de muffins al fondo',
  },
  'mp2-tofu-scramble-weekly-prep': {
    title: 'Revuelto de Tofu para la Semana',
    description:
      'Un vibrante revuelto vegano hecho con tofu desmenuzado, cúrcuma y vegetales coloridos. Cocina en lote el domingo y porciona para toda la semana.',
    ingredients: [
      '2 bloques (14 oz cada uno) de tofu extra firme, escurrido y prensado',
      '1 tablespoon de aceite de oliva',
      '1 cup de pimientos morrones picados (colores variados)',
      '1 cup de espinaca baby',
      '½ cup de cebolla morada picada',
      '3 dientes de ajo, picados finamente',
      '1 teaspoon de cúrcuma',
      '1 teaspoon de comino',
      '½ teaspoon de pimentón ahumado',
      '2 tablespoons de levadura nutricional',
      '1 tablespoon de salsa de soya o tamari',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Prensa el tofu por al menos 15 minutos usando una prensa para tofu o envuélvelo en toallas de papel con un objeto pesado encima.',
      'Calienta el aceite de oliva en un sartén grande a fuego medio-alto. Agrega la cebolla y los pimientos morrones; saltea por 4–5 minutos hasta que se ablanden.',
      'Agrega el ajo y cocina por 30 segundos hasta que suelte aroma.',
      'Desmenuza el tofu prensado directamente en el sartén con las manos, rompiéndolo en trozos pequeños similares a un revuelto.',
      'Agrega la cúrcuma, el comino, el pimentón ahumado y la salsa de soya. Mezcla bien y cocina por 5–6 minutos, revolviendo ocasionalmente, hasta que el tofu esté ligeramente dorado.',
      'Incorpora la espinaca y la levadura nutricional, cocinando por 1 minuto más hasta que la espinaca se marchite. Sazona con sal y pimienta.',
      'Deja enfriar completamente, luego divide en 5 recipientes para meal prep.',
    ],
    tips: [
      'El tofu extra firme funciona mejor — el tofu sedoso o suave quedará demasiado aguado.',
      'Agrega sal negra (kala namak) para un sabor realista a huevo.',
      'Acompaña cada porción con pan tostado, tortillas o papas asadas para una comida completa.',
    ],
    storageInstructions:
      'Guarda en recipientes herméticos en el refrigerador por hasta 5 días. Se puede congelar por hasta 1 mes, pero la textura puede ablandarse un poco.',
    reheatingInstructions:
      'Calienta en el microondas por 1–2 minutos, revolviendo a la mitad. O recalienta en un sartén a fuego medio por 3 minutos.',
    imageAlt:
      'Revuelto de tofu amarillo brillante con pimientos morrones coloridos y espinaca servido en un recipiente de vidrio para meal prep',
  },
  'mp2-microwave-spinach-egg-cups': {
    title: 'Vasitos de Huevo con Espinaca al Microondas',
    description:
      'El desayuno alto en proteína más fácil que puedes preparar — solo rompe, mezcla y calienta en el microondas. Perfecto para porciones bariátricas con limpieza mínima.',
    ingredients: [
      '8 huevos grandes',
      '2 cups de espinaca baby fresca, finamente picada',
      '¼ cup de tomate picado',
      '¼ cup de leche de almendras sin azúcar',
      '¼ teaspoon de ajo en polvo',
      '¼ teaspoon de cebolla en polvo',
      'Sal y pimienta al gusto',
      'Aceite en spray',
    ],
    instructions: [
      'Rocía ligeramente 4 tazas o ramequines aptos para microondas con aceite en spray.',
      'En un bowl, bate los huevos con la leche de almendras, el ajo en polvo, la cebolla en polvo, la sal y la pimienta.',
      'Divide la espinaca picada y el tomate entre las tazas.',
      'Vierte la mezcla de huevo equitativamente en cada taza, llenando aproximadamente ¾ de su capacidad. Revuelve suavemente.',
      'Calienta cada vasito individualmente en el microondas a potencia alta por 60–90 segundos, revisando a los 60 segundos. El huevo debe estar apenas cuajado en el centro.',
      'Deja reposar por 1 minuto antes de comer — el huevo seguirá cocinándose ligeramente con el calor residual.',
    ],
    tips: [
      'Preporciona los ingredientes secos en las tazas la noche anterior para que solo agregues los huevos por la mañana.',
      'Para meal prep, mezcla toda la mezcla de huevo y guárdala en un frasco — vierte en una taza cada mañana.',
      'Mantén las porciones pequeñas (2 huevos por porción) para comidas cómodas aptas para pacientes bariátricos.',
    ],
    storageInstructions:
      'La mezcla de huevo preparada se conserva en el refrigerador por hasta 2 días. Los vasitos de huevo cocidos se disfrutan mejor frescos, pero se pueden refrigerar por 1 día.',
    reheatingInstructions:
      'Calienta los vasitos de huevo cocidos en el microondas por 30 segundos. Se preparan mejor frescos cada mañana usando los ingredientes preporcionados.',
    imageAlt:
      'Vasito de huevo esponjoso con espinaca en una taza de cerámica blanca con trozos visibles de espinaca verde y tomate picado',
  },
  'mp2-lentil-banana-pancake-stacks': {
    title: 'Torres de Hotcakes de Lenteja y Plátano',
    description:
      'Hotcakes secretamente saludables hechos con harina de lenteja roja y plátanos maduros, apilados y congelados para desayunos entre semana que les encantan a los niños.',
    ingredients: [
      '1 cup de harina de lenteja roja (o muele lentejas rojas secas en una licuadora)',
      '1 cup de harina de avena',
      '2 plátanos maduros, machacados',
      '1¼ cups de leche de avena',
      '2 tablespoons de jarabe de arce',
      '1 tablespoon de linaza molida mezclada con 3 tablespoons de agua (huevo de linaza)',
      '1 teaspoon de polvo para hornear',
      '½ teaspoon de bicarbonato de sodio',
      '1 teaspoon de extracto de vainilla',
      '½ teaspoon de canela',
      'Una pizca de sal',
      'Aceite de coco para cocinar',
    ],
    instructions: [
      'Prepara el huevo de linaza mezclando la linaza molida con agua; deja reposar por 5 minutos hasta que se forme un gel.',
      'En un bowl grande, combina la harina de lenteja, la harina de avena, el polvo para hornear, el bicarbonato de sodio, la canela y la sal.',
      'En un bowl aparte, machaca los plátanos y mezcla con la leche de avena, el jarabe de arce, el extracto de vainilla y el huevo de linaza.',
      'Vierte los ingredientes húmedos sobre los secos y revuelve hasta que apenas se combinen — no mezcles de más. Algunos grumos están bien.',
      'Calienta un sartén antiadherente o plancha a fuego medio y agrega una pequeña cantidad de aceite de coco.',
      'Vierte ¼ cup de masa por hotcake en el sartén. Cocina por 2–3 minutos hasta que se formen burbujas en la superficie, luego voltea y cocina 1–2 minutos más.',
      'Deja enfriar los hotcakes completamente en una rejilla, luego apílalos con papel pergamino entre cada uno.',
      'Coloca las torres en bolsas para congelador, saca el aire y congela en posición plana.',
    ],
    tips: [
      'La harina de lenteja roja se integra perfectamente y los niños no la notan — solo agrega proteína y fibra.',
      'Coloca cuadrados de papel pergamino entre los hotcakes para que no se peguen en el congelador.',
      'El lote rinde aproximadamente 18 hotcakes — congela en torres de 3 para porcionar fácilmente.',
    ],
    storageInstructions:
      'Congela con pergamino entre capas en bolsas con cierre por hasta 3 meses. Refrigera por hasta 4 días.',
    reheatingInstructions:
      'Tuesta los hotcakes congelados directamente en la tostadora por 2 ciclos, o calienta en el microondas por 60–90 segundos. No necesitas descongelar.',
    imageAlt:
      'Torre de hotcakes dorados de lenteja y plátano con rodajas de plátano encima y un chorrito de jarabe de arce',
  },
  'mp2-peanut-butter-overnight-oats': {
    title: 'Avena Nocturna con Crema de Cacahuate',
    description:
      'Avena cremosa y llenadora preparada durante la noche con crema de cacahuate y plátano. Cuesta menos de $1 por porción y no requiere cocción — ideal para mañanas ajetreadas en la universidad.',
    ingredients: [
      '2½ cups de avena en hojuelas',
      '2½ cups de leche de soya sin azúcar',
      '5 tablespoons de crema de cacahuate natural',
      '5 tablespoons de semillas de chía',
      '2 plátanos maduros, rebanados',
      '3 tablespoons de jarabe de arce',
      '1 teaspoon de extracto de vainilla',
      '½ teaspoon de canela',
      'Una pizca de sal',
    ],
    instructions: [
      'En un bowl grande, combina la avena, la leche de soya, las semillas de chía, el jarabe de arce, el extracto de vainilla, la canela y la sal. Mezcla bien.',
      'Divide la mezcla de avena equitativamente entre 5 frascos o recipientes (aproximadamente ¾ cup por frasco).',
      'Agrega 1 tablespoon de crema de cacahuate sobre cada frasco — puedes mezclarla o dejarla encima.',
      'Coloca rodajas de plátano sobre cada porción.',
      'Sella bien y refrigera por al menos 4 horas o durante toda la noche.',
      'Por la mañana, revuelve todo junto y come frío o a temperatura ambiente.',
    ],
    tips: [
      'Compra avena, crema de cacahuate y plátanos a granel para mantener el costo muy por debajo de $1 por porción.',
      'Sustituye la crema de cacahuate por mantequilla de semilla de girasol si tienes alergia a los frutos secos.',
      'La avena se espesa durante la noche — agrega un chorrito de leche por la mañana si prefieres una consistencia más líquida.',
    ],
    storageInstructions:
      'Los frascos sellados se conservan en el refrigerador por hasta 5 días. No congeles — la textura se vuelve pastosa.',
    reheatingInstructions:
      'Se disfruta mejor frío o a temperatura ambiente. Se puede calentar en el microondas por 1–2 minutos si lo prefieres tibio.',
    imageAlt:
      'Frasco de vidrio con avena nocturna cremosa de crema de cacahuate cubierta con rodajas de plátano y un chorrito de crema de cacahuate',
  },
  'mp2-mediterranean-egg-bake': {
    title: 'Horneado de Huevo Mediterráneo',
    description:
      'Un horneado de huevo sustancioso cargado de vegetales con tomates deshidratados, aceitunas y espinaca — córtalo en porciones para una alimentación postparto fácil durante toda la semana.',
    ingredients: [
      '12 huevos grandes',
      '3 cups de espinaca baby fresca',
      '½ cup de tomates deshidratados (en aceite), picados',
      '⅓ cup de aceitunas Kalamata, cortadas a la mitad',
      '½ cup de queso feta desmenuzado',
      '½ cup de cebolla morada picada',
      '¼ cup de leche entera',
      '2 dientes de ajo, picados finamente',
      '1 teaspoon de orégano seco',
      '½ teaspoon de sal',
      '¼ teaspoon de pimienta negra',
      'Aceite en spray',
    ],
    instructions: [
      'Precalienta el horno a 375°F (190°C). Rocía un molde de 9×13 pulgadas con aceite en spray.',
      'Distribuye la espinaca de manera uniforme en el fondo del molde. Esparce los tomates deshidratados, las aceitunas, la cebolla morada y el ajo sobre la espinaca.',
      'En un bowl grande, bate los huevos con la leche, el orégano, la sal y la pimienta hasta que estén bien combinados.',
      'Vierte la mezcla de huevo sobre los vegetales en el molde.',
      'Espolvorea el queso feta desmenuzado uniformemente por encima.',
      'Hornea por 30–35 minutos hasta que el centro esté firme y la parte superior ligeramente dorada.',
      'Deja enfriar por 10 minutos, luego corta en 8 porciones iguales.',
    ],
    tips: [
      'Esta es una excelente fuente de ácido fólico, hierro y proteína — todos fundamentales para la recuperación postparto.',
      'Corta en porciones y guarda individualmente para que puedas tomar una con una sola mano.',
      'Acompaña con pan integral o fruta para una comida balanceada.',
    ],
    storageInstructions:
      'Envuelve las porciones individuales en plástico adherente o guarda en recipientes herméticos. Refrigera por hasta 5 días o congela por hasta 2 meses.',
    reheatingInstructions:
      'Calienta una porción individual en el microondas por 1–2 minutos. Desde congelado, calienta en el microondas por 2–3 minutos o descongela en el refrigerador durante la noche.',
    imageAlt:
      'Horneado de huevo mediterráneo rebanado en un molde mostrando las capas de espinaca, queso feta, tomates deshidratados y aceitunas',
  },
  'mp2-freezer-green-smoothie-packs': {
    title: 'Paquetes para Smoothie Verde para Congelar',
    description:
      'Bolsas preporcionadas para smoothie con espinaca, plátano y mango — solo agrega líquido y licúa. Un desayuno rico en ácido fólico y sin esfuerzo durante el embarazo.',
    ingredients: [
      '7 cups de espinaca baby fresca (1 cup por bolsa)',
      '3½ plátanos maduros, rebanados y congelados',
      '2 cups de trozos de mango congelado',
      '7 tablespoons de semillas de cáñamo',
      '7 tablespoons de linaza molida',
      'Leche de avena sin azúcar (¾ cup por smoothie — no se agrega a las bolsas)',
    ],
    instructions: [
      'Coloca 7 bolsas tamaño cuarto de galón para congelador o bolsas reutilizables de silicona sobre la encimera.',
      'En cada bolsa, agrega 1 cup de espinaca baby, ½ plátano rebanado y aproximadamente ¼ cup de trozos de mango congelado.',
      'Agrega 1 tablespoon de semillas de cáñamo y 1 tablespoon de linaza molida a cada bolsa.',
      'Saca la mayor cantidad de aire posible, sella y coloca en posición plana en el congelador.',
      'Cuando estés listo para licuar, vacía una bolsa en la licuadora, agrega ¾ cup de leche de avena y licúa hasta obtener una mezcla suave.',
      'Sirve en un vaso y disfruta inmediatamente.',
    ],
    tips: [
      'Rebana los plátanos previamente sobre una charola con papel pergamino y congela antes de embolsar para evitar que se peguen.',
      'Las semillas de cáñamo aportan omega-3 de origen vegetal y proteína sin cambiar el sabor.',
      'Etiqueta las bolsas con la fecha — los paquetes se conservan por hasta 3 meses en el congelador.',
    ],
    storageInstructions:
      'Guarda en posición plana en el congelador por hasta 3 meses. No descongeles antes de licuar — usa directamente desde congelado.',
    reheatingInstructions:
      'No aplica — licúa directamente desde congelado con leche de avena para mejores resultados.',
    imageAlt:
      'Siete bolsas para congelador etiquetadas llenas de espinaca verde, rodajas de plátano y trozos de mango sobre una encimera',
  },
  'mp2-bean-cheese-breakfast-quesadillas': {
    title: 'Quesadillas de Desayuno con Frijoles y Queso',
    description:
      'Quesadillas crujientes rellenas de frijoles pintos machacados y queso derretido, preparadas en lote y congeladas para un desayuno caliente que hasta los niños más exigentes adoran.',
    ingredients: [
      '2 latas (15 oz cada una) de frijoles pintos, escurridos y enjuagados',
      '8 tortillas de harina medianas (8 pulgadas)',
      '1½ cups de queso cheddar rallado',
      '½ cup de salsa suave',
      '1 teaspoon de comino',
      '½ teaspoon de ajo en polvo',
      '¼ teaspoon de chile en polvo (opcional para niños)',
      'Sal al gusto',
      'Aceite en spray o mantequilla para el sartén',
    ],
    instructions: [
      'En un bowl mediano, machaca los frijoles pintos con un tenedor o prensador de papas hasta que estén mayormente suaves con algunos trozos.',
      'Incorpora la salsa, el comino, el ajo en polvo, el chile en polvo y la sal.',
      'Extiende las tortillas y unta aproximadamente ¼ cup de la mezcla de frijoles en una mitad de cada tortilla.',
      'Cubre cada una con aproximadamente 3 tablespoons de queso cheddar rallado, luego dobla la otra mitad encima.',
      'Calienta un sartén grande a fuego medio con una ligera capa de aceite en spray. Cocina cada quesadilla por 2–3 minutos por lado hasta que esté dorada y el queso se haya derretido.',
      'Deja enfriar completamente en una rejilla, luego envuelve cada quesadilla en papel pergamino y coloca en una bolsa para congelador.',
    ],
    tips: [
      'Corta en triángulos antes de congelar — es más fácil para manos pequeñas y más rápido de recalentar.',
      'Usa frijoles refritos como atajo si no quieres machacar los tuyos.',
      'También son excelentes para la lonchera escolar — se descongelan para la hora del almuerzo.',
    ],
    storageInstructions:
      'Envuelve individualmente en papel pergamino y guarda en una bolsa para congelador por hasta 2 meses. Refrigera por hasta 4 días.',
    reheatingInstructions:
      'Recalienta desde congelado en un sartén seco a fuego medio-bajo por 3 minutos por lado, o calienta en el microondas por 90 segundos. En la freidora de aire a 350°F por 5 minutos también funciona muy bien.',
    imageAlt:
      'Quesadilla crujiente de frijoles y queso cortada en triángulos sobre un plato con un pequeño bowl de salsa',
  },
  'mp2-sweet-potato-porridge-cups': {
    title: 'Vasitos de Papilla de Camote',
    description:
      'Papilla de camote tibio y nutritivo preparada con anticipación en vasitos individuales — un desayuno reconfortante, sin gluten, rico en betacaroteno y hierro para nuevas mamás.',
    ingredients: [
      '2 camotes grandes, pelados y cortados en cubos (aproximadamente 3 cups)',
      '1 lata (13.5 oz) de leche de coco (light)',
      '2 tablespoons de mantequilla de almendras',
      '2 tablespoons de miel o jarabe de arce',
      '1 teaspoon de canela',
      '½ teaspoon de jengibre en polvo',
      '¼ teaspoon de nuez moscada',
      'Una pizca de sal',
      '5 tablespoons de semillas de calabaza (para decorar)',
    ],
    instructions: [
      'Coloca los cubos de camote en un bowl apto para microondas con 2 tablespoons de agua. Cubre y calienta en el microondas a potencia alta por 8–10 minutos hasta que estén muy suaves.',
      'Escurre el exceso de agua y machaca los camotes hasta obtener un puré suave.',
      'Incorpora la leche de coco, la mantequilla de almendras, la miel, la canela, el jengibre, la nuez moscada y la sal hasta que quede cremoso y bien combinado.',
      'Divide la papilla equitativamente entre 5 recipientes individuales aptos para microondas o frascos.',
      'Cubre cada uno con 1 tablespoon de semillas de calabaza. Sella y refrigera.',
    ],
    tips: [
      'También puedes hornear o hervir los camotes — el método que te resulte más fácil.',
      'Agrega una medida de colágeno en polvo por vasito para apoyo extra postparto en articulaciones y piel.',
      'Las semillas de calabaza aportan zinc y hierro, ambos importantes para la recuperación.',
    ],
    storageInstructions:
      'Guarda sellados en el refrigerador por hasta 5 días. Congela (sin las semillas de calabaza) por hasta 2 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2 minutos, revolviendo a la mitad. Agrega un chorrito de leche si la papilla se ha espesado demasiado.',
    imageAlt:
      'Papilla cremosa anaranjada de camote en un bowl blanco cubierta con semillas de calabaza y un toque de canela',
  },
  'mp2-high-fiber-bran-muffins': {
    title: 'Muffins de Salvado Altos en Fibra',
    description:
      'Muffins densos y naturalmente dulces de salvado cargados de fibra para apoyar la salud cardíaca y el manejo del colesterol. Congela un lote para la semana.',
    ingredients: [
      '2 cups de salvado de trigo',
      '1 cup de harina de trigo integral',
      '⅓ cup de puré de manzana sin azúcar',
      '¼ cup de aceite de coco, derretido',
      '⅓ cup de melaza',
      '¼ cup de jarabe de arce',
      '1 cup de leche de avena',
      '1 tablespoon de linaza molida mezclada con 3 tablespoons de agua',
      '1 teaspoon de bicarbonato de sodio',
      '1 teaspoon de canela',
      '½ teaspoon de sal',
      '½ cup de pasas',
    ],
    instructions: [
      'Precalienta el horno a 375°F (190°C). Coloca capacillos de papel en un molde para 12 muffins.',
      'Prepara el huevo de linaza mezclando la linaza molida con agua; deja reposar por 5 minutos.',
      'En un bowl grande, combina el salvado de trigo, la harina de trigo integral, el bicarbonato de sodio, la canela y la sal.',
      'En un bowl aparte, bate el puré de manzana, el aceite de coco derretido, la melaza, el jarabe de arce, la leche de avena y el huevo de linaza.',
      'Vierte los ingredientes húmedos sobre los secos y revuelve hasta que apenas se combinen. Incorpora las pasas.',
      'Divide la masa equitativamente entre los moldes para muffins — llena aproximadamente ¾ de su capacidad.',
      'Hornea por 20–22 minutos hasta que un palillo insertado en el centro salga limpio.',
      'Deja enfriar en el molde por 5 minutos, luego transfiere a una rejilla para enfriar completamente.',
    ],
    tips: [
      'La fibra soluble del salvado y la avena puede ayudar a reducir el colesterol LDL con el tiempo.',
      'Estos muffins son intencionalmente poco dulces — la melaza aporta profundidad sin exceso de azúcar.',
      'Envuelve individualmente para fácil acceso al congelador.',
    ],
    storageInstructions:
      'Guarda en un recipiente hermético a temperatura ambiente por 3 días, en el refrigerador por 7 días, o en el congelador por hasta 3 meses.',
    reheatingInstructions:
      'Calienta un muffin congelado en el microondas por 30–45 segundos. O descongela a temperatura ambiente por 1–2 horas.',
    imageAlt:
      'Muffins de salvado dorado oscuro con pasas visibles acomodados en una rejilla para enfriar con una servilleta de lino',
  },

  // ============================================================
  // ALMUERZO (13 recetas)
  // ============================================================
  'mp2-lentil-soup-for-the-week': {
    title: 'Sopa de Lentejas para la Semana',
    description:
      'Una gran sopa de lentejas económica que cuesta centavos por porción y sabe aún mejor al día siguiente. Se congela de maravilla para semanas de almuerzos.',
    ingredients: [
      '2 cups de lentejas verdes o cafés secas, enjuagadas',
      '1 cebolla grande, picada',
      '3 zanahorias, peladas y picadas',
      '3 tallos de apio, picados',
      '4 dientes de ajo, picados finamente',
      '1 lata (14 oz) de tomates picados',
      '8 cups de caldo de verduras',
      '2 tablespoons de aceite de oliva',
      '1 teaspoon de comino',
      '1 teaspoon de pimentón ahumado',
      '½ teaspoon de cúrcuma',
      '2 hojas de laurel',
      'Jugo de 1 limón',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Calienta el aceite de oliva en una olla grande o cacerola tipo Dutch oven a fuego medio. Agrega la cebolla, las zanahorias y el apio. Saltea por 5 minutos hasta que se ablanden.',
      'Agrega el ajo, el comino, el pimentón ahumado y la cúrcuma. Cocina por 1 minuto hasta que suelte aroma.',
      'Agrega las lentejas, los tomates picados, el caldo de verduras y las hojas de laurel. Revuelve para combinar.',
      'Lleva a ebullición, luego reduce a fuego bajo. Tapa y cocina a fuego lento por 25–30 minutos hasta que las lentejas estén tiernas.',
      'Retira las hojas de laurel. Incorpora el jugo de limón y sazona con sal y pimienta.',
      'Para una textura más cremosa, usa una licuadora de inmersión para procesar parcialmente aproximadamente la mitad de la sopa.',
      'Deja enfriar completamente antes de dividir en recipientes.',
    ],
    tips: [
      'Esta receta rinde aproximadamente 10 cups de sopa — perfecto para congelar la mitad y refrigerar la otra mitad.',
      'Las lentejas son una de las fuentes de proteína más económicas — abastécete en tiendas a granel.',
      'La sopa se espesa al reposar; agrega agua o caldo al recalentar.',
    ],
    storageInstructions:
      'Refrigera en recipientes herméticos por hasta 6 días. Congela en porciones por hasta 3 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos, revolviendo una vez. Recalienta en la estufa a fuego medio por 5 minutos. Agrega un chorrito de caldo o agua si está muy espesa.',
    imageAlt:
      'Bowl humeante de sopa rústica de lentejas verdes con trozos de zanahoria y una rodaja de limón al lado',
  },
  'mp2-quinoa-tabbouleh-bowls': {
    title: 'Bowls de Tabulé con Quinoa',
    description:
      'Un refrescante tabulé mediterráneo sin cocción hecho con quinoa esponjosa en lugar de trigo bulgur, para un almuerzo sin gluten y saludable para el corazón que mejora al marinar.',
    ingredients: [
      '3 cups de quinoa cocida, enfriada',
      '1½ cups de perejil de hoja plana, finamente picado',
      '½ cup de menta fresca, finamente picada',
      '2 tomates medianos, picados',
      '1 pepino inglés, picado',
      '3 cebollas de cambray, cortadas en rodajas finas',
      '¼ cup de aceite de oliva extra virgen',
      '¼ cup de jugo de limón fresco (aproximadamente 2 limones)',
      '1 diente de ajo, picado finamente',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Si la quinoa no está precocida, cocina 1½ cups de quinoa seca según las instrucciones del paquete y extiende en una charola para enfriar rápidamente.',
      'En un bowl grande, combina la quinoa enfriada, el perejil, la menta, los tomates, el pepino y las cebollas de cambray.',
      'En un frasco pequeño o bowl, bate el aceite de oliva, el jugo de limón, el ajo, la sal y la pimienta.',
      'Vierte el aderezo sobre la mezcla de quinoa y revuelve hasta que todo quede uniformemente cubierto.',
      'Prueba y ajusta el sazón — debe saber fresco y con buen sabor a limón.',
      'Divide entre 5 recipientes para meal prep y sella bien.',
    ],
    tips: [
      'Los sabores se desarrollan y mejoran después de un día en el refrigerador, así que estos son ideales para meal prep.',
      'Usa quinoa precocida o congelada para hacer de esto un ensamblaje de verdad en 10 minutos.',
      'Agrega una lata de garbanzos escurridos para más proteína y fibra.',
    ],
    storageInstructions:
      'Refrigera en recipientes herméticos por hasta 5 días. Las hierbas se mantienen vibrantes por aproximadamente 4 días. No congeles.',
    reheatingInstructions:
      'Sirve frío — no necesita recalentamiento. Deja reposar a temperatura ambiente por 10 minutos antes de comer para mejor sabor.',
    imageAlt:
      'Bowl vibrante de tabulé de quinoa lleno de perejil fresco, tomates picados, pepino y una rodaja de limón',
  },
  'mp2-spicy-tofu-rice-bowls': {
    title: 'Bowls de Tofu Picante con Arroz',
    description:
      'Tofu crujiente horneado bañado en una salsa de gochujang sobre arroz esponjoso con vegetales encurtidos — un bowl de meal prep económico inspirado en la cocina coreana.',
    ingredients: [
      '2 bloques (14 oz cada uno) de tofu extra firme, escurrido, prensado y cortado en cubos',
      '3 cups de arroz jazmín cocido',
      '3 tablespoons de gochujang (pasta de chile coreano)',
      '2 tablespoons de salsa de soya',
      '1 tablespoon de aceite de sésamo',
      '1 tablespoon de vinagre de arroz',
      '1 tablespoon de jarabe de arce',
      '1 zanahoria grande, cortada en juliana',
      '1 cup de col morada rallada',
      '2 cebollas de cambray, rebanadas',
      '1 tablespoon de semillas de sésamo',
      '2 tablespoons de maicena',
    ],
    instructions: [
      'Precalienta el horno a 425°F (220°C) y forra una charola para hornear con papel pergamino.',
      'Mezcla el tofu prensado y cortado en cubos con la maicena hasta que esté uniformemente cubierto. Extiende en la charola en una sola capa.',
      'Hornea por 25–30 minutos, volteando a la mitad, hasta que esté dorado y crujiente.',
      'Mientras el tofu se hornea, bate el gochujang, la salsa de soya, el aceite de sésamo, el vinagre de arroz y el jarabe de arce en un bowl pequeño.',
      'Retira el tofu del horno y mezcla inmediatamente con la salsa de gochujang en un bowl grande.',
      'Arma los bowls: divide el arroz entre 5 recipientes, cubre con el tofu glaseado, la zanahoria en juliana, la col rallada y las cebollas de cambray.',
      'Espolvorea cada bowl con semillas de sésamo.',
    ],
    tips: [
      'La capa de maicena es clave para un tofu crujiente — no te la saltes.',
      'Encurte rápido las zanahorias en vinagre de arroz con una pizca de azúcar por 10 minutos para agregar frescura.',
      'Guarda la salsa aparte en recipientes pequeños si prefieres agregarla fresca.',
    ],
    storageInstructions:
      'Refrigera los bowls armados por hasta 4 días. El tofu está más crujiente los días 1–2. El arroz y el tofu se pueden congelar por separado por hasta 1 mes.',
    reheatingInstructions:
      'Calienta en el microondas por 2 minutos. Para un tofu más crujiente, recalienta por separado en un horno tostador o freidora de aire a 375°F por 3–4 minutos.',
    imageAlt:
      'Bowl colorido de meal prep con cubos de tofu crujiente glaseado, arroz jazmín, col rallada y zanahorias en juliana',
  },
  'mp2-black-bean-sweet-potato-chili': {
    title: 'Chili de Frijol Negro y Camote',
    description:
      'Un chili espeso y sustancioso de olla de cocción lenta cargado de frijoles negros y camotes que prácticamente se cocina solo. Rinde una gran cantidad para llenar el congelador.',
    ingredients: [
      '3 latas (15 oz cada una) de frijoles negros, escurridos y enjuagados',
      '2 camotes grandes, pelados y cortados en cubos de ½ pulgada',
      '1 lata (28 oz) de tomates triturados',
      '1 cebolla grande, picada',
      '1 pimiento verde, picado',
      '3 dientes de ajo, picados finamente',
      '2 cups de caldo de verduras',
      '2 tablespoons de chile en polvo',
      '1 tablespoon de comino',
      '1 teaspoon de pimentón ahumado',
      '½ teaspoon de pimienta de cayena (opcional)',
      'Sal y pimienta al gusto',
      'Jugo de 1 limón',
    ],
    instructions: [
      'Agrega todos los ingredientes excepto el jugo de limón a una olla de cocción lenta de 6 cuartos: frijoles negros, camotes, tomates triturados, cebolla, pimiento, ajo, caldo y todas las especias.',
      'Revuelve para combinar y tapa con la tapa.',
      'Cocina en BAJO por 6–8 horas o en ALTO por 3–4 horas, hasta que los camotes estén tiernos.',
      'Incorpora el jugo de limón y ajusta el sazón con sal y pimienta.',
      'Para un chili más espeso, machaca algunos camotes y frijoles contra el costado de la olla con una cuchara de madera.',
      'Deja enfriar completamente antes de porcionar en recipientes.',
    ],
    tips: [
      'Esta receta se escala fácilmente — duplícala si tienes una olla de cocción lenta lo suficientemente grande para aún más comidas congeladas.',
      'Los camotes aportan una cremosidad y dulzura natural que equilibra el picante.',
      'Decora con aguacate, cilantro o un chorrito de limón al servir.',
    ],
    storageInstructions:
      'Refrigera por hasta 6 días. Congela porciones individuales por hasta 3 meses. Las sopas y chilis se congelan excepcionalmente bien.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos, revolviendo a la mitad. En la estufa: recalienta a fuego medio por 5–7 minutos. Desde congelado, descongela en el refrigerador durante la noche o calienta en el microondas en modo descongelar.',
    imageAlt:
      'Chili espeso y rico de frijol negro y camote en un bowl blanco cubierto con rodajas de aguacate y cilantro',
  },
  'mp2-mediterranean-chickpea-salad': {
    title: 'Ensalada Mediterránea de Garbanzos',
    description:
      'Una ensalada fresca y crujiente sin cocción con garbanzos, pepino y un aderezo ácido de limón y hierbas. Empácala para almuerzos en el trabajo que no necesitan microondas.',
    ingredients: [
      '2 latas (15 oz cada una) de garbanzos, escurridos y enjuagados',
      '1 pepino inglés, picado',
      '1 pinta de tomates cherry, cortados a la mitad',
      '½ cup de aceitunas Kalamata, cortadas a la mitad',
      '½ cup de cebolla morada picada',
      '¼ cup de perejil fresco, picado',
      '3 tablespoons de aceite de oliva extra virgen',
      '3 tablespoons de vinagre de vino tinto',
      '1 tablespoon de jugo de limón',
      '1 teaspoon de orégano seco',
      '1 diente de ajo, picado finamente',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'En un bowl grande, combina los garbanzos, el pepino, los tomates cherry, las aceitunas, la cebolla morada y el perejil.',
      'En un frasco pequeño, combina el aceite de oliva, el vinagre de vino tinto, el jugo de limón, el orégano, el ajo, la sal y la pimienta. Agita vigorosamente hasta emulsionar.',
      'Vierte el aderezo sobre la ensalada y revuelve suavemente para cubrir todo de manera uniforme.',
      'Prueba y ajusta el sazón según sea necesario.',
      'Divide entre 5 recipientes para meal prep. Sella bien.',
    ],
    tips: [
      'Guarda el aderezo aparte hasta el día que comas cada porción para la textura más crujiente.',
      'Agrega un puñado de arúgula o lechugas mixtas a cada recipiente para más volumen.',
      'Esta ensalada está diseñada intencionalmente para oficinas sin microondas — cómela fría y disfrútala.',
    ],
    storageInstructions:
      'Refrigera por hasta 5 días. Mejor los días 1–3 cuando los vegetales están más crujientes. No congeles.',
    reheatingInstructions:
      'Sirve fría — no requiere recalentamiento. Deja reposar a temperatura ambiente por 10 minutos para mejor sabor.',
    imageAlt:
      'Ensalada mediterránea de garbanzos colorida en un recipiente transparente para meal prep con aceitunas, tomates y pepino visibles',
  },
  'mp2-spinach-lentil-dal': {
    title: 'Dal de Espinaca y Lentejas',
    description:
      'Un cremoso dal con especias indias hecho con lentejas rojas y espinaca en la Instant Pot. Los ingredientes antiinflamatorios apoyan el manejo del SOP de forma natural.',
    ingredients: [
      '1½ cups de lentejas rojas secas, enjuagadas',
      '4 cups de caldo de verduras',
      '3 cups de espinaca baby fresca',
      '1 lata (14 oz) de tomates picados',
      '1 cebolla grande, picada',
      '3 dientes de ajo, picados finamente',
      '1 tablespoon de jengibre fresco, rallado',
      '1 tablespoon de aceite de coco',
      '1 teaspoon de cúrcuma',
      '1 teaspoon de comino',
      '1 teaspoon de garam masala',
      '½ teaspoon de cilantro molido',
      '½ teaspoon de sal',
      'Jugo de ½ limón',
    ],
    instructions: [
      'Pon la Instant Pot en modo Saltear. Agrega el aceite de coco y la cebolla, cocina por 3 minutos hasta que esté translúcida.',
      'Agrega el ajo y el jengibre; cocina por 1 minuto hasta que suelte aroma.',
      'Agrega la cúrcuma, el comino, el garam masala y el cilantro molido. Revuelve por 30 segundos para tostar las especias.',
      'Agrega las lentejas rojas, los tomates picados y el caldo de verduras. Revuelve bien.',
      'Cancela el modo Saltear. Cierra la tapa y configura en Cocción a Presión en ALTO por 10 minutos con liberación natural.',
      'Una vez que la presión se libere naturalmente (aproximadamente 10 minutos), abre la tapa e incorpora la espinaca. El calor residual la marchitará inmediatamente.',
      'Incorpora el jugo de limón y sazona con sal. El dal se espesará al enfriarse.',
    ],
    tips: [
      'La cúrcuma y el jengibre tienen propiedades antiinflamatorias que pueden ayudar con los síntomas del SOP.',
      'Las lentejas rojas se deshacen completamente, creando una textura naturalmente cremosa sin ningún lácteo.',
      'Sirve sobre arroz o con naan — o disfrútalo solo para una opción más baja en carbohidratos.',
    ],
    storageInstructions:
      'Refrigera en recipientes herméticos por hasta 6 días. Congela porciones por hasta 3 meses — el dal se congela de maravilla.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos, revolviendo una vez. En la estufa: recalienta a fuego medio-bajo por 5 minutos, agregando un chorrito de agua o caldo ya que se espesa.',
    imageAlt:
      'Dal rico dorado-anaranjado de lentejas con espinaca marchita en un bowl oscuro, decorado con una rodaja de limón',
  },
  'mp2-freezer-bean-rice-burritos': {
    title: 'Burritos de Frijoles y Arroz para Congelar',
    description:
      'El meal prep universitario definitivo — económico, llenador e infinitamente personalizable. Prepara 10 burritos y guárdalos en el congelador para esas noches de estudio.',
    ingredients: [
      '2 latas (15 oz cada una) de frijoles pintos, escurridos y enjuagados',
      '3 cups de arroz blanco cocido',
      '1 cup de maíz congelado, descongelado',
      '1 cup de salsa (del nivel de picante que prefieras)',
      '1 teaspoon de comino',
      '1 teaspoon de chile en polvo',
      '½ teaspoon de ajo en polvo',
      '½ teaspoon de cebolla en polvo',
      '¼ cup de cilantro fresco, picado (opcional)',
      '10 tortillas de harina grandes (10 pulgadas)',
      '1 tablespoon de aceite de oliva',
      'Sal al gusto',
    ],
    instructions: [
      'Calienta el aceite de oliva en un sartén grande a fuego medio. Agrega los frijoles pintos, el comino, el chile en polvo, el ajo en polvo y la cebolla en polvo.',
      'Cocina por 3–4 minutos, machacando aproximadamente la mitad de los frijoles con un tenedor para una textura cremosa.',
      'Agrega el maíz y la salsa; revuelve y cocina por 2 minutos más. Retira del fuego.',
      'Incorpora el arroz cocido y el cilantro. Sazona con sal.',
      'Divide el relleno entre las tortillas (aproximadamente ½ cup por burrito). Enrolla bien: dobla la parte inferior hacia arriba, los lados hacia adentro y enrolla hacia adelante.',
      'Envuelve cada burrito en papel pergamino o aluminio. Coloca en una bolsa grande para congelador, saca el aire y congela en posición plana.',
    ],
    tips: [
      'El costo total por 10 burritos suele ser menos de $8 — eso es menos de $1 cada uno.',
      'Congela primero en posición plana sobre una charola, luego transfiere a bolsas para que no se peguen.',
      'Agrega sobrecitos de salsa picante del comedor universitario para sabor extra.',
    ],
    storageInstructions:
      'Congela envueltos individualmente por hasta 3 meses. Refrigera sin envolver por hasta 4 días.',
    reheatingInstructions:
      'Retira la envoltura, envuelve en una toalla de papel húmeda y calienta en el microondas desde congelado por 2½–3 minutos, volteando a la mitad. O descongela durante la noche y calienta en el microondas por 90 segundos.',
    imageAlt:
      'Fila de burritos bien enrollados sobre una charola para hornear, algunos cortados a la mitad mostrando el relleno de frijoles, arroz y maíz',
  },
  'mp2-japanese-tofu-bento-boxes': {
    title: 'Cajas Bento de Tofu Japonés',
    description:
      'Un almuerzo balanceado y hermoso estilo bento con tofu teriyaki, arroz con sésamo, edamame y jengibre encurtido. Ensambla el domingo y disfruta toda la semana.',
    ingredients: [
      '1 bloque (14 oz) de tofu extra firme, escurrido, prensado y cortado en rectángulos',
      '3 cups de arroz de grano corto cocido',
      '1 cup de edamame desgranado (congelado, descongelado)',
      '3 tablespoons de salsa de soya',
      '2 tablespoons de mirin',
      '1 tablespoon de vinagre de arroz',
      '1 tablespoon de jarabe de arce',
      '1 teaspoon de aceite de sésamo',
      '1 tablespoon de semillas de sésamo',
      '2 tablespoons de jengibre encurtido',
      '1 tablespoon de maicena',
      '1 tablespoon de aceite vegetal',
    ],
    instructions: [
      'Bate la salsa de soya, el mirin, el jarabe de arce y el aceite de sésamo para hacer la salsa teriyaki. Reserva.',
      'Seca las rebanadas de tofu y espolvorea ambos lados ligeramente con maicena.',
      'Calienta el aceite vegetal en un sartén antiadherente grande a fuego medio-alto. Fríe el tofu por 3–4 minutos por lado hasta que esté dorado y crujiente.',
      'Vierte la salsa teriyaki sobre el tofu en el sartén. Cocina por 1–2 minutos, volteando el tofu para glasear uniformemente, hasta que la salsa espese.',
      'Mezcla el arroz cocido con el vinagre de arroz y las semillas de sésamo.',
      'Arma las cajas bento: coloca el arroz con sésamo de un lado, el tofu glaseado en el centro, el edamame al lado y un montoncito de jengibre encurtido.',
    ],
    tips: [
      'Los recipientes estilo bento con compartimentos mantienen todo separado y con una presentación hermosa.',
      'Prepara la salsa teriyaki en un frasco — se conserva por 2 semanas en el refrigerador.',
      'Agrega pepino rebanado o brócoli al vapor para más vegetales y color.',
    ],
    storageInstructions:
      'Refrigera las cajas bento armadas por hasta 4 días. Guarda el jengibre encurtido en un recipiente pequeño aparte para mantener su textura crujiente.',
    reheatingInstructions:
      'Calienta toda la caja (excepto el jengibre encurtido) en el microondas por 1½–2 minutos. O disfruta el tofu frío — está delicioso de ambas formas.',
    imageAlt:
      'Caja bento ordenada con rebanadas de tofu teriyaki glaseado, arroz espolvoreado con sésamo, edamame verde brillante y jengibre encurtido rosa',
  },
  'mp2-middle-eastern-lentil-quinoa-bowls': {
    title: 'Bowls de Lentejas y Quinoa al Estilo Medio Oriente',
    description:
      'Bowls inspirados en la mujadara con cebollas caramelizadas, lentejas especiadas y quinoa esponjosa — un almuerzo profundamente satisfactorio, rico en ácido fólico para el embarazo.',
    ingredients: [
      '1 cup de lentejas verdes secas, enjuagadas',
      '1 cup de quinoa, enjuagada',
      '3 cebollas grandes, cortadas a la mitad y en rodajas finas',
      '3 tablespoons de aceite de oliva',
      '3 cups de caldo de verduras',
      '1 teaspoon de comino',
      '½ teaspoon de pimienta de Jamaica',
      '½ teaspoon de canela',
      '½ teaspoon de sal',
      '¼ teaspoon de pimienta negra',
      '¼ cup de perejil fresco, picado',
      'Yogur vegano natural para servir (opcional)',
    ],
    instructions: [
      'Calienta 2 tablespoons de aceite de oliva en un sartén grande a fuego medio. Agrega las cebollas rebanadas y cocina, revolviendo ocasionalmente, por 20–25 minutos hasta que estén profundamente doradas y caramelizadas. Reserva.',
      'Mientras tanto, en una olla, combina las lentejas con 2 cups de caldo de verduras. Lleva a ebullición, reduce el fuego y cocina a fuego lento por 15 minutos.',
      'Agrega la quinoa, el cup restante de caldo, el comino, la pimienta de Jamaica, la canela, la sal y la pimienta. Revuelve, tapa y cocina a fuego lento por otros 15 minutos hasta que la quinoa y las lentejas estén tiernas y el líquido se haya absorbido.',
      'Esponja con un tenedor y rocía con el tablespoon restante de aceite de oliva.',
      'Divide entre 6 recipientes y cubre cada uno con una generosa porción de cebollas caramelizadas y perejil fresco.',
    ],
    tips: [
      'Las cebollas caramelizadas son la estrella — no las apresures. A fuego bajo y lento es la clave.',
      'Las lentejas son una de las mejores fuentes alimenticias de ácido fólico, fundamental durante el embarazo.',
      'Una cucharada de yogur vegano agrega cremosidad y un contraste ácido.',
    ],
    storageInstructions:
      'Refrigera por hasta 5 días. Congela la base de lentejas y quinoa (sin los toppings frescos) por hasta 2 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2 minutos, revolviendo una vez. Agrega un chorrito de agua si es necesario. En la estufa: recalienta a fuego medio-bajo por 4–5 minutos.',
    imageAlt:
      'Bowl sustancioso de lentejas especiadas y quinoa cubierto con cebollas profundamente caramelizadas y perejil fresco',
  },
  'mp2-southern-collard-greens-and-white-beans': {
    title: 'Col Rizada Sureña con Frijoles Blancos',
    description:
      'Un clásico de la cocina sureña en versión vegana — col rizada ahumada y tierna cocinada a fuego lento con frijoles blancos hasta quedar suave y con un sabor profundo.',
    ingredients: [
      '1 manojo grande de col rizada (aproximadamente 1 lb), sin tallos, hojas picadas',
      '2 latas (15 oz cada una) de frijoles blancos cannellini, escurridos y enjuagados',
      '1 cebolla grande, picada',
      '3 dientes de ajo, picados finamente',
      '3 cups de caldo de verduras',
      '2 tablespoons de vinagre de sidra de manzana',
      '1 tablespoon de aceite de oliva',
      '1 teaspoon de pimentón ahumado',
      '1 teaspoon de humo líquido',
      '½ teaspoon de hojuelas de chile rojo',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Agrega todos los ingredientes a una olla de cocción lenta de 6 cuartos: col rizada, frijoles blancos, cebolla, ajo, caldo de verduras, vinagre de sidra de manzana, aceite de oliva, pimentón ahumado, humo líquido y hojuelas de chile rojo.',
      'Revuelve para combinar. La olla estará muy llena al principio — las hojas se reducirán dramáticamente.',
      'Tapa y cocina en BAJO por 6–8 horas o en ALTO por 3–4 horas.',
      'Sazona con sal, pimienta y vinagre adicional si es necesario.',
      'Sirve con el caldo de cocción — está lleno de nutrientes.',
      'Deja enfriar y divide en recipientes.',
    ],
    tips: [
      'El humo líquido es el secreto para obtener ese sabor ahumado y de larga cocción sin carne.',
      'El caldo de cocción está repleto de vitaminas — no lo tires.',
      'Sirve sobre arroz o con pan de maíz para una comida sureña completa.',
    ],
    storageInstructions:
      'Refrigera en recipientes herméticos por hasta 5 días. Congela incluyendo el caldo de cocción por hasta 3 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos. En la estufa: recalienta suavemente a fuego medio-bajo por 5 minutos con un chorrito de caldo.',
    imageAlt:
      'Bowl de col rizada tierna de color verde oscuro con frijoles blancos en un caldo ahumado y rico',
  },
  'mp2-microwave-stuffed-sweet-potatoes': {
    title: 'Camotes Rellenos al Microondas',
    description:
      'Camotes cocinados completamente en el microondas, rellenos de frijoles negros sazonados y toppings. Una comida completa apta para dormitorios en menos de 15 minutos.',
    ingredients: [
      '4 camotes medianos',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '½ cup de salsa',
      '1 teaspoon de comino',
      '½ teaspoon de chile en polvo',
      '¼ teaspoon de ajo en polvo',
      '1 aguacate, picado en cubos',
      '2 tablespoons de jugo de limón',
      '2 tablespoons de cilantro fresco, picado',
      'Sal al gusto',
    ],
    instructions: [
      'Lava los camotes y pincha cada uno varias veces con un tenedor.',
      'Envuelve cada camote en una toalla de papel húmeda. Calienta en el microondas individualmente a potencia alta por 5–7 minutos, o dos a la vez por 8–10 minutos, volteando a la mitad.',
      'Mientras se cocinan los camotes, mezcla los frijoles negros con la salsa, el comino, el chile en polvo, el ajo en polvo y la sal en un bowl apto para microondas. Calienta por 1–2 minutos.',
      'Corta cada camote a lo largo y esponja el interior con un tenedor.',
      'Vierte la mezcla de frijoles negros sazonados dentro de cada camote.',
      'Decora con aguacate picado, un chorrito de jugo de limón y cilantro.',
    ],
    tips: [
      'Prepara la mezcla de frijoles con anticipación y guarda en frascos — solo calienta en el microondas el camote y los frijoles cuando estés listo.',
      'Elige camotes de tamaño similar para que se cocinen parejo en el microondas.',
      'Toda esta comida se puede preparar solo con un microondas — perfecto para la vida en dormitorio.',
    ],
    storageInstructions:
      'Guarda los camotes cocidos y la mezcla de frijoles por separado en el refrigerador por hasta 4 días. Prepara el aguacate y el limón frescos cada día para evitar que se oscurezcan.',
    reheatingInstructions:
      'Calienta el camote en el microondas por 2 minutos y la mezcla de frijoles por 1 minuto. Ensambla fresco con los toppings fríos.',
    imageAlt:
      'Camote abierto cocinado en microondas relleno de frijoles negros sazonados, aguacate picado y cilantro fresco',
  },
  'mp2-indian-chickpea-spinach-curry': {
    title: 'Curry Indio de Garbanzos y Espinaca (Chana Saag)',
    description:
      'Un fragante curry de una sola olla con garbanzos y espinaca en una salsa de tomate especiada — naturalmente alto en proteína y suave para el estómago en porciones bariátricas.',
    ingredients: [
      '2 latas (15 oz cada una) de garbanzos, escurridos y enjuagados',
      '4 cups de espinaca baby fresca',
      '1 lata (14 oz) de tomates picados',
      '1 lata (14 oz) de leche de coco light',
      '1 cebolla grande, picada',
      '3 dientes de ajo, picados finamente',
      '1 tablespoon de jengibre fresco, rallado',
      '1 tablespoon de aceite de coco',
      '1 tablespoon de curry en polvo',
      '1 teaspoon de garam masala',
      '½ teaspoon de cúrcuma',
      '½ teaspoon de sal',
    ],
    instructions: [
      'Calienta el aceite de coco en una olla grande a fuego medio. Agrega la cebolla y cocina por 4–5 minutos hasta que se ablande.',
      'Agrega el ajo y el jengibre; cocina por 1 minuto hasta que suelte aroma.',
      'Incorpora el curry en polvo, el garam masala y la cúrcuma. Tuesta las especias por 30 segundos.',
      'Agrega los tomates picados y la leche de coco. Revuelve bien y lleva a fuego lento.',
      'Agrega los garbanzos y cocina por 15 minutos, revolviendo ocasionalmente, hasta que la salsa espese.',
      'Incorpora la espinaca y cocina por 2 minutos hasta que se marchite. Sazona con sal.',
      'Deja enfriar y divide entre 6 recipientes.',
    ],
    tips: [
      'Empieza con porciones pequeñas (½ cup) si eres paciente postbariátrico e incrementa según la tolerancia.',
      'Los garbanzos aportan proteína sin ser difíciles de digerir cuando se cocinan en salsa.',
      'Sirve con una pequeña porción de arroz o naan — o disfrútalo solo como un guiso espeso.',
    ],
    storageInstructions:
      'Refrigera por hasta 5 días. Congela porciones individuales por hasta 3 meses. El curry en realidad sabe mejor después de un día en el refrigerador.',
    reheatingInstructions:
      'Calienta en el microondas por 2 minutos, revolviendo una vez. En la estufa: recalienta suavemente a fuego medio por 4–5 minutos.',
    imageAlt:
      'Curry rojo-anaranjado rico de garbanzos y espinaca en un bowl blanco con hojas verdes de espinaca visibles',
  },
  'mp2-cold-sesame-peanut-noodle-bowls': {
    title: 'Bowls Fríos de Fideos con Sésamo y Cacahuate',
    description:
      'Fideos fríos bañados en una cremosa salsa de cacahuate y sésamo con vegetales crujientes — no requiere recalentamiento, lo que lo hace el almuerzo perfecto para oficinas sin microondas.',
    ingredients: [
      '12 oz de espagueti o fideos de arroz, cocidos y enfriados',
      '¼ cup de crema de cacahuate natural',
      '3 tablespoons de salsa de soya',
      '2 tablespoons de vinagre de arroz',
      '1 tablespoon de aceite de sésamo',
      '1 tablespoon de jarabe de arce',
      '1 tablespoon de sriracha (ajusta al gusto)',
      '1 tablespoon de jengibre fresco, rallado',
      '1 zanahoria grande, cortada en juliana',
      '1 cup de col morada rallada',
      '1 cup de edamame, desgranado y descongelado',
      '2 cebollas de cambray, rebanadas',
      '2 tablespoons de semillas de sésamo',
    ],
    instructions: [
      'Cocina los fideos según las instrucciones del paquete. Enjuaga bajo agua fría para detener la cocción y evitar que se peguen. Escurre bien.',
      'En un frasco o bowl, bate la crema de cacahuate, la salsa de soya, el vinagre de arroz, el aceite de sésamo, el jarabe de arce, la sriracha y el jengibre hasta que quede suave. Agrega 2 tablespoons de agua para diluir si es necesario.',
      'Mezcla los fideos enfriados con la salsa de cacahuate hasta que estén uniformemente cubiertos.',
      'Divide los fideos con salsa entre 5 recipientes.',
      'Cubre cada uno con zanahorias en juliana, col morada, edamame, cebollas de cambray y semillas de sésamo.',
      'Sella bien — estos se sirven fríos.',
    ],
    tips: [
      'Mezcla los fideos con un poquito de aceite de sésamo después de enjuagarlos para evitar que se apelmacen.',
      'Guarda salsa extra en un frasco en el refrigerador — los fideos absorben la salsa con el tiempo, así que puedes agregar más.',
      'Los fideos de arroz hacen esto libre de gluten — solo sustituye el espagueti.',
    ],
    storageInstructions:
      'Refrigera por hasta 4 días. Los fideos absorben la salsa con el tiempo, así que ten salsa extra a la mano. No congeles.',
    reheatingInstructions:
      'Sirve frío — esta comida está diseñada para no necesitar microondas. Deja reposar a temperatura ambiente por 5 minutos antes de comer.',
    imageAlt:
      'Bowl colorido de fideos fríos con salsa de cacahuate, zanahorias en juliana, col morada y semillas de sésamo',
  },

  // ============================================================
  // CENA (13 recetas)
  // ============================================================
  'mp2-sheet-pan-tofu-and-broccoli': {
    title: 'Tofu y Brócoli en Charola',
    description:
      'Tofu crujiente en charola y brócoli asado bañados en una sabrosa salsa de inspiración asiática. Una charola, limpieza mínima y perfectamente porcionable para la semana.',
    ingredients: [
      '1 bloque (14 oz) de tofu extra firme, escurrido, prensado y cortado en cubos',
      '4 cups de floretes de brócoli',
      '2 tablespoons de salsa de soya',
      '1 tablespoon de aceite de sésamo',
      '1 tablespoon de vinagre de arroz',
      '1 tablespoon de jarabe de arce',
      '1 tablespoon de maicena',
      '2 dientes de ajo, picados finamente',
      '1 teaspoon de jengibre fresco, rallado',
      '2 tablespoons de aceite de oliva',
      '1 tablespoon de semillas de sésamo',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Precalienta el horno a 425°F (220°C). Forra una charola grande para hornear con papel pergamino.',
      'Mezcla los cubos de tofu con 1 tablespoon de aceite de oliva y la maicena hasta que estén uniformemente cubiertos. Extiende en una mitad de la charola.',
      'Mezcla el brócoli con el tablespoon restante de aceite de oliva, sal y pimienta. Extiende en la otra mitad de la charola.',
      'Asa por 25–30 minutos, volteando el tofu a la mitad, hasta que el tofu esté dorado y el brócoli tenga bordes chamuscados.',
      'Mientras todo se asa, bate la salsa de soya, el aceite de sésamo, el vinagre de arroz, el jarabe de arce, el ajo y el jengibre.',
      'Retira la charola del horno y rocía la salsa sobre el tofu y el brócoli. Mezcla suavemente.',
      'Espolvorea con semillas de sésamo y divide entre 4 recipientes.',
    ],
    tips: [
      'No amontones la charola — extiende todo en una sola capa para máxima crocancia.',
      'Prensar bien el tofu es crucial; entre más humedad saques, más crujiente quedará.',
      'Sirve sobre arroz, arroz de coliflor o fideos para una comida completa.',
    ],
    storageInstructions:
      'Refrigera en recipientes herméticos por hasta 4 días. El tofu está más crujiente el día 1, pero sigue delicioso hasta el día 4.',
    reheatingInstructions:
      'Calienta en el microondas por 1½–2 minutos. Para resultados más crujientes, recalienta el tofu en un horno tostador o freidora de aire a 375°F por 4 minutos.',
    imageAlt:
      'Cubos de tofu dorado crujiente y floretes de brócoli chamuscado en una charola con papel pergamino rociados con salsa de sésamo',
  },
  'mp2-slow-cooker-lentil-bolognese': {
    title: 'Boloñesa de Lentejas en Olla de Cocción Lenta',
    description:
      'Una rica salsa boloñesa con sabor a carne hecha completamente con lentejas, cocinada a fuego bajo y lento. Se congela en porciones para tener siempre una salsa casera lista.',
    ingredients: [
      '1½ cups de lentejas cafés o verdes secas, enjuagadas',
      '1 lata (28 oz) de tomates triturados',
      '1 lata (6 oz) de pasta de tomate',
      '1 cebolla grande, finamente picada',
      '2 zanahorias, peladas y finamente picadas',
      '2 tallos de apio, finamente picados',
      '4 dientes de ajo, picados finamente',
      '2 cups de caldo de verduras',
      '2 tablespoons de aceite de oliva',
      '2 teaspoons de sazonador italiano',
      '1 teaspoon de pimentón ahumado',
      '1 hoja de laurel',
      'Sal y pimienta al gusto',
      '1 lb de pasta de tu elección (para servir)',
    ],
    instructions: [
      'Agrega todos los ingredientes excepto la pasta a la olla de cocción lenta: lentejas, tomates triturados, pasta de tomate, cebolla, zanahorias, apio, ajo, caldo, aceite de oliva, sazonador italiano, pimentón ahumado y hoja de laurel.',
      'Revuelve bien para combinar todo.',
      'Tapa y cocina en BAJO por 6–8 horas o en ALTO por 3–4 horas, hasta que las lentejas estén completamente tiernas.',
      'Retira la hoja de laurel. Revuelve vigorosamente — algunas lentejas se desharán creando una textura espesa y "carnosa".',
      'Sazona con sal y pimienta al gusto.',
      'Porciona la salsa en recipientes. Cocina la pasta fresca al momento de servir, o cocina en lote y guarda por separado.',
    ],
    tips: [
      'Esta salsa es alta en fibra soluble de las lentejas, lo que ayuda a reducir el colesterol LDL.',
      'Pica los vegetales finamente para que se disuelvan en la salsa y quede con textura suave.',
      'Congela la salsa en porciones de 2 cups — cada porción alcanza para aproximadamente 2 porciones de pasta.',
    ],
    storageInstructions:
      'Refrigera la salsa por hasta 6 días. Congela en porciones por hasta 3 meses. Guarda la pasta por separado para evitar que se ablande.',
    reheatingInstructions:
      'Descongela durante la noche si está congelada. Calienta la salsa en el microondas por 2 minutos y mezcla con pasta recién cocida. O recalienta en la estufa a fuego medio por 5 minutos.',
    imageAlt:
      'Bowl de espagueti cubierto con una espesa y rústica salsa boloñesa de lentejas decorada con hojas frescas de albahaca',
  },
  'mp2-instant-pot-white-bean-stew': {
    title: 'Estofado de Frijoles Blancos y Verduras en Instant Pot',
    description:
      'Un estofado sustancioso y económico cargado de frijoles blancos, papas y kale. Pon todo en la Instant Pot y deja que la presión haga el trabajo.',
    ingredients: [
      '2 latas (15 oz cada una) de frijoles blancos cannellini, escurridos y enjuagados',
      '3 papas Yukon Gold medianas, cortadas en cubos de ½ pulgada',
      '2 cups de kale picado, sin tallos',
      '1 cebolla grande, picada',
      '3 dientes de ajo, picados finamente',
      '1 lata (14 oz) de tomates picados',
      '4 cups de caldo de verduras',
      '2 tablespoons de aceite de oliva',
      '1 teaspoon de tomillo seco',
      '1 teaspoon de pimentón ahumado',
      '½ teaspoon de romero, picado finamente',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Pon la Instant Pot en modo Saltear. Agrega el aceite de oliva y la cebolla picada; cocina por 3 minutos.',
      'Agrega el ajo, el tomillo, el pimentón ahumado y el romero. Revuelve por 30 segundos.',
      'Agrega las papas, los frijoles blancos, los tomates picados y el caldo de verduras. Revuelve bien.',
      'Cancela el modo Saltear. Cierra la tapa, coloca la válvula en sellado y cocina en ALTA PRESIÓN por 8 minutos.',
      'Libera la presión rápidamente. Abre la tapa e incorpora el kale picado — el calor residual lo marchitará en 2 minutos.',
      'Machaca algunos frijoles y papas contra el costado de la olla con una cuchara para una textura más cremosa.',
      'Sazona con sal y pimienta. Deja enfriar antes de porcionar.',
    ],
    tips: [
      'Las papas Yukon Gold mantienen mejor su forma bajo presión — no sustituyas por papas russet.',
      'Esta es una comida completa en una sola olla — no necesitas acompañamientos.',
      'Duplica la receta si tu Instant Pot es lo suficientemente grande para aún más comidas congeladas.',
    ],
    storageInstructions:
      'Refrigera por hasta 5 días. Congela en porciones individuales por hasta 3 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos, revolviendo una vez. Agrega un chorrito de caldo si el estofado se ha espesado demasiado.',
    imageAlt:
      'Bowl humeante de estofado de frijoles blancos con trozos de papa y kale marchito en un bowl de cerámica rústica',
  },
  'mp2-quinoa-stuffed-peppers': {
    title: 'Pimientos Rellenos de Quinoa',
    description:
      'Pimientos coloridos rellenos de quinoa sazonada, frijoles negros, maíz y especias — una comida completa en un bowl comestible natural, diseñada para una nutrición favorable al SOP.',
    ingredients: [
      '6 pimientos grandes (de cualquier color), con la parte superior cortada y sin semillas',
      '2 cups de quinoa cocida',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '1 cup de maíz congelado, descongelado',
      '1 cup de salsa',
      '1 teaspoon de comino',
      '1 teaspoon de chile en polvo',
      '½ teaspoon de ajo en polvo',
      '¼ cup de cilantro fresco, picado',
      '2 tablespoons de aceite de oliva',
      'Sal y pimienta al gusto',
      '¼ cup de levadura nutricional (topping opcional)',
    ],
    instructions: [
      'Precalienta el horno a 375°F (190°C). Engrasa ligeramente un molde para horno lo suficientemente grande para sostener los 6 pimientos en posición vertical.',
      'En un bowl grande, combina la quinoa cocida, los frijoles negros, el maíz, la salsa, el comino, el chile en polvo, el ajo en polvo, el cilantro y el aceite de oliva. Sazona con sal y pimienta.',
      'Rellena cada pimiento generosamente con la mezcla de quinoa, presionando firmemente.',
      'Coloca los pimientos rellenos en posición vertical en el molde. Agrega ¼ cup de agua al fondo del molde.',
      'Cubre bien con papel aluminio y hornea por 25 minutos.',
      'Retira el aluminio, espolvorea con levadura nutricional si la usas, y hornea por otros 10 minutos sin cubrir hasta que los pimientos estén tiernos.',
      'Deja enfriar ligeramente antes de porcionar en recipientes.',
    ],
    tips: [
      'La quinoa tiene un índice glucémico bajo y es alta en proteína — ideal para manejar el azúcar en sangre con SOP.',
      'Coloca los pimientos en un molde para muffins si no se mantienen en pie en el molde para hornear.',
      'Se recalientan de maravilla y los pimientos mantienen su forma muy bien.',
    ],
    storageInstructions:
      'Refrigera los pimientos rellenos en recipientes herméticos por hasta 5 días. Congela (envuelve individualmente) por hasta 2 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos hasta que esté bien caliente. Desde congelado, descongela en el refrigerador durante la noche, luego calienta en el microondas por 3 minutos.',
    imageAlt:
      'Seis pimientos coloridos rellenos de quinoa en un molde para hornear, mostrando el relleno de quinoa, frijoles negros y maíz',
  },
  'mp2-freezer-thai-sweet-potato-curry': {
    title: 'Curry Tailandés de Camote para Congelar',
    description:
      'Un lujoso curry de inspiración tailandesa con camotes y garbanzos en leche de coco, preparado en grandes lotes y congelado en porciones para cenas entre semana sin esfuerzo.',
    ingredients: [
      '3 camotes grandes, pelados y cortados en cubos',
      '1 lata (15 oz) de garbanzos, escurridos y enjuagados',
      '2 latas (13.5 oz cada una) de leche de coco light',
      '3 tablespoons de pasta de curry rojo tailandés',
      '1 cebolla grande, picada',
      '3 dientes de ajo, picados finamente',
      '1 tablespoon de jengibre fresco, rallado',
      '1 tablespoon de aceite de coco',
      '2 cups de espinaca baby fresca',
      '1 tablespoon de salsa de soya',
      '1 tablespoon de jugo de limón',
      '1 tablespoon de azúcar morena o azúcar de coco',
      'Albahaca fresca para decorar',
    ],
    instructions: [
      'Calienta el aceite de coco en una olla grande a fuego medio. Saltea la cebolla por 3–4 minutos.',
      'Agrega el ajo, el jengibre y la pasta de curry. Cocina por 1 minuto, revolviendo constantemente.',
      'Agrega los cubos de camote y revuelve para cubrirlos con la pasta de curry.',
      'Vierte la leche de coco, la salsa de soya y el azúcar morena. Lleva a fuego lento.',
      'Tapa y cocina por 20 minutos hasta que los camotes estén tiernos.',
      'Agrega los garbanzos y la espinaca; revuelve por 2 minutos hasta que la espinaca se marchite.',
      'Incorpora el jugo de limón. Deja enfriar completamente.',
      'Porciona en recipientes aptos para congelador, dejando ½ pulgada de espacio para la expansión.',
    ],
    tips: [
      'Congela en recipientes planos o bolsas con cierre para un descongelado más rápido.',
      'Los camotes se mantienen extremadamente bien después de congelar y recalentar.',
      'Sirve sobre arroz jazmín, arroz de coliflor o con pan naan.',
    ],
    storageInstructions:
      'Refrigera por hasta 5 días. Congela en porciones individuales por hasta 3 meses. Descongela en el refrigerador durante la noche antes de recalentar.',
    reheatingInstructions:
      'Descongela en el refrigerador durante la noche. Calienta en el microondas por 3 minutos, revolviendo a la mitad. En la estufa: recalienta suavemente a fuego medio-bajo por 8 minutos.',
    imageAlt:
      'Curry tailandés rojo-anaranjado rico con trozos de camote y garbanzos en una salsa de leche de coco, decorado con albahaca fresca',
  },
  'mp2-air-fryer-crispy-tofu-bowls': {
    title: 'Bowls de Tofu Crujiente en Freidora de Aire',
    description:
      'Tofu ultra crujiente frito en freidora de aire servido sobre arroz con vegetales encurtidos rápidos y un chorrito de mayonesa picante. Económico para universitarios con máximo sabor.',
    ingredients: [
      '1 bloque (14 oz) de tofu extra firme, prensado y cortado en cubos',
      '2 cups de arroz jazmín cocido',
      '2 tablespoons de salsa de soya',
      '1 tablespoon de aceite de sésamo',
      '2 tablespoons de maicena',
      '1 zanahoria grande, cortada en juliana',
      '½ pepino inglés, cortado en rodajas finas',
      '2 tablespoons de vinagre de arroz',
      '1 teaspoon de azúcar',
      '2 tablespoons de mayonesa vegana',
      '1 teaspoon de sriracha',
      '1 tablespoon de semillas de sésamo',
    ],
    instructions: [
      'Prensa el tofu por al menos 15 minutos, luego corta en cubos de 1 pulgada. Mezcla con la salsa de soya y el aceite de sésamo, luego cubre uniformemente con maicena.',
      'Precalienta la freidora de aire a 400°F (200°C). Acomoda el tofu en una sola capa (trabaja en tandas si es necesario).',
      'Fríe en aire por 15–18 minutos, sacudiendo la canasta cada 5 minutos, hasta que el tofu esté dorado y crujiente por todos lados.',
      'Prepara un encurtido rápido con las zanahorias y el pepino: mezcla con vinagre de arroz, azúcar y una pizca de sal. Deja reposar mientras se cocina el tofu.',
      'Mezcla la mayonesa vegana con la sriracha para hacer el aderezo picante.',
      'Arma los bowls: arroz en la base, tofu crujiente de un lado, vegetales encurtidos del otro.',
      'Rocía con la mayonesa picante y espolvorea semillas de sésamo por encima.',
    ],
    tips: [
      'La freidora de aire produce el tofu más crujiente — mucho mejor que el horneado, y usa menos aceite que la fritura.',
      'Cocina todo el tofu en tanda: fríelo todo en aire, guarda por separado y agrégalo a los bowls durante la semana.',
      'Los vegetales encurtidos rápidos se pueden hacer a granel y guardar en un frasco por una semana.',
    ],
    storageInstructions:
      'Guarda los componentes por separado: arroz, tofu, vegetales encurtidos y salsa en sus propios recipientes. Refrigera por hasta 4 días.',
    reheatingInstructions:
      'Recalienta el tofu en la freidora de aire a 375°F por 3 minutos. Calienta el arroz en el microondas por 1 minuto. Sirve los vegetales encurtidos y la salsa fríos.',
    imageAlt:
      'Bowl de cubos de tofu dorado crujiente frito en aire sobre arroz jazmín con zanahorias y pepino encurtidos rápidos, rociado con mayonesa picante',
  },
  'mp2-crockpot-moroccan-chickpea-stew': {
    title: 'Estofado Marroquí de Garbanzos en Crockpot',
    description:
      'Un estofado de inspiración marroquí cálidamente especiado con garbanzos, chabacanos secos y especias aromáticas. Ponlo y olvídate para una cena económica sin complicaciones.',
    ingredients: [
      '2 latas (15 oz cada una) de garbanzos, escurridos y enjuagados',
      '1 lata (14 oz) de tomates picados',
      '1 cebolla grande, picada',
      '2 zanahorias, peladas y picadas',
      '1 calabacín grande, picado',
      '⅓ cup de chabacanos secos, picados',
      '2 cups de caldo de verduras',
      '2 tablespoons de aceite de oliva',
      '1 tablespoon de comino',
      '1 teaspoon de canela',
      '½ teaspoon de cúrcuma',
      '½ teaspoon de jengibre en polvo',
      'Sal y pimienta al gusto',
      '¼ cup de cilantro fresco para decorar',
    ],
    instructions: [
      'Agrega los garbanzos, los tomates picados, la cebolla, las zanahorias, el calabacín, los chabacanos secos y el caldo de verduras a la olla de cocción lenta.',
      'Agrega el aceite de oliva, el comino, la canela, la cúrcuma, el jengibre en polvo, la sal y la pimienta. Revuelve bien.',
      'Tapa y cocina en BAJO por 6–8 horas o en ALTO por 3–4 horas.',
      'Prueba y ajusta el sazón — los chabacanos agregan dulzura que equilibra las especias.',
      'Decora con cilantro fresco antes de servir.',
      'Deja enfriar completamente antes de porcionar en recipientes.',
    ],
    tips: [
      'Los chabacanos secos son tradicionales en la cocina marroquí — se derriten en el estofado y aportan dulzura.',
      'Sirve sobre cuscús (o quinoa para la opción sin gluten) para absorber el caldo sabroso.',
      'Este estofado gana más sabor cada día — está aún mejor el día 2.',
    ],
    storageInstructions:
      'Refrigera por hasta 6 días. Congela porciones individuales por hasta 3 meses.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos. En la estufa: recalienta a fuego medio por 5–7 minutos con un chorrito de caldo.',
    imageAlt:
      'Estofado marroquí dorado y cálido en un bowl estilo tagine con garbanzos visibles, chabacanos picados y cilantro fresco',
  },
  'mp2-sheet-pan-vegan-fajita-bowls': {
    title: 'Bowls de Fajitas Veganas en Charola',
    description:
      'Todos los sabores ahumados y chamuscados de las fajitas de restaurante en una sola charola — pimientos, cebollas y frijoles negros sazonados sobre arroz con cilantro y limón.',
    ingredients: [
      '3 pimientos morrones (colores variados), cortados en tiras',
      '2 cebollas grandes, cortadas en medias lunas',
      '1 lata (15 oz) de frijoles negros, escurridos y enjuagados',
      '3 cups de arroz blanco cocido',
      '2 tablespoons de aceite de oliva',
      '2 tablespoons de jugo de limón',
      '1 tablespoon de chile en polvo',
      '1 teaspoon de comino',
      '1 teaspoon de pimentón ahumado',
      '½ teaspoon de ajo en polvo',
      '¼ cup de cilantro fresco, picado',
      'Sal y pimienta al gusto',
    ],
    instructions: [
      'Precalienta el horno a 425°F (220°C). Forra una charola grande con papel pergamino.',
      'Mezcla los pimientos y las cebollas con aceite de oliva, chile en polvo, comino, pimentón ahumado, ajo en polvo, sal y pimienta.',
      'Extiende en una sola capa sobre la charola. Asa por 20–25 minutos, revolviendo una vez, hasta que los bordes estén chamuscados.',
      'Agrega los frijoles negros escurridos a la charola en los últimos 5 minutos para que se calienten.',
      'Mientras tanto, incorpora el jugo de limón y el cilantro al arroz cocido para preparar el arroz con cilantro y limón.',
      'Divide el arroz entre 5 recipientes y cubre con los vegetales asados para fajitas y los frijoles.',
    ],
    tips: [
      'Usa la temperatura más alta que tenga tu horno para el mejor chamuscado en los vegetales.',
      'Agrega aguacate rebanado, salsa o un chorrito de limón al servir para más frescura.',
      'Estos componentes también funcionan como relleno para tacos o burritos.',
    ],
    storageInstructions:
      'Refrigera los bowls armados por hasta 5 días. Guarda el arroz y los vegetales en recipientes separados para mejor textura.',
    reheatingInstructions:
      'Calienta en el microondas por 2 minutos. Para vegetales más crujientes, recaliéntalos por separado en un sartén caliente por 2 minutos.',
    imageAlt:
      'Bowl vibrante de fajitas con tiras de pimiento chamuscado, cebollas caramelizadas y frijoles negros sobre arroz con cilantro y limón',
  },
  'mp2-spinach-bean-enchilada-bake': {
    title: 'Enchiladas Horneadas de Espinaca y Frijoles',
    description:
      'Una cacerola de enchiladas apta para congelar, con capas de espinaca, frijoles pintos y salsa de enchilada ácida. Corta en cuadros para porcionar fácilmente toda la semana.',
    ingredients: [
      '12 tortillas de maíz',
      '2 latas (15 oz cada una) de frijoles pintos, escurridos y enjuagados',
      '3 cups de espinaca baby fresca, picada toscamente',
      '2 cups (16 oz) de salsa roja para enchiladas',
      '1 cup de crema de anacardos o crema agria vegana',
      '1 cup de levadura nutricional',
      '1 teaspoon de comino',
      '1 teaspoon de ajo en polvo',
      '½ teaspoon de chile en polvo',
      'Sal y pimienta al gusto',
      'Cilantro fresco para decorar',
    ],
    instructions: [
      'Precalienta el horno a 375°F (190°C). Engrasa ligeramente un molde de 9×13 pulgadas.',
      'En un bowl, combina los frijoles pintos, la espinaca, el comino, el ajo en polvo, el chile en polvo y la mitad de la crema de anacardos.',
      'Extiende ½ cup de salsa para enchiladas en el fondo del molde.',
      'Coloca 4 tortillas de maíz sobre la salsa, sobreponiéndolas según sea necesario. Extiende la mitad de la mezcla de frijoles y espinaca sobre las tortillas.',
      'Repite con otra capa de tortillas, el resto de la mezcla de frijoles y el resto de la salsa encima.',
      'Cubre con las 4 tortillas finales, la salsa de enchilada restante, la crema de anacardos restante y la levadura nutricional.',
      'Cubre con papel aluminio y hornea por 25 minutos. Retira el aluminio y hornea 5 minutos más.',
      'Deja enfriar por 10 minutos, luego corta en 8 cuadros.',
    ],
    tips: [
      'Las tortillas de maíz hacen esto naturalmente sin gluten — revisa también la etiqueta de tu salsa para enchiladas.',
      'Congela los cuadros individuales envueltos en pergamino para cenas fáciles de tomar e ir.',
      'Esta cacerola se mantiene muy bien por 5 días en el refrigerador sin ponerse aguada.',
    ],
    storageInstructions:
      'Refrigera tapada por hasta 5 días. Congela porciones individuales envueltas por hasta 2 meses.',
    reheatingInstructions:
      'Calienta un cuadro individual en el microondas por 2–3 minutos. Desde congelado, descongela en el refrigerador durante la noche y luego calienta en el microondas por 3 minutos, o calienta desde congelado en el microondas por 4–5 minutos.',
    imageAlt:
      'Cacerola de enchiladas rebanada en un molde mostrando las capas de tortillas de maíz, espinaca, frijoles y salsa roja',
  },
  'mp2-indian-dal-makhani-meal-prep': {
    title: 'Dal Makhani Indio para Meal Prep',
    description:
      'Un rico dal makhani cocido a fuego lento con lentejas negras y frijoles rojos en una cremosa salsa de coco y tomate — profundamente nutritivo para el embarazo.',
    ingredients: [
      '1 cup de lentejas negras secas (urad dal), remojadas durante la noche y escurridas',
      '½ cup de frijoles rojos secos (rajma), remojados durante la noche y escurridos',
      '1 lata (14 oz) de tomates triturados',
      '1 lata (13.5 oz) de leche de coco light',
      '1 cebolla grande, finamente picada',
      '4 dientes de ajo, picados finamente',
      '1 tablespoon de jengibre fresco, rallado',
      '2 tablespoons de aceite de coco',
      '1 tablespoon de garam masala',
      '1 teaspoon de comino',
      '1 teaspoon de cúrcuma',
      '½ teaspoon de cilantro molido',
      '½ teaspoon de chile en polvo',
      '3 cups de agua',
      'Sal al gusto',
    ],
    instructions: [
      'Asegúrate de que las lentejas y los frijoles rojos hayan estado en remojo por al menos 8 horas o durante la noche. Escurre y enjuaga.',
      'Agrega las lentejas remojadas, los frijoles rojos, los tomates triturados, el agua, la cebolla, el ajo, el jengibre y todas las especias a la olla de cocción lenta.',
      'Agrega el aceite de coco y revuelve todo bien.',
      'Tapa y cocina en BAJO por 8–10 horas o en ALTO por 5–6 horas. El dal debe quedar cremoso y los frijoles completamente tiernos.',
      'En los últimos 30 minutos, incorpora la leche de coco y deja cocinar a fuego lento sin tapa para que espese.',
      'Usa la parte posterior de una cuchara para machacar algunas lentejas contra el costado de la olla para una consistencia más cremosa.',
      'Sazona con sal y deja enfriar antes de porcionar.',
    ],
    tips: [
      'Las lentejas negras son excepcionalmente altas en hierro y ácido fólico — dos nutrientes clave durante el embarazo.',
      'El remojo durante la noche es esencial para la textura y digestibilidad adecuadas.',
      'Sirve sobre arroz basmati con un chorrito de limón para la experiencia completa.',
    ],
    storageInstructions:
      'Refrigera por hasta 6 días. Congela porciones individuales por hasta 3 meses. El dal mejora en sabor cuando se guarda durante la noche.',
    reheatingInstructions:
      'Calienta en el microondas por 2–3 minutos, revolviendo a la mitad. En la estufa: recalienta a fuego medio-bajo por 5–7 minutos, agregando agua según sea necesario ya que el dal se espesa al enfriarse.',
    imageAlt:
      'Dal makhani oscuro y cremoso en un bowl de cobre con un remolino de crema de coco encima',
  },
  'mp2-greek-lentil-rice-bowls': {
    title: 'Bowls Griegos de Lentejas y Arroz',
    description:
      'Bowls de inspiración mediterránea con lentejas herbales, arroz al limón, pepino y un aderezo ácido. Ingredientes saludables para el corazón que apoyan niveles de colesterol saludables.',
    ingredients: [
      '1 cup de lentejas verdes secas, enjuagadas',
      '1½ cups de arroz basmati cocido',
      '1 pepino inglés, picado',
      '½ cup de tomates cherry, cortados a la mitad',
      '¼ cup de aceitunas Kalamata, rebanadas',
      '¼ cup de cebolla morada, finamente picada',
      '3 tablespoons de aceite de oliva extra virgen',
      '3 tablespoons de jugo de limón',
      '1 tablespoon de vinagre de vino tinto',
      '1 teaspoon de orégano seco',
      '½ teaspoon de ajo en polvo',
      'Sal y pimienta al gusto',
      '¼ cup de perejil fresco, picado',
    ],
    instructions: [
      'Cocina las lentejas verdes en 3 cups de agua por 20–25 minutos hasta que estén tiernas pero no pastosas. Escurre y deja enfriar.',
      'Mezcla el arroz cocido con 1 tablespoon de jugo de limón y una pizca de sal para preparar el arroz al limón.',
      'En un frasco, agita el aceite de oliva, el jugo de limón restante, el vinagre de vino tinto, el orégano, el ajo en polvo, la sal y la pimienta.',
      'Combina las lentejas enfriadas con el pepino, los tomates, las aceitunas, la cebolla morada y el perejil.',
      'Divide el arroz al limón entre 5 recipientes, luego cubre con la mezcla de lentejas y vegetales.',
      'Rocía cada bowl con el aderezo. Sella y refrigera.',
    ],
    tips: [
      'Las lentejas verdes mantienen mejor su forma para ensaladas — evita las lentejas rojas aquí ya que se deshacen.',
      'El aceite de oliva y las lentejas son ambos excelentes para apoyar niveles saludables de colesterol.',
      'Guarda el aderezo aparte hasta el día de servir para el sabor más fresco.',
    ],
    storageInstructions:
      'Refrigera los bowls armados por hasta 5 días. Mejor los días 1–4 cuando los vegetales están más frescos. No congeles.',
    reheatingInstructions:
      'Se disfruta mejor a temperatura ambiente o frío. Calienta en el microondas por 1 minuto si prefieres el arroz tibio, pero la ensalada de lentejas está diseñada para comerse fría.',
    imageAlt:
      'Bowl mediterráneo de lentejas con arroz esponjoso, pepino picado, tomates cherry, aceitunas y un aderezo de limón y hierbas',
  },
};
