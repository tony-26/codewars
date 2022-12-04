function nbYear(p0, percent, aug, p) {
  let year = 1;
  let population = false;
  if (p0 >= p) {
    return 0;
  }
  while (!population) {
    if (p0 + (p0 * percent) / 100 + aug > p) {
      //console.log(p0 + p0 * percent + aug);
      population = true;
      return year;
    } else {
      p0 = p0 + (p0 * percent) / 100 + aug;
      year += 1;
    }
  }
}
console.log(nbYear(1500, 5, 100, 5000), 15);
// console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
// console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
