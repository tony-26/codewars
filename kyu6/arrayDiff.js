// const arrayDiff = (a, b) => {
//   let newArr = [];
//   for (i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       newArr.push(a[i]);
//     }
//   }
//   return newArr;
// };

// const arrayDiff = (a, b) => {
// let newArr = [];
//   a.forEach((e) => {
//     if (!b.includes(e)) {
//       newArr.push(e);
//     }
//   });

//   return newArr;
// };

// const arrayDiff = (a, b) => {
//   return a.reduce((r, e) => {
//     if (!b.includes(e)) {
//       return r.concat(e);
//     } else {
//       return r;
//     }
//   }, []);
// };

const arrayDiff = (a, b) =>
  a.reduce((r, e) => (!b.includes(e) ? r.concat(e) : r), []);

// console.log(arrayDiff([1, 2], [1]), [2]);
// console.log(arrayDiff([1, 2, 2], [1]) === [2, 2]);
// console.log(arrayDiff([1, 2, 2], [2]) === [1]);
// console.log(arrayDiff([1, 2, 2], []) === [1, 2, 2]);
// console.log(arrayDiff([], [1, 2]) === []);
console.log(arrayDiff([1, 2, 2, 3, 3, 4], [1, 2]), [3, 3, 4]);
