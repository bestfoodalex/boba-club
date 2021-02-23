const flavorProfiles = [
  'dessert',
  'fruit',
  'floral',
  'matcha',
  'thai tea',
  'coffee'
];

const teaTypes = [
  { name: 'fruit', popularity: 8 },
  { name: 'milk', popularity: 10 },
  { name: 'latte', popularity: 5 },
  { name: 'yakult', popularity: 4 },
  { name: 'smoothie', popularity: 2 },
  { name: 'slush', popularity: 2 },
  { name: 'justTea', popularity: 4 }
];

const teaFlavors = [
  { name: 'green', milk: true, popularity: 10, fruit: true, justTea: true, classic: true, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'jasmine', milk: true, popularity: 10, fruit: true, justTea: true, classic: true, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'matcha', milk: true, popularity: 8, fruit: false, justTea: true, classic: true, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'uji matcha', milk: true, popularity: 5, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'pekoe green', milk: true, popularity: 3, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'hojicha green', milk: true, popularity: 4, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'oolong', milk: true, popularity: 9, fruit: true, justTea: true, classic: true, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'roasted oolong', milk: true, popularity: 6, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'tieguanyin oolong', milk: true, popularity: 3, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'roasted mountain oolong', milk: true, popularity: 4, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'osmanthus oolong', milk: true, popularity: 3, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'four seasons oolong', milk: true, popularity: 2, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'black', milk: true, popularity: 10, fruit: true, justTea: true, classic: true, flavorProfiles: ['dessert', 'fruit', 'floral', 'coffee'] },
  { name: 'ceylon black', milk: true, popularity: 7, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'coffee'] },
  { name: 'taiwanese black', milk: true, popularity: 5, fruit: false, justTea: false, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'coffee'] },
  { name: 'taiwanese', milk: true, popularity: 4, fruit: true, justTea: true, classic: true, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'lapsang souchong black', milk: true, popularity: 2, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'coffee'] },
  { name: 'earl gray', milk: true, popularity: 2, fruit: false, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'coffee'] },
  { name: 'white tea', milk: true, popularity: 4, fruit: true, justTea: false, classic: true, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'thai tea', milk: true, popularity: 8, fruit: false, justTea: false, classic: false, flavorProfiles: ['thai tea', 'coffee'] },
  { name: 'hong kong', milk: true, popularity: 6, fruit: false, justTea: false, classic: false, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'butterfly pea flower', milk: false, popularity: 2, fruit: false, justTea: false, classic: false, flavorProfiles: ['fruit', 'floral'] },
  { name: 'hibiscus', milk: false, popularity: 1, fruit: true, justTea: true, classic: false, flavorProfiles: ['fruit', 'floral'] },
  { name: 'pu-erh', milk: true, popularity: 3, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'supreme raw pu-erh', milk: true, popularity: 2, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'chrysanthemum pu-erh', milk: true, popularity: 2, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'chrysanthemum', milk: true, popularity: 4, fruit: true, justTea: true, classic: false, flavorProfiles: ['dessert', 'fruit', 'floral'] }
];

const foamTypes = [
  { name: 'milk foam', popularity: 10, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'cheese foam', popularity: 10, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'salted cheese foam', popularity: 8, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'matcha cheese foam', popularity: 4, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'crème brûlée cheese foam', popularity: 3, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'earl gray cheese foam', popularity: 3, flavorProfiles: ['dessert', 'floral'] },
  { name: 'citrus milk foam', popularity: 3, flavorProfiles: ['fruit', 'floral'] },
  { name: 'marshmallow fluff foam', popularity: 1, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'espressio milk foam', popularity: 1, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'brown sugar cheese foam', popularity: 3, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'oreo cheese foam', popularity: 5, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'caramel cheese foam', popularity: 2, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'cookies n cream milk foam', popularity: 2, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'french vanilla cheese foam', popularity: 4, flavorProfiles: ['dessert', 'coffee'] }
];

const bobaTypes = [
  { name: 'tapioca pearls', popularity: 10, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'mini boba', popularity: 6, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'classic boba', popularity: 10, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'extra boba', popularity: 3, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'brown sugar boba', popularity: 9, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'tiger sugar boba', popularity: 4, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'black sugar boba', popularity: 5, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'taro balls', popularity: 2, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'honey tapioca', popularity: 4, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'strawberry popping boba', popularity: 6, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'blueberry popping boba', popularity: 2, flavorProfiles: ['fruit', 'floral'] },
  { name: 'mango popping boba', popularity: 3, flavorProfiles: ['fruit', 'floral'] },
  { name: 'passion fruit popping boba', popularity: 3, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'citrus popping boba', popularity: 4, flavorProfiles: ['fruit', 'floral'] },
  { name: 'red bean boba', popularity: 2, flavorProfiles: ['dessert', 'floral', 'matcha'] },
  { name: 'mochi pearls', popularity: 2, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'lychee popping boba', popularity: 4, flavorProfiles: ['fruit', 'floral'] },
  { name: 'crystal boba', popularity: 7, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'konjak boba', popularity: 6, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'black sticky rice', popularity: 1, flavorProfiles: ['dessert', 'matcha', 'coffee'] },
  { name: 'chia seeds', popularity: 1, flavorProfiles: ['fruit', 'floral'] },
  { name: 'rainbow popping boba', popularity: 5, flavorProfiles: ['dessert', 'fruit', 'floral'] }
];

const jellyTypes = [
  { name: 'coconut jelly', popularity: 10, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'coconut pudding', popularity: 8, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'yogurt jelly', popularity: 4, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'grass jelly', popularity: 7, flavorProfiles: ['fruit', 'floral'] },
  { name: 'green tea jelly', popularity: 4, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'strawberry jelly', popularity: 5, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'strawberry sweetheart jelly', popularity: 3, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'strawberry yogurt jelly', popularity: 4, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'rose jelly', popularity: 4, flavorProfiles: ['fruit', 'floral', 'matcha'] },
  { name: 'agar crystal', popularity: 5, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'mango star jelly', popularity: 4, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'coffee jelly', popularity: 4, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'coffee pudding', popularity: 3, dairyFree: false, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'panna cotta', popularity: 3, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'lychee jelly', popularity: 4, flavorProfiles: ['fruit', 'floral'] },
  { name: 'honey jelly', popularity: 4, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'honey red bean jelly', popularity: 3, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'red bean jelly', popularity: 4, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'honey crystal jelly', popularity: 6, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'crystal jelly', popularity: 7, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'konjak jelly', popularity: 5, flavorProfiles: ['fruit', 'floral'] },
  { name: 'aloe jelly', popularity: 5, flavorProfiles: ['fruit', 'floral', 'matcha'] },
  { name: 'peach gum', popularity: 1, flavorProfiles: ['dessert', 'fruit', 'floral'] },
  { name: 'almond jelly', popularity: 7, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'mocha bean jelly', popularity: 1, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'purple yam pureé', popularity: 1, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'taro pureé', popularity: 1, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'watermelon jelly', popularity: 2, flavorProfiles: ['fruit', 'floral'] },
  { name: 'mango jelly', popularity: 4, flavorProfiles: ['fruit', 'floral'] },
  { name: 'mango pudding', popularity: 7, dairyFree: false, flavorProfiles: ['fruit', 'floral'] },
  { name: 'rainbow jelly', popularity: 7, flavorProfiles: ['fruit', 'floral'] }
];

const toppingTypes = [
  { name: 'oreo crumbs', popularity: 10, dairyFree: false, flavorProfiles: ['dessert', 'matcha', 'coffee'] },
  { name: 'oreo dust', popularity: 8, dairyFree: false, flavorProfiles: ['dessert', 'matcha', 'coffee'] },
  { name: 'aloe pieces', popularity: 7, flavorProfiles: ['fruit', 'floral'] },
  { name: 'espresso dust', popularity: 3, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'gold dust', popularity: 2, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'gold leaf', popularity: 1, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'cottom cheesecake crumbles', popularity: 2, dairyFree: false, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'cookies n cream crumbles', popularity: 6, dairyFree: false, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'oreo cheesecake topping', popularity: 2, dairyFree: false, flavorProfiles: ['dessert'] }
];

const milkTypes = [
  { name: 'milk', popularity: 10, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'classic milk', popularity: 10, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'whole milk', popularity: 7, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'sweet rice milk', popularity: 3, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'avocado milk', popularity: 4, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'almond milk', popularity: 7, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'coconut milk', popularity: 8, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'cashew milk', popularity: 4, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'oat milk', popularity: 5, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'soy milk', popularity: 6, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha', 'thai tea', 'coffee'] },
  { name: 'strawberry milk', popularity: 5, dairyFree: false, flavorProfiles: ['dessert', 'fruit', 'floral', 'matcha'] },
  { name: 'matcha milk', popularity: 4, dairyFree: false, flavorProfiles: ['dessert', 'matcha'] },
  { name: 'espresso milk', popularity: 3, dairyFree: false, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'horchata', popularity: 3, dairyFree: false, flavorProfiles: ['dessert'] },
  { name: 'dirty horchata', popularity: 2, dairyFree: false, flavorProfiles: ['dessert', 'coffee'] },
  { name: 'banana milk', popularity: 4, dairyFree: false, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'korean banana milk', popularity: 3, dairyFree: false, flavorProfiles: ['dessert', 'matcha', 'thai tea', 'coffee'] },
  { name: 'black sesame milk', popularity: 2, dairyFree: false, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'ube milk', popularity: 4, dairyFree: false, flavorProfiles: ['dessert'] },
  { name: 'taro milk', popularity: 9, dairyFree: false, flavorProfiles: ['dessert'] },
  { name: 'chocolate milk', popularity: 4, dairyFree: false, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'dark chocolate milk', popularity: 3, dairyFree: false, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'white chocolate milk', popularity: 1, dairyFree: false, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'french vanilla cream', popularity: 3, dairyFree: false, flavorProfiles: ['dessert', 'thai tea', 'coffee'] },
  { name: 'tiramisu milk', popularity: 2, dairyFree: false, flavorProfiles: ['dessert', 'thai tea', 'coffee'] }
];

const dairyFreeTypes = [
  'almond',
  'coconut',
  'cashew',
  'oat',
  'soy'
];

const fruitTypes = [
  { name: 'combination', popularity: 10 },
  { name: 'strawberry', popularity: 10 },
  { name: 'blueberry', popularity: 6 },
  { name: 'berry', popularity: 5 },
  { name: 'citrus', popularity: 7 },
  { name: 'orange', popularity: 8 },
  { name: 'mandarin orange', popularity: 4 },
  { name: 'grapefruit', popularity: 5 },
  { name: 'lime', popularity: 6 },
  { name: 'lemon', popularity: 5 },
  { name: 'lemon lime', popularity: 6 },
  { name: 'cantaloupe', popularity: 4 },
  { name: 'green apple', popularity: 3 },
  { name: 'apple', popularity: 4 },
  { name: 'honeydew', popularity: 5 },
  { name: 'lychee', popularity: 8 },
  { name: 'watermelon', popularity: 7 },
  { name: 'kiwi', popularity: 6 },
  { name: 'yellow kiwi', popularity: 4 },
  { name: 'mango', popularity: 7 },
  { name: 'peach', popularity: 9 },
  { name: 'white peach', popularity: 8 },
  { name: 'passionfruit', popularity: 5 },
  { name: 'pineapple', popularity: 4 },
  { name: 'pomegranate', popularity: 1 }
];

const justTeaFlavors = [
  { name: 'rose', popularity: 7 },
  { name: 'lavender', popularity: 6 },
  { name: 'peach', popularity: 10 },
  { name: 'white peach', popularity: 9 },
  { name: 'honey', popularity: 8 },
  { name: 'lemon', popularity: 5 },
  { name: 'strawberry', popularity: 8 },
  { name: 'spiced', popularity: 2 }
];

const levels = [
  0,
  25,
  30,
  50,
  60,
  75,
  80,
  90,
  100
];

export { 
  bobaTypes,
  dairyFreeTypes,
  foamTypes, 
  flavorProfiles,
  fruitTypes, 
  jellyTypes, 
  justTeaFlavors, 
  levels, 
  milkTypes, 
  teaFlavors, 
  teaTypes, 
  toppingTypes 
};