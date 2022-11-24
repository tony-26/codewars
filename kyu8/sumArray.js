const sumArray = (array) => {
  let sum = 0;
  if (array.length <= 2) {
    return 0;
  } else {
    array.sort(function (a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    array.shift();
    array.pop();
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum;
  }
};
console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([3]), 0);
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([0, 1, 6, 10, 10]), 17);
console.log(sumArray([-6, -20, -1, -10, -12]), -28);
console.log(sumArray([-6, 20, -1, 10, -12]), 3);
