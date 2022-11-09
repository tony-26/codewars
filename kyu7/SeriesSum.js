const SeriesSum = (n) => {
  let count = 0;
  let sum = 0;
  for (i = 1; i < n + 1; i++) {
    // console.log(count, i);
    sum = sum + 1 / (1 + count);
    count = count + 3;
  }
  return sum.toFixed(2);
};
console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");
