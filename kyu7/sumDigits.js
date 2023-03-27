const sumDigits = (number) => {
  const digits = Math.abs(number).toString().split("");
  const sum = digits.reduce((accumulator, currentNum) => {
    return accumulator + Number(currentNum);
  }, 0);
  return sum;
};
console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
