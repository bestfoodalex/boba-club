import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, CheckBox, Footer, Grommet, Image, Main, Text } from 'grommet';
import { 
  bobaTypes,
  dairyFreeTypes,
  foamTypes, 
  fruitTypes, 
  jellyTypes, 
  justTeaFlavors, 
  levels, 
  milkTypes, 
  teaFlavors, 
  teaTypes, 
  toppingTypes 
} from '../models/ingredients';
import {
  doesTeaFitType,
  getMilkOrFruitType,
  getRandom,
  getTeaFlavor,
  getTeaType,
  getWeightedBool,
  joinAnd,
  selectRandomFromHalf
} from '../utils/utils';
import { respondTo } from '../utils/styles';
import Logo from '../images/logo.png';

const generateTea = (isDairyFree: boolean = false, setHideIce: any) => {
  const isRare = getWeightedBool(75);
  const hasFoam = !isDairyFree && getWeightedBool();
  const hasBoba = getWeightedBool(25);
  const hasJelly = !hasBoba && getWeightedBool(55);
  const hasToppings = getWeightedBool(85);
  const bobas = [];
  let teaFlavor = getTeaFlavor(teaFlavors, isRare);
  let teaType = getTeaType(teaTypes);
  let match = doesTeaFitType(teaFlavor, teaType);
  let milkType = milkTypes[0];
  let fruitType = fruitTypes[0];
  let justTeaFlavor;
  let foamType;
  let jellyType;
  const filteredToppingTypes = isDairyFree ? [...toppingTypes].filter(t => typeof t.dairyFree === 'undefined' || t.dairyFree) : [...toppingTypes];
  let toppingType = hasToppings ? getRandom(filteredToppingTypes) : null;
  let formattedName = '';

  while (!match) {
    teaFlavor = getTeaFlavor(teaFlavors, isRare);
    teaType = getTeaType(teaTypes);
    match = doesTeaFitType(teaFlavor, teaType);
  }

  if (match) {
    switch (teaType.name) {
      case 'milk':
        const filteredMilkTypes = isDairyFree ? [...milkTypes].filter(m => typeof m.dairyFree === 'undefined' || m.dairyFree) : [...milkTypes];
        milkType = getMilkOrFruitType(teaType.name, isRare, filteredMilkTypes, fruitTypes);
        break;
      case 'fruit':
        fruitType = getMilkOrFruitType(teaType.name, isRare, milkTypes, fruitTypes);
        break;
      case 'justTea':
        justTeaFlavor = selectRandomFromHalf([...justTeaFlavors], isRare);
        break;
      case 'slush':
      case 'smoothie':
        setHideIce(true);
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
    }

    if (hasJelly) {
      const isJellyRare = getWeightedBool(75);
      const jellies = isDairyFree ? [...jellyTypes].filter(j => typeof j.dairyFree === 'undefined' || j.dairyFree) : [...jellyTypes];
      jellyType = selectRandomFromHalf(jellies, isJellyRare);
      bobas.push(jellyType);
    }
  }

  const teaFlavorName = teaFlavor.name;
  const teaTypeName = teaType.name;
  const shouldShowTeaWord = teaFlavorName !== 'thai tea' && teaFlavorName !== 'white tea';
  const showTeaWordBefore = () => {
    let returnTeaTypeName = teaTypeName;

    switch (teaTypeName) {
      case 'latte':
        const randomDairyFreeMilk = getRandom(dairyFreeTypes);
        const latteTeaWord = isDairyFree ? `${randomDairyFreeMilk} milk ${teaTypeName}` : teaTypeName;
        returnTeaTypeName = shouldShowTeaWord ? `tea ${latteTeaWord}` : latteTeaWord;
        break;
      case 'smoothie':
      case 'slush':
        returnTeaTypeName = shouldShowTeaWord ? `tea ${teaTypeName}` : teaTypeName;
        break;
      case 'yakult':
        returnTeaTypeName = shouldShowTeaWord ? `${teaTypeName} tea` : teaTypeName;
        break;
      case 'milk':
        returnTeaTypeName = teaFlavorName !== 'thai tea' ? `${milkType ? milkType.name : teaTypeName} tea` : '';
        break;
      case 'fruit':
        returnTeaTypeName = teaFlavorName !== 'white tea' ? `${fruitType ? fruitType.name : teaTypeName} tea` : `with ${fruitType ? fruitType.name : ''}`;
        break;
      default:
        break;
    }

    return returnTeaTypeName;
  };

  formattedName = `${teaTypeName === 'justTea' ? justTeaFlavor.name + ' ' : ''}${teaFlavorName} `;
  formattedName += `${teaTypeName === 'justTea' && justTeaFlavor.name !== 'white tea' ? 'tea' : showTeaWordBefore()}`;
  formattedName += `${(hasBoba || hasJelly) ? ' with ' + joinAnd(bobas.map(b => b.name)) : ''}`;
  formattedName += `${hasFoam ? ', topped with ' + foamType.name : ''}`;
  formattedName += `${!hasToppings ? '' : (hasFoam ? ' and ' + toppingType.name : ', topped with ' + toppingType.name)}`;

  return formattedName;
};

const BobaClub = () => {
  const [drink, setDrink] = useState('');
  const [iceLevel, setIceLevel] = useState(50);
  const [sugarLevel, setSugarLevel] = useState(50);
  const [isDairyFree, setIsDairyFree] = useState(false);
  const [hideIce, setHideIce] = useState(false);

  const generateDrinkDetails = () => {
    setHideIce(false);
    setIceLevel(getRandom(levels));
    setSugarLevel(getRandom(levels));
    setDrink(generateTea(isDairyFree, setHideIce));
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
          <CheckBox
            name="toggle"
            label="Dairy Free?"
            onChange={() => setIsDairyFree(!isDairyFree)}
            toggle
          />
          <Button size="large" primary label="Generate random drink!" onClick={() => generateDrinkDetails()} />
        </ButtonWrap>
        {drink !== '' && <TextWrap pad="medium">
          <p><strong>{drink.toUpperCase()}</strong></p>
          <p>{!hideIce && `${iceLevel}% ice, `}{sugarLevel}% sweet</p>
        </TextWrap>}
        <BobaFooter background="light-4" justify="center" pad="small">
          <Text textAlign="center" size="small">
            &copy; 2021 Boba Club &amp; <a href="http://alexjewell.com" target="_blank">Alex Jewell</a>.{' '}
            Contribute to the project on <a href="https://github.com/bestfoodalex/boba-club" target="_blank">GitHub</a>.
          </Text>
        </BobaFooter>
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
  width: 100%;

  ${(respondTo as any).sm`
    width: 400px;
  `}
`;

const ButtonWrap = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;

  label {
    padding-bottom: 20px;
  }

  ${(respondTo as any).sm`
    flex-direction: row;

    label {
      padding-bottom: 0;
      padding-right: 20px;
    }
  `}
`;

const TextWrap = styled(Box)`
  text-align: center;
`;

const BobaFooter = styled(Footer)`
  margin-top: 100px;
`;

export default BobaClub;