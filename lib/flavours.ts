export type Flavour = {
  id: string; name: string; heat: string; dry: boolean; popular: boolean; available: boolean; description: string;
};

// Names and ratings: Wingmaster's menu dated 2026-08-20. Descriptions rewritten.
// Dry is a preparation style, never a promise of no heat. Availability requires owner confirmation.
export const flavours: Flavour[] = [
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

export const heatFilters = ['All heat', 'No heat', 'Spicy', 'Hot', '1–3 flames', 'Extreme'] as const;
export type HeatFilter = typeof heatFilters[number];
export function heatLabel(heat: string) {
  return ({ N: 'No heat', D: 'Dry · heat not rated', S: 'Spicy', H: 'Hot', '1': '1 flame', '2': '2 flames', '3': '3 flames' } as Record<string, string>)[heat] ?? heat + ' Scoville';
}
export function matchesHeat(heat: string, filter: HeatFilter) {
  return filter === 'All heat' || (filter === 'No heat' && heat === 'N') || (filter === 'Spicy' && heat === 'S') || (filter === 'Hot' && heat === 'H') || (filter === '1–3 flames' && ['1', '2', '3'].includes(heat)) || (filter === 'Extreme' && /[KM]/.test(heat));
}
export function filterFlavours(query: string, heat: HeatFilter, dry: boolean, popular: boolean) {
  const q = query.toLowerCase().trim();
  return flavours.filter(f => (!q || (f.name + ' ' + f.description).toLowerCase().includes(q)) && matchesHeat(f.heat, heat) && (!dry || f.dry) && (!popular || f.popular));
}
