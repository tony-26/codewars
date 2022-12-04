// const sortArray = (array) => {
//   let cValue = 0;
//   if (array.length === 0) {
//     return array;
//   } else {
//     for (i = 0; i < array.length; i++) {
//       if (array[i] % 2 !== 0) {
//         cValue = array[i];
//       }
//     }
//   }
// };
//assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
// assert.deepEqual(sortArray([]), []);

// const sortArray = (array) => {
//   console.log("executed");
//   const originalArry = [...array];
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] % 2 !== 0) {
//       if (array[i] > array[i + 1]) {
//         const small = array[i + 1];
//         const large = array[i];
//         array[i] = small;
//         array[i + 1] = large;
//       }
//     }
//   }
//   if (originalArry.join() === array.join()) {
//     return array;
//   } else {
//     return sortArray(array);
//   }
// };
//console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
const bsortMutate = (arr) => {
  console.log("executed");
  let currOddNum, currOddIndex, nextOddNum, nextOddIndex;
  const originalArry = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (currOddNum === undefined) {
      if (arr[i] % 2 === 1) {
        currOddNum = arr[i];
        currOddIndex = i;
      }
    } else {
      if (arr[i] % 2 === 1) {
        nextOddNum = arr[i];
        nextOddIndex = i;
      }
    }

    if (currOddNum && nextOddNum) {
      if (nextOddNum < currOddNum) {
        arr[currOddIndex] = nextOddNum;
        arr[nextOddIndex] = currOddNum;
      }
    }
  }
  // if (originalArry.join() === arr.join()) {
  //   return arr;
  // } else {
  //   return bsortMutate(arr);
  // }
  return arr;
};

console.log(bsortMutate([5, 6, 1, 2, 3])); // [3,2,1,4,5]

//console.log(sortArray([5, 6, 1, 2, 3])); // [3,2,1,4,5]
