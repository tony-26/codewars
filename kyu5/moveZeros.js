const moveZeros = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArr.push(arr[i]);
    }
  }
  const len = arr.length - newArr.length;
  for (let i = 0; i < len; i++) {
    newArr.push(0);
  }
  return newArr;
};
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

// console.log(moveZeros(["a", "b", null, "c", "d", 1, 1, 3, 1, 9, {}, 9, 0, 0]));

const moveZerosV2 = (array) =>
  array.filter((e) => e !== 0).concat(array.filter((e) => e === 0));
console.log(
  moveZerosV2([0, 0, "a", "b", null, "c", "d", 1, 1, 3, 1, 9, {}, 9, 0, 0])
);
