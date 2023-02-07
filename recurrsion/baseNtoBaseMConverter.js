const baseNToBase10 = (num, baseN) => {
  let reverse = num.toString().split("").reverse();
  let decimalN = 0;

  for (let i = 0; i < num.toString().length; i++) {
    decimalN = decimalN + Number(reverse[i]) * baseN ** i;
  }

  return decimalN;
};
const base10ToBaseN = (num, n, result = 0) => {
  if (num === 0) {
    return result;
  }
  let i = 0;
  while (true) {
    if (n ** i > num) {
      num = num - n ** (i - 1);
      result = result + 10 ** (i - 1);
      return base10ToBaseN(num, n, result);
    } else {
      i += 1;
    }
  }
};
const baseNtoBaseM = (num, baseN, baseM) =>
  base10ToBaseN(baseNToBase10(num, baseN), baseM);
console.log(baseNtoBaseM(101, 2, 10)); //5
console.log(baseNtoBaseM(4321, 5, 6)); //2414
