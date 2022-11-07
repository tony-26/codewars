const arrayDiff = (a, b) => {
  let newArr = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[0]) {
      newArr.push(a[i]);
    }
  }
  return newArr;
};

// console.log(arrayDiff([1, 2], [1]), [2]);
// console.log(arrayDiff([1, 2, 2], [1]) === [2, 2]);
// console.log(arrayDiff([1, 2, 2], [2]) === [1]);
// console.log(arrayDiff([1, 2, 2], []) === [1, 2, 2]);
// console.log(arrayDiff([], [1, 2]) === []);
console.log(arrayDiff([1, 2, 3], [1, 2]), [3]);
