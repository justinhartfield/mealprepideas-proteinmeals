/**
 * Persona × Method Hero Descriptions
 * Two-sentence descriptions for each persona+method intersection
 */

export interface PersonaMethodHero {
  personaSlug: string;
  methodSlug: string;
  heroDescription: string;
  avgPrepTime: string;
}

/**
 * Hero descriptions keyed by "persona:method" slug pair.
 * Covers all indexed persona+method combos from taxonomy.ts.
 */
const heroDescriptions: Record<string, { description: string; avgPrepTime: string }> = {
  // ── Work ──
  'work:crockpot': {
    description: 'Dump ingredients before your commute, return to fully-cooked protein-rich lunches. This index eliminates the "sad desk lunch" problem with hands-off crockpot protocols that portion into 5-day work containers.',
    avgPrepTime: '00:15',
  },
  'work:slow-cooker': {
    description: 'Set-and-forget slow cooker batches that produce office-ready meals before you leave for work. We optimize for leak-proof container compatibility and microwave-friendly reheating at your desk.',
    avgPrepTime: '00:15',
  },
  'work:instant-pot': {
    description: 'Pressure-cook a full week of lunches in under 30 minutes on Sunday night. This intersection prioritizes desk-friendly portions, minimal odor profiles, and cold-eat compatibility for open-plan offices.',
    avgPrepTime: '00:25',
  },
  'work:air-fryer': {
    description: 'Crispy, flavorful work lunches that reheat without going soggy. Our air-fryer protocols optimize for texture retention through 5 days of fridge storage and quick microwave reheating.',
    avgPrepTime: '00:20',
  },
  'work:microwave': {
    description: 'Meals designed specifically for the office microwave — no kitchen required. Every recipe optimizes for 2-minute reheating at 70% power with zero splatter and minimal aroma.',
    avgPrepTime: '00:10',
  },
  'work:sheet-pan': {
    description: 'One sheet pan, one Sunday session, five work lunches. These protocols maximize oven rack space to produce complete meals with proteins, starches, and vegetables in a single 40-minute batch.',
    avgPrepTime: '00:40',
  },
  'work:one-pan': {
    description: 'Single-skillet dinners that double as next-day work lunches. Cook once in the evening, portion half for tomorrow — solving both dinner and desk lunch simultaneously.',
    avgPrepTime: '00:25',
  },
  'work:no-cook': {
    description: 'Zero-heat assembly protocols for maximum convenience. Build 5 protein boxes, salads, or wraps in 20 minutes flat using pre-cooked proteins and fresh produce.',
    avgPrepTime: '00:20',
  },
  'work:freezer': {
    description: 'Build a 30-day freezer stash of work lunches in one mega-batch session. Each recipe optimizes for microwave reheating at the office and maintains texture through the freeze-thaw cycle.',
    avgPrepTime: '01:30',
  },
  'work:grill': {
    description: 'Weekend grill sessions that stock the work fridge for the entire week. Batch-grill 4 proteins simultaneously and pair with cold sides for high-protein office meals.',
    avgPrepTime: '00:45',
  },
  'work:oven': {
    description: 'Multi-rack oven batching for complete work-week meal prep. Bake proteins, grains, and vegetables simultaneously across three racks in one 45-minute session.',
    avgPrepTime: '00:45',
  },

  // ── College ──
  'college:crockpot': {
    description: 'Dorm-friendly crockpot recipes that require zero cooking skill. Start a batch between classes and return to enough protein-rich food for 3-4 days — no meal plan required.',
    avgPrepTime: '00:10',
  },
  'college:slow-cooker': {
    description: 'The ultimate dorm-room cooking hack: dump, set, study, eat. These slow cooker protocols use minimal ingredients from budget grocery runs and feed you for the entire week.',
    avgPrepTime: '00:10',
  },
  'college:instant-pot': {
    description: 'One Instant Pot replaces an entire dorm kitchen. Pressure-cook rice, beans, and proteins in 20 minutes for a fraction of the dining hall cost.',
    avgPrepTime: '00:20',
  },
  'college:air-fryer': {
    description: 'Countertop air-fryer meals for students with no kitchen access. Quick, crispy, high-protein results that beat dining hall food and cost less than delivery apps.',
    avgPrepTime: '00:15',
  },
  'college:microwave': {
    description: 'Every recipe works with just a dorm microwave. No stovetop, no oven, no excuses. High-protein meals in under 5 minutes using microwave-safe containers and smart layering techniques.',
    avgPrepTime: '00:05',
  },
  'college:sheet-pan': {
    description: 'If you have access to a communal oven, one sheet pan session produces a week of meals. Budget-optimized ingredients and simple seasoning blends for students who hate cooking.',
    avgPrepTime: '00:35',
  },
  'college:one-pan': {
    description: 'A single pan and a communal stovetop is all you need. 15-minute one-pan meals that use 5 or fewer ingredients, all available at the closest budget grocery store.',
    avgPrepTime: '00:15',
  },
  'college:no-cook': {
    description: 'Zero cooking equipment required — just a mini fridge. Build protein-packed wraps, overnight oats, and snack boxes in your dorm with pre-made ingredients from the campus store.',
    avgPrepTime: '00:10',
  },
  'college:freezer': {
    description: 'Stock your mini-freezer with grab-and-go meals made during a single Sunday session. These recipes survive the shared dorm freezer and reheat in 3 minutes flat.',
    avgPrepTime: '01:00',
  },
  'college:grill': {
    description: 'Campus grill and communal BBQ recipes for batch-cooking on a student budget. Grill in bulk with friends, split costs, and eat high-protein meals all week.',
    avgPrepTime: '00:30',
  },
  'college:oven': {
    description: 'Communal oven batch sessions for the resourceful student. One 40-minute oven cycle produces 8+ portions of complete, balanced meals at a fraction of dining hall prices.',
    avgPrepTime: '00:40',
  },

  // ── Picky Eaters ──
  'picky-eaters:crockpot': {
    description: 'Crockpot meals that transform "boring" proteins into flavors picky eaters actually want. Slow cooking mellows strong flavors and creates tender, approachable textures that even the most selective palates accept.',
    avgPrepTime: '00:15',
  },
  'picky-eaters:slow-cooker': {
    description: 'Slow cooker recipes that hide nutritional density behind familiar comfort-food flavors. Each recipe uses the "stealth nutrition" approach — vegetables melt into sauces and proteins shred into kid-approved textures.',
    avgPrepTime: '00:15',
  },
  'picky-eaters:instant-pot': {
    description: 'Pressure cooking unlocks tender textures that picky eaters prefer. These Instant Pot protocols transform tough proteins and fibrous vegetables into soft, flavor-absorbed meals that convert even the most resistant palates.',
    avgPrepTime: '00:25',
  },
  'picky-eaters:air-fryer': {
    description: 'Crispy, golden exteriors that satisfy picky eaters without deep-frying. Air-fryer protocols create familiar "fried food" textures with fraction of the oil and 3x the protein density.',
    avgPrepTime: '00:20',
  },
  'picky-eaters:microwave': {
    description: 'Quick microwave meals that look and taste like the convenience foods picky eaters crave — but with real nutritional content. Mac and cheese that actually has protein. Nachos with hidden fiber.',
    avgPrepTime: '00:08',
  },
  'picky-eaters:sheet-pan': {
    description: 'Sheet pan meals with separated zones so picky eaters can avoid "food touching" while still getting complete nutrition. Every component cooks on the same tray but portions independently.',
    avgPrepTime: '00:35',
  },
  'picky-eaters:one-pan': {
    description: 'One-pan meals where flavors blend gradually — converting picky eaters through familiarity. Start with basic flavors and introduce new ingredients slowly across a 4-week progression protocol.',
    avgPrepTime: '00:20',
  },
  'picky-eaters:no-cook': {
    description: 'Build-your-own assembly stations that give picky eaters control over their plate. Pre-portioned protein, base, and topping options let them customize while hitting macro targets.',
    avgPrepTime: '00:15',
  },
  'picky-eaters:freezer': {
    description: 'A freezer stash of picky-eater-approved meals that look like comfort food but deliver real nutrition. Every recipe passes the "would a kid actually eat this" test before inclusion.',
    avgPrepTime: '01:15',
  },
  'picky-eaters:grill': {
    description: 'Grilled foods that picky eaters actually request — burgers, chicken strips, kebabs — but nutritionally optimized. The smoky char masks vegetables and the familiar format reduces resistance.',
    avgPrepTime: '00:30',
  },
  'picky-eaters:oven': {
    description: 'Oven-baked versions of picky-eater favorites: chicken nuggets, pizza bites, and breaded proteins. Each recipe sneaks in fiber and micronutrients behind golden, crispy exteriors.',
    avgPrepTime: '00:35',
  },

  // ── Kids ──
  'kids:crockpot': {
    description: 'Set-and-forget crockpot meals that kids genuinely enjoy eating. These recipes prioritize mild flavors, soft textures, and fun shapes while maintaining the nutrient density growing bodies need.',
    avgPrepTime: '00:10',
  },
  'kids:slow-cooker': {
    description: 'Slow cooker meals that the whole family eats — including the kids. Each recipe produces enough for kid portions and adult portions from the same pot, reducing mealtime friction to zero.',
    avgPrepTime: '00:10',
  },
  'kids:instant-pot': {
    description: 'Fast pressure-cooked meals ready before homework is done. These kid-approved Instant Pot recipes produce tender proteins and soft-cooked vegetables in under 20 minutes of active time.',
    avgPrepTime: '00:20',
  },
  'kids:air-fryer': {
    description: 'Healthy versions of kids\' favorite fried foods — nuggets, fries, mozzarella sticks — made in the air fryer. 80% less oil, same crispy satisfaction, 3x the protein.',
    avgPrepTime: '00:15',
  },
  'kids:microwave': {
    description: 'Microwave meals that older kids can prepare themselves. Each recipe is designed for independent preparation by ages 8+, with clear steps and safe container handling instructions.',
    avgPrepTime: '00:05',
  },
  'kids:sheet-pan': {
    description: 'One sheet pan, one batch of kid-approved meals for the week. Color-coded zones make it fun — "rainbow plates" where each section is a different color and nutrient group.',
    avgPrepTime: '00:30',
  },
  'kids:one-pan': {
    description: 'Quick one-pan dinners that transition into school lunch leftovers. Cook in the evening, portion half into fun bento-style containers for the next day.',
    avgPrepTime: '00:20',
  },
  'kids:no-cook': {
    description: 'No-cook lunch box builders that kids can help assemble. Interactive "snack plate" style meals with protein bites, fruit, veggies, and dips — nutritionally complete and fun to eat.',
    avgPrepTime: '00:10',
  },
  'kids:freezer': {
    description: 'A kid-approved freezer stash for busy school nights. Every recipe is tested for kid acceptance, freezes cleanly, and reheats in under 4 minutes for last-minute dinners.',
    avgPrepTime: '01:00',
  },
  'kids:grill': {
    description: 'Weekend grill sessions that produce kid-friendly proteins for the whole week. Skewers, mini burgers, and grilled cheese — fun grilling that kids can help with safely.',
    avgPrepTime: '00:30',
  },
  'kids:oven': {
    description: 'Batch-bake kid favorites in one oven session. Chicken tenders, mini pizzas, and veggie tots — all made from real ingredients with hidden nutritional boosts.',
    avgPrepTime: '00:40',
  },

  // ── Toddler ──
  'toddler:crockpot': {
    description: 'Ultra-soft crockpot meals safe for toddler self-feeding. Slow-cooked textures eliminate choking hazards while delivering iron, zinc, and healthy fats critical for brain development.',
    avgPrepTime: '00:10',
  },
  'toddler:slow-cooker': {
    description: 'Slow cooker meals that produce fork-tender proteins perfect for little hands. Each recipe adheres to pediatric nutritional guidelines while creating textures toddlers can safely manage independently.',
    avgPrepTime: '00:10',
  },
  'toddler:instant-pot': {
    description: 'Pressure-cooked meals that break down into toddler-safe textures in minutes. Perfect for batch-prepping a week of balanced toddler meals during their nap time.',
    avgPrepTime: '00:20',
  },
  'toddler:air-fryer': {
    description: 'Lightly crispy finger foods for toddler self-feeding practice. Air-fried sweet potato sticks, mini meatballs, and veggie puffs with age-appropriate sizing and zero deep-fry oil risk.',
    avgPrepTime: '00:15',
  },
  'toddler:microwave': {
    description: 'Quick microwave-reheated toddler portions from pre-made batches. Each recipe focuses on safe serving temperatures, appropriate textures, and the micronutrient density growing toddlers require.',
    avgPrepTime: '00:05',
  },
  'toddler:sheet-pan': {
    description: 'Sheet pan batches that produce a week of toddler-portioned meals. Soft-roasted vegetables and tender proteins cut to pediatrician-recommended sizes for independent eating practice.',
    avgPrepTime: '00:30',
  },
  'toddler:one-pan': {
    description: 'One-pan meals that serve the whole family, with a toddler portion automatically built in. No separate cooking — just portion appropriately from the same dish.',
    avgPrepTime: '00:20',
  },
  'toddler:no-cook': {
    description: 'No-cook finger food plates for toddlers — perfect for daycare lunchboxes. Soft cheeses, avocado slices, shredded proteins, and fruit in toddler-safe portions.',
    avgPrepTime: '00:10',
  },
  'toddler:freezer': {
    description: 'A freezer stash of toddler meals for chaotic days. Each recipe freezes in ice cube tray portions for perfect toddler serving sizes — pop 3-4 cubes and microwave for 90 seconds.',
    avgPrepTime: '01:00',
  },
  'toddler:grill': {
    description: 'Grill sessions that produce tender, shredded proteins toddlers can safely eat. Slow-grilled chicken thighs and soft vegetable kebabs that pull apart easily for small hands.',
    avgPrepTime: '00:30',
  },
  'toddler:oven': {
    description: 'Oven-baked toddler finger foods in batch quantities. Mini muffins, soft-baked veggie bites, and tender protein strips — all sized for little hands and frozen for the week.',
    avgPrepTime: '00:35',
  },

  // ── Pregnancy ──
  'pregnancy:crockpot': {
    description: 'Hands-off crockpot meals that prioritize folate, iron, and DHA — the nutrients most critical during pregnancy. Zero standing required; dump ingredients and rest while your food cooks.',
    avgPrepTime: '00:10',
  },
  'pregnancy:slow-cooker': {
    description: 'Slow cooker meals formulated around prenatal nutritional requirements. Each recipe maximizes iron absorption, provides adequate folate, and avoids ingredients on the pregnancy restriction list.',
    avgPrepTime: '00:10',
  },
  'pregnancy:instant-pot': {
    description: 'Fast, nausea-friendly meals from the Instant Pot when cooking smells are triggering. Sealed pressure cooking contains odors, and 20-minute cycle times minimize time spent in the kitchen.',
    avgPrepTime: '00:20',
  },
  'pregnancy:air-fryer': {
    description: 'Quick air-fried snacks and meals for pregnancy cravings that still meet prenatal nutrition targets. Satisfy the crunch craving without deep frying, maintaining safe caloric intake.',
    avgPrepTime: '00:15',
  },
  'pregnancy:microwave': {
    description: 'Microwave-ready pregnancy meals for days when cooking feels impossible. Pre-prepped containers that heat in 2 minutes, optimized for first-trimester nausea and third-trimester fatigue.',
    avgPrepTime: '00:05',
  },
  'pregnancy:sheet-pan': {
    description: 'One sheet pan session while energy allows, producing a week of prenatal-optimized meals. Iron-rich proteins paired with vitamin-C-rich vegetables for maximum nutrient absorption.',
    avgPrepTime: '00:35',
  },
  'pregnancy:one-pan': {
    description: 'Minimal-effort one-pan dinners designed around pregnancy nutritional needs. Quick enough for energy crashes, balanced enough for growing baby, and mild enough for sensitive stomachs.',
    avgPrepTime: '00:20',
  },
  'pregnancy:no-cook': {
    description: 'Zero-cooking pregnancy meals for nausea days. Cold protein plates, smoothie prep kits, and snack assembly that requires no heat, no smells, and delivers prenatal nutrition targets.',
    avgPrepTime: '00:10',
  },
  'pregnancy:freezer': {
    description: 'Build a pre-baby freezer stash during the second trimester energy window. Each recipe targets prenatal nutrients and stores for 3-6 months, bridging the transition to postpartum recovery.',
    avgPrepTime: '01:30',
  },
  'pregnancy:grill': {
    description: 'Outdoor grilling eliminates indoor cooking smells that trigger nausea. Batch-grill lean proteins to safe internal temperatures with a meat thermometer protocol for pregnancy food safety.',
    avgPrepTime: '00:35',
  },
  'pregnancy:oven': {
    description: 'Set-it-and-rest oven batches for the second trimester prep window. Multi-rack baking produces a week of prenatal-optimized meals while you sit with your feet up.',
    avgPrepTime: '00:40',
  },

  // ── Postpartum ──
  'postpartum:crockpot': {
    description: 'Recovery-focused crockpot meals that cook while you rest with baby. Prioritizes iron replenishment, anti-inflammatory ingredients, and single-hand eating compatibility for nursing sessions.',
    avgPrepTime: '00:10',
  },
  'postpartum:slow-cooker': {
    description: 'Slow cooker batches designed for the fourth trimester — when cooking is impossible but nutrition is critical. Bone broths, healing stews, and shredded proteins that freeze beautifully.',
    avgPrepTime: '00:10',
  },
  'postpartum:instant-pot': {
    description: 'Pressure-cook recovery meals during the baby\'s nap. 20-minute Instant Pot cycles produce healing bone broths, iron-rich stews, and tender proteins for postpartum nutritional recovery.',
    avgPrepTime: '00:20',
  },
  'postpartum:air-fryer': {
    description: 'Quick postpartum snacks that satisfy hunger between feedings. Air-fried protein bites and energy balls ready in 10 minutes — eat with one hand while holding the baby.',
    avgPrepTime: '00:10',
  },
  'postpartum:microwave': {
    description: 'Pre-made postpartum meals that reheat in 2 minutes. Designed for one-handed eating during nursing sessions, optimized for lactation support and recovery nutrients.',
    avgPrepTime: '00:05',
  },
  'postpartum:sheet-pan': {
    description: 'When a helper is available, batch-prep a week of postpartum recovery meals on one sheet pan. Printable instructions for partners, doulas, or family members to execute while you rest.',
    avgPrepTime: '00:35',
  },
  'postpartum:one-pan': {
    description: 'Simple one-pan meals a partner can make in 15 minutes. Each recipe includes "partner-proof" instructions — clear steps, no technique required, maximum nutrition for recovery.',
    avgPrepTime: '00:15',
  },
  'postpartum:no-cook': {
    description: 'Zero-prep postpartum nutrition: grab-and-eat protein plates, lactation energy bites, and pre-portioned snack boxes. No cooking, no cleanup, maximum recovery nutrients.',
    avgPrepTime: '00:10',
  },
  'postpartum:freezer': {
    description: 'This index solves the "Fourth Trimester" nutritional gap by prioritizing anti-inflammatory, high-fiber, and micronutrient-dense meals that can be batched during pregnancy and safely stored for 3–6 months. We focus on single-hand consumption and zero-prep reheat protocols.',
    avgPrepTime: '01:30',
  },
  'postpartum:grill': {
    description: 'Partner-executed grill sessions that stock the postpartum fridge. Batch-grilled proteins pre-portioned for nursing-friendly one-handed meals throughout the week.',
    avgPrepTime: '00:30',
  },
  'postpartum:oven': {
    description: 'Meal-train-ready oven recipes that helpers can batch-bake for the recovering parent. Simple, foolproof instructions that produce nutrient-dense postpartum recovery meals at scale.',
    avgPrepTime: '00:40',
  },

  // ── Bariatric ──
  'bariatric:crockpot': {
    description: 'Soft-textured crockpot meals sized for bariatric portions (2-4 oz per serving). Slow cooking produces the tender textures required post-surgery while maximizing protein density per bite.',
    avgPrepTime: '00:10',
  },
  'bariatric:slow-cooker': {
    description: 'Slow cooker batches that produce ultra-tender, easily digestible proteins in bariatric portions. Each recipe specifies exact portion sizes for each post-surgical phase.',
    avgPrepTime: '00:10',
  },
  'bariatric:instant-pot': {
    description: 'Pressure-cooked proteins that achieve the tender, moist texture bariatric patients need. Small-batch Instant Pot recipes designed for 2-4 oz portions with 25+ grams of protein.',
    avgPrepTime: '00:20',
  },
  'bariatric:air-fryer': {
    description: 'Crispy-exterior, tender-interior proteins for bariatric patients past the soft-food stage. Air-fryer portions sized at 3-4 oz with maximum protein density per serving.',
    avgPrepTime: '00:15',
  },
  'bariatric:microwave': {
    description: 'Pre-portioned bariatric meals that reheat in 90 seconds. Each container is pre-measured to surgical phase requirements with protein, hydration, and vitamin targets clearly labeled.',
    avgPrepTime: '00:05',
  },
  'bariatric:sheet-pan': {
    description: 'Sheet pan batching for bariatric meal prep — one session produces 10-14 precisely portioned containers. High-protein, low-volume meals that respect reduced stomach capacity.',
    avgPrepTime: '00:35',
  },
  'bariatric:one-pan': {
    description: 'One-pan bariatric meals with built-in portion control. Each recipe yields exactly 4 bariatric-sized servings with pre-calculated protein and calorie counts per container.',
    avgPrepTime: '00:20',
  },
  'bariatric:no-cook': {
    description: 'No-cook protein snack builders for bariatric patients: Greek yogurt parfaits, deli roll-ups, and cottage cheese bowls. Perfect for the grazing pattern post-surgery requires.',
    avgPrepTime: '00:10',
  },
  'bariatric:freezer': {
    description: 'A bariatric freezer stash with precisely measured 2-4 oz portions. Each meal is labeled with protein grams, volume, and phase compatibility for post-surgical dietary progression.',
    avgPrepTime: '01:00',
  },
  'bariatric:grill': {
    description: 'Grill-prepped proteins portioned for bariatric requirements. Tender grilled chicken, fish, and lean meats sliced thin for easier digestion and packaged in surgical-phase-appropriate servings.',
    avgPrepTime: '00:30',
  },
  'bariatric:oven': {
    description: 'Oven-baked bariatric proteins that achieve the moist, tender texture post-surgical patients need. Batch-bake at low temperatures for maximum moisture retention in small portions.',
    avgPrepTime: '00:40',
  },

  // ── PCOS ──
  'pcos:crockpot': {
    description: 'Anti-inflammatory crockpot meals designed to support PCOS hormone balance. Low-glycemic ingredients slow-cooked with turmeric, omega-3 proteins, and fiber-rich legumes for blood sugar stability.',
    avgPrepTime: '00:10',
  },
  'pcos:slow-cooker': {
    description: 'Slow cooker batches that support PCOS management through anti-inflammatory ingredients and balanced glycemic loads. Each recipe targets insulin resistance reduction through strategic food combinations.',
    avgPrepTime: '00:10',
  },
  'pcos:instant-pot': {
    description: 'Quick pressure-cooked PCOS-supportive meals: anti-inflammatory proteins with low-GI carbohydrates. Instant Pot bean and legume recipes that reduce insulin response while maximizing fiber intake.',
    avgPrepTime: '00:25',
  },
  'pcos:air-fryer': {
    description: 'Air-fried PCOS meals that satisfy cravings without spiking insulin. Crispy coatings made from almond flour and seeds replace inflammatory breadcrumbs while maintaining comfort-food satisfaction.',
    avgPrepTime: '00:20',
  },
  'pcos:microwave': {
    description: 'Pre-made PCOS-friendly containers ready for the office microwave. Each meal balances anti-inflammatory proteins with low-glycemic carbs to support hormone regulation throughout the workday.',
    avgPrepTime: '00:05',
  },
  'pcos:sheet-pan': {
    description: 'Sheet pan PCOS meals: salmon fillets, cruciferous vegetables, and sweet potatoes roasted together. One tray produces 4-5 anti-inflammatory, hormone-balancing meals with zero dishes.',
    avgPrepTime: '00:35',
  },
  'pcos:one-pan': {
    description: 'One-pan anti-inflammatory dinners for PCOS management. Each recipe emphasizes omega-3 proteins, low-glycemic carbs, and the specific micronutrients that support hormonal balance.',
    avgPrepTime: '00:25',
  },
  'pcos:no-cook': {
    description: 'No-cook PCOS meal assembly: salmon-avocado bowls, Greek yogurt parfaits with seeds, and anti-inflammatory smoothie kits. Quick, cold meals that support hormone regulation without heating up the kitchen.',
    avgPrepTime: '00:10',
  },
  'pcos:freezer': {
    description: 'A PCOS-supportive freezer stash: anti-inflammatory soups, omega-3-rich fish portions, and low-glycemic grain bowls. Pre-portioned for consistent macro intake across the menstrual cycle.',
    avgPrepTime: '01:15',
  },
  'pcos:grill': {
    description: 'Grilled omega-3 fish and lean proteins optimized for PCOS dietary protocols. Batch-grill salmon, chicken, and vegetables with anti-inflammatory marinades for a week of hormone-supportive meals.',
    avgPrepTime: '00:30',
  },
  'pcos:oven': {
    description: 'Oven-roasted PCOS meal prep: slow-baked salmon, roasted vegetables with turmeric, and low-GI grain bakes. Multi-rack batching for a week of anti-inflammatory, insulin-stabilizing meals.',
    avgPrepTime: '00:40',
  },

  // ── Cholesterol ──
  'cholesterol:crockpot': {
    description: 'Heart-healthy crockpot meals that actively support cholesterol reduction. Soluble-fiber-rich beans, oats, and lean proteins slow-cooked with cholesterol-lowering ingredients like garlic and omega-3 fats.',
    avgPrepTime: '00:10',
  },
  'cholesterol:slow-cooker': {
    description: 'Slow cooker batches designed around the Portfolio Diet — the evidence-based cholesterol-lowering eating pattern. Plant sterols, soluble fiber, nuts, and soy protein in every recipe.',
    avgPrepTime: '00:10',
  },
  'cholesterol:instant-pot': {
    description: 'Pressure-cooked beans and legumes — the cornerstone of cholesterol-lowering diets. Instant Pot protocols that make daily soluble fiber intake effortless with batch-cooked legume bases.',
    avgPrepTime: '00:25',
  },
  'cholesterol:air-fryer': {
    description: 'Heart-healthy air-fried meals that eliminate the added oils driving LDL cholesterol. Crispy fish, plant-based proteins, and vegetable sides with minimal saturated fat per serving.',
    avgPrepTime: '00:20',
  },
  'cholesterol:microwave': {
    description: 'Pre-made cholesterol-lowering meals ready in 2 minutes. Each container includes soluble fiber, plant proteins, and omega-3 fats — the three pillars of dietary cholesterol management.',
    avgPrepTime: '00:05',
  },
  'cholesterol:sheet-pan': {
    description: 'Sheet pan heart-healthy meals: baked fish, fiber-rich vegetables, and whole grains on one tray. Zero added butter or cream — roasting unlocks natural flavors that replace saturated fats.',
    avgPrepTime: '00:35',
  },
  'cholesterol:one-pan': {
    description: 'One-pan cholesterol-conscious dinners using olive oil as the primary fat source. Plant-forward recipes with strategic omega-3 proteins that support LDL reduction over time.',
    avgPrepTime: '00:25',
  },
  'cholesterol:no-cook': {
    description: 'No-cook meals built around cholesterol-lowering superfoods: oats, nuts, avocado, and cold-water fish. Assembly-only protocols that make the Portfolio Diet easy to follow daily.',
    avgPrepTime: '00:10',
  },
  'cholesterol:freezer': {
    description: 'A heart-healthy freezer stash: bean soups, omega-3 fish portions, and soluble-fiber-rich grain bowls. Consistent daily access to cholesterol-lowering meals without daily cooking.',
    avgPrepTime: '01:00',
  },
  'cholesterol:grill': {
    description: 'Grilled heart-healthy proteins: salmon, mackerel, and lean chicken with olive oil marinades. Batch-grilling produces a week of omega-3-rich, LDL-lowering meals.',
    avgPrepTime: '00:30',
  },
  'cholesterol:oven': {
    description: 'Oven-baked heart-healthy meal prep: no-oil roasted vegetables, baked fish, and whole grain casseroles. Multi-rack batching for a week of cholesterol-conscious meals.',
    avgPrepTime: '00:40',
  },
};

/**
 * Get hero description for a persona+method combination
 */
export function getPersonaMethodHero(personaSlug: string, methodSlug: string): PersonaMethodHero {
  const key = `${personaSlug}:${methodSlug}`;
  const content = heroDescriptions[key];

  if (content) {
    return {
      personaSlug,
      methodSlug,
      heroDescription: content.description,
      avgPrepTime: content.avgPrepTime,
    };
  }

  // Fallback for uncovered combos
  const personaDisplay = personaSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const methodDisplay = methodSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    personaSlug,
    methodSlug,
    heroDescription: `This index optimizes the intersection of ${personaDisplay.toLowerCase()} nutritional needs with ${methodDisplay.toLowerCase()} meal prep methodology. We prioritize efficiency, nutritional density, and practical execution for real-world compliance.`,
    avgPrepTime: '00:30',
  };
}
