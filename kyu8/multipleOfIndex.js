function multipleOfIndex(array) {
  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] % i === 0) {
      result.push(array[i]);
    }
  }
  return result;
}
