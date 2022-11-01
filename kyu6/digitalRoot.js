const digitalRoot = (n) => {
  let sum = 0;
  n.toString()
    .split("")
    .forEach((e) => {
      sum = sum + Number(e);
    });
  if (sum.toString().length != 1) {
    return digitalRoot(sum);
  } else {
    return sum;
  }
};

console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
//Sum of Digits / Digital Root
