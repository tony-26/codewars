const getSum = (a, b) => {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (i = a; i <= b; i++) {
      sum = sum + i;
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      sum = sum + i;
    }
  }
  return sum;
};
// console.log(getSum(0, 1)); //1
// console.log(getSum(0, -1)); //-1
console.log(getSum(-347, 518)); // 74043          a = -347, d = 1, n = 518 - (-347) + 1, s = n/2 * (2a + (n - 1) * d)
//Beginner Series
