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

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const result = shiftStartingRange(arr);
console.log(result, arr); //[2, 3, 4, 5], [7, 8, 9]

const rangeExtraction = (list) => {
  //   let output = "";
  //   let begin = list[0];
  //   let end = list[0];
  //   for (let i = 1; i < list.length; i++) {
  //     if (list[i] === end + 1) {
  //       end = list[i];
  //     } else {
  //       if (begin === end) {
  //         output = output + begin + ",";
  //       } else {
  //         output += begin + "-" + end + ",";
  //       }
  //       begin = list[i + 1];
  //       end = list[i + 1];
  //     }
  //   }
  //   return output;
};
//console.log(rangeExtraction([1, 2, 3])); //"1-3"
//console.log(rangeExtraction([1, 2, 3, 5])); //"1-3,5"
console.log(rangeExtraction([2, 3, 5, 10, 11, 12, 13, 15, 16, 19])); // "2-5,10-13"
// console.log(rangeExtraction([2, 3, 4, 5, 6, 10, 11, 15, 16, 17])); // "2-6,10,11,15-17"
