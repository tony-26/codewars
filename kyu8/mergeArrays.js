function mergeArrays(arr1, arr2) {
  for (let i = 0; i < arr2; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return arr1.sort((a, b) => a - b);
}
//console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
console.log(mergeArrays([1, 3, 5, 7, 9, 11], [10, 8, 6, 4, 2]));
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]),
//   [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// );
