function findUniq(arr) {
  let uniqueNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== uniqueNum) {
      return arr[i];
    }
  }
  return unique;
}
console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
