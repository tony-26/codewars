const removeNegativesFromBeginning = (arr) => {
  if (arr[0] > 0) {
    return arr;
  } else {
    arr.shift();
    return removeNegativesFromBeginning(arr);
  }
};
console.log(removeNegativesFromBeginning([1, 2, 3])); //[1, 2, 3]
console.log(removeNegativesFromBeginning([-1, -2, -3, 1, 2, 3])); //[1, 2, 3]
