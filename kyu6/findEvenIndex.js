const sumToIndex = (arr, index) => {
  let sum = 0;
  for (let i = 0; i < index; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const sumFromIndex = (arr, index) => {
  let sum = 0;
  for (let i = index + 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

const findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (sumToIndex(arr, i) === sumFromIndex(arr, i)) {
      return i;
    }
  }
  return -1;
};
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]), 1);
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]), -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3);
