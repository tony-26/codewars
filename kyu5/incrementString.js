const strNumAddOne = (strNum) => {
  let newNum = (Number(strNum) + 1).toString();
  if (newNum.length < strNum.length) {
    newNum = "0".repeat(strNum.length - newNum.length) + newNum;
  }
  return newNum;
};
// console.log(strNumAddOne("999")); //"1000"
// console.log(strNumAddOne("00009")); //"00010"

const findIndex = (str) => {
  const reverseChar = str.split("").reverse();
  // if (typeof reverseChar[0]==="string"){
  //     return str.length
  // }
  for (let i = 0; i < str.length; i++) {
    //console.log(i, reverseChar[i], typeof reverseChar[i] === "string");
    if (![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(reverseChar[i]))) {
      return str.length - i;
    }
  }
  return 0;
};
// console.log(findIndex("abc321")); //3
// console.log(findIndex("abc321ef45")); //8
// console.log(findIndex("abc")); //3
// console.log(findIndex("321")); //0

function incrementString(string) {
  const digitArr = [];
  const charArr = [];
  let arr = string.split("").reverse();
  for (let i = 0; i < arr.length; i++) {
    if (i < findIndex(string) - 1) {
      digitArr.push(arr[i]);
    } else {
      charArr.push(arr[i]);
    }
  }
  if (digitArr.length === 0) {
    return string + 1;
  }
  return charArr.reverse().join("") + strNumAddOne(digitArr.reverse().join(""));
}

console.log(incrementString("fo99obar99")); //"fo99obar100"
// console.log(incrementString("foobar123"));
// console.log(incrementString("foobar"));
// console.log("foobar999", "foobar1000");
// console.log("foobar00999", "foobar01000");
// console.log("foo", "foo1");
