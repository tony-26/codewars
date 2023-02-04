const base10ToBase3Converter = (n, result = 0) => {
  if (n === 0) {
    return result;
  }
  let i = 0;
  while (true) {
    if (3 ** i > n) {
      n = n - 3 ** (i - 1);
      result = result + 10 ** (i - 1);
      console.log({ n, result });
      return base10ToBase3Converter(n, result);
    } else {
      i += 1;
    }
  }
};
// 1.  return [19, 10000]
// 2.  return [10, 10100]
// 3.  return [1, 10200]
// 4.  return [0, 10201]
// 5.  return 10201
console.log(base10ToBase3Converter(100)); //10201
// 100 - 81 = 19     3^4          10000
// 19 - 9 = 10       3^2          100
// 10 - 9 = 1        3^2          100
// 1 - 1 = 0         3^0          1

//1022
// 1000 = 1 * 3^3
// 20 = 2 * 3^1
// 2 = 2 * 3^0
