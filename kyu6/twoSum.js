function twoSum(numbers, target) {
  let result = [];
  if (result.length === 2) return result;

  result.push(0);
  for (let i = 1; i < numbers.length; i++) {
    if (target - numbers[0] === numbers[i]) {
      result.push(i);
    }
  }
  if (result.length !== 2) {
    numbers.shift();
    return twoSum(numbers, target);
  }
}
console.log(twoSum([1, 2, 3], 4)); //[0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); //, [1,2]
