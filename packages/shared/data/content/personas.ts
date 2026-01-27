/**
 * Persona & Condition Content — Rich data for T8 persona/condition pages
 */

export interface PersonaContent {
  slug: string;
  name: string;
  conditionType: 'persona' | 'condition';
  definition: string;
  disclaimer?: string;
  nutritionRules: {
    nutrient: string;
    recommendation: string;
    reason: string;
    severity: 'critical' | 'important' | 'helpful';
  }[];
  faqs: { question: string; answer: string }[];
}

export const personaContent: PersonaContent[] = [
  // ─── LIFESTYLE PERSONAS ───────────────────────────────────────────────

  {
    slug: 'work',
    name: 'Work',
    conditionType: 'persona',
    definition:
      'Work meal prep targets the 9-to-5 reality: no-reheat or microwave-only lunches that travel well in containers, stay fresh for 5 days in a fridge, and deliver sustained energy without a post-lunch crash. Emphasis is on leak-proof, desk-friendly formats and meals that taste good cold or reheated.',
    nutritionRules: [
      {
        nutrient: 'Protein',
        recommendation: '30-40g per lunch',
        reason: 'Sustains afternoon focus and prevents the 2 PM energy dip',
        severity: 'important',
      },
      {
        nutrient: 'Complex Carbs',
        recommendation: 'Favor whole grains and legumes over refined carbs',
        reason: 'Slow-release energy keeps you productive through afternoon meetings',
        severity: 'important',
      },
      {
        nutrient: 'Sodium',
        recommendation: 'Keep under 800mg per meal',
        reason: 'High-sodium meals cause bloating and lethargy at a desk job',
        severity: 'helpful',
      },
      {
        nutrient: 'Fiber',
        recommendation: '8-12g per meal',
        reason: 'Promotes satiety so you skip the vending machine at 3 PM',
        severity: 'helpful',
      },
    ],
    faqs: [
      {
        question: 'What meals hold up best for 5-day work meal prep?',
        answer:
          'Grain bowls, burrito bowls, and stir-fries with sturdy vegetables (broccoli, bell peppers, carrots) hold up best. Avoid leafy greens as a base—pack them separately. Proteins like chicken thighs and hard-boiled eggs retain moisture better than chicken breast over multiple days.',
      },
      {
        question: 'How do I meal prep without a microwave at work?',
        answer:
          'Focus on meals that taste great at room temperature: Mediterranean grain bowls, cold noodle salads, wraps, and bento-style boxes. Dress salads separately and add just before eating. Mason jar salads with dressing on the bottom also work well.',
      },
      {
        question: 'How do I keep costs under $5 per meal?',
        answer:
          'Buy protein in bulk (chicken thighs, canned tuna, eggs, beans), use seasonal vegetables, and cook grains like rice and quinoa in large batches. A single Sunday prep session of 2-3 hours can produce 10 meals for under $40.',
      },
      {
        question: 'What containers work best for office meal prep?',
        answer:
          'Glass containers with snap-lock lids are ideal—they reheat safely, don\'t stain, and seal leakproof. For no-microwave setups, stainless steel bento boxes keep portions separated. Avoid cheap plastic that warps and leaks.',
      },
      {
        question: 'How do I avoid getting bored with work lunches?',
        answer:
          'Use a "base + variable" system: prep 2-3 proteins and 2-3 sauces on Sunday, then mix and match throughout the week. Rotating sauces (teriyaki, chimichurri, tahini) on the same chicken-and-rice base creates variety without extra effort.',
      },
    ],
  },

  {
    slug: 'college',
    name: 'College',
    conditionType: 'persona',
    definition:
      'College meal prep works within the constraints of dorm kitchens, tight budgets, and unpredictable schedules. Recipes prioritize minimal equipment (microwave, single burner, rice cooker), cheap pantry staples, and meals that can be eaten between classes without elaborate plating.',
    nutritionRules: [
      {
        nutrient: 'Budget Protein',
        recommendation: 'Target 20-30g per meal from eggs, beans, canned tuna, or chicken thighs',
        reason: 'Cheapest protein sources that still deliver complete amino acid profiles',
        severity: 'important',
      },
      {
        nutrient: 'Calories',
        recommendation: '400-600 per meal for active students',
        reason: 'Walking campus and late-night study sessions burn more than you think',
        severity: 'important',
      },
      {
        nutrient: 'Iron',
        recommendation: '8-18mg daily (higher for menstruating students)',
        reason: 'Iron deficiency is common in college-aged adults and directly impacts concentration',
        severity: 'important',
      },
      {
        nutrient: 'B Vitamins',
        recommendation: 'Include whole grains, eggs, or fortified cereals daily',
        reason: 'Supports cognitive function during exam periods',
        severity: 'helpful',
      },
    ],
    faqs: [
      {
        question: 'Can I meal prep with just a microwave?',
        answer:
          'Absolutely. You can make mug omelets, microwave rice bowls, steamed vegetables, and even microwave "baked" sweet potatoes. Pair with no-cook items like canned tuna, pre-cooked rotisserie chicken, and hummus wraps for complete meals.',
      },
      {
        question: 'What are the cheapest meal prep recipes for students?',
        answer:
          'Rice and beans (about $0.50/serving), egg fried rice ($0.75/serving), pasta with canned tomatoes and frozen vegetables ($0.80/serving), and overnight oats ($0.60/serving). Buying a 10-lb bag of rice and bulk dried beans is the single best budget move.',
      },
      {
        question: 'How do I meal prep in a dorm without a full kitchen?',
        answer:
          'Invest in a rice cooker—it can make rice, steam vegetables, and even cook soups. Combine with a mini fridge and microwave and you can prep 5 days of meals. No-cook options like wraps, overnight oats, and salad jars need zero cooking.',
      },
      {
        question: 'How do I get enough protein on a student budget?',
        answer:
          'Eggs ($0.15 each, 6g protein), canned black beans ($0.50/can, 21g protein), peanut butter ($0.10/serving, 7g protein), and Greek yogurt on sale. These four staples cover most of your protein needs for under $3/day.',
      },
      {
        question: 'What should I meal prep for exam week?',
        answer:
          'Pre-make grab-and-go options: energy balls, overnight oats in jars, pre-portioned trail mix, and hearty wraps. During high-stress periods, you want zero-decision meals—open the fridge, grab, eat, study.',
      },
    ],
  },

  {
    slug: 'picky-eaters',
    name: 'Picky Eaters',
    conditionType: 'persona',
    definition:
      'Meal prep for picky eaters focuses on familiar flavors, approachable textures, and gradual introduction of nutrient-dense ingredients. The strategy is to work with preferences—not against them—using "stealth nutrition" techniques like blending vegetables into sauces and building on comfort food foundations.',
    nutritionRules: [
      {
        nutrient: 'Hidden Vegetables',
        recommendation: 'Blend 1-2 servings of vegetables into sauces, smoothies, or baked goods',
        reason: 'Maintains nutrient intake without triggering texture or flavor aversions',
        severity: 'important',
      },
      {
        nutrient: 'Protein Variety',
        recommendation: 'Rotate between 3-4 accepted protein sources weekly',
        reason: 'Prevents nutritional gaps from eating the same protein exclusively',
        severity: 'important',
      },
      {
        nutrient: 'Fiber',
        recommendation: 'Add fiber through accepted foods like applesauce, oats, or white beans',
        reason: 'Picky eaters often under-consume fiber, leading to digestive issues',
        severity: 'helpful',
      },
      {
        nutrient: 'Multivitamin Bridge',
        recommendation: 'Consider a daily multivitamin as nutritional insurance',
        reason: 'Fills gaps while gradually expanding the accepted food repertoire',
        severity: 'helpful',
      },
    ],
    faqs: [
      {
        question: 'How do I add vegetables without the picky eater noticing?',
        answer:
          'Blend cauliflower into mac and cheese sauce, add finely grated zucchini to meatballs or meatloaf, mix spinach into smoothies with banana and chocolate, and puree butternut squash into pasta sauce. The key is smooth textures and familiar flavors that mask the additions.',
      },
      {
        question: 'What meal prep works for someone who only likes 5 foods?',
        answer:
          'Build variations on their accepted foods. If they like chicken nuggets, make homemade versions with different coatings (panko, cornflake, parmesan). If they like pasta, rotate sauces. Small modifications to safe foods are more successful than introducing entirely new dishes.',
      },
      {
        question: 'How do I meal prep for a mixed household with picky and adventurous eaters?',
        answer:
          'Use a modular system: prep a base (rice, pasta, or tortillas) and protein separately, then offer different toppings and sauces. The adventurous eaters add kimchi and sriracha while the picky eater sticks to butter and cheese—same base, different builds.',
      },
      {
        question: 'Should I force new foods or stick with what they like?',
        answer:
          'Neither extreme works. The research-backed approach is "repeated low-pressure exposure"—put a small amount of the new food on the plate alongside accepted foods, without requiring them to eat it. It takes 10-15 exposures before a new food becomes familiar enough to try.',
      },
      {
        question: 'What are good high-protein options for picky eaters who won\'t eat meat?',
        answer:
          'Cheese quesadillas (15g protein), peanut butter sandwiches (14g), Greek yogurt with granola (18g), scrambled eggs (12g), and smoothies with protein powder blended in. Many picky eaters accept dairy and egg-based proteins more readily than meat.',
      },
    ],
  },

  {
    slug: 'kids',
    name: 'Kids',
    conditionType: 'persona',
    definition:
      'Kid-friendly meal prep balances nutrition with the reality that children eat with their eyes first and reject unfamiliar textures. Successful strategies include fun shapes, dippable formats, hidden nutrition, and batch-freezing school lunch options that survive a lunchbox until noon.',
    nutritionRules: [
      {
        nutrient: 'Calcium',
        recommendation: '700-1300mg daily depending on age',
        reason: 'Critical for bone development during growth spurts',
        severity: 'critical',
      },
      {
        nutrient: 'Protein',
        recommendation: '15-35g daily depending on age and activity',
        reason: 'Supports growth, immune function, and sustained classroom energy',
        severity: 'important',
      },
      {
        nutrient: 'Iron',
        recommendation: '7-15mg daily',
        reason: 'Iron deficiency is the most common nutrient deficiency in children and impacts learning',
        severity: 'important',
      },
      {
        nutrient: 'Added Sugar',
        recommendation: 'Keep under 25g per day',
        reason: 'Excess sugar displaces nutrient-dense foods and drives energy crashes at school',
        severity: 'important',
      },
      {
        nutrient: 'Vitamin D',
        recommendation: '600 IU daily',
        reason: 'Supports calcium absorption and immune health, especially for indoor kids',
        severity: 'helpful',
      },
    ],
    faqs: [
      {
        question: 'What are the best freezer meals for kids?',
        answer:
          'Mini muffin-tin frittatas, homemade chicken nuggets, turkey meatballs, quesadilla triangles, and pasta bake portions all freeze beautifully. Flash-freeze on a baking sheet first, then transfer to bags. Most reheat in under 3 minutes.',
      },
      {
        question: 'How do I pack lunches that kids will actually eat?',
        answer:
          'Use bento boxes with small compartments—kids eat more when food is separated and bite-sized. Include one "sure thing" (crackers, cheese), one protein (rolled deli meat, hard-boiled egg), one fruit, and one "try it" item. Dips (ranch, hummus) dramatically increase vegetable consumption.',
      },
      {
        question: 'How do I sneak nutrition into kid-favorite meals?',
        answer:
          'Cauliflower in mac and cheese, white beans blended into alfredo sauce, spinach in fruit smoothies, grated carrots in spaghetti sauce, and sweet potato in pancake batter. The key is maintaining the expected color and texture of the original dish.',
      },
      {
        question: 'What meal prep can kids help with?',
        answer:
          'Kids 3+ can wash produce and tear lettuce. Ages 5+ can measure ingredients and stir. Ages 8+ can use kid-safe knives and assemble wraps. Involving kids in prep dramatically increases their willingness to eat the result—they\'re invested in "their" creation.',
      },
      {
        question: 'How many meals should I prep ahead for kids?',
        answer:
          'Prep 5 school lunches and 10 snack portions on Sunday. For dinners, batch-cook 2 proteins and 2 starches that can be mixed and matched. Having a freezer stash of 3-4 emergency dinner options (meatballs, nuggets, pasta bake) covers chaotic weeknights.',
      },
    ],
  },

  {
    slug: 'toddler',
    name: 'Toddler',
    conditionType: 'persona',
    definition:
      'Toddler meal prep (ages 1-3) prioritizes developmentally appropriate textures, safe finger-food sizes, allergen introduction, and nutrient density in tiny portions. Toddlers eat 1/4 to 1/3 of adult portions but need proportionally more fat for brain development and more iron per pound of body weight than adults.',
    nutritionRules: [
      {
        nutrient: 'Iron',
        recommendation: '7mg daily',
        reason: 'Toddlers are the highest-risk age group for iron deficiency, which impairs cognitive development',
        severity: 'critical',
      },
      {
        nutrient: 'Healthy Fats',
        recommendation: '30-40% of total calories from fat',
        reason: 'Essential for rapid brain development — do not restrict fat for children under 2',
        severity: 'critical',
      },
      {
        nutrient: 'Choking Hazards',
        recommendation: 'Cut grapes lengthwise, avoid whole nuts, shred or finely dice firm foods',
        reason: 'Round, firm, and sticky foods are the leading choking risk for toddlers',
        severity: 'critical',
      },
      {
        nutrient: 'Calcium',
        recommendation: '700mg daily',
        reason: 'Supports bone and teeth development during the fastest growth period',
        severity: 'important',
      },
      {
        nutrient: 'Sodium',
        recommendation: 'Under 800mg daily',
        reason: 'Toddler kidneys cannot efficiently process high sodium loads',
        severity: 'important',
      },
    ],
    faqs: [
      {
        question: 'What are good finger foods to meal prep for toddlers?',
        answer:
          'Soft-cooked sweet potato sticks, banana pancakes, mini meatballs (pea-sized for 12mo, grape-sized for 2+), steamed broccoli florets, scrambled egg strips, and avocado slices. All should be soft enough to squish between your fingers and cut into age-appropriate sizes.',
      },
      {
        question: 'How do I meal prep for baby-led weaning?',
        answer:
          'Prep soft, stick-shaped foods that a 6-12 month old can grip: roasted sweet potato spears, soft-cooked broccoli stalks, ripe avocado strips, and slow-cooked meat shredded into strips. Batch cook and freeze in silicone ice cube trays for easy portioning.',
      },
      {
        question: 'My toddler won\'t eat vegetables — what do I do?',
        answer:
          'This is developmentally normal. Keep offering without pressure—it takes 15-30 exposures. Meanwhile, sneak nutrition through smoothies, veggie-loaded muffins, cauliflower mac and cheese, and zucchini in pancakes. Model eating vegetables yourself at the same meal.',
      },
      {
        question: 'How do I handle allergen introduction through meal prep?',
        answer:
          'Introduce one new allergen at a time (peanut, egg, dairy, wheat, soy, tree nuts, fish, shellfish, sesame) and wait 2-3 days before the next. Once tolerated, include regularly in meal prep rotation—early and frequent exposure reduces allergy risk.',
      },
      {
        question: 'What should I batch cook and freeze for toddlers?',
        answer:
          'Mini muffins (banana oat, veggie egg), meatballs (turkey, beef, or lentil), pancakes, pasta sauce with hidden veggies, and soup portions in ice cube trays. A single 2-hour session can fill a freezer with 2-3 weeks of toddler meals.',
      },
      {
        question: 'How much should a toddler eat per meal?',
        answer:
          'A toddler portion is roughly 1/4 of an adult serving. Offer 1-2 tablespoons of each food group per year of age (so a 2-year-old gets 2-4 tablespoons each of protein, grain, fruit, and vegetable). Toddlers regulate intake well—trust their hunger cues over clean plates.',
      },
    ],
  },

  // ─── CLINICAL CONDITIONS ──────────────────────────────────────────────

  {
    slug: 'pregnancy',
    name: 'Pregnancy',
    conditionType: 'condition',
    definition:
      'Prenatal nutrition requires increased intake of folate, iron, calcium, and DHA while avoiding specific food safety risks. Caloric needs increase by only 340-450 calories/day in the 2nd and 3rd trimesters, but micronutrient demands rise substantially. Meal prep helps manage nausea, fatigue, and cravings with ready-to-eat nutrient-dense options.',
    disclaimer:
      'This content is for informational purposes only and does not replace prenatal care. Nutritional needs vary based on pre-pregnancy BMI, multiples, gestational diabetes status, and individual health. Consult your OB-GYN or registered dietitian for personalized guidance.',
    nutritionRules: [
      {
        nutrient: 'Folate',
        recommendation: '600mcg DFE daily',
        reason: 'Prevents neural tube defects; critical in first trimester before many women know they are pregnant',
        severity: 'critical',
      },
      {
        nutrient: 'Iron',
        recommendation: '27mg daily',
        reason: 'Blood volume increases 50% during pregnancy; iron deficiency anemia increases preterm birth risk',
        severity: 'critical',
      },
      {
        nutrient: 'DHA (Omega-3)',
        recommendation: '200-300mg daily',
        reason: 'Supports fetal brain and eye development, especially in the third trimester',
        severity: 'critical',
      },
      {
        nutrient: 'Calcium',
        recommendation: '1000mg daily',
        reason: 'Fetal skeletal development draws from maternal stores; inadequate intake depletes bone density',
        severity: 'important',
      },
      {
        nutrient: 'Choline',
        recommendation: '450mg daily',
        reason: 'Supports fetal brain development and placental function; most prenatal vitamins contain insufficient amounts',
        severity: 'important',
      },
    ],
    faqs: [
      {
        question: 'What foods should I avoid during pregnancy meal prep?',
        answer:
          'Avoid raw or undercooked meats, deli meats unless heated to steaming (165°F), raw fish/sushi, unpasteurized cheeses (feta, brie, queso fresco), raw sprouts, and high-mercury fish (swordfish, king mackerel, shark). Cook all meal-prepped proteins to safe internal temperatures.',
      },
      {
        question: 'How do I meal prep during first trimester nausea?',
        answer:
          'Prep bland, cold, and carb-forward options: crackers with nut butter, overnight oats, cold pasta salads, ginger smoothie freezer packs, and plain rice bowls. Small, frequent portions work better than large meals. Prep when you feel best (often late morning) and store for nauseous hours.',
      },
      {
        question: 'What are the best iron-rich meals to prep during pregnancy?',
        answer:
          'Slow-cooker beef chili, lentil soup, spinach and white bean pasta, iron-fortified oatmeal cups, and turkey meatballs. Pair iron-rich foods with vitamin C sources (bell peppers, citrus, tomatoes) to boost absorption. Avoid pairing with calcium or coffee, which inhibit iron uptake.',
      },
      {
        question: 'How many extra calories do I actually need while pregnant?',
        answer:
          'Less than you think: 0 extra in the first trimester, 340 extra in the second, and 450 extra in the third. That is roughly one additional snack. Focus on nutrient density over calorie quantity—a handful of almonds and an apple covers the second trimester increase.',
      },
      {
        question: 'Can I eat meal-prepped food that has been in the fridge for 4-5 days while pregnant?',
        answer:
          'Pregnant women are at higher risk for Listeria. Keep meal prep to 3-4 days in the fridge maximum, and ensure your fridge is at or below 40°F. For longer storage, freeze portions and thaw in the refrigerator overnight. Reheat all leftovers to 165°F internal temperature.',
      },
      {
        question: 'What snacks should I meal prep for gestational diabetes?',
        answer:
          'Pair protein with complex carbs: apple slices with almond butter, cheese with whole grain crackers, Greek yogurt with berries, hard-boiled eggs with vegetable sticks. Avoid juice, dried fruit, and white bread. Pre-portion snacks to control carbohydrate intake per sitting.',
      },
    ],
  },

  {
    slug: 'postpartum',
    name: 'Postpartum',
    conditionType: 'condition',
    definition:
      'Postpartum nutrition focuses on recovery, lactation support, and energy restoration after childbirth. Key priorities include iron repletion, omega-3 fatty acids for mood regulation, and calorie-dense meals that can be eaten one-handed while nursing. Meal prep is especially critical during the "fourth trimester" when cooking time is nearly nonexistent.',
    disclaimer:
      'This content is for informational purposes only. Postpartum nutritional needs vary significantly based on delivery type, breastfeeding status, and individual health. Consult your OB-GYN or registered dietitian for personalized guidance.',
    nutritionRules: [
      {
        nutrient: 'Iron',
        recommendation: '18-27mg daily',
        reason: 'Repletes stores lost during delivery; prevents postpartum anemia which worsens fatigue and mood',
        severity: 'critical',
      },
      {
        nutrient: 'Omega-3 (DHA)',
        recommendation: '200-300mg daily',
        reason: 'Supports mood regulation and reduces postpartum depression risk; also passes through breast milk',
        severity: 'critical',
      },
      {
        nutrient: 'Calories (if breastfeeding)',
        recommendation: '1800-2500 daily depending on activity',
        reason: 'Lactation burns 300-500 calories per day; undereating compromises milk supply and recovery',
        severity: 'critical',
      },
      {
        nutrient: 'Calcium',
        recommendation: '1000mg daily',
        reason: 'Supports bone density, especially during breastfeeding when calcium is mobilized for milk production',
        severity: 'important',
      },
      {
        nutrient: 'Fiber',
        recommendation: '25-30g daily',
        reason: 'Prevents postpartum constipation, which is common and exacerbated by pain medications',
        severity: 'helpful',
      },
    ],
    faqs: [
      {
        question: 'What are the best freezer meals for postpartum?',
        answer:
          'Focus on iron-rich one-pot meals: beef and bean chili, chicken and vegetable stew, lentil soup, enchilada casserole, and lasagna. All freeze well and reheat in under 10 minutes. Bone broth soups with leafy greens are excellent for nutrient density. Prep these in the third trimester.',
      },
      {
        question: 'What can I eat one-handed while breastfeeding?',
        answer:
          'Energy balls (oat, peanut butter, flax), muffins, pre-made burritos/wraps, trail mix portions, banana oat bars, and hearty sandwiches cut in half. Pre-portion snacks into grab bags. Smoothies in insulated cups with straws are also lifesavers during nursing sessions.',
      },
      {
        question: 'How do I meal prep before the baby arrives?',
        answer:
          'Start batch-freezing at 34-36 weeks. Aim for 20-30 individually portioned freezer meals. Label everything with contents, date, and reheating instructions. Stock your pantry with shelf-stable snacks. Ask your partner or family to help with a "freezer stocking party."',
      },
      {
        question: 'What foods support milk supply?',
        answer:
          'While no single food is proven to increase supply, adequate calories, hydration, and frequent nursing are the primary drivers. Oats, brewer\'s yeast, flaxseed, and dark leafy greens are traditionally used as galactagogues. Focus on eating enough—milk production falters with calorie restriction.',
      },
      {
        question: 'I\'m too exhausted to eat — what are the easiest postpartum meals?',
        answer:
          'Set up a "postpartum station" at your nursing spot: water bottle, granola bars, pre-cut fruit, cheese sticks, and nut butter packets. For actual meals, accept help—have visitors bring food, use meal delivery services, or eat directly from your freezer stash. This is not the time for elaborate cooking.',
      },
    ],
  },

  {
    slug: 'bariatric',
    name: 'Bariatric',
    conditionType: 'condition',
    definition:
      'Post-bariatric surgery nutrition follows a phased approach: clear liquids → pureed → soft → regular foods over 6-12 weeks. Long-term meal prep emphasizes protein-first eating in small portions (4-8 oz per meal), avoiding dumping syndrome triggers, and preventing nutrient deficiencies common after gastric bypass, sleeve gastrectomy, and duodenal switch procedures.',
    disclaimer:
      'This content is for informational purposes only. Post-bariatric dietary protocols vary by surgery type (bypass, sleeve, band, DS) and surgeon guidelines. Always follow your bariatric team\'s specific instructions. This content does not replace medical advice from your bariatric surgeon or registered dietitian.',
    nutritionRules: [
      {
        nutrient: 'Protein',
        recommendation: '60-80g daily minimum (protein-first at every meal)',
        reason: 'Prevents muscle loss, supports wound healing, and must be prioritized due to reduced stomach capacity',
        severity: 'critical',
      },
      {
        nutrient: 'Fluids',
        recommendation: '64+ oz daily, sipped between meals (not during)',
        reason: 'Dehydration is the #1 cause of hospital readmission post-bariatric surgery',
        severity: 'critical',
      },
      {
        nutrient: 'Sugar',
        recommendation: 'Under 15g per meal; avoid concentrated sweets',
        reason: 'Triggers dumping syndrome (nausea, cramping, diarrhea) especially after gastric bypass',
        severity: 'critical',
      },
      {
        nutrient: 'Vitamin B12',
        recommendation: 'Supplement 500-1000mcg sublingual or monthly injection',
        reason: 'Malabsorption after bypass surgery makes B12 deficiency nearly universal without supplementation',
        severity: 'critical',
      },
      {
        nutrient: 'Portion Size',
        recommendation: '4-8 oz per meal; eat slowly over 20-30 minutes',
        reason: 'Overfilling the reduced stomach pouch causes vomiting and can stretch the pouch',
        severity: 'important',
      },
    ],
    faqs: [
      {
        question: 'What does meal prep look like after bariatric surgery?',
        answer:
          'Small, protein-first portions. Prep 2-3 oz protein portions (shredded chicken, ground turkey, fish), soft-cooked vegetables, and Greek yogurt cups. Use small containers (4-8 oz) so you don\'t overfill. Eat protein first, then vegetables, then starches if room remains.',
      },
      {
        question: 'What foods should I avoid after bariatric surgery?',
        answer:
          'Avoid bread that balls up in the pouch, pasta that expands, carbonated drinks that cause gas and stretching, tough or dry meats, sugar alcohols in excess, raw fibrous vegetables early on, and drinking liquids during meals. Reintroduce foods gradually under your dietitian\'s guidance.',
      },
      {
        question: 'How do I hit 60-80g protein with such small meals?',
        answer:
          'Eat 5-6 small meals/snacks daily, each with 10-15g protein. Prep protein-dense options: Greek yogurt (15g/cup), string cheese (7g), protein shakes (20-30g), cottage cheese (14g/half cup), deli turkey rolls (10g), and egg bites (12g each). Protein powder in oatmeal or soups adds another 20g.',
      },
      {
        question: 'Can I meal prep normally after the first year?',
        answer:
          'Many patients return to regular meal prep by 6-12 months, with modifications: smaller portions, continued protein-first eating, and ongoing avoidance of dumping triggers. Your stomach capacity will be roughly 4-8 oz long-term. Standard recipes work—just portion into smaller containers.',
      },
      {
        question: 'What are good protein-dense snacks to meal prep for bariatric patients?',
        answer:
          'Egg bites (mini muffin tin frittatas), turkey and cheese roll-ups, protein balls made with whey powder, cottage cheese with cinnamon, edamame portions, and jerky. Pre-portion everything to avoid overeating. Each snack should deliver 10-15g protein in a small volume.',
      },
    ],
  },

  {
    slug: 'pcos',
    name: 'PCOS',
    conditionType: 'condition',
    definition:
      'Polycystic ovary syndrome (PCOS) affects 8-13% of women of reproductive age and is closely linked to insulin resistance. Nutrition management centers on blood sugar stabilization through low-glycemic eating, anti-inflammatory foods, and specific micronutrients that support hormonal balance. Even modest dietary changes can significantly improve symptoms.',
    disclaimer:
      'This content is for informational purposes only. PCOS presents differently across individuals (lean PCOS, classic PCOS, adrenal PCOS) and nutritional strategies should be tailored accordingly. Consult your endocrinologist or registered dietitian specializing in PCOS for personalized guidance.',
    nutritionRules: [
      {
        nutrient: 'Glycemic Load',
        recommendation: 'Choose low-GI carbs; pair carbs with protein or fat at every meal',
        reason: 'Insulin resistance drives PCOS symptoms; blood sugar spikes worsen androgen production and inflammation',
        severity: 'critical',
      },
      {
        nutrient: 'Anti-Inflammatory Fats',
        recommendation: 'Include omega-3s daily (salmon, walnuts, flaxseed)',
        reason: 'PCOS involves chronic low-grade inflammation; omega-3s reduce CRP and improve insulin sensitivity',
        severity: 'critical',
      },
      {
        nutrient: 'Inositol (Myo + D-Chiro)',
        recommendation: '2000mg myo-inositol + 50mg D-chiro-inositol daily',
        reason: 'Clinical evidence shows inositol improves insulin sensitivity and ovulatory function in PCOS',
        severity: 'important',
      },
      {
        nutrient: 'Fiber',
        recommendation: '25-35g daily',
        reason: 'Fiber slows glucose absorption, feeds beneficial gut bacteria, and helps excrete excess estrogen',
        severity: 'important',
      },
      {
        nutrient: 'Vitamin D',
        recommendation: '1000-4000 IU daily (test levels first)',
        reason: '67-85% of PCOS patients are vitamin D deficient; supplementation improves insulin resistance and mood',
        severity: 'important',
      },
    ],
    faqs: [
      {
        question: 'What is the best diet for PCOS?',
        answer:
          'No single "PCOS diet" works for everyone, but evidence supports low-glycemic, anti-inflammatory eating: emphasize non-starchy vegetables, lean proteins, healthy fats, and complex carbs. The Mediterranean diet pattern has the strongest research backing for PCOS. Avoid extreme restriction—it can worsen hormonal imbalances.',
      },
      {
        question: 'Should I cut carbs completely with PCOS?',
        answer:
          'No. Very low-carb diets can increase cortisol and disrupt thyroid function, which worsens PCOS for some women. Instead, choose quality carbs (sweet potatoes, quinoa, berries, legumes) and always pair them with protein or fat to blunt blood sugar response. Aim for 30-45% of calories from carbs.',
      },
      {
        question: 'What are the best meal prep foods for PCOS?',
        answer:
          'Salmon (omega-3s + protein), lentils (fiber + protein, low-GI), leafy greens (magnesium + folate), berries (low-sugar antioxidants), eggs (choline + protein), and cinnamon (may improve insulin sensitivity). Build meal preps around these core ingredients.',
      },
      {
        question: 'Does dairy affect PCOS?',
        answer:
          'It depends. Some PCOS patients find that dairy increases acne and inflammation, while others tolerate it well. If you suspect dairy sensitivity, try eliminating it for 3-4 weeks and reintroduce. Fermented dairy (Greek yogurt, kefir) is generally better tolerated than milk.',
      },
      {
        question: 'How does meal prep help manage PCOS specifically?',
        answer:
          'PCOS management requires consistent blood sugar control—skipping meals or grabbing convenience food causes spikes and crashes. Having pre-portioned, balanced meals ready eliminates reactive eating. Prep balanced meals with protein + fiber + fat at each meal to maintain stable glucose throughout the day.',
      },
      {
        question: 'What should I avoid eating with PCOS?',
        answer:
          'Minimize refined carbs (white bread, sugary cereals, pastries), sugary drinks (including fruit juice), processed foods high in trans fats, and excessive caffeine. These spike blood sugar and insulin, worsening androgen production and inflammation. Focus on what to add rather than just restrict.',
      },
    ],
  },

  {
    slug: 'cholesterol',
    name: 'Cholesterol',
    conditionType: 'condition',
    definition:
      'Heart-healthy meal prep for cholesterol management focuses on reducing LDL ("bad") cholesterol through dietary patterns proven in clinical trials: soluble fiber, plant sterols, omega-3 fatty acids, and limiting saturated fat. The Portfolio Diet and Mediterranean Diet have the strongest evidence bases, lowering LDL by 10-30% in some studies.',
    disclaimer:
      'This content is for informational purposes only. Cholesterol management should be discussed with your physician, especially regarding statin therapy, familial hypercholesterolemia, and cardiovascular risk assessment. Dietary changes complement but do not replace medical treatment when indicated.',
    nutritionRules: [
      {
        nutrient: 'Soluble Fiber',
        recommendation: '10-25g daily from oats, beans, lentils, and psyllium',
        reason: 'Soluble fiber binds bile acids in the gut, forcing the liver to pull LDL cholesterol from blood to make more',
        severity: 'critical',
      },
      {
        nutrient: 'Saturated Fat',
        recommendation: 'Under 5-6% of total calories (about 13g on a 2000-calorie diet)',
        reason: 'Saturated fat is the primary dietary driver of LDL cholesterol production in the liver',
        severity: 'critical',
      },
      {
        nutrient: 'Omega-3 Fatty Acids',
        recommendation: '2 servings of fatty fish per week (salmon, mackerel, sardines)',
        reason: 'Lowers triglycerides by 15-30% and reduces cardiovascular inflammation',
        severity: 'important',
      },
      {
        nutrient: 'Plant Sterols/Stanols',
        recommendation: '2g daily from fortified foods or supplements',
        reason: 'Blocks cholesterol absorption in the intestine; can reduce LDL by 6-15%',
        severity: 'important',
      },
      {
        nutrient: 'Trans Fat',
        recommendation: 'Zero — eliminate completely',
        reason: 'Trans fat simultaneously raises LDL and lowers HDL; the worst dietary fat for cardiovascular health',
        severity: 'critical',
      },
    ],
    faqs: [
      {
        question: 'What are the best meal prep foods for lowering cholesterol?',
        answer:
          'Oats (soluble fiber), beans and lentils (soluble fiber + plant protein), salmon and sardines (omega-3s), almonds and walnuts (plant sterols + healthy fats), olive oil (replaces saturated fat), and eggplant (soluble fiber). The "Portfolio Diet" combines these foods and lowers LDL by up to 30%.',
      },
      {
        question: 'Should I avoid eggs if I have high cholesterol?',
        answer:
          'Current evidence shows dietary cholesterol has less impact on blood cholesterol than previously believed. Most guidelines allow 1 egg per day for heart-healthy adults. The bigger culprits are saturated fat (butter, cheese, fatty meat) and refined carbs. However, if you have familial hypercholesterolemia, discuss egg intake with your doctor.',
      },
      {
        question: 'What cooking methods are best for cholesterol management?',
        answer:
          'Baking, grilling, steaming, and sautéing in olive oil instead of frying in butter. Replace cream-based sauces with bean-based or olive oil-based alternatives. Use herbs and spices for flavor instead of cheese and cream. Batch-prep salmon, lentil soup, and bean-heavy stews for the week.',
      },
      {
        question: 'How quickly can meal prep improve my cholesterol numbers?',
        answer:
          'Dietary changes typically show measurable LDL reduction in 4-12 weeks. The Portfolio Diet (combining oats, almonds, plant sterols, and soy protein) showed 13% LDL reduction in just 4 weeks in clinical trials. Consistency matters more than perfection—aim for 80% adherence.',
      },
      {
        question: 'Can I still eat red meat with high cholesterol?',
        answer:
          'Limit to 1-2 lean portions per week. Choose loin and round cuts, trim visible fat, and avoid processed meats (bacon, sausage, hot dogs) which are linked to cardiovascular disease independent of cholesterol. Replace red meat meals with fish, poultry, or plant-based proteins most days.',
      },
      {
        question: 'What meal prep snacks help lower cholesterol?',
        answer:
          'Overnight oats with walnuts and flaxseed, hummus with vegetables, almond portions (1 oz/day), apple slices with peanut butter, and edamame. Prep weekly snack portions in containers. Avoid packaged snacks with palm oil, coconut oil, and hydrogenated oils—check ingredient labels.',
      },
    ],
  },
];

/** Lookup helper — find persona content by slug */
export function getPersonaContent(slug: string): PersonaContent | undefined {
  return personaContent.find(p => p.slug === slug);
}
