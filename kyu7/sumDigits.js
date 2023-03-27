const sumDigits = (number) => {
  const digits = Math.abs(number).toString().split("");
  return digits.reduce((pre, curr) => {
    pre + Number(curr);
  }, 0);
};
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
