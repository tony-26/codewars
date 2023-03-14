function twoSum(numbers, target) {
  let result = [];
  result.push(0);
  for (let i = 1; i < numbers.length; i++) {
    if (target - numbers[0] === numbers[i]) {
      result.push(i);
    }
  }
  return result;
}
console.log(twoSum([1, 2, 3], 4)); //[0, 2]
