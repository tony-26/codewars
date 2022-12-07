const getRealFloor = (n) => {
  if (n === 0) {
    return 0;
  } else if (n >= 1 && n < 13) {
    return n - 1;
  } else if (n >= 13) {
    return n - 2;
  } else {
    return n;
  }
};
console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);
