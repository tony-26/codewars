const isFirstNumUnique = (arr) => {
  return arr[0] !== arr[1] && arr[1] === arr[2];
};

function findUniq(arr) {
  if (isFirstNumUnique(arr)) {
    return arr[0];
  }
  const repeatedNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== repeatedNum) {
      return arr[i];
    }
  }
}
console.log(findUniq([1, 0, 0]), 1);
console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([0, 0, 1]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
