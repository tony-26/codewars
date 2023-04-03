function findLongest(array) {
  let maxCount = array[0].toString().length;
  let maxNum = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].toString().length > maxCount) {
      maxCount = array[i].toString().length;
      maxNum = array[i];
    }
  }
  return maxNum;
}
