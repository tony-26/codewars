const baseNtoBaseMConverter = (num, n, m, result = 0) => {
  if (num === 0) {
    return result;
  }
  let reverse = n.toString().reverse();
  let decimalN = 0;
  console.log(reverse);
  for (let i = 0; i < n.toString().length; i++) {
    decimalN = decimalN + Number(reverse[i]) * n ** i;
  }
};
console.log(baseNtoBaseMConverter(101, 2, 10, result)); //5
