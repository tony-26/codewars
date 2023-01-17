var uniqueInOrder = function (iterable) {
  let result = [];
  let previous = iterable[0];
  result.push(previous);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== previous) {
      result.push(iterable[i]);
    }
  }
  return result;
};
console.log(uniqueInOrder("AAAABBBCCDAABBB")); //["A", "B", "C", "D", "A", "B"]
console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"]
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3]
