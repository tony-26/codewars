function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else if (n > 0 && n % 5 !== 0) {
    //console.log(n, n % 5);
    return n + 5 - (n % 5);
  } else if (n < 0) {
    return 0;
  }
}
console.log(roundToNext5(2));
