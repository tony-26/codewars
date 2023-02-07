const baseNToBase10 = (num, baseN) => {
  let reverse = num.toString().split("").reverse();
  let decimalN = 0;

  for (let i = 0; i < num.toString().length; i++) {
    decimalN = decimalN + Number(reverse[i]) * baseN ** i;
  }

  return decimalN;
};
console.log(baseNToBase10(1011, 2)); //11
console.log(baseNToBase10(4321, 5)); //586
