function sumStrings(a, b) {
  let carry = 0;
  let currentValue = "";
  let reverseA = a.split("").reverse();
  let reverseB = b.split("").reverse();
  for (let i = 0; i < reverseA.length; i++) {
    if (Number(reverseA[i]) + Number(reverseB[i]) > 10) {
      currentValue =
        (Number(reverseA[i]) + Number(reverseB[i]) - 10 + carry).toString() +
        currentValue;
      carry = 1;
    } else {
      currentValue =
        (Number(reverseA[i]) + Number(reverseB[i]) + carry).toString() +
        currentValue;
      carry = 0;
    }
  }

  return currentValue;
}
console.log(sumStrings("12345", "11111")); //'23456'
console.log(sumStrings("12345", "11117")); //'23462'
