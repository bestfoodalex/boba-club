const teaFlavors = [
  { name: 'green', milk: true, popularity: 10, fruit: true, justTea: true, classic: true },
  { name: 'jasmine', milk: true, popularity: 10, fruit: true, justTea: true, classic: true },
  { name: 'matcha', milk: true, popularity: 8, fruit: false, justTea: true, classic: true },
  { name: 'uji matcha', milk: true, popularity: 5, fruit: false, justTea: true, classic: false },
  { name: 'pekoe green', milk: true, popularity: 3, fruit: true, justTea: true, classic: false },
  { name: 'hojicha green', milk: true, popularity: 4, fruit: true, justTea: true, classic: false },
  { name: 'oolong', milk: true, popularity: 9, fruit: true, justTea: true, classic: true },
  { name: 'roasted oolong', milk: true, popularity: 6, fruit: false, justTea: true, classic: false },
  { name: 'tieguanyin oolong', milk: true, popularity: 3, fruit: false, justTea: true, classic: false },
  { name: 'roasted mountain oolong', milk: true, popularity: 4, fruit: false, justTea: true, classic: false },
  { name: 'osmanthus oolong', milk: true, popularity: 3, fruit: false, justTea: true, classic: false },
  { name: 'four seasons oolong', milk: true, popularity: 2, fruit: false, justTea: true, classic: false },
  { name: 'black', milk: true, popularity: 10, fruit: true, justTea: true, classic: true },
  { name: 'ceylon black', milk: true, popularity: 7, fruit: true, justTea: true, classic: false },
  { name: 'taiwanese black', milk: true, popularity: 5, fruit: false, justTea: false, classic: false },
  { name: 'taiwanese', milk: true, popularity: 4, fruit: true, justTea: true, classic: true },
  { name: 'lapsang souchong black', milk: true, popularity: 2, fruit: false, justTea: true, classic: false },
  { name: 'earl gray', milk: true, popularity: 2, fruit: false, justTea: true, classic: false },
  { name: 'white tea', milk: true, popularity: 4, fruit: true, justTea: false, classic: true },
  { name: 'thai tea', milk: true, popularity: 8, fruit: false, justTea: false, classic: false },
  { name: 'hong kong', milk: true, popularity: 6, fruit: false, justTea: false, classic: false },
  { name: 'butterfly pea flower', milk: false, popularity: 2, fruit: false, justTea: false, classic: false },
  { name: 'hibiscus', milk: false, popularity: 1, fruit: true, justTea: true, classic: false },
  { name: 'pu-erh', milk: true, popularity: 3, fruit: true, justTea: true, classic: false },
  { name: 'supreme raw pu-erh', milk: true, popularity: 2, fruit: true, justTea: true, classic: false },
  { name: 'chrysanthemum pu-erh', milk: true, popularity: 2, fruit: true, justTea: true, classic: false },
  { name: 'chrysanthemum', milk: true, popularity: 4, fruit: true, justTea: true, classic: false }
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

const foamTypes = [
  { name: 'milk foam', popularity: 10 },
  { name: 'cheese foam', popularity: 10 },
  { name: 'salted cheese foam', popularity: 8 },
  { name: 'matcha cheese foam', popularity: 4 },
  { name: 'crème brûlée cheese foam', popularity: 3 },
  { name: 'earl gray cheese foam', popularity: 3 },
  { name: 'citrus milk foam', popularity: 3 },
  { name: 'marshmallow fluff foam', popularity: 1 },
  { name: 'espressio milk foam', popularity: 1 },
  { name: 'brown sugar cheese foam', popularity: 3 },
  { name: 'oreo cheese foam', popularity: 5 },
  { name: 'caramel cheese foam', popularity: 2 },
  { name: 'cookies n cream milk foam', popularity: 2 },
  { name: 'french vanilla cheese foam', popularity: 4 }
];

const bobaTypes = [
  { name: 'tapioca pearls', popularity: 10 },
  { name: 'mini boba', popularity: 6 },
  { name: 'classic boba', popularity: 10 },
  { name: 'extra boba', popularity: 3 },
  { name: 'brown sugar boba', popularity: 9 },
  { name: 'tiger sugar boba', popularity: 4 },
  { name: 'black sugar boba', popularity: 5 },
  { name: 'taro balls', popularity: 2 },
  { name: 'honey tapioca', popularity: 4 },
  { name: 'strawberry popping boba', popularity: 6 },
  { name: 'blueberry popping boba', popularity: 2 },
  { name: 'mango popping boba', popularity: 3 },
  { name: 'passion fruit popping boba', popularity: 3 },
  { name: 'citrus popping boba', popularity: 4 },
  { name: 'red bean boba', popularity: 2 },
  { name: 'mochi pearls', popularity: 2 },
  { name: 'lychee popping boba', popularity: 4 },
  { name: 'crystal boba', popularity: 7 },
  { name: 'konjak boba', popularity: 6 },
  { name: 'black sticky rice', popularity: 1 },
  { name: 'passionfruit popping boba', popularity: 2 },
  { name: 'chia seeds', popularity: 1 },
  { name: 'rainbow popping boba', popularity: 5 }
];

const jellyTypes = [
  { name: 'coconut jelly', popularity: 10 },
  { name: 'coconut pudding', popularity: 8 },
  { name: 'yogurt jelly', popularity: 4 },
  { name: 'grass jelly', popularity: 7 },
  { name: 'green tea jelly', popularity: 4 },
  { name: 'strawberry jelly', popularity: 5 },
  { name: 'strawberry sweetheart jelly', popularity: 3 },
  { name: 'strawberry yogurt jelly', popularity: 4 },
  { name: 'rose jelly', popularity: 4 },
  { name: 'agar crystal', popularity: 5 },
  { name: 'mango star jelly', popularity: 4 },
  { name: 'coffee jelly', popularity: 4 },
  { name: 'coffee pudding', popularity: 3 },
  { name: 'panna cotta', popularity: 3 },
  { name: 'lychee jelly', popularity: 4 },
  { name: 'honey jelly', popularity: 4 },
  { name: 'honey red bean jelly', popularity: 3 },
  { name: 'red bean jelly', popularity: 4 },
  { name: 'honey crystal jelly', popularity: 6 },
  { name: 'crystal jelly', popularity: 7 },
  { name: 'konjak jelly', popularity: 5 },
  { name: 'aloe jelly', popularity: 5 },
  { name: 'peach gum', popularity: 1 },
  { name: 'almond jelly', popularity: 7 },
  { name: 'mocha bean jelly', popularity: 1 },
  { name: 'purple yam pureé', popularity: 1 },
  { name: 'taro pureé', popularity: 1 },
  { name: 'watermelon jelly', popularity: 2 },
  { name: 'mango jelly', popularity: 4 },
  { name: 'mango pudding', popularity: 7 },
  { name: 'rainbow jelly', popularity: 7 }
];

const toppingTypes = [
  { name: 'oreo crumbs', popularity: 10 },
  { name: 'oreo dust', popularity: 8 },
  { name: 'himalayan pink sea salt', popularity: 6 },
  { name: 'icelandic black sea salt', popularity: 2 },
  { name: 'aloe pieces', popularity: 7 },
  { name: 'espresso dust', popularity: 3 },
  { name: 'gold dust', popularity: 2 },
  { name: 'gold leaf', popularity: 1 },
  { name: 'cottom cheesecake crumbles', popularity: 2 },
  { name: 'cookies n cream crumbles', popularity: 6 },
  { name: 'oreo cheesecake topping', popularity: 2 }
];

const milkTypes = [
  { name: 'classic milk', popularity: 10 },
  { name: 'whole milk', popularity: 7 },
  { name: 'sweet rice milk', popularity: 3 },
  { name: 'avocado milk', popularity: 4 },
  { name: 'almond milk', popularity: 7 },
  { name: 'coconut milk', popularity: 8 },
  { name: 'cashew milk', popularity: 4 },
  { name: 'oat milk', popularity: 5 },
  { name: 'soy milk', popularity: 6 },
  { name: 'creamy milk', popularity: 4 },
  { name: 'strawberry milk', popularity: 5 },
  { name: 'matcha milk', popularity: 4 },
  { name: 'espresso milk', popularity: 3 },
  { name: 'horchata', popularity: 3 },
  { name: 'dirty horchata', popularity: 2 },
  { name: 'banana milk', popularity: 4 },
  { name: 'korean banana milk', popularity: 3 },
  { name: 'black sesame milk', popularity: 2 },
  { name: 'ube milk', popularity: 4 },
  { name: 'taro milk', popularity: 9 },
  { name: 'chocolate milk', popularity: 4 },
  { name: 'dark chocolate milk', popularity: 3 },
  { name: 'white chocolate milk', popularity: 1 },
  { name: 'french vanilla cream', popularity: 3 },
  { name: 'tiramisu milk', popularity: 2 }
];

const fruitTypes = [
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
  { name: 'combination', popularity: 10 },
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

const sideItemTypes = [
  { name: 'Tim Tams', popularity: 8 },
  { name: 'popcorn chicken', popularity: 10 },
  { name: 'boba lava cake', popularity: 3 },
  { name: 'boba waffles', popularity: 7 },
  { name: 'grilled chicken steak', popularity: 6 },
  { name: 'boba plushie', popularity: 5 }
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
  foamTypes, 
  fruitTypes, 
  jellyTypes, 
  justTeaFlavors, 
  levels, 
  milkTypes,
  sideItemTypes,
  teaFlavors, 
  teaTypes, 
  toppingTypes 
};
