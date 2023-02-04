const base10ToBase2Converter = (n, result = 0) => {
  let i = 1;
  while (true) {
    if (2 ** i > n) {
      n = n - 2 ** (i - 1);
      result = 10 ** (i - 1);
      return base10ToBase2Converter(n, result);
    } else {
      i += 1;
    }
  }
};
console.log(base10ToBase2Converter(36)); //1100100
