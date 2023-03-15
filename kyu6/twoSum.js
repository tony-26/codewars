function twoSum(numbers, target) {
  let result = [];

  for (let j = 0; j < numbers.length; j++) {
    result.push(j);
    for (let i = 1; i < numbers.length; i++) {
      if (target - numbers[j] === numbers[i]) {
        result.push(i);
      }
    }
    if (result.length === 2) {
      return result;
    } else {
      result.shift();
    }
  }
}

//first iteration, get these to pass:
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 5)); // -> [0,3]
// console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8], 7)); // -> [0,5]
// console.log(twoSum([3, 4, 5, 6, 7, 8], 7)); // -> [0,1]
// console.log(twoSum([1, 2, 3], 4)); //[0, 2]

// second iteration:
console.log(twoSum([1, 7, 9, 2], 9)); // -> [1,3]
console.log(twoSum([2, 1, 5, 9, 11, 8], 12)); // -> [1,4]
console.log(twoSum([1234, 5678, 9012], 14690)); //, [1,2]
