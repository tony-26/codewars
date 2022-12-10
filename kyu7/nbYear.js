function nbYear(p0, percent, aug, p) {
  let year = 0;
  let currP = p0;
  while (true) {
    if (currP >= p) {
      return year;
    }
    currP = Math.floor(currP + (currP * percent) / 100 + aug);
    year += 1;
  }
}
// console.log(nbYear(1500, 5, 100, 5000), 15);
// console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
// console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
// console.log(nbYear(1500000, 0, 10000, 2000000)); //50
console.log(nbYear(1000, 2, 50, 1214)); //4
