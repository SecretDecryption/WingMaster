export type Variant = { id: string; label: string; price: number; flavours?: number; dips?: number };
export type MenuItem = { id: string; name: string; category: string; description: string; price: number; image?: string; variants?: Variant[]; wing?: boolean; styles?: string[]; flavours?: number; dips?: number; drinks?: number; dipChoice?: boolean; availabilityNote?: string };
export const categories = ['Wings', 'Combos', 'Starters', 'Sides', 'Loaded poutine', 'Extras', 'Desserts', 'Drinks', 'Blackenstein'];
// All amounts are integer cents. Reference snapshot: 2026-09-02. Not a live price feed.
export const menuItems: MenuItem[] = [
  {
    "id": "breaded",
    "name": "Wings",
    "category": "Wings",
    "description": "Bone-in wings, breaded or naked. Includes veggies and dip.",
    "price": 1099,
    "image": "/breaded-wings.png",
    "variants": [
      {
        "id": "half",
        "label": "½ lb / 0.5× boneless",
        "price": 1099,
        "flavours": 1,
        "dips": 1
      },
      {
        "id": "one",
        "label": "1 lb / 1× boneless",
        "price": 1999,
        "flavours": 1,
        "dips": 1
      },
      {
        "id": "one-half",
        "label": "1½ lb / 1.5× boneless",
        "price": 2999,
        "flavours": 1,
        "dips": 1
      },
      {
        "id": "two",
        "label": "2 lb / 2× boneless",
        "price": 3799,
        "flavours": 2,
        "dips": 1
      },
      {
        "id": "three",
        "label": "3 lb / 3× boneless",
        "price": 5499,
        "flavours": 3,
        "dips": 2
      },
      {
        "id": "five",
        "label": "5 lb / 5× boneless",
        "price": 8999,
        "flavours": 5,
        "dips": 3
      }
    ],
    "wing": true,
    "styles": [
      "Breaded",
      "Naked"
    ],
    "flavours": 1,
    "dips": 1
  },
  {
    "id": "boneless",
    "name": "Boneless wings",
    "category": "Wings",
    "description": "Breaded chicken breast bites with your choice of flavour, veggies and dip.",
    "price": 1099,
    "image": "/boneless-wings.png",
    "variants": [
      {
        "id": "half",
        "label": "½ lb / 0.5× boneless",
        "price": 1099,
        "flavours": 1,
        "dips": 1
      },
      {
        "id": "one",
        "label": "1 lb / 1× boneless",
        "price": 1999,
        "flavours": 1,
        "dips": 1
      },
      {
        "id": "one-half",
        "label": "1½ lb / 1.5× boneless",
        "price": 2999,
        "flavours": 1,
        "dips": 1
      },
      {
        "id": "two",
        "label": "2 lb / 2× boneless",
        "price": 3799,
        "flavours": 2,
        "dips": 1
      },
      {
        "id": "three",
        "label": "3 lb / 3× boneless",
        "price": 5499,
        "flavours": 3,
        "dips": 2
      },
      {
        "id": "five",
        "label": "5 lb / 5× boneless",
        "price": 8999,
        "flavours": 5,
        "dips": 3
      }
    ],
    "wing": true,
    "styles": [
      "Boneless"
    ],
    "flavours": 1,
    "dips": 1
  },
  {
    "id": "cauli",
    "name": "Cauliflower wings",
    "category": "Wings",
    "description": "Crispy cauliflower with one flavour. Listed in the takeout menu; confirm availability with the shop.",
    "price": 1399,
    "image": "/cauliflower-wings.png",
    "flavours": 1,
    "availabilityNote": "Takeout-menu item"
  },
  {
    "id": "mozza",
    "name": "Mozzarella sticks",
    "description": "Six sticks with marinara dip.",
    "price": 1099,
    "category": "Starters"
  },
  {
    "id": "pickles",
    "name": "Fried pickles",
    "description": "Six dill pickle wedges with creamy dill dip.",
    "price": 999,
    "category": "Starters"
  },
  {
    "id": "mushrooms",
    "name": "Battered mushrooms",
    "description": "Fried mushrooms with ranch.",
    "price": 1199,
    "category": "Starters"
  },
  {
    "id": "poppers",
    "name": "Jalapeño poppers",
    "description": "Cream-cheese-filled poppers with jalapeño ranch.",
    "price": 1299,
    "category": "Starters"
  },
  {
    "id": "garlic-bread",
    "name": "Garlic bread",
    "description": "Bread with garlic butter.",
    "price": 799,
    "category": "Starters"
  },
  {
    "id": "garlic-cheese",
    "name": "Garlic bread & cheese",
    "description": "Garlic bread topped with melted cheese.",
    "price": 1199,
    "category": "Starters"
  },
  {
    "id": "garlic-bacon",
    "name": "Garlic bread, cheese & bacon",
    "description": "Garlic bread with cheese and bacon.",
    "price": 1399,
    "category": "Starters"
  },
  {
    "id": "fries",
    "name": "Fries",
    "description": "Golden fries, sized for your appetite.",
    "category": "Sides",
    "price": 499,
    "variants": [
      {
        "id": "small",
        "label": "Small",
        "price": 499
      },
      {
        "id": "medium",
        "label": "Medium",
        "price": 799
      },
      {
        "id": "large",
        "label": "Large",
        "price": 1099
      }
    ]
  },
  {
    "id": "poutine",
    "name": "Poutine",
    "description": "Fries, cheese and gravy.",
    "category": "Sides",
    "price": 899,
    "variants": [
      {
        "id": "small",
        "label": "Small",
        "price": 899
      },
      {
        "id": "medium",
        "label": "Medium",
        "price": 1499
      },
      {
        "id": "large",
        "label": "Large",
        "price": 2099
      }
    ]
  },
  {
    "id": "rings",
    "name": "Onion rings",
    "description": "Golden battered onion rings.",
    "category": "Sides",
    "price": 699,
    "variants": [
      {
        "id": "small",
        "label": "Small",
        "price": 699
      },
      {
        "id": "medium",
        "label": "Medium",
        "price": 1299
      },
      {
        "id": "large",
        "label": "Large",
        "price": 1899
      }
    ]
  },
  {
    "id": "wedges",
    "name": "Potato wedges",
    "description": "Crispy seasoned potato wedges.",
    "category": "Sides",
    "price": 699,
    "variants": [
      {
        "id": "small",
        "label": "Small",
        "price": 699
      },
      {
        "id": "medium",
        "label": "Medium",
        "price": 1299
      },
      {
        "id": "large",
        "label": "Large",
        "price": 1899
      }
    ]
  },
  {
    "id": "combo-1",
    "name": "Combo #1",
    "category": "Combos",
    "description": "½ lb / 0.5× boneless, one flavour, fries, veggies, dip and a canned drink.",
    "price": 1699,
    "wing": true,
    "styles": [
      "Breaded",
      "Naked",
      "Boneless"
    ],
    "flavours": 1,
    "dips": 1,
    "drinks": 1,
    "availabilityNote": "Combo inclusions need shop confirmation"
  },
  {
    "id": "combo-2",
    "name": "Combo #2",
    "category": "Combos",
    "description": "1 lb / 1× boneless, one flavour, fries, veggies, dip and a canned drink.",
    "price": 2599,
    "wing": true,
    "styles": [
      "Breaded",
      "Naked",
      "Boneless"
    ],
    "flavours": 1,
    "dips": 1,
    "drinks": 1,
    "availabilityNote": "Combo inclusions need shop confirmation"
  },
  {
    "id": "combo-3",
    "name": "Combo #3",
    "category": "Combos",
    "description": "1½ lb / 1.5× boneless, one flavour, fries, veggies, dip and a canned drink.",
    "price": 3599,
    "wing": true,
    "styles": [
      "Breaded",
      "Naked",
      "Boneless"
    ],
    "flavours": 1,
    "dips": 1,
    "drinks": 1,
    "availabilityNote": "Combo inclusions need shop confirmation"
  },
  {
    "id": "combo-4",
    "name": "Combo #4",
    "category": "Combos",
    "description": "2 lb / 2× boneless, up to 2 flavours, fries, veggies, dip and a canned drink.",
    "price": 4399,
    "wing": true,
    "styles": [
      "Breaded",
      "Naked",
      "Boneless"
    ],
    "flavours": 2,
    "dips": 1,
    "drinks": 1,
    "availabilityNote": "Combo inclusions need shop confirmation"
  },
  {
    "id": "combo-5",
    "name": "Combo #5",
    "category": "Combos",
    "description": "3 lb / 3× boneless, up to 3 flavours, fries, veggies, dip and 2 canned drinks.",
    "price": 6599,
    "wing": true,
    "styles": [
      "Breaded",
      "Naked",
      "Boneless"
    ],
    "flavours": 3,
    "dips": 2,
    "drinks": 2,
    "availabilityNote": "Combo inclusions need shop confirmation"
  },
  {
    "id": "combo-6",
    "name": "Combo #6",
    "category": "Combos",
    "description": "5 lb / 5× boneless, up to 5 flavours, fries, veggies, dip and 3 canned drinks.",
    "price": 10699,
    "wing": true,
    "styles": [
      "Breaded",
      "Naked",
      "Boneless"
    ],
    "flavours": 5,
    "dips": 3,
    "drinks": 3,
    "availabilityNote": "Combo inclusions need shop confirmation"
  },
  {
    "id": "dip",
    "name": "2oz dip",
    "price": 150,
    "description": "A little extra for dipping.",
    "category": "Extras",
    "dipChoice": true
  },
  {
    "id": "sauce-cup",
    "name": "4oz sauce cup",
    "price": 299,
    "description": "Your chosen flavour on the side.",
    "category": "Extras",
    "flavours": 1
  },
  {
    "id": "sauce-tub",
    "name": "12oz sauce tub",
    "price": 799,
    "description": "A bigger helping of your favourite sauce.",
    "category": "Extras",
    "flavours": 1
  },
  {
    "id": "sauce-bucket",
    "name": "32oz sauce bucket",
    "price": 1999,
    "description": "Sauce for your next gathering.",
    "category": "Extras",
    "flavours": 1
  },
  {
    "id": "gravy",
    "name": "Gravy",
    "price": 199,
    "description": "A side of gravy.",
    "category": "Extras"
  },
  {
    "id": "veggies",
    "name": "Regular veggies",
    "price": 199,
    "description": "Two carrot sticks and two celery sticks.",
    "category": "Extras"
  },
  {
    "id": "veggies-dip",
    "name": "Regular veggies & dip",
    "price": 299,
    "description": "Two carrot sticks, two celery sticks and dip.",
    "category": "Extras",
    "dipChoice": true
  },
  {
    "id": "large-veggies",
    "name": "Large veggies",
    "price": 499,
    "description": "Six carrot sticks and six celery sticks.",
    "category": "Extras"
  },
  {
    "id": "large-veggies-dip",
    "name": "Large veggies & dip",
    "price": 699,
    "description": "Six carrot sticks, six celery sticks and dip.",
    "category": "Extras",
    "dipChoice": true
  },
  {
    "id": "oreos",
    "name": "Deep-fried Oreos",
    "price": 899,
    "description": "Six battered Oreos with white icing on the side.",
    "category": "Desserts"
  },
  {
    "id": "ufoz",
    "name": "UFOz",
    "price": 999,
    "description": "Six mystery fried sweets, with chocolate and white icing.",
    "category": "Desserts"
  },
  {
    "id": "pepsi-can",
    "name": "Pepsi · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "diet-pepsi-can",
    "name": "Diet Pepsi · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "mug-root-beer-can",
    "name": "Mug Root Beer · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "dr-pepper-can",
    "name": "Dr Pepper · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "ginger-ale-can",
    "name": "Ginger Ale · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "7up-can",
    "name": "7UP · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "fuze-iced-tea-can",
    "name": "Fuze Iced Tea · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "coke-can",
    "name": "Coke · 355ml",
    "category": "Drinks",
    "description": "Chilled canned drink.",
    "price": 229
  },
  {
    "id": "water",
    "name": "Bottled water · 500ml",
    "category": "Drinks",
    "description": "Still water.",
    "price": 229
  },
  {
    "id": "pepsi-bottle",
    "name": "Pepsi · 591ml",
    "category": "Drinks",
    "description": "Bottled soft drink.",
    "price": 349
  },
  {
    "id": "diet-pepsi-bottle",
    "name": "Diet Pepsi · 591ml",
    "category": "Drinks",
    "description": "Bottled soft drink.",
    "price": 349
  },
  {
    "id": "root-beer-bottle",
    "name": "Root Beer · 591ml",
    "category": "Drinks",
    "description": "Bottled soft drink.",
    "price": 349
  },
  {
    "id": "dr-pepper-bottle",
    "name": "Dr Pepper · 591ml",
    "category": "Drinks",
    "description": "Bottled soft drink.",
    "price": 349
  },
  {
    "id": "chocolate-milk",
    "name": "Chocolate milk · 200ml",
    "category": "Drinks",
    "description": "Milk to Go.",
    "price": 299
  },
  {
    "id": "white-milk",
    "name": "White milk · 200ml",
    "category": "Drinks",
    "description": "Milk to Go.",
    "price": 299
  },
  {
    "id": "pepsi-2l",
    "name": "Pepsi · 2L",
    "category": "Drinks",
    "description": "A bottle to share.",
    "price": 599
  },
  {
    "id": "coke-2l",
    "name": "Coke · 2L",
    "category": "Drinks",
    "description": "A bottle to share.",
    "price": 599
  },
  {
    "id": "poutine-disco",
    "name": "Disco fries",
    "price": 899,
    "description": "Fries topped with mixed cheese and gravy.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-double-cheese",
    "name": "Double cheese poutine",
    "price": 1199,
    "description": "Poutine with double cheese curds.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-triple-cheese",
    "name": "Triple cheese poutine",
    "price": 1499,
    "description": "Poutine with triple cheese curds.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-poppin",
    "name": "What’s Poppin’ poutine",
    "price": 1499,
    "description": "Jalapeño poppers, hot sauce and ranch.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-ridillculous",
    "name": "Ridillculous poutine",
    "price": 1299,
    "description": "Dill-seasoned fries, fried pickles and creamy dill.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-bacon",
    "name": "Bacon Me Crazy poutine",
    "price": 1199,
    "description": "Poutine with smoky bacon.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-master-chicken",
    "name": "Master Chicken poutine",
    "price": 1399,
    "description": "Poutine with chopped boneless chicken in one flavour.",
    "category": "Loaded poutine",
    "flavours": 1
  },
  {
    "id": "poutine-buffalo-chicken",
    "name": "Buffalo Chicken poutine",
    "price": 1399,
    "description": "Buffalo chicken with ranch over poutine.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-brantastic",
    "name": "Brantastic poutine",
    "price": 1499,
    "description": "Bacon, sauced boneless chicken and ranch.",
    "category": "Loaded poutine",
    "flavours": 1
  },
  {
    "id": "poutine-flamin-red",
    "name": "Flamin’ Red poutine",
    "price": 1099,
    "description": "Red Flame spice mixed through poutine.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-tnt",
    "name": "TNT poutine · 250K",
    "price": 1099,
    "description": "Cayenne heat in the gravy.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-devilz",
    "name": "The Devilz poutine · 350K",
    "price": 1199,
    "description": "Scotch bonnet sauce mixed into poutine.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-hisssed",
    "name": "Hisssssed Off poutine · 1M+",
    "price": 1299,
    "description": "Ghost pepper in the gravy.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-reapertine",
    "name": "Reapertine",
    "price": 1399,
    "description": "Carolina Reaper-based gravy.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-dracariis",
    "name": "Dracariiis poutine · 2M+",
    "price": 1499,
    "description": "An extreme-heat poutine.",
    "category": "Loaded poutine"
  },
  {
    "id": "poutine-violent-night",
    "name": "Violent Night poutine · 3M",
    "price": 1599,
    "description": "MVP pepper heat in the gravy.",
    "category": "Loaded poutine"
  },
  {
    "id": "black-drum",
    "name": "Blackenstein · 1 piece",
    "price": 899,
    "category": "Blackenstein",
    "image": "/blackenstein-challenge.png",
    "description": "Wingmaster’s hottest item. 10 Million Scoville. A verified waiver is mandatory before ordering."
  },
  {
    "id": "black-sauce",
    "name": "Blackenstein · 1oz sauce",
    "price": 1099,
    "category": "Blackenstein",
    "image": "/blackenstein-challenge.png",
    "description": "Wingmaster’s hottest sauce. 10 Million Scoville. A verified waiver is mandatory before ordering."
  },
  {
    "id": "black-poutine",
    "name": "Blackenstein poutine",
    "price": 1599,
    "category": "Blackenstein",
    "image": "/blackenstein-challenge.png",
    "description": "Blackenstein heat over poutine. 10 Million Scoville. A verified waiver is mandatory before ordering."
  }
];
export const cannedDrinks = ["Pepsi","Diet Pepsi","Mug Root Beer","Dr Pepper","Ginger Ale","7UP","Fuze Iced Tea","Coke"];
export const wingAddons = [{id:'bacon',name:'Bacon',price:125},{id:'parmesan',name:'Parmesan',price:100}];
export const dipOptions = ['Ranch', 'Blue cheese', 'No dip'];
