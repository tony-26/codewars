const findMultiples = (integer, limit) => {
  let arr = [];
  for (i = 1; i <= limit / integer; i++) {
    arr.push(integer * i);
  }
  return arr;
};
console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
