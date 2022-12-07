var humanYearsCatYearsDogYears = function (humanYears) {
  let catYear = 0;
  let dogYear = 0;
  if (humanYears === 1) {
    catYear = 15;
    dogYear = 15;
  } else if (humanYears === 2) {
    catYear = 15 + 9;
    dogYear = 15 + 9;
  } else {
    catYear = 15 + 9 + 4 * (humanYears - 2);
    dogYear = 15 + 9 + 5 * (humanYears - 2);
  }
  return [humanYears, catYear, dogYear];
};
console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
