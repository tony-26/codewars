const getSum = (a, b) => {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (i = a; i < b - a + 1; i++) {
      sum = sum + i;
    }
  } else if (a > b) {
    for (i = b; i < a - b; i++) {
      sum = sum + i;
    }
  }
  return sum;
};
console.log(getSum(0, 1)); //1
console.log(getSum(0, -1)); //-1
console.log(getSum(-347, 518)); // 74043
//Beginner Series
