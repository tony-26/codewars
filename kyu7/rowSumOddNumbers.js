const rowSumOddNumbers = (n) => {
  if (n === 1) {
    return 1;
  }
  let firstDigit = (n - 1) * n + 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += firstDigit;
    firstDigit += 2;
    // console.log(firstDigit, sum);
  }
  return sum;
};
console.log(rowSumOddNumbers(42)); //74088
