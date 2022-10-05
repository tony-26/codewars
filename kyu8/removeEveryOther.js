const removeEveryOther = (arr) => {
  for (i = 0; i < arr.length; i++) {
    arr.splice(i + 1, 1);
  }
  return arr;
};
console.log(removeEveryOther([1, 2, 3, 4, 5])); // [1, 3, 5]
