const snail = (array) => {
  let result = [];
  result = result.concat(array[0]);
  for (let i = 1; i < array.length - 1; i++) {
    result.push([...array[i]].reverse()[0]);
  }
  result = result.concat([...array[array.length - 1]].reverse());

  //   result.push(array[array.length - 1].reverse());
  for (let i = array.length - 2; i > 0; i--) {
    //console.log(array[i]);
    result.push(array[i][0]);
  }
  //console.log(array);
  return result;
};
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log(arr1.shift());
console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  snail([
    [1, 2, 3, 4],
    [4, 5, 6, 8],
    [7, 8, 9, 10],
    [11, 12, 13, 14],
  ])
);

//[1, 2, 3, 6, 9, 8, 7, 4, 5]
// console.log(
//   snail([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//   ]),
//   [
//     1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19,
//     18, 17, 12, 13,
//   ]
// );
