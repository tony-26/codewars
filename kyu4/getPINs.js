const getPINs = (observed) => {};

const getSingleDigit = (str) => {
  const pinPossibility = {
    1: "124",
    2: "1235",
    3: "236",
    4: "1457",
    5: "24568",
    6: "3569",
    7: "478",
    8: "57890",
    9: "689",
    0: "08",
  };
  return pinPossibility[str].split("");
};
// console.log(getSingleDigit("8")); //[5, 7, 8, 9, 0]
// console.log(getSingleDigit("9")); //[6, 8, 9]

const possiblePasswords = (str) => {
  let arr = [];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(getSingleDigit(str[i]));
  }
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr[1].length; j++) {
      let processingPin = arr[0][i].toString();
      processingPin = processingPin + arr[1][j].toString();
      result.push(processingPin);
      processingPin.split("").pop();
    }
  }
  return result;
};
console.log(possiblePasswords("89")); //[56, 58, 59, 76,78, 79, 86, 88, 89 ,96, 98, 99,06, 08, 09]
