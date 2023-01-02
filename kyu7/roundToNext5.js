function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else if (n > 0) {
    return n + (n % 5);
  } else if (n < 0) {
    return 0;
  }
}
console.log(roundToNext5(1));
