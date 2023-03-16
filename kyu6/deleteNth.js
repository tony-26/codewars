const deleteNth = (arr, n) => {
  let result = [];
  let count = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    count[item] = (count[item] || 0) + 1;
    if (count[item] <= n) {
      result.push(item);
    }
  }
  return result;
};
console.log(deleteNth([20, 37, 20, 21], 1)); //[20, 37, 21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]
