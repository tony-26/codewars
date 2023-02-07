const baseNtoBaseMConverter = (num, n, m) => {
  let reverse = num.toString().split("").reverse();
  let decimalN = 0;
  //console.log(reverse);
  for (let i = 0; i < n.toString().length; i++) {
    decimalN = decimalN + Number(reverse[i]) * n ** i;
  }
  const base10ToBaseNConverter = (decimalN, m, result = 0) => {
    if (num === 0) {
      return result;
    }
    let i = 0;
    while (true) {
      if (m ** i > num) {
        num = num - m ** (i - 1);
        result = result + 10 ** (i - 1);
        console.log({ num, result });
        return base10ToBaseNConverter(num, m, result);
      } else {
        i += 1;
      }
    }
  };
};

console.log(baseNtoBaseMConverter(101, 2, 10)); //5
