// const countBits = function (n) {
//   // let count = 0;
//   // let binaryNumber = n.toString(2);
//   // for (i = 0; i < binaryNumber.length; i++) {
//   //   if (binaryNumber[i] === "1") {
//   //     count += 1;
//   //   }
//   // }
//   // return count;

// };
const countBits = (n, count = 0) => {
  if (n === 0) {
    return count;
  }
  if (n === 1) {
    return count + 1;
  }
  let m = 2;
  while (true) {
    if (n >= m) {
      m = m * 2;
    } else {
      n = n - m / 2;
      count = count + 1;
      return countBits(n, count);
    }
  }
};
console.log(countBits(4));
//console.log(countBits(4), 1);
// console.log(countBits(7), 3);
// console.log(countBits(9), 2);
// console.log(countBits(10), 2);
