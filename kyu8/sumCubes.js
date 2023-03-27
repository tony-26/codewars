const sumCubes = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + Math.pow(i, 3);
  }
  return sum;
};
console.log(sumCubes(4)); //100
