const arrayPlusArray = (arr1, arr2) => {
  let sum = 0;
  arr3 = arr1.concat(arr2);
  for (i = 0; i < arr3.length; i++) {
    sum = sum + arr3[i];
  }
  return sum;
};
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
