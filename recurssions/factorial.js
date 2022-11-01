const fac = (n) => (n !== 1 ? n * fac(n - 1) : 1);

console.log(fac(3), 6);
console.log(fac(5), 120);
console.log(fac(12), 479001600);
