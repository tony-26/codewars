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
//console.log(twoSum([1234, 5678, 9012], 14690)); //, [1,2]
//first iteration, get these to pass:
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 5)); // -> [0,3]
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 7)); // -> [0,5]
console.log(twoSum([3, 4, 5, 6, 7, 8], 7)); // -> [0,1]

// second iteration:
// console.log(twoSum([1,7,9,2], 9) // -> [1,3]
// console.log(twoSum([2,1,5,9,11,8], 12) // -> [1,4]
