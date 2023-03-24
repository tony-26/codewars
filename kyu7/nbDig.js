function nbDig(n, d) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    const square = i * i;
    const digit = square.toString().split("");
    for (let j = 0; j < digit.length; j++) {
      if (digit[i] === d.toString()) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(nbDig(5750, 0), 4700);
console.log(nbDig(11011, 2), 9481);
console.log(nbDig(12224, 8), 7733);
console.log(nbDig(11549, 1), 11905);
