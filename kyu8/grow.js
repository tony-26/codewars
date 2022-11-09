const grow = (x) => {
  let product = 1;
  for (i = 0; i < x.length; i++) {
    product = product * x[i];
  }
  return product;
};
console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);
