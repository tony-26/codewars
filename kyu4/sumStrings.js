function sumStrings(a, b) {
  let carry = 0;
  let currentValue = "";
  let reverseA = a.split("").reverse();
  let reverseB = b.split("").reverse();
  for (let i = 0; i < reverseA.length; i++) {
    const sum = Number(reverseA[i]) + Number(reverseB[i]);
    if (sum > 10) {
      currentValue = (sum - 10 + carry).toString() + currentValue;
      carry = 1;
    } else {
      currentValue = (sum + carry).toString() + currentValue;
      carry = 0;
    }
  }

  return currentValue;
}
console.log(sumStrings("12345", "11111")); //'23456'
console.log(sumStrings("12345", "11117")); //'23462'
