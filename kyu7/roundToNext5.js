function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else {
    if (n < 5 && n > 0) {
      return 5;
    } else if (n < 0) {
      return 0;
    } else {
      return 5 - (n % 5) + n;
    }
  }
}
console.log(roundToNext5(1));
