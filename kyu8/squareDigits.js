const squareDigits = (num) => {
  let add = 0;
  let value = "";
  for (i = 0; i < num.toString().length; i++) {
    add = Number(num.toString()[i] * num.toString()[i]);
    value = value + add;
  }
  return Number(value);
};
// console.log((3212).length);
console.log(squareDigits(3212)); // 9414
//square every digit
