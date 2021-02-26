import { 
  bobaTypes,
  dairyFreeTypes,
  foamTypes, 
  fruitTypes, 
  jellyTypes, 
  justTeaFlavors,
  milkTypes, 
  teaFlavors, 
  teaTypes, 
  toppingTypes 
} from '../models/ingredients';

const joinAnd = (arr: any) => {
  return arr.length > 2
    ? `${arr.slice(0, -1).join(', ')}, and ${arr.slice(-1)}` 
    : (arr.length === 2 ? arr.join(' and ') : arr);
};

const getRandom = (arr: any, numResults: number = 1) => {
  let results: any = [], counter: number = 0;
 
  while (counter < numResults) {
    let rand = arr[Math.floor(Math.random() * arr.length)];

    if (!results.some((r: any) => r.name === rand.name)) {
      results.push(rand);
      counter++;
    }
  }
  
  return numResults > 1 ? results : results[0];
}

const selectRandomFromHalf = (arr: any, isRare: boolean = false) => {
  const sortedArr = arr.sort((a: any, b: any) => (a.popularity < b.popularity) ? 1 : -1);
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

const getTeaFlavor = (teaFlavors: any, isRare: boolean) => {
  return isRare ? selectRandomFromHalf([...teaFlavors], isRare) : getRandom([...teaFlavors].filter(i => i.popularity > 5));
};

const getTeaType = (teaTypes: any) => {
  const isRare = getWeightedBool(75);
  const getThree = getRandom(teaTypes, 3);
  const sortedArr = getThree.sort((a: any, b: any) => (a.popularity < b.popularity) ? 1 : -1);

  return isRare ? sortedArr[2] : sortedArr[0];
};

const doesTeaFitType = (tea: any, teaType: any) => {
  const teaTypeName = teaType.name;
  let match = true;

  switch (teaTypeName) {
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

const getMilkOrFruitType = (teaType: string, isRare: boolean, milkTypes: any, fruitTypes: any) => {
  const items = teaType === 'milk' ? [...milkTypes] : [...fruitTypes];
  return isRare ? selectRandomFromHalf([...items], isRare) : getRandom([...items].filter(i => i.popularity > 5));
};

const generateTea = (setHideIce: any, isDairyFree: boolean = false, getCrazy: boolean = false) => {
  const hasFoam = !isDairyFree && getWeightedBool();
  const hasBoba = getWeightedBool(33);
  const hasJelly = !hasBoba && getWeightedBool(55);
  const hasToppings = getWeightedBool(85);
  const bobas = [];
  let teaFlavor = getTeaFlavor(teaFlavors, getCrazy);
  let flavorProfiles = teaFlavor.flavorProfiles;
  let teaType = getTeaType(teaTypes);
  let match = doesTeaFitType(teaFlavor, teaType);
  let milkType = milkTypes[0];
  let fruitType = fruitTypes[0];
  let justTeaFlavor;
  let foamType;
  let jellyType;
  let toppingType;
  let formattedName = '';

  while (!match) {
    teaFlavor = getTeaFlavor(teaFlavors, getCrazy);
    teaType = getTeaType(teaTypes);
    flavorProfiles = teaFlavor.flavorProfiles;
    match = doesTeaFitType(teaFlavor, teaType);
  }

  if (match) {
    switch (teaType.name) {
      case 'milk':
        let filteredMilkTypes = isDairyFree ? [...milkTypes].filter(m => typeof m.dairyFree === 'undefined' || m.dairyFree) : [...milkTypes];
        filteredMilkTypes = filteredMilkTypes.filter(m => flavorProfiles.some((f: any) => m.flavorProfiles.indexOf(f) > -1));
        milkType = getMilkOrFruitType(teaType.name, getCrazy, filteredMilkTypes, fruitTypes);
        break;
      case 'fruit':
        fruitType = getMilkOrFruitType(teaType.name, getCrazy, milkTypes, fruitTypes);
        break;
      case 'justTea':
        justTeaFlavor = selectRandomFromHalf([...justTeaFlavors], getCrazy);
        break;
      case 'slush':
      case 'smoothie':
        setHideIce(true);
        break;
      default:
        break;
    }

    if (hasFoam) {
      const filteredFoamTypes = [...foamTypes].filter(f => flavorProfiles.some((fP: any) => f.flavorProfiles.indexOf(fP) > -1));
      foamType = selectRandomFromHalf(filteredFoamTypes, getCrazy);
    }

    if (hasBoba) {
      const filteredBobaTypes = [...bobaTypes].filter(b => flavorProfiles.some((f: any) => b.flavorProfiles.indexOf(f) > -1));
      bobas.push(selectRandomFromHalf(filteredBobaTypes, getCrazy));
    }

    if (hasJelly) {
      let jellies = isDairyFree ? [...jellyTypes].filter(j => typeof j.dairyFree === 'undefined' || j.dairyFree) : [...jellyTypes];
      jellies = jellies.filter(j => flavorProfiles.some((f: any) => j.flavorProfiles.indexOf(f) > -1));
      jellyType = selectRandomFromHalf(jellies, getCrazy);
      bobas.push(jellyType);
    }

    if (hasToppings) {
      let filteredToppingTypes = isDairyFree ? [...toppingTypes].filter(t => typeof t.dairyFree === 'undefined' || t.dairyFree) : [...toppingTypes];
      filteredToppingTypes = filteredToppingTypes.filter(t => flavorProfiles.some((f: any) => t.flavorProfiles.indexOf(f) > -1));
      toppingType = getRandom(filteredToppingTypes);
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
  formattedName += `${!hasToppings ? '' : (hasFoam ? ' and ' + toppingType?.name : ', topped with ' + toppingType?.name)}`;

  return formattedName;
};

export { generateTea, getRandom };