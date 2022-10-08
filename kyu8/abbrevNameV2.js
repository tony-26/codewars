const abbrevNameV2 = (str) =>
  str
    .split(" ")
    .map((e) => e[0])
    .join(".");

console.log(abbrevNameV2("Tony Haonan Wang")); // T.H.W
// const mappedArr = [3, 4, 5].map((e) => {
//   return e * e;
// });
// console.log(mappedArr);
