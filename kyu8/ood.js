const odds = (values) => {
  let result = [];
  values.filter((e) => {
    if (e % 2 !== 0) {
      result.push(e);
    }
  });
  return result;
};
console.log(odds([1, 3, 5]));
