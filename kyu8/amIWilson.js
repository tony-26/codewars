// const amIWilson = (p) => {
//   // let product = 1;
//   // for (i = p - 1; i >= 1; i--) {
//   //   product = product * i;
//   // }
//   // if ((product + 1) % (p * p) === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }

// };
function isWilsonPrime(num) {
  if (num < 5) {
    return false;
  }
  let factorial = 1;
  for (let i = 2; i < num; i++) {
    factorial *= i;
  }
  return (factorial + 1) % (num * num) === 0;
}
// console.log(amIWilson(5)); // true
console.log(amIWilson(9)); // false
console.log(amIWilson(563));
console.log(amIWilson(20)); // false
// wilson prime
