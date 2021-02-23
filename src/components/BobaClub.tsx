import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Grommet, Image, Main } from 'grommet';
import { 
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
} from '../models/ingredients';
import {
  doesTeaFitType,
  getMilkOrFruitType,
  getRandom,
  getSideItemType,
  getTeaFlavor,
  getTeaType,
  getWeightedBool,
  joinAnd,
  selectRandomFromHalf
} from '../utils/utils';
import Logo from '../images/logo.png';

const generateTea = () => {
  const isRare = getWeightedBool(75);
  const hasFoam = getWeightedBool();
  const hasBoba = getWeightedBool(25);
  const hasJelly = getWeightedBool(55);
  const hasToppings = getWeightedBool(85);
  const hasSideItem = getWeightedBool(25);
  const bobas = [];
  let teaFlavor = getTeaFlavor(teaFlavors, isRare);
  let teaType = getTeaType(teaTypes);
  let match = doesTeaFitType(teaFlavor, teaType);
  let sideItem = getSideItemType(sideItemTypes);
  let milkType;
  let fruitType;
  let justTeaFlavor;
  let foamType;
  let hasMultiBoba = false;
  let jellyType;
  let toppingType = hasToppings ? getRandom(toppingTypes) : null;
  let formattedName = '';

  while (!match) {
    teaFlavor = getTeaFlavor(teaFlavors, isRare);
    teaType = getTeaType(teaTypes);
    match = doesTeaFitType(teaFlavor, teaType);
  }

  if (match) {
    switch (teaType.name) {
      case 'milk':
        milkType = getMilkOrFruitType(teaType, isRare, milkTypes, fruitTypes);
        break;
      case 'fruit':
        fruitType = getMilkOrFruitType(teaType, isRare, milkTypes, fruitTypes);
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

  const teaFlavorName = teaFlavor.name;
  const teaTypeName = teaType.name;
  const showTeaWord = teaFlavorName !== 'thai tea' && teaFlavorName !== 'white tea' ? ' tea' : '';
  const showTeaWordBefore = () => {
    let returnTeaTypeName = teaTypeName;

    switch (teaTypeName) {
      case 'latte':
      case 'smoothie':
      case 'slush':
        returnTeaTypeName = `tea ${teaTypeName}`;
        break;
      case 'yakult':
        returnTeaTypeName = `${teaTypeName} tea`;
        break;
      default:
        break;
    }

    return returnTeaTypeName;
  };

  formattedName = `${teaTypeName === 'justTea' ? justTeaFlavor.name + ' ' : ''}${teaFlavorName} `;
  formattedName += `${teaTypeName === 'justTea' ? 'tea' : showTeaWordBefore()}`;
  formattedName += `${teaTypeName === 'milk' ? (' ' + milkType.name + showTeaWord) : ''}${teaTypeName === 'fruit' ? (' ' + fruitType.name + showTeaWord) : ''}`;
  formattedName += `${(hasBoba || hasJelly) ? ' with ' + joinAnd(bobas.map(b => b.name)) : ''}`;
  formattedName += `${hasFoam ? ', topped with ' + foamType.name : ''}`;
  formattedName += `${!hasToppings ? '' : (hasFoam ? ' and ' + toppingType.name : ', topped with ' + toppingType.name)}`;
  formattedName += `${hasSideItem ? ' and comes with ' + sideItem.name : ''}`;

  return formattedName;
};

const BobaClub = () => {
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
          <BobaImage alt="Boba Club Logo" src={Logo} />
          <h1>Boba Club</h1>
          <p>Where there's always love in the cup</p>
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

  h1,
  p {
    display: none;
  }
`;

const BobaImage = styled(Image)`
  height: auto;
  width: 400px;
`;

const ButtonWrap = styled(Box)`
  text-align: center;
`;

export default BobaClub;
