const squareDigits = (num) => {
  let add = 0;
  let value = "";
  for (i = 0; i <= num.length; i++) {
    add = num[i] * num[i];
    value = value + add;
  }
  return value;
};
console.log(squareDigits(3212)); // 9414
//square every digit
