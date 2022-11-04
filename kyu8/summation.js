const summation = (num) => {
  let sum = 0;
  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(summation(1), 1);
console.log(summation(2), 3);
console.log(summation(8), 36);

//arrayPlusArray.reduce;
