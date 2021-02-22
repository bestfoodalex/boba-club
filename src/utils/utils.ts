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

const getTeaFlavor = (teaFlavors: any, isRare: boolean) => {
  const teas = getRandom(teaFlavors, 3);
  return selectRandomFromHalf([...teas], isRare);
};

const getTeaType = (teaTypes: any) => {
  const isRare = getWeightedBool(75);
  return selectRandomFromHalf([...teaTypes], isRare);
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
  return selectRandomFromHalf(items, isRare);
};

export {
  doesTeaFitType,
  getMilkOrFruitType,
  getRandom,
  getTeaFlavor,
  getTeaType,
  getWeightedBool,
  joinAnd,
  selectRandomFromHalf
};