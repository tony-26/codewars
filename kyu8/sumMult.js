const sumMul = (n, m) => {
  if (m <= n) {
    return "INVALID";
  }

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
};

console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), "INVALID");
