function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq)) === true) {
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
  }
  return -1;
}
