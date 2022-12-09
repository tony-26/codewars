const invert = (array) => {
  if (array.length === 0) {
    return array;
  } else {
    array.map((e) => {
      return "-" + e;
    });
  }
};
console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [-0]);
//invert values
