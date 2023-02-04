const base10ToBaseNConverter = (num, n, result = 0) => {
  if (num === 0) {
    return result;
  }
  let i = 0;
  while (true) {
    if (n ** i > num) {
      num = num - n ** (i - 1);
      result = result + 10 ** (i - 1);
      console.log({ num, result });
      return base10ToBaseNConverter(num, n, result);
    } else {
      i += 1;
    }
  }
};
console.log(base10ToBaseNConverter(100, 3)); //10201
console.log(base10ToBaseNConverter(100, 5));
console.log(base10ToBaseNConverter(1000, 7));
