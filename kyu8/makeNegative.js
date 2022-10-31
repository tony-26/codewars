const makeNegative = (num) => {
  if (num < 0) {
    return num;
  }
  return 0 - num;
};
console.log(makeNegative(42) === -42);
