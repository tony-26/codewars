const reverseSeq = (n) => {
  let arr = [];
  for (i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};
console.log((reverseSeq(5), [5, 4, 3, 2, 1]));
