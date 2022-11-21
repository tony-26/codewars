const countBits = function (n) {
  let count = 0;
  let binaryNumber = n.toString(2);
  for (i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === "1") {
      count += 1;
    }
  }
  return count;
};
console.log(countBits(0), 0);
console.log(countBits(4), 1);
// console.log(countBits(7), 3);
// console.log(countBits(9), 2);
// console.log(countBits(10), 2);
