const sumOddRecursively = (arr, sumOdd = 0) => {
  if (arr.length === 0) return sumOdd;
  const currentNumber = arr.shift();
  if (currentNumber % 2 === 1) {
    sumOdd += currentNumber;
  }
  return sumOddRecursively(arr, sumOdd);
};
console.log(sumOddRecursively([1, 2, 3, 4, 5])); //9
