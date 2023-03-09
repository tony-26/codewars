function largestPairSum(numbers) {
  let max1 = numbers[0];
  let max2 = numbers[1];
  for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] > max1) {
      max2 = max1;
      max1 = numbers[i];
    } else if (numbers[i] > max2) {
      max2 = numbers[i];
    }
  }
  return max1 + max2;
}
console.log(largestPairSum([10, 14, 2, 23, 19], 42));
console.log(largestPairSum([-100, -29, -24, -19, 19], 0));
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2], 10));
console.log(largestPairSum([-10, -8, -16, -18, -19], -18));
