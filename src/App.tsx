import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Grommet, Image, Main } from 'grommet';
import BobaTea from './images/tea.svg';

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
  { name: 'white tea', milk: true, popularity: 4, fruit: true, justTea: true, classic: true },
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
  { name: 'tea latte', popularity: 5 },
  { name: 'yakult tea', popularity: 4 },
  { name: 'tea smoothie', popularity: 2 },
  { name: 'tea slush', popularity: 2 },
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
  { name: 'basil seed frog eggs', popularity: 1 },
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

const joinAnd = (arr: any) => {
  return arr.length > 2
    ? `${arr.slice(0, -1).join(', ')}, and ${arr.slice(-1)}` 
    : (arr.length === 2 ? arr.join(' and ') : arr);
};

const getRandom = (arr: any, numResults: number = 1) => {
  const results = [];

  for (let i = 0; i < numResults; i++) {
    results.push(arr[~~(Math.random() * arr.length)]);
  }
  
  return numResults > 1 ? results : results[0];
};

const selectRandomFromHalf = (arr: any, isRare: boolean) => {
  const sortedArr = arr.sort((a: any, b: any) => (a.popularity > b.popularity) ? 1 : -1);
  const half = Math.ceil(sortedArr.length / 2);
  const firstHalf = sortedArr.splice(0, half);
  const secondHalf = sortedArr.splice(-half);
  const useHalf = isRare ? secondHalf : firstHalf;

  return getRandom(useHalf);
};

const getWeightedBool = (howOften: number = 50) => {
  const d = Math.random() * 100;
  return d >= howOften;
};

const getTeaFlavor = (isRare: boolean) => {
  const teas = getRandom(teaFlavors, 3);
  return selectRandomFromHalf([...teas], isRare);
};

const getTeaType = () => {
  const isRare = getWeightedBool(75);
  return selectRandomFromHalf([...teaTypes], isRare);
};

const doesTeaFitType = (tea: any, teaType: any) => {
  let match = true;

  switch (teaType.name) {
    case 'fruit':
      match = tea.fruit;
      break;
    case 'milk':
      match = tea.milk;
      break;
    case 'justTea':
      match = tea.justTea;
      break;
    default:
      match = true;
      break;
  }

  return match;
};

const getMilkOrFruitType = (teaType: string, isRare: boolean) => {
  const items = teaType === 'milk' ? [...milkTypes] : [...fruitTypes];
  return selectRandomFromHalf(items, isRare);
};

const generateTea = () => {
  const isRare = getWeightedBool(75);
  const hasFoam = getWeightedBool();
  const hasBoba = getWeightedBool(25);
  const hasJelly = getWeightedBool(55);
  const hasToppings = getWeightedBool(85);
  const bobas = [];
  let teaFlavor = getTeaFlavor(isRare);
  let teaType = getTeaType();
  let match = doesTeaFitType(teaFlavor, teaType);
  let milkType;
  let fruitType;
  let justTeaFlavor;
  let foamType;
  let hasMultiBoba = false;
  let jellyType;
  let toppingType = hasToppings ? getRandom(toppingTypes) : null;
  let formattedName = '';

  while (!match) {
    teaFlavor = getTeaFlavor(isRare);
    teaType = getTeaType();
    match = doesTeaFitType(teaFlavor, teaType);
  }

  if (match) {
    switch (teaType.name) {
      case 'milk':
        milkType = getMilkOrFruitType(teaType, isRare);
        break;
      case 'fruit':
        fruitType = getMilkOrFruitType(teaType, isRare);
        break;
      case 'justTea':
        justTeaFlavor = selectRandomFromHalf([...justTeaFlavors], isRare);
        break;
      default:
        break;
    }

    if (hasFoam) {
      const isCheeseFoamRare = getWeightedBool(75);
      foamType = selectRandomFromHalf([...foamTypes], isCheeseFoamRare);
    }

    if (hasBoba) {
      const isBobaRare = getWeightedBool(75);
      bobas.push(selectRandomFromHalf([...bobaTypes], isBobaRare));
      hasMultiBoba = getWeightedBool(80);

      if (hasMultiBoba) {
        bobas.push(selectRandomFromHalf([...bobaTypes], !isBobaRare));
      }
    }

    if (hasJelly) {
      const isJellyRare = getWeightedBool(75);
      jellyType = selectRandomFromHalf([...jellyTypes], isJellyRare);
      bobas.push(jellyType);
    }
  }

  const showTeaWord = teaFlavor.name !== 'thai tea' && teaFlavor.name !== 'white tea' ? ' tea' : '';

  formattedName = `${teaType.name === 'justTea' ? justTeaFlavor.name + ' ' : ''}${teaFlavor.name} `;
  formattedName += `${teaType.name === 'justTea' ? 'tea' : teaType.name}`;
  formattedName += `${teaType.name === 'milk' ? (' ' + milkType.name + showTeaWord) : ''}${teaType.name === 'fruit' ? (' ' + fruitType.name + showTeaWord) : ''}`;
  formattedName += `${(hasBoba || hasJelly) ? ' with ' + joinAnd(bobas.map(b => b.name)) : ''}`;
  formattedName += `${hasFoam ? ', topped with ' + foamType.name : ''}`;
  formattedName += `${!hasToppings ? '' : (hasFoam ? ' and ' + toppingType.name : ', topped with ' + toppingType.name)}`;

  return formattedName;
};

const App = () => {
  const [drink, setDrink] = useState('');
  const [iceLevel, setIceLevel] = useState(50);
  const [sugarLevel, setSugarLevel] = useState(50);

  const generateDrinkDetails = () => {
    setIceLevel(getRandom(levels));
    setSugarLevel(getRandom(levels));
    setDrink(generateTea());
  };

  return (
    <Grommet full>
      <Main pad="large">
        <Header>
          <BobaImage src={BobaTea} />
          <h1>Boba Club</h1>
        </Header>
        <ButtonWrap pad="medium">
          <Button size="large" primary label="Generate your boba order!" onClick={() => generateDrinkDetails()} />
        </ButtonWrap>
        {drink !== '' && <ButtonWrap pad="medium">
          <p><strong>{drink.toUpperCase()}</strong></p>
          <p>{iceLevel}% ice, {sugarLevel}% sweet</p>
        </ButtonWrap>}
      </Main>
    </Grommet>
  );
};

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const BobaImage = styled(Image)`
  height: auto;
  width: 45px;
`;

const ButtonWrap = styled(Box)`
  text-align: center;
`;

export default App;
