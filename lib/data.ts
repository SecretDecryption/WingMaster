export type WingStyleSlug = 'breaded' | 'boneless' | 'cauli';

export const wingStyles: {
  slug: WingStyleSlug;
  title: string;
  copy: string;
  image: string;
  note: string;
}[] = [
  {
    slug: 'breaded',
    title: 'Breaded wings',
    copy: 'Crisp, juicy and coated in any flavour from the Wing Bible.',
    image: '/breaded-wings.png',
    note: 'The original',
  },
  {
    slug: 'boneless',
    title: 'Boneless wings',
    copy: 'All-white chicken breast, golden fried and made for saucing.',
    image: '/boneless-wings.png',
    note: 'Easy eating',
  },
  {
    slug: 'cauli',
    title: 'Cauli wings',
    copy: 'A crispy cauliflower bite with the full Wingmaster treatment.',
    image: '/cauliflower-wings.png',
    note: 'Plant-powered',
  },
];

export const flavourSets = {
  'Most loved': [
    ['Apple Pie BBQ', 'N', 'Tastes just like mom’s—only on wings.'],
    ['Texas Gold', 'N', 'Mild BBQ meets sweet honey garlic.'],
    ['Creamy Dill Pickle', 'N', 'Cool, tangy and unmistakably dill.'],
    ['Jerk BBQ', 'S', 'Tre-made jerk spice with smoky BBQ.'],
    ['French Toast', 'N', 'Real Canadian maple and icing sugar.'],
    ['Peanut Butter & Jam', 'N', 'Yes, you read that right. A cult favourite.'],
  ],
  'No heat': [
    ['Bell City BBQ', 'N', 'Tre-made smoky BBQ that reps the 519.'],
    ['Arizona Gold', 'N', 'Bell City BBQ finished with honey garlic.'],
    ['Garlic Parmesan', 'N', 'Garlic butter and plenty of parmesan.'],
    ['Honey Garlic', 'N', 'Sweet, savoury and always a crowd-pleaser.'],
    ['Sweet Caroline', 'N', 'A secret house sauce with a sweet side.'],
    ['Raspberry Beret', 'N', 'Bright raspberry folded into BBQ sauce.'],
  ],
  Spicy: [
    ['Buffalo Medium', 'S', 'The house signature buffalo medium.'],
    ['Cajun Gold', 'S', 'Cajun dry spice with honey garlic.'],
    ['Lemon Pepper', 'S', 'Pepper, butter and a bright lemon finish.'],
    ['Ohio Gold', 'S', 'Medium sauce sweetened with honey garlic.'],
    ['Sweet Chili Thai', 'S', 'Sticky, sweet, spicy and hard to share.'],
    ['The Big Apple', 'S', 'Buffalo sauce meets Apple Pie BBQ.'],
  ],
  'Wild side': [
    ['1983 Suicide', '3', 'Red Flame Mix with a medium BBQ finish.'],
    ['Evil Medium', '3', 'The famous house suicide sauce.'],
    ['Devilz Jooce', '350K', 'Tre-made Scotch bonnet pepper sauce.'],
    ['Apocalava', '500K', 'Sweet Lava with a Red Savina kick.'],
    ['Bell City Booo', '1M', 'Ghost pepper takes on Bell City BBQ.'],
    ['Fast ’N Furious XX', '2M+', 'Extreme heat. Absolutely no shortcuts.'],
  ],
} as const;

export type FlavourTab = keyof typeof flavourSets;

// Placeholder pricing — swap these for the shop's real per-size prices.
export const portionSizes = [
  { id: '6', label: '6 pieces', price: 10.99 },
  { id: '12', label: '12 pieces', price: 19.99 },
  { id: '24', label: '24 pieces', price: 36.99 },
  { id: '50', label: '50 pieces — party size', price: 72.99 },
];
