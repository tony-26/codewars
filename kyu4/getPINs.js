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

const getPINs = (str) => {
  console.log("method called");
  if (str.length === 1) {
    return getSingleDigit(str);
  }
  const lastDigit = str[str.length - 1];
  const newStr = str.substring(0, str.length - 1);
  const digitPossibility = getSingleDigit(lastDigit);
  const currentResult = getPINs(newStr);
  const result = [];
  for (let i = 0; i < digitPossibility.length; i++) {
    for (let j = 0; j < currentResult.length; j++) {
      let processingPin = currentResult[j] + digitPossibility[i].toString();
      result.push(processingPin);
    }
  }
  return result;
};
console.log(getPINs("01")); //
//console.log(possiblePasswords("89")); //[56, 58, 59, 76,78, 79, 86, 88, 89 ,96, 98, 99,06, 08, 09]
