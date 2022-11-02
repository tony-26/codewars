const sum = (arr, result = 0) => {
  if (arr.length === 0) {
    return result;
  } else {
    const newResult = result + arr.pop();
    return sum(arr, newResult);
  }
};

console.log(sum([1, 2, 3]), 6);
console.log(sum([2, 3, 4, 5]), 14);
