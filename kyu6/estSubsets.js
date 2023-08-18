const estSubsets = (arr) => {
  let sumSets = 0;
  for (let i = arr.length; i > 0; i--) {
    sumSets += i;
  }
  sumSets += arr.length + 1;
  return sumSets;
};



console.log(estSubsets([1, 2, 3, 4], 15)); // 4 + 3 + 2 + 1 + 4 + 1
// 1

// console.log(estSubsets(["a", "b", "c", "d", "d"], 15));
// console.log(estSubsets([2, 3, 4, 5, 5, 6, 6, 7, 8, 8], 127));
// console.log(
//   estSubsets(
//     ["a", "z", "z", "z", "b", "j", "f", "k", "b", "d", "j", "j", "n", "m", "m"],
//     511
//   )
// );
// console.log(estSubsets([1, 1, 1, 1, 1, 1, 1, 1], 1));
// console.log(estSubsets([], 0));
