export type Flavour = {
  id: string; name: string; heat: string; dry: boolean; popular: boolean; available: boolean; description: string;
};

// Names and ratings: Wingmaster's menu dated 2026-08-20. Descriptions rewritten.
// Dry is a preparation style, never a promise of no heat. Availability requires owner confirmation.
const flavourCatalogue: Flavour[] = [
  {
    "name": "1983 Suicide",
    "heat": "2",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "1983-suicide-2",
    "description": "Medium sauce with a double Red Flame kick."
  },
  {
    "name": "Al Bundy",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "al-bundy-h",
    "description": ""
  },
  {
    "name": "Alabama White BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "alabama-white-bbq-n",
    "description": ""
  },
  {
    "name": "Angry Caesar",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "angry-caesar-s",
    "description": ""
  },
  {
    "name": "Apple Honey G",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "apple-honey-g-n",
    "description": ""
  },
  {
    "name": "Apple Jerk BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "apple-jerk-bbq-s",
    "description": ""
  },
  {
    "name": "Apple Pie BBQ",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "apple-pie-bbq-n",
    "description": "A sweet apple-pie twist on barbecue."
  },
  {
    "name": "Apple Reign",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "apple-reign-s",
    "description": ""
  },
  {
    "name": "Apple Thai",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "apple-thai-s",
    "description": ""
  },
  {
    "name": "Applewood BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "applewood-bbq-s",
    "description": ""
  },
  {
    "name": "Applewood Dry Smoke Rub",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "applewood-dry-smoke-rub-s",
    "description": ""
  },
  {
    "name": "Are U Nuts?",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "are-u-nuts-n",
    "description": ""
  },
  {
    "name": "Are U Nuts?",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "are-u-nuts-s",
    "description": ""
  },
  {
    "name": "Arizona Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "arizona-gold-n",
    "description": "Smoky Bell City barbecue and honey garlic."
  },
  {
    "name": "Avatar",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "avatar-n",
    "description": ""
  },
  {
    "name": "Aztec Blaze",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "aztec-blaze-s",
    "description": ""
  },
  {
    "name": "Bacon Garlic Parmesan",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bacon-garlic-parmesan-n",
    "description": ""
  },
  {
    "name": "BBQ Cajun Parmesan",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bbq-cajun-parmesan-s",
    "description": ""
  },
  {
    "name": "Bell City BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bell-city-bbq-n",
    "description": "The shop’s smoky barbecue."
  },
  {
    "name": "Bell City Blue",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bell-city-blue-n",
    "description": ""
  },
  {
    "name": "Bell City Fire",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bell-city-fire-h",
    "description": ""
  },
  {
    "name": "Bell City Spicy",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bell-city-spicy-s",
    "description": ""
  },
  {
    "name": "Bell City Thai",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bell-city-thai-s",
    "description": ""
  },
  {
    "name": "Black Apple",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "black-apple-n",
    "description": ""
  },
  {
    "name": "Blue Cheese Cajun",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "blue-cheese-cajun-s",
    "description": ""
  },
  {
    "name": "Blue Cheese Evil",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "blue-cheese-evil-3",
    "description": ""
  },
  {
    "name": "Blue Cheese Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "blue-cheese-gold-n",
    "description": ""
  },
  {
    "name": "Blue Cheese Hot",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "blue-cheese-hot-h",
    "description": ""
  },
  {
    "name": "Blue Cheese Medium",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "blue-cheese-medium-s",
    "description": ""
  },
  {
    "name": "Blue Cheese Mild",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "blue-cheese-mild-n",
    "description": ""
  },
  {
    "name": "Brazilian BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "brazilian-bbq-s",
    "description": ""
  },
  {
    "name": "Brazilian Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "brazilian-gold-s",
    "description": ""
  },
  {
    "name": "Bud Bundy",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bud-bundy-h",
    "description": ""
  },
  {
    "name": "Buffalava",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalava-s",
    "description": ""
  },
  {
    "name": "Buffalicious",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalicious-s",
    "description": ""
  },
  {
    "name": "Buffalo BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-bbq-s",
    "description": ""
  },
  {
    "name": "Buffalo Blue Cheese",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-blue-cheese-s",
    "description": ""
  },
  {
    "name": "Buffalo Blue Cheese Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-blue-cheese-gold-s",
    "description": ""
  },
  {
    "name": "Buffalo Blue Cheese Hot",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-blue-cheese-hot-h",
    "description": ""
  },
  {
    "name": "Buffalo Blue Cheese Medium",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-blue-cheese-medium-s",
    "description": ""
  },
  {
    "name": "Buffalo Blue Cheese Mild",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-blue-cheese-mild-s",
    "description": ""
  },
  {
    "name": "Buffalo Caesar",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-caesar-s",
    "description": ""
  },
  {
    "name": "Buffalo Cajun",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-cajun-s",
    "description": ""
  },
  {
    "name": "Buffalo Cajun Blue Cheese",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-cajun-blue-cheese-s",
    "description": ""
  },
  {
    "name": "Buffalo Cajun Ranch",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-cajun-ranch-s",
    "description": ""
  },
  {
    "name": "Buffalo Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-gold-s",
    "description": ""
  },
  {
    "name": "Buffalo Hot",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-hot-h",
    "description": ""
  },
  {
    "name": "Buffalo Jerk",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-jerk-s",
    "description": ""
  },
  {
    "name": "Buffalo Maple Cajun",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-maple-cajun-s",
    "description": ""
  },
  {
    "name": "Buffalo Medium",
    "heat": "S",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "buffalo-medium-s",
    "description": "Butter and hot sauce, Buffalo-style."
  },
  {
    "name": "Buffalo Mild",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-mild-h",
    "description": ""
  },
  {
    "name": "Buffalo Ranch",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-ranch-s",
    "description": ""
  },
  {
    "name": "Buffalo Suicide",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffalo-suicide-3",
    "description": ""
  },
  {
    "name": "Buffapeno",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "buffapeno-s",
    "description": ""
  },
  {
    "name": "Bundy",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "bundy-h",
    "description": ""
  },
  {
    "name": "Butter & Garlic",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "butter-garlic-n",
    "description": ""
  },
  {
    "name": "Cajun Bang",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "cajun-bang-s",
    "description": ""
  },
  {
    "name": "Cajun BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "cajun-bbq-s",
    "description": ""
  },
  {
    "name": "Cajun Dry",
    "heat": "D",
    "dry": true,
    "popular": true,
    "available": true,
    "id": "cajun-dry-d",
    "description": "Cajun seasoning with heat."
  },
  {
    "name": "Cajun Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "cajun-gold-s",
    "description": ""
  },
  {
    "name": "Cajun Parmesan",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "cajun-parmesan-s",
    "description": ""
  },
  {
    "name": "Cajun Picante",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "cajun-picante-h",
    "description": ""
  },
  {
    "name": "Campfire BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "campfire-bbq-n",
    "description": ""
  },
  {
    "name": "Canadian BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "canadian-bbq-n",
    "description": ""
  },
  {
    "name": "Canadian Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "canadian-gold-n",
    "description": ""
  },
  {
    "name": "Canadian Smoke",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "canadian-smoke-n",
    "description": ""
  },
  {
    "name": "Caribbean Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "caribbean-gold-s",
    "description": ""
  },
  {
    "name": "Carolina Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "carolina-gold-n",
    "description": ""
  },
  {
    "name": "Chapple Hill",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chapple-hill-s",
    "description": ""
  },
  {
    "name": "Cherry Koolaid",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "cherry-koolaid-n",
    "description": ""
  },
  {
    "name": "Chipotle BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chipotle-bbq-s",
    "description": ""
  },
  {
    "name": "Chipotle Jerk",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chipotle-jerk-s",
    "description": ""
  },
  {
    "name": "Chipotle Ranch",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chipotle-ranch-s",
    "description": ""
  },
  {
    "name": "Chocolate BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chocolate-bbq-n",
    "description": ""
  },
  {
    "name": "Chocolate Bundy",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chocolate-bundy-h",
    "description": ""
  },
  {
    "name": "Chocolate Chip",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "chocolate-chip-s",
    "description": ""
  },
  {
    "name": "Cinnabon",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "cinnabon-n",
    "description": ""
  },
  {
    "name": "Cinnagold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "cinnagold-n",
    "description": ""
  },
  {
    "name": "Creamy Bacon Parmesan",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "creamy-bacon-parmesan-n",
    "description": ""
  },
  {
    "name": "Creamy Dill Pickle",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "creamy-dill-pickle-n",
    "description": "Creamy, tangy dill pickle."
  },
  {
    "name": "Dan Brazilian",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dan-brazilian-s",
    "description": ""
  },
  {
    "name": "Danero Dave",
    "heat": "2",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "danero-dave-2",
    "description": ""
  },
  {
    "name": "Dillicious BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dillicious-bbq-n",
    "description": ""
  },
  {
    "name": "Dillicious Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dillicious-gold-n",
    "description": ""
  },
  {
    "name": "Dillicious Hot",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dillicious-hot-h",
    "description": ""
  },
  {
    "name": "Dillicious Medium",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dillicious-medium-s",
    "description": ""
  },
  {
    "name": "Dillicious Mild",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dillicious-mild-n",
    "description": ""
  },
  {
    "name": "Dillicious Thai",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dillicious-thai-s",
    "description": ""
  },
  {
    "name": "Dilly-Dilly",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "dilly-dilly-n",
    "description": ""
  },
  {
    "name": "Dirty Deebs",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "dirty-deebs-3",
    "description": ""
  },
  {
    "name": "Double Dare",
    "heat": "300K",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "double-dare-300k",
    "description": ""
  },
  {
    "name": "Egyptian Lover",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "egyptian-lover-s",
    "description": ""
  },
  {
    "name": "Evil Medium",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "evil-medium-3",
    "description": "The house suicide sauce."
  },
  {
    "name": "Fast N Furious",
    "heat": "3M+",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "fast-n-furious-3m",
    "description": "Extreme heat. Ask staff before ordering."
  },
  {
    "name": "Frank Castle",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "frank-castle-3",
    "description": ""
  },
  {
    "name": "French Toast",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "french-toast-n",
    "description": "Maple, cinnamon and icing sugar."
  },
  {
    "name": "Fruit Of The Boom",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "fruit-of-the-boom-n",
    "description": ""
  },
  {
    "name": "Gannon Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "gannon-gold-n",
    "description": ""
  },
  {
    "name": "Garlic Parmesan",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "garlic-parmesan-n",
    "description": "Buttery garlic and parmesan."
  },
  {
    "name": "Golden Parmesan",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "golden-parmesan-n",
    "description": ""
  },
  {
    "name": "Gretzky 99",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "gretzky-99-n",
    "description": ""
  },
  {
    "name": "Gummy Bear",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "gummy-bear-n",
    "description": "A sweet gummy-bear-inspired sauce."
  },
  {
    "name": "Gummy Bite",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "gummy-bite-s",
    "description": ""
  },
  {
    "name": "Hail Caesar BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-bbq-n",
    "description": ""
  },
  {
    "name": "Hail Caesar Cheezy BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-cheezy-bbq-n",
    "description": ""
  },
  {
    "name": "Hail Caesar Garlic Lovers",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-garlic-lovers-n",
    "description": ""
  },
  {
    "name": "Hail Caesar Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-gold-n",
    "description": ""
  },
  {
    "name": "Hail Caesar Hot",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-hot-h",
    "description": ""
  },
  {
    "name": "Hail Caesar Medium",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-medium-s",
    "description": ""
  },
  {
    "name": "Hail Caesar Mild",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hail-caesar-mild-n",
    "description": ""
  },
  {
    "name": "Hawaiian Punch",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hawaiian-punch-1",
    "description": ""
  },
  {
    "name": "Herky Jerky",
    "heat": "2",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "herky-jerky-2",
    "description": ""
  },
  {
    "name": "Honey (pure)",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-pure-n",
    "description": ""
  },
  {
    "name": "Honey & Lime",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-lime-n",
    "description": ""
  },
  {
    "name": "Honey BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-bbq-n",
    "description": ""
  },
  {
    "name": "Honey Cajun",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-cajun-s",
    "description": ""
  },
  {
    "name": "Honey Chipotle",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-chipotle-s",
    "description": ""
  },
  {
    "name": "Honey Garlic",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "honey-garlic-n",
    "description": "Sweet honey with a savoury garlic finish."
  },
  {
    "name": "Honey Jerk",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-jerk-s",
    "description": ""
  },
  {
    "name": "Honey Sesame",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-sesame-n",
    "description": ""
  },
  {
    "name": "Honey Teriyaki",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "honey-teriyaki-n",
    "description": ""
  },
  {
    "name": "Hot Apple Pie",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hot-apple-pie-h",
    "description": ""
  },
  {
    "name": "Hot Chocolate",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hot-chocolate-h",
    "description": ""
  },
  {
    "name": "Hot Cinnamon Rolls",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hot-cinnamon-rolls-h",
    "description": ""
  },
  {
    "name": "Hot Honey",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hot-honey-h",
    "description": ""
  },
  {
    "name": "Hot Sauce",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hot-sauce-h",
    "description": ""
  },
  {
    "name": "Hurricane Gold",
    "heat": "2",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "hurricane-gold-2",
    "description": ""
  },
  {
    "name": "Italian Stallion",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "italian-stallion-n",
    "description": ""
  },
  {
    "name": "Italian Stallion",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "italian-stallion-s",
    "description": ""
  },
  {
    "name": "Jalapeno BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jalapeno-bbq-s",
    "description": ""
  },
  {
    "name": "Jalapeno Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jalapeno-gold-s",
    "description": ""
  },
  {
    "name": "Jalapeno Ranch",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jalapeno-ranch-s",
    "description": ""
  },
  {
    "name": "Jelly Donut",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jelly-donut-n",
    "description": ""
  },
  {
    "name": "Jerk BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jerk-bbq-s",
    "description": "House jerk seasoning in barbecue sauce."
  },
  {
    "name": "Jerk Dry",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "jerk-dry-s",
    "description": ""
  },
  {
    "name": "Jerk Me Sweetly",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jerk-me-sweetly-s",
    "description": ""
  },
  {
    "name": "Jerkolina",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "jerkolina-s",
    "description": ""
  },
  {
    "name": "KC BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kc-bbq-n",
    "description": ""
  },
  {
    "name": "KC Blue BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kc-blue-bbq-n",
    "description": ""
  },
  {
    "name": "KC Hot BBQ",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kc-hot-bbq-h",
    "description": ""
  },
  {
    "name": "KC Jerk BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kc-jerk-bbq-s",
    "description": ""
  },
  {
    "name": "KC Med BBQ",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kc-med-bbq-s",
    "description": ""
  },
  {
    "name": "KC Vs. Buffalo",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kc-vs-buffalo-s",
    "description": ""
  },
  {
    "name": "Kelly Bundy",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kelly-bundy-h",
    "description": ""
  },
  {
    "name": "Kick Ass BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "kick-ass-bbq-n",
    "description": ""
  },
  {
    "name": "Killer Cherry Koolaid",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "killer-cherry-koolaid-1",
    "description": ""
  },
  {
    "name": "Lemon Pepper",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "lemon-pepper-s",
    "description": "Peppery lemon, finished with butter."
  },
  {
    "name": "Louisiana Butter",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "louisiana-butter-s",
    "description": ""
  },
  {
    "name": "Magic Travis Special",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "magic-travis-special-h",
    "description": ""
  },
  {
    "name": "Mamma Mia",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "mamma-mia-s",
    "description": ""
  },
  {
    "name": "Mawlife",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "mawlife-s",
    "description": ""
  },
  {
    "name": "Mean Caroline",
    "heat": "2",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "mean-caroline-2",
    "description": ""
  },
  {
    "name": "Medium BBQ",
    "heat": "S",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "medium-bbq-s",
    "description": "The classic barbecue with a spicy kick."
  },
  {
    "name": "Mild BBQ",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "mild-bbq-n",
    "description": "The mild house barbecue."
  },
  {
    "name": "Mrs. Krabbappel",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "mrs-krabbappel-s",
    "description": ""
  },
  {
    "name": "Nascar",
    "heat": "500K",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "nascar-500k",
    "description": "Barbecue with Red Savina pepper."
  },
  {
    "name": "Nutty Chocolatta",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "nutty-chocolatta-n",
    "description": ""
  },
  {
    "name": "O Canada",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "o-canada-n",
    "description": ""
  },
  {
    "name": "Ohio Gold",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ohio-gold-s",
    "description": "Medium sauce with honey garlic."
  },
  {
    "name": "OMG!",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "omg-s",
    "description": ""
  },
  {
    "name": "Parm & Pepper",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "parm-pepper-s",
    "description": ""
  },
  {
    "name": "PB & J Dream",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "pb-j-dream-n",
    "description": ""
  },
  {
    "name": "Peanut Butter & Jam",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "peanut-butter-jam-n",
    "description": "The nostalgic pairing, made for wings."
  },
  {
    "name": "Peanut Butter Apple",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peanut-butter-apple-n",
    "description": ""
  },
  {
    "name": "Peanut Butter Heaven",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peanut-butter-heaven-n",
    "description": ""
  },
  {
    "name": "Peanut Butter Honey",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peanut-butter-honey-n",
    "description": ""
  },
  {
    "name": "Peanut Butter Maple",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peanut-butter-maple-n",
    "description": ""
  },
  {
    "name": "Peanut Butter Only",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peanut-butter-only-n",
    "description": ""
  },
  {
    "name": "Peanut Butter Supreme",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peanut-butter-supreme-n",
    "description": ""
  },
  {
    "name": "Peg Bundy",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peg-bundy-h",
    "description": ""
  },
  {
    "name": "Peppercorn Ranch",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "peppercorn-ranch-s",
    "description": ""
  },
  {
    "name": "Pirates Gold",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "pirates-gold-3",
    "description": ""
  },
  {
    "name": "Plain",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "plain-n",
    "description": ""
  },
  {
    "name": "Porky Pie BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "porky-pie-bbq-n",
    "description": ""
  },
  {
    "name": "Queen Of Thorns",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "queen-of-thorns-s",
    "description": ""
  },
  {
    "name": "Ranch BBQ",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ranch-bbq-n",
    "description": ""
  },
  {
    "name": "Ranch Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ranch-gold-n",
    "description": ""
  },
  {
    "name": "Ranch Hot",
    "heat": "H",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ranch-hot-h",
    "description": ""
  },
  {
    "name": "Ranch Medium",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ranch-medium-s",
    "description": ""
  },
  {
    "name": "Ranch Mild",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ranch-mild-n",
    "description": ""
  },
  {
    "name": "Raspberry Beret",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "raspberry-beret-n",
    "description": "Raspberry and barbecue."
  },
  {
    "name": "Raspberry Chipotle",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "raspberry-chipotle-s",
    "description": ""
  },
  {
    "name": "Raspberry Habanero",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "raspberry-habanero-1",
    "description": ""
  },
  {
    "name": "Raspberry Jalapeno",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "raspberry-jalapeno-s",
    "description": ""
  },
  {
    "name": "Raspberry Jerk",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "raspberry-jerk-s",
    "description": ""
  },
  {
    "name": "Red Flame Mix",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "red-flame-mix-s",
    "description": ""
  },
  {
    "name": "Ridillculous",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "ridillculous-n",
    "description": ""
  },
  {
    "name": "Roman Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "roman-gold-n",
    "description": ""
  },
  {
    "name": "Salt & Pepper",
    "heat": "D",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "salt-pepper-d",
    "description": "A simple dry-seasoned classic."
  },
  {
    "name": "Salt & Vinegar",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": false,
    "id": "salt-vinegar-n",
    "description": ""
  },
  {
    "name": "Scaredy Cat",
    "heat": "1M",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "scaredy-cat-1m",
    "description": "Hot sauce with ghost pepper."
  },
  {
    "name": "Seasoning Salt",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "seasoning-salt-n",
    "description": ""
  },
  {
    "name": "Sesame Gold",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sesame-gold-n",
    "description": ""
  },
  {
    "name": "Sierra Classic",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sierra-classic-s",
    "description": ""
  },
  {
    "name": "Smashin’ Apples",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "smashin-apples-1",
    "description": ""
  },
  {
    "name": "Smokey Bacon",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "smokey-bacon-n",
    "description": ""
  },
  {
    "name": "Sour Cream & Onion",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": false,
    "id": "sour-cream-onion-n",
    "description": ""
  },
  {
    "name": "Spicy Cherry Koolaid",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "spicy-cherry-koolaid-s",
    "description": ""
  },
  {
    "name": "Sweet Buffalo Gal",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sweet-buffalo-gal-s",
    "description": ""
  },
  {
    "name": "Sweet Caroline",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sweet-caroline-n",
    "description": "The house’s secret sauce."
  },
  {
    "name": "Sweet Chili Jerk",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sweet-chili-jerk-s",
    "description": ""
  },
  {
    "name": "Sweet Chili Thai",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sweet-chili-thai-s",
    "description": ""
  },
  {
    "name": "Sweet Lava",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sweet-lava-s",
    "description": ""
  },
  {
    "name": "Sweet Marie",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "sweet-marie-s",
    "description": ""
  },
  {
    "name": "Teriyaki",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "teriyaki-n",
    "description": ""
  },
  {
    "name": "Tex-Mex Rub",
    "heat": "S",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "tex-mex-rub-s",
    "description": ""
  },
  {
    "name": "Texas Gold",
    "heat": "N",
    "dry": false,
    "popular": true,
    "available": true,
    "id": "texas-gold-n",
    "description": "Mild barbecue meets honey garlic."
  },
  {
    "name": "The Big Apple",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "the-big-apple-s",
    "description": ""
  },
  {
    "name": "Throttle House",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "throttle-house-s",
    "description": ""
  },
  {
    "name": "Tropical Jerk",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "tropical-jerk-s",
    "description": ""
  },
  {
    "name": "Tropical Paradise",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "tropical-paradise-n",
    "description": ""
  },
  {
    "name": "Vanilla Sky",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "vanilla-sky-n",
    "description": ""
  },
  {
    "name": "Waco Texas Gold",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "waco-texas-gold-1",
    "description": ""
  },
  {
    "name": "White Cheddar Cheese Dust",
    "heat": "N",
    "dry": true,
    "popular": false,
    "available": true,
    "id": "white-cheddar-cheese-dust-n",
    "description": ""
  },
  {
    "name": "X - No Heat",
    "heat": "N",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "x-no-heat-n",
    "description": ""
  },
  {
    "name": "X – 1 Flame",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "x-1-flame-1",
    "description": ""
  },
  {
    "name": "X – 2 Flames",
    "heat": "2",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "x-2-flames-2",
    "description": ""
  },
  {
    "name": "X – 3 Flames",
    "heat": "3",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "x-3-flames-3",
    "description": ""
  },
  {
    "name": "X Hot",
    "heat": "1",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "x-hot-1",
    "description": ""
  },
  {
    "name": "X Spicy",
    "heat": "S",
    "dry": false,
    "popular": false,
    "available": true,
    "id": "x-spicy-s",
    "description": ""
  }
];

// Short menu copy supplied by Wingmaster. Keeping the copy beside the catalogue
// makes every search result and saved-sauce card useful without duplicating text
// throughout the UI.
const suppliedDescriptionRows = [
  ["APPLE PIE BBQ","N","Tremendous flavah – Tastes like Mom’s"],
  ["HONEY GARLIC","N","This is LIQUID GOLD!"],
  ["GARLIC PARMESAN","N","Garlic butter & parm cheese"],
  ["MILD BBQ","N","The best BBQ sauce ever!"],
  ["BUFFALO MEDIUM","S","Our signature butter hot sauce mix"],
  ["TEXAS GOLD","N","Mild BBQ + Honey Garlic"],
  ["PEANUT BUTTER & JAM","N","Yeah! You read it right!"],
  ["MEDIUM BBQ","S","Classic spicy wing sauce"],
  ["CREAMY DILL PICKLE","N","Dill pickle wing sauce"],
  ["CAJUN DRY","D","Great flavah nice heat"],
  ["APPLE HONEY G","N","Honey Garlic + Apple Pie BBQ"],
  ["APPLE JERK BBQ","S","Tre-made Jerk rub + Apple Pie BBQ"],
  ["ARIZONA GOLD","N","Bell City BBQ + Honey garlic"],
  ["BELL CITY BBQ","N","Tre-Made Smokey BBQ Reps “519”"],
  ["BUFFALO BLUE CHEESE","S","Mild-Med-Hot-Gold"],
  ["BUFFALO HOT","H","Our signature Buffalo hot"],
  ["BUFFALO MILD","S","Our signature Buffalo style"],
  ["BUNDY","H","Hot sauce + Honey Garlic"],
  ["CREAMY BACON PARMESAN","N","Good ‘til the last bite"],
  ["GUMMY BEAR","N","Tre-made Gummy Bear wing sauce"],
  ["EVIL MEDIUM","3","This One Is Our House Suicide"],
  ["HONEY BBQ","N","Tre-riffic Honey-made BBQ sauce"],
  ["HOT SAUCE","H","Typical hot sauce"],
  ["JERK BBQ","S","Tre-made signature Jerk BBQ recipe"],
  ["LEMON PEPPER","S","Spicy lemon pepper with butter & lemon"],
  ["SALT & PEPPER","D","Simple flavah - so good!"],
  ["SWEET CHILI THAI","S","Great flavah for wings"],
  ["APPLEWOOD DRY SMOKE RUB","S","Simply delish!"],
  ["CAJUN BANG","S","Dry Cajun with Red flame kick"],
  ["CAJUN PARMESAN","S","Cajun dry + Parmesan cheese"],
  ["CINNABON","N","Cinnamon sugar mix + White icing sugar"],
  ["DILLY-DILLY","N","Makes your eyes blink – It’s soooo Dilly Dilly!!!"],
  ["DOUBLE DARE","300K","What a kick this one has!"],
  ["JERK DRY","S","Tre-made Jerk rub dry"],
  ["PARM & PEPPER","S","Parmesan cheese + Black pepper"],
  ["RED FLAME MIX","S","Cayenne based spicy seasoning mix"],
  ["SALT & VINEGAR","N","Just like the potato chips"],
  ["SEASONING SALT","N","Bring some action to the wings"],
  ["SMOKEY BACON","N","Tre-made Jerk rub dry"],
  ["SOUR CREAM & ONION","N","Just like the potato chips"],
  ["TEX-MEX RUB","S","Southern style spice rub"],
  ["WHITE CHEDDAR CHEESE DUST","N","Oh so good on fried chicken!"],
  ["ALABAMA WHITE BBQ","N","Mayo based BBQ sauce! TRE fav!"],
  ["ARE U NUTS?","N","Crushed nuts + Peanut Butter"],
  ["AVATAR","N","“Blue” Blue Cheese is all you need!"],
  ["BACON GARLIC PARMESAN","N","Bacon + Garlic + Parm cheese"],
  ["BELL CITY BLUE","N","Blue cheese + Bell City BBQ"],
  ["BLACK APPLE","N","Black food dyed Apple Pie BBQ wings!"],
  ["BLUE CHEESE GOLD","N","Blue cheese + Texas Gold"],
  ["BLUE CHEESE MILD","N","Mild BBQ + Blue cheese"],
  ["BUTTER & GARLIC","N","So simple & flavahful"],
  ["CAMPFIRE BBQ","N","Tre-made Mayo BBQ remix!"],
  ["CANADIAN BBQ","N","Maple syrup + Mild BBQ"],
  ["CANADIAN GOLD","N","Maple syrup + Honey Garlic"],
  ["CANADIAN SMOKE","N","Maple syrup + Bell City BBQ + KC BBQ"],
  ["CAROLINA GOLD","N","Sweet Caroline + Honey garlic"],
  ["CHERRY KOOLAID","N","Tre-made Kool-Aid flavah"],
  ["CHOCOLATE BBQ","N","Chocolate syrup + Mild BBQ"],
  ["CINNAGOLD","N","Cinnamon sugar + Honey garlic"],
  ["DILLICIOUS BBQ","N","Bell city BBQ + Creamy Dill"],
  ["DILLICIOUS GOLD","N","Texas Gold + Creamy Dill"],
  ["DILLICIOUS MILD","N","Mild BBQ + Creamy Dill"],
  ["FRENCH TOAST","N","Maple syrup, cinnamon sugar, Icing sugar"],
  ["FRUIT OF THE BOOM","N","Kool-Aid, Apple Pie, Gummy & Raspberry"],
  ["GANNON GOLD","N","Brown sugar + Honey garlic"],
  ["GOLDEN PARMESAN","N","Honey Garlic + Caesar + Parm Cheese"],
  ["GRETZKY 99","N","Texas Gold + Brown sugar"],
  ["HAIL CAESAR BBQ","N","Caesar + Bell City BBQ"],
  ["HAIL CAESAR CHEEZY BBQ","N","Caesar + Mild BBQ + Parm cheese"],
  ["HAIL CAESAR GARLIC LOVERS","N","Garlic + Hail Caesar Mild"],
  ["HAIL CAESAR GOLD","N","Caesar + Texas Gold"],
  ["HAIL CAESAR MILD","N","Our signature Caesar style"],
  ["HONEY & LIME","N","Lime juice + Honey"],
  ["HONEY (PURE)","N","Mother Nature is simple!"],
  ["HONEY SESAME","N","Honey + Sesame seeds"],
  ["HONEY TERIYAKI","N","Sweet Honey + Teriyaki"],
  ["ITALIAN STALLION","N","Bell City BBQ + Marinara + Parm cheese"],
  ["JELLY DONUT","N","Raspberry wing sauce with Icing Sugar"],
  ["KC BBQ","N","Smoky BBQ sauce"],
  ["KC BLUE BBQ","N","Blue cheese + KC BBQ"],
  ["KICK ASS BBQ","N","4 flavah secret remix"],
  ["NUTTY CHOCOLATTA","N","Peanut butter + Chocolate syrup"],
  ["O CANADA","N","Tre-made burger wing sauce"],
  ["PEANUT BUTTER APPLE","N","Peanut butter + Apple Pie BBQ"],
  ["PEANUT BUTTER HEAVEN","N","Peanut butter + Honey garlic"],
  ["PEANUT BUTTER HONEY","N","Tastes like a dessert from 80’s"],
  ["PEANUT BUTTER MAPLE","N","Maple syrup drizzled all over!"],
  ["PEANUT BUTTER ONLY","N","Loved this one forever!"],
  ["PB & J DREAM","N","M&M’s, choc sauce, Rasp Beret, whip cream, cherry"],
  ["PEANUT BUTTER SUPREME","N","Crushed M&M’s + Peanut butter"],
  ["PLAIN","N","Just like that"],
  ["PORKY PIE BBQ","N","Bacon + Apple Pie BBQ"],
  ["RANCH BBQ","N","Bell City BBQ sauce + Ranch dressing"],
  ["RANCH GOLD","N","Ranch dressing + Texas Gold"],
  ["RANCH MILD","N","Our signature Ranch Mild sauce"],
  ["RASPBERRY BERET","N","Sweet raspberry BBQ sauce"],
  ["RIDILLCULOUS","N","Dilly Dilly + Creamy Dill + shredded pickles"],
  ["ROMAN GOLD","N","Caesar Dressing + Honey Garlic"],
  ["SESAME GOLD","N","Bring some action to the wings"],
  ["SWEET CAROLINE","N","It’s been a trade secret for long time!"],
  ["TERIYAKI","N","Old standard wing flavah"],
  ["TROPICAL PARADISE","N","Pina colada wing sauce with a cherry"],
  ["VANILLA SKY","N","Sweet Vanilla BBQ sauce is real deal!"],
  ["X - NO HEAT","N","We will create your flavour – no heat"],
  ["ANGRY CAESAR","S","Jalapeno + Caesar dressing"],
  ["APPLE REIGN","S","Red flame mix + Apple Pie BBQ"],
  ["APPLE THAI","S","Sweet Chili Thai + Apple Pie BBQ"],
  ["APPLEWOOD BBQ","S","Applewood dry + Apple Pie BBQ"],
  ["AZTEC BLAZE","S","Red flame mix + Arizona Gold"],
  ["BBQ CAJUN PARMESAN","S","Cajun + Bell City BBQ + Parmesan cheese"],
  ["BELL CITY SPICY","S","Red Flaming’ mix + Bell City BBQ"],
  ["BELL CITY THAI","S","Sweet Chili Thai + Bell City BBQ"],
  ["BLUE CHEESE CAJUN","S","Cajun dry + Blue Cheese"],
  ["BLUE CHEESE MEDIUM","S","Medium BBQ + Blue Cheese"],
  ["BRAZILIAN BBQ","S","Lime + Brazilian spice + Bell City BBQ"],
  ["BRAZILIAN GOLD","S","Lime + Brazilian spice + Honey Garlic"],
  ["BUFFALAVA","S","Sweet Lava + Buffalo"],
  ["BUFFALICIOUS","S","Creamy Dill + Buffalo"],
  ["BUFFALO BBQ","S","Bell City BBQ + Buffalo"],
  ["BUFFALO BLUE CHEESE GOLD","S","Texas Gold + BC Hot + Buffalo"],
  ["BUFFALO BLUE CHEESE MEDIUM","S","Blue Cheese Hot + Buffalo"],
  ["BUFFALO BLUE CHEESE MILD","S","Blue Cheese Hot + Buffalo"],
  ["BUFFALO CAESAR","S","Caesar + Buffalo"],
  ["BUFFALO CAJUN","S","Cajun + Buffalo"],
  ["BUFFALO CAJUN BLUE CHEESE","S","Blue Cajun + Buffalo"],
  ["BUFFALO CAJUN RANCH","S","Cajun + Ranch + Buffalo"],
  ["BUFFALO GOLD","S","Honey Garlic + Buffalo"],
  ["BUFFALO JERK","S","Tre-made Jerk rub + Buffalo"],
  ["BUFFALO MAPLE CAJUN","S","Cajun + Maple Syrup + Buffalo"],
  ["BUFFALO RANCH","S","Ranch + Buffalo"],
  ["BUFFAPENO","S","Jalapeno + Buffalo"],
  ["CAJUN BBQ","S","Cajun dry + Bell City BBQ"],
  ["CAJUN GOLD","S","Cajun dry + Honey garlic"],
  ["CARIBBEAN GOLD","S","Tre-made Jerk dry + Honey Garlic"],
  ["CHAPPLE HILL","S","Chipotle BBQ + Apple Pie BBQ"],
  ["CHIPOTLE BBQ","S","It’s a smoky spicy BBQ sauce"],
  ["CHIPOTLE JERK","S","Tre-made jerk dry rub + Chipotle BBQ"],
  ["CHIPOTLE RANCH","S","Ranch dressing + Chipotle BBQ"],
  ["CHOCOLATE CHIP","S","Chocolate syrup + Chipotle BBQ"],
  ["DAN BRAZILIAN","S","Lime + Brazilian Spice + Mild BBQ"],
  ["DILLICIOUS MEDIUM","S","Medium BBQ + Creamy Dill"],
  ["DILLICIOUS THAI","S","Sweet Chili Thai + Creamy Dill"],
  ["EGYPTIAN LOVER","S","Cumin based Honey BBQ sauce"],
  ["GUMMY BITE","S","Red flame mix + Gummy Bear"],
  ["HAIL CAESAR MEDIUM","S","Medium + Caesar"],
  ["HONEY CAJUN","S","Cajun + Honey"],
  ["HONEY CHIPOTLE","S","Chipotle BBQ + Honey"],
  ["HONEY JERK","S","Tre-Made Jerk rub + Honey"],
  ["ITALIAN STALLION","S","Bell City BBQ + Mamma Mia style"],
  ["JALAPENO BBQ","S","Bell City BBQ + Jalapeno"],
  ["JALAPENO GOLD","S","Spicy Jalapeno + Honey Garlic"],
  ["JALAPENO RANCH","S","Tre-made Jalapeno Ranch"],
  ["JERK ME SWEETLY","S","Tre-made signature Jerk + Texas Gold"],
  ["JERKOLINA","S","Sweet Caroline + Tre-made Jerk rub"],
  ["KC JERK BBQ","S","Jerk + Mild BBQ + KC BBQ"],
  ["KC MED BBQ","S","Medium + KC BBQ"],
  ["KC VS. BUFFALO","S","What a rivalry! Great flavah too!"],
  ["LOUISIANA BUTTER","S","Cajun butter wing sauce"],
  ["MAMMA MIA","S","Medium + Marinara sauce + Parmesan cheese"],
  ["MAWLIFE","S","Tex-mex + Maple Syrup + Bell City BBQ"],
  ["MRS. KRABBAPPEL","S","Cajun + Apple Pie BBQ"],
  ["OHIO GOLD","S","Medium & Honey Garlic so good!"],
  ["OMG!","S","My 80’s sticky sweet spicy wing sauce"],
  ["PEPPERCORN RANCH","S","Cracked black pepper + Ranch"],
  ["QUEEN OF THORNS","S","Red Flame Mix + Sweet Chili + Ranch"],
  ["RANCH MEDIUM","S","Medium BBQ + Ranch"],
  ["RASPBERRY CHIPOTLE","S","Chipotle + Raspberry Beret"],
  ["RASPBERRY JALAPENO","S","Jalapeno pepper + Raspberry Beret"],
  ["RASPBERRY JERK","S","Tre-made Jerk rub + Raspberry Beret"],
  ["SIERRA CLASSIC","S","Tex-mex rub + Arizona Gold"],
  ["SPICY CHERRY KOOLAID","S","This Kool-Aid is LIT with spicy kick!"],
  ["SWEET BUFFALO GAL","S","Sweet Caroline + Buffalo"],
  ["SWEET CHILI JERK","S","Tre-made Jerk rub + Sweet Chili Thai Sauce"],
  ["SWEET LAVA","S","Hot sauce + Honey Garlic"],
  ["SWEET MARIE","S","Sweet Chili Thai + Peanut Butter"],
  ["THE BIG APPLE","S","Buffalo + Apple Pie BBQ"],
  ["TROPICAL JERK","S","Jerk based Tropical sauce with A cherry"],
  ["X SPICY","S","Tre will create your flavah with a spicy kick!"],
  ["AL BUNDY","H","Cayenne kick + Bundy"],
  ["BELL CITY FIRE","H","Bell City BBQ + Hot sauce"],
  ["BLUE CHEESE HOT","H","Blue cheese + Hot sauce"],
  ["BUD BUNDY","H","Tre-made Jerk rub + Bundy"],
  ["BUFFALO BLUE CHEESE HOT","H","Blue Cheese Hot + Buffalo"],
  ["CAJUN PICANTE","H","Hot sauce + Cajun"],
  ["CHOCOLATE BUNDY","H","Bundy + Chocolate BBQ"],
  ["DILLICIOUS HOT","H","Hot sauce + Creamy Dill"],
  ["HAIL CAESAR HOT","H","Our signature Caesar Style"],
  ["HOT APPLE PIE","H","Hot + Apple Pie BBQ"],
  ["HOT CHOCOLATE","H","Hot + Chocolate BBQ sauce"],
  ["HOT CINNAMON ROLLS","H","Cinnamon sugar + Bundy"],
  ["HOT HONEY","H","So delicious on wings! Go for it"],
  ["MAGIC TRAVIS SPECIAL","H","Bacon + Hail Caesar Hot"],
  ["KC HOT BBQ","H","Hot sauce + KC BBQ"],
  ["KELLY BUNDY","H","Blue Cheese + Bundy"],
  ["PEG BUNDY","H","Brown sugar + Bundy"],
  ["RANCH HOT","H","Our signature Ranch Hot style"],
  ["X HOT","H","Tre will create your flavour – Add Devilz Jooce kick"],
  ["HAWAIIAN PUNCH","1","Devilz Jooce + Honey Garlic"],
  ["KILLER CHERRY KOOLAID","1","This Kool-Aid is LIT with 1 kick!"],
  ["RASPBERRY HABANERO","1","Devilz Jooce + Raspberry Beret"],
  ["SMASHIN’ APPLES","1","Devilz Jooce + Apple Pie BBQ"],
  ["WACO TEXAS GOLD","1","Devilz Jooce + Texas Gold"],
  ["X – 1 FLAME","1","Tre will create your flavour – Add Devilz Jooce kick"],
  ["1983 SUICIDE","2","2X Red Flame Mix + Medium sauce"],
  ["DANERO DAVE","2","2X Devilz Jooce + Hot sauce"],
  ["HERKY JERKY","2","2X Devilz Jooce + Bud Bundy"],
  ["HURRICANE GOLD","2","2X Devilz Jooce + Carolina Gold"],
  ["MEAN CAROLINE","2","2X Devilz Jooce + Sweet Caroline"],
  ["X – 2 FLAMES","2","Tre will create your flavah with a Fya style!"],
  ["BLUE CHEESE EVIL","3","Evil Medium + Blue Cheese"],
  ["BUFFALO SUICIDE","3","Hell’s Kitchen Suicide"],
  ["DIRTY DEEBS","3","Evil Medium + Apple Pie BBQ sauce"],
  ["FRANK CASTLE","3","Suicide Tomato Sauce with Parmesan Cheese"],
  ["PIRATES GOLD","3","Evil Medium + Honey Garlic"],
  ["THROTTLE HOUSE","3","Sweet & spicy flavah with some Bang!"],
  ["X – 3 FLAMES","3","Tre will create your flavah with a Fya style!"],
  ["NASCAR","500K","BBQ Sauce + Red Savina"],
  ["SCAREDY CAT","1M","Hot sauce + Ghost pepper"],
  ["FAST N FURIOUS","3M+","Pure NOS in this flavah! Ask us!"],
] as const;

const normalizeDescriptionKey = (value: string) =>
  value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const suppliedDescriptions = new Map<string, string>();
const suppliedDescriptionsByName = new Map<string, string>();

for (const [name, heat, description] of suppliedDescriptionRows) {
  const nameKey = normalizeDescriptionKey(name);
  suppliedDescriptions.set(`${nameKey}::${heat}`, description);
  if (!suppliedDescriptionsByName.has(nameKey)) suppliedDescriptionsByName.set(nameKey, description);
}

// These fix clear copy errors in the supplied document while keeping its
// compact, ingredient-first style.
const correctedDescriptions: Record<string, string> = {
  'bell city bbq::N': 'Tre-made smoky BBQ — repping the 519.',
  'buffalo blue cheese medium::S': 'Buffalo Medium + Blue cheese',
  'buffalo blue cheese mild::S': 'Buffalo Mild + Blue cheese',
  'hail caesar hot::H': 'Caesar dressing + Hot sauce',
  'sesame gold::N': 'Honey Garlic + Sesame seeds',
  'smokey bacon::N': 'Smoky bacon seasoning in a savoury dry rub',
};

function descriptionFor(flavour: Flavour) {
  const nameKey = normalizeDescriptionKey(flavour.name);
  const exactKey = `${nameKey}::${flavour.heat}`;
  const supplied =
    correctedDescriptions[exactKey] ??
    suppliedDescriptions.get(exactKey) ??
    suppliedDescriptionsByName.get(nameKey) ??
    flavour.description.trim();
  return supplied || (flavour.dry ? 'A crisp, savoury Wingmaster dry rub.' : 'A Wingmaster original packed with flavah.');
}

export const flavours: Flavour[] = flavourCatalogue.map(flavour => ({
  ...flavour,
  description: descriptionFor(flavour),
}));

export const heatFilters = ['All heat', 'No heat', 'Spicy', 'Hot', '1–3 flames', 'Extreme'] as const;
export type HeatFilter = typeof heatFilters[number];
export function heatLabel(heat: string) {
  return ({ N: 'No heat', D: 'Dry · heat not rated', S: 'Spicy', H: 'Hot', '1': '1 flame', '2': '2 flames', '3': '3 flames' } as Record<string, string>)[heat] ?? heat + ' Scoville';
}
export function matchesHeat(heat: string, filter: HeatFilter) {
  return filter === 'All heat' || (filter === 'No heat' && heat === 'N') || (filter === 'Spicy' && heat === 'S') || (filter === 'Hot' && heat === 'H') || (filter === '1–3 flames' && ['1', '2', '3'].includes(heat)) || (filter === 'Extreme' && /[KM]/.test(heat));
}
export function filterFlavours(query: string, heat: HeatFilter, dry: boolean, popular: boolean, savedIds?: readonly string[]) {
  const q = query.toLowerCase().trim();
  const saved = savedIds === undefined ? null : new Set(savedIds);
  return flavours.filter(f => (!q || (f.name + ' ' + f.description).toLowerCase().includes(q)) && matchesHeat(f.heat, heat) && (!dry || f.dry) && (!popular || f.popular) && (!saved || saved.has(f.id)));
}
