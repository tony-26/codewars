var capitals = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};
console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
