const toCsvText = (array) => {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = result + array[i].join(",") + "\n";
  }
  return result.slice(0, -2);
};
console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);
