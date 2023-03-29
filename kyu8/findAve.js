var findAverage = function (nums) {
  const sum = nums.reduce((prevReturnedValue, currentNum) => {
    return prevReturnedValue + currentNum;
  }, 0);
  return sum / nums.length;
};
console.log(findAverage([1]), 1);
console.log(findAverage([1, 3, 5, 7]), 4);
