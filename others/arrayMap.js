const double = [2, 5, 4, 7].map((e) => {
  if (e % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});
console.log(double, ["even", "odd", "even", "odd"]);
// const filter = [2, 5, 4, 7].filter((e) => {
//   if (e % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filter);
