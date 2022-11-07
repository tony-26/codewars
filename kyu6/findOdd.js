const findOdd = (numberArr) => {
  numberArr.sort((a, b) => b - a);
  let i = 0;
  let currentNum = numberArr[0];
  let currentCount = 1;
  while (i < numberArr.length) {
    if (numberArr[i] === numberArr[i + 1]) {
      currentCount += 1;
    } else {
      if (currentCount % 2 !== 0) {
        return currentNum;
      }
      currentCount = 1;
      currentNum = numberArr[i + 1];
    }
    i = i + 1;
  }
};
console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);
