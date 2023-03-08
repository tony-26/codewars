function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let difference = target - numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      if (difference === numbers[j]) {
        result.push(i, j);
      }
    }
  }
  return result;
}
console.log(twoSum([1, 2, 3], 4)); //[0, 2]
