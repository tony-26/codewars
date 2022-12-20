function sumStrings(a, b) {
  let carry = 0;
  let currentValue = "";
  let reverseA = a.split("").reverse();
  let reverseB = b.split("").reverse();
  for (let i = 0; i < reverseA.length; i++) {
    const sum = Number(reverseA[i]) + Number(reverseB[i]) + carry;
    if (sum >= 10) {
      currentValue = (sum - 10).toString() + currentValue;
      carry = 1;
    } else {
      currentValue = sum.toString() + currentValue;
      carry = 0;
    }
  }

  return currentValue;
}
console.log(sumStrings("12345", "11111") === "23456");
console.log(sumStrings("12345", "11117") === "23462");
console.log(sumStrings("12345", "11187") === "23532");
console.log(sumStrings("12345", "11157")); //'23502'
