function take(arr, n) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  if (n > arr.length) {
    return arr;
  }
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
