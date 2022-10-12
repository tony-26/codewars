const sameCase = (a, b) => {
  if (/[A-Za-z]/.test(a) !== true || /[A-Za-z]/.test(b) !== true) {
    return -1;
  }

  if (
    (a.toUpperCase() === a && b.toUpperCase() === b) ||
    (a.toLowerCase() === a && b.toLowerCase() === b)
  ) {
    return 1;
  }
  return 0;
};
console.log(sameCase("a", "U")); //0
console.log(sameCase(" ", "Z")); // -1
console.log(sameCase("a", "b")); //1
// check same case
