const arr = (n) => {
  let newArr = [];
  for (i = 0; i < n; i++) {
    newArr.push(i);
  }
  return newArr;
};
console.log(arr()); // []
console.log(arr(4)); // [0, 1, 2, 3]

// Filling an array
