function findDifference(a, b) {
  let sum1 = 1;
  let sum2 = 1;
  const sumA = a.map((e) => {
    sum1 = sum1 * e;
  });
  const sumB = b.map((e) => {
    sum2 = sum2 * e;
  });
  if (sum1 > sum2) {
    return sum1 - sum2;
  } else {
    return sum2 - sum1;
  }
}
console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);
