const squareDigits = (num) => {
  let add = 0;
  let value = "";
  for (i = 0; i <= num.toString().length; i++) {
    add = num.toString()[i] * num.toString()[i];
    value = value + add;
    console.log(add, num.toString()[i], value);
  }
  return value;
};
// console.log((3212).length);
console.log(squareDigits(3212)); // 9414
//square every digit
