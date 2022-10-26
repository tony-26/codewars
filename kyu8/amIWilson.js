const amIWilson = (p) => {
  for (let i = 2; i <= p; i++) {
    if (p % i === 0) {
      return false;
    }
    return true;
  }
};
console.log(amIWilson(5)); // true
console.log(amIWilson(9)); // false
// wilson prime
