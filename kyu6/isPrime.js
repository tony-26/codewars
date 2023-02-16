function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(0), false);
console.log(isPrime(1), false);
console.log(isPrime(2), true);
console.log(isPrime(73), true);
console.log(isPrime(75), false);
console.log(isPrime(-1), false);
