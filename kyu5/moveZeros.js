const moveZeros = (arr) => {
  let newArr = [];
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }
  len = arr.length - newArr.length;
  for (let i = 0; i < len; i++) {
    newArr.push(0);
    // console.log(newArr.length);
  }
  return newArr;
};
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// console.log(
//   moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]) // []
// );

console.log(moveZeros(["a", "b", null, "c", "d", 1, 1, 3, 1, 9, {}, 9, 0, 0]));
//moving zeros to the end
