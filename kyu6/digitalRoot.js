const digitalRoot = (n) => {
  let sum = 0;
  for (i = 0; i < n.toString().length; i++) {
    //   console.log(n.toString()[i]);
    sum = sum + Number(n.toString()[i]);
  }
  if (sum.toString().length != 1) {
    return digitalRoot(sum);
  }
  return sum;
};

console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
//Sum of Digits / Digital Root
