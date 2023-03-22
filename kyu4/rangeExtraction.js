const shiftStartingRange = (list) => {
  const result = [list.shift()];
  while (true) {
    if (list[0] - result[result.length - 1] === 1) {
      result.push(list.shift());
    } else {
      return result;
    }
  }
};

// const arr = [2, 3, 4, 5, 6, 7, 8, 9];
// const result = shiftStartingRange(arr);
// console.log(result, arr); //[2, 3, 4, 5], [7, 8, 9]

const addRangeToStr = (str, range) => {
  if (range.length === 1) {
    return str + "," + range[0];
  }
  if (range.length === 2) {
    return str + "," + range[0] + "," + range[1];
  }
  return str + "," + range[0] + "-" + range[range.length - 1];
};
// console.log(addRangeToStr("1,2-5", [7, 8, 9]));
// console.log(addRangeToStr("1,2-5", [7, 8]));
// console.log(addRangeToStr("1,2-5", [7]));

const rangeExtraction = (list) => {
  if (list.length === 0) {
    return "";
  }
  let str = "";
  while (list.length > 0) {
    const startingRange = shiftStartingRange(list);
    str = addRangeToStr(str, startingRange);
  }
  return str.slice(1);
};
//console.log(rangeExtraction([1, 2, 3])); //"1-3"
//console.log(rangeExtraction([1, 2, 3, 5])); //"1-3,5"
console.log(rangeExtraction([2, 3, 5, 10, 11, 12, 13, 15, 16, 19])); // "2-5,10-13"
// console.log(rangeExtraction([2, 3, 4, 5, 6, 10, 11, 15, 16, 17])); // "2-6,10,11,15-17"
