const equalLengthAB = (a, b) => {
  let newA = a;
  let newB = b;
  if (a.length > b.length) {
    newB = "0".repeat(a.length - b.length) + newB;
  }
  if (b.length > a.length) {
    newA = "0".repeat(b.length - a.length) + newA;
  }
  return [newA, newB];
};
// console.log(equalLengthAB("123456", "9999"), ["123456", "009999"]);
// console.log(equalLengthAB("9999", "123456"), ["009999", "123456"]);
// console.log(equalLengthAB("12", "99"), ["12", "99"]);
const removeStartingZeros = (str) => {
  if (str[0] === "0") {
    return removeStartingZeros(str.split("").slice(1).join(""));
  } else {
    return str;
  }
};
console.log(removeStartingZeros("00000123")); //"123"
function sumStrings(a, b) {
  const [newA, newB] = equalLengthAB(a, b);
  let carry = 0;
  let currentValue = "";
  let reverseA = newA.split("").reverse();
  let reverseB = newB.split("").reverse();

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
  if (carry === 1) {
    return removeStartingZeros(carry + currentValue);
  } else {
    return removeStartingZeros(currentValue);
  }
}
// console.log(sumStrings("12345", "11111") === "23456");
// console.log(sumStrings("12345", "11117") === "23462");
// console.log(sumStrings("12345", "11187") === "23532");
// console.log(sumStrings("12345", "11157")); //'23502'
// console.log(sumStrings("123456", "176544")); //'300000'

// console.log(sumStrings("123456", "9999")); //'133455'
// console.log(sumStrings("123456", "876544")); //'1000000'
console.log(sumStrings("00103", "08567")); //'8670'
