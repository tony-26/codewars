function sumStrings(a, b) {
  let currentValue = "";
  let reverseA = a.split("").reverse();
  let reverseB = b.split("").reverse();
  for (let i = 0; i < reverseA.length; i++) {
    currentValue =
      (Number(reverseA[i]) + Number(reverseB[i])).toString() + currentValue;
  }

  return currentValue;
}
console.log(sumStrings("12345", "11111")); //'23456'
