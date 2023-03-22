const minMax = (arr) => {
  if (arr.length === 0) {
    return [0, 0];
  }
  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
};
console.log(minMax([1, 2, 3, 4, 5])); //[1, 5]
