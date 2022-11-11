const removeSmallest = (numbers) => {
  let value = numbers[0];
  let count = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < value) {
      value = numbers[i];
      count += 1;
    }
  }
  numbers.slice(count, 1);
  return numbers;
};
console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
//Remove the minimum
