const isSquare = (n) => {
  if (Math.sqrt(n) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isSquare(-1), false);
console.log(isSquare(0), true);
console.log(isSquare(3), false);
