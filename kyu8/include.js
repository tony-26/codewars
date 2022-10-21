const include = (arr, item) => {
  for (i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return true;
    }
  }
  return false;
};
console.log(include([1, 2, 3, 4], 3), true);
