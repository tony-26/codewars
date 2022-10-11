const sameCase = (a, b) => {
  let result = 0;
  if (
    (a.toUpperCase() === a && b.toUpperCase() === b) ||
    (a.toLowerCase() === a && b.toLowerCase() === b)
  ) {
    result = 1;
  } else if (/[A-Za-z]/.test(a) === true && /[A-Za-z]/.test(b) === true) {
    result = 0;
  } else {
    result = -1;
  }
  return result;
};
console.log(sameCase(" ", "Z")); // -1
// check same case
