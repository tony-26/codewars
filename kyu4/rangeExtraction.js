const rangeExtraction = (list) => {
  let continueStr = "";
  let result = [];
  let firstNum = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] > 1) {
      continueStr = firstNum + "-" + list[i];
      result.push(continueStr);
    }
    if (list[i] - list[i - 1] !== 1 && list[i + 1] - list[i] !== 1) {
      result.push(list[i]);
    }
  }
  return result.join(",");
};
//console.log(rangeExtraction([1, 2, 3])); //"1-3"
console.log(rangeExtraction([1, 2, 3, 5])); //"1-3,5"
console.log(rangeExtraction([2, 3, 4, 5, 10, 11, 12, 13])); // "2-5,10-13"
// console.log(rangeExtraction([2, 3, 4, 5, 6, 10, 11, 15, 16, 17])); // "2-6,10,11,15-17"
