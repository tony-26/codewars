var number = function (array) {
  if (array.length === 0) {
    return [];
  }
  let result = [];
  let processing = "";
  for (let i = 0; i < array.length; i++) {
    processing = (i + 1).toString() + ": " + array[i];
    result.push(processing);
  }
  return result;
};
console.log(number([]), []);
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]);
