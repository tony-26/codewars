const removeSmallest = (numbers) => {
  const numbersCopy = [...numbers];
  let value = numbersCopy[0];
  let count = 0;
  for (i = 0; i < numbersCopy.length; i++) {
    if (numbersCopy[i] < value) {
      value = numbersCopy[i];
      count = i;
    }
  }
  numbersCopy.splice(count, 1);
  return numbersCopy;
};
console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([315, 296, 88, 88, 343, 51, 130, 202]));
