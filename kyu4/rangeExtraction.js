const rangeExtraction = (list, result = []) => {
  let output = "";
  let begin = list[0];
  let end = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] === end + 1) {
      end = list[i];
    } else {
      if (begin === end) {
        output = output + begin + ",";
      }
      output += begin + "-" + end;
      begin = list[i];
      end = list[i];
    }
  }
  return output;

  //   if (list.length === 0) {
  //     return result.join(",");
  //   }
  //   let continueStr = "";
  //   let firstNum = list[0];
  //   const length = list.length;
  //   for (let i = 0; i < length; i++) {
  //     if (list[i + 1] - list[i] > 1) {
  //       continueStr = firstNum + "-" + list[i];
  //       result.push(continueStr);
  //       list.splice(0, i);
  //     }
  //     if (list[i] - list[i - 1] !== 1 && list[i + 1] - list[i] !== 1) {
  //       result.push(list[i]);
  //     }
  //   }
  //   return rangeExtraction(list, result);
};
//console.log(rangeExtraction([1, 2, 3])); //"1-3"
console.log(rangeExtraction([1, 2, 3, 5])); //"1-3,5"
console.log(rangeExtraction([2, 3, 4, 5, 10, 11, 12, 13])); // "2-5,10-13"
// console.log(rangeExtraction([2, 3, 4, 5, 6, 10, 11, 15, 16, 17])); // "2-6,10,11,15-17"
