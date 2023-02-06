const base2ToBase10Converter = (n, result = 0) => {
  if (n === 0) {
    return result;
  }
  let i = 0;
  while (true) {
    if (2 ** i > n) {
      n = n - 2 ** (i - 1);
      result = result + 10 ** (i - 1);
      //console.log({ n, result });
      return base10ToBase2Converter(n, result);
    } else {
      i += 1;
    }
  }
};
console.log(base2ToBase10Converter(1100100)); //100
