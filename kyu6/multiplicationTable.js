multiplicationTable = function (size) {
  let multiTable = [];
  for (let i = 1; i <= size; i++) {
    let row1 = [];

    for (let j = 1; j <= size; j++) {
      let product = i * j;
      row1.push(product);
    }
    multiTable.push(row1);
  }
  return multiTable;
};
console.log(multiplicationTable(3)); //[[1, 2, 3], [2, 4, 6], [3, 6, 9]]
