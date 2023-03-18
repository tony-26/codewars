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
console.log(getSingleDigit("8")); //[5, 7, 8, 9, 0]
console.log(getSingleDigit("9")); //[6, 8, 9]
