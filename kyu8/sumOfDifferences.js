function sumOfDifferences(arr) {
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i] - arr[i + 1];
  }
  return sum;
}
console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
