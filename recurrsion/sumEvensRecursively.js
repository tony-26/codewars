const sumEvensRecursively = (arr, sumEven = 0) => {
  //Condition for termination
  if (arr.length === 0) return sumEven;
  //Recursive step
  const currentElement = arr.shift();
  if (currentElement % 2 === 0) {
    sumEven = sumEven + currentElement;
  }
  return sumEvensRecursively(arr, sumEven);
};

console.log(sumEvensRecursively([1, 2, 3, 4, 5])); //6
