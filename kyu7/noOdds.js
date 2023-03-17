function noOdds(values) {
  let result = [];
  values.map((e) => {
    if (e % 2 === 0) {
      result.push(e);
    }
  });
  return result;
}
console.log(noOdds([0, 1]), [0]);
console.log(noOdds([0, 1, 2, 3]), [0, 2]);
