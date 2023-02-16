const outerSnail = (array) => {
  if (array.length === 1) {
    return [...array[0]];
  }
  let result = [];
  result = result.concat(array[0]);
  for (let i = 1; i < array.length - 1; i++) {
    result.push([...array[i]].reverse()[0]);
  }
  result = result.concat([...array[array.length - 1]].reverse());
  for (let i = array.length - 2; i > 0; i--) {
    result.push(array[i][0]);
  }

  return result;
};
//console.log(outerSnail([[5]]));
const removeOuterRing = (array) => {
  array.pop();
  array.shift();
  for (let i = 0; i < array.length; i++) {
    array[i].shift();
    array[i].pop();
  }
  return array;
};
//console.log(removeOuterRing([[5]]));
const snail = (array, result = []) => {
  if (array.length === 0) return result;
  const outerResult = outerSnail(array);
  result = result.concat(outerResult);
  removeOuterRing(array);
  return snail(array, result);
};

// const rotate = (array, result = []) => {
//   result = result.concat(array[0]);
//   result.pop();

//   for (let i = 0; i < array.length; i++) {
//     result.push([...array[i]][array.length - 1]);
//   }
//   result = result.concat(array[array.length - 1]);
//   result.shift();
//   for (let i = array.length - 1; i > 0; i--) {
//     console.log(result);
//     result.push([...array[i]][0]);
//   }
//   return result;
// };
const rotateAntiClockwise = (array) => {
  let result = [];
  for (let i = 0; i < array[0].length; i++) {
    result.push([]);
  }
  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < array.length; i++) {
      result[j].push(array[i].pop());
    }
  }

  return result;
};
// console.log(
//   rotateAntiClockwise([
//     [1, 2, 3],
//     [4, 5, 6],
//   ])
// ); // [[3, 6], [2, 5], [1, 4]]
// // [[3, 6], [2, 5], []]
// console.log(
//   rotateAntiClockwise([
//     [1, 2, 3, 4],
//     [4, 5, 6, 7],
//   ])
// ); // [[4, 7], [3, 6], [2, 5], [1, 4]]
// [[4, 7], [3, 6], [], []]
console.log(
  rotateAntiClockwise(
    rotateAntiClockwise(
      rotateAntiClockwise(
        rotateAntiClockwise([
          [1, 2, 3, 4, 5],
          [4, 5, 6, 7, 8],
          [10, 11, 12, 13, 14],
        ])
      )
    )
  )
);

// console.log(
//   snail([
//     [1, 2, 3, 10],
//     [4, 5, 6, 11],
//     [7, 8, 9, 12],
//     [13, 14, 15, 16],
//   ])
// );
// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
// console.log(
//   snail([
//     [1, 2, 3, 4],
//     [4, 5, 6, 8],
//     [7, 8, 9, 10],
//     [11, 12, 13, 14],
//   ])
// );

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
