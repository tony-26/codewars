const findAverage = (array) => {
  let sum = 0;
  let ave = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    ave = sum / array.length;
  }
  return ave;
};
console.log(findAverage([1, 2, 3])); //2
