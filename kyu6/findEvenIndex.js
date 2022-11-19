const findEvenIndex = (arr) => {
  let count = 0;
  let sumLeft = 0;
  let sumRight = 0;
  for (i = 0; i < arr.length; i++) {
    sumRight = sumRight + arr[i + 1];
  }
};
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);
