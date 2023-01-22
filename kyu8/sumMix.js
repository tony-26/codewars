function sumMix(x) {
  let sum = 0;
  //   x.reduce((prevReturnedValue, currentNum) => {
  //     sum = sum + Number(currentNum) + Number(prevReturnedValue);
  //   }, 0);
  //   return sum;
  for (let i = 0; i < x.length; i++) {
    sum = sum + Number(x[i]);
  }
  return sum;
}
console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
