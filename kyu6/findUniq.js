function findUniq(arr) {
  let value = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === value) {
      return arr[2];
    } else {
      return arr[1];
    }
  }
}
