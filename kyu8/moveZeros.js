const moveZeros = (arr) => {
  const len = arr.length;
  let count = 0;
  for (i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      count = count + 1;
    }
  }
  for (i = 0; i < count; i++) {
    arr.push(0);
  }
  return arr;
};
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
console.log([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]);

//moving zeros to the end
