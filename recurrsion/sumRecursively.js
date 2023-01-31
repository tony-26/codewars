const sumRecursively = (arr, currentSum = 0) => {
  if (arr.length === 0) {
    return currentSum;
  }
  currentSum = currentSum + arr.shift();
  return sumRecursively(arr, currentSum);
};
console.log(sumRecursively([1, 2, 3])); //6
