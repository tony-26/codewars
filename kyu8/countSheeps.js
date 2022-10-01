const countSheeps = (arrayOfSheep) => {
  let count = 0;
  arrayOfSheep.forEach((e) => {
    if (e === true) {
      count = count + 1;
    }
  });
  return count;
};
console.log(countSheeps([true, false, true, true])); //3
console.log(countSheeps([true, true, false, false, false])); //2
