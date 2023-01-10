const strNumAddOne = (strNum) => {
  let newNum = (Number(strNum) + 1).toString();
  if (newNum.length < strNum.length) {
    newNum = "0".repeat(strNum.length - newNum.length) + newNum;
  }
  return newNum;
};

const findIndex = (str) => {
  const reverseChar = str.split("").reverse();

  for (let i = 0; i < str.length; i++) {
    if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(reverseChar[i]))) {
      return str.length - i;
    }
  }
  return 0;
};

function incrementString(string) {
  const index = findIndex(string);
  return string.slice(0, index) + strNumAddOne(string.slice(index));
}

console.log(incrementString("fo99obar99")); //"fo99obar100"
// console.log(incrementString("foobar123"));
console.log(incrementString("foobar"));
// console.log("foobar999", "foobar1000");
// console.log("foobar00999", "foobar01000");
// console.log("foo", "foo1");
