const sortArray = (array) => {
  let cValue = 0;
  if (array.length === 0) {
    return [];
  } else {
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        cValue = array[i];
      }
    }
  }
};
assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
assert.deepEqual(sortArray([]), []);
