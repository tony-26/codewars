const amIWilson = (p) => {
  let product = 1;
  for (i = p - 1; i >= 1; i--) {
    product = product * i;
  }
  if ((product + 1) % (p * p) === 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(amIWilson(5)); // true
// console.log(amIWilson(9)); // false
console.log(amIWilson(563)); // true
// wilson prime
