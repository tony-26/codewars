function fakeBin(x) {
  let newStr = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      newStr = newStr + "0";
    } else if (x[i] >= 5) {
      newStr = newStr + "1";
    }
  }
  return newStr;
}
console.log(fakeBin("45385593107843568"), "01011110001100111");
console.log(fakeBin("509321967506747"), "101000111101101");
