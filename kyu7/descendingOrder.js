const descendingOrder = (n) => {
  let str = "";
  let arr = [];
  for (let i = 0; i < n.toString().length; i++) {
    arr.push(Number(n.toString().split("")[i]));
  }
  arr.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });
  for (let i = 0; i < arr.length; i++) {
    str = str + arr[i];
  }
  return Number(str);
};
console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);

// let numbers = [0, 1, 2, 3, 10, 20, 30];
// numbers.sort(function (a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// });

// console.log(numbers);
