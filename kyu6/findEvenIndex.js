const findEvenIndex = (arr) => {
  let index = 0;
  let sumLeft = 0;
  let sum = 0;
  let sumRight = 0;
  sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  for (i = index; i < arr.length; i++) {
    sumLeft = sum - arr[i];
  }
  for (j = 0; j <= index; j++) {
    sumRight = sum - arr[j];
  }
  if (sumLeft === sumRight) {
    console.log(sum, sumLeft, sumRight, index);
    return index;
  } else {
    index += 1;
  }
};
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);
