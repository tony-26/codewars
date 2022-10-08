const quarterOf = (month) => {
  let result = 0;
  if (1 <= month && month <= 3) {
    result = 1;
  } else if (4 <= month && month <= 6) {
    result = 2;
  } else if (7 <= month && month <= 9) {
    result = 3;
  } else if (10 <= month && month <= 12) {
    result = 4;
  }
  return result;
};
console.log(quarterOf(5)); // 2
