function count(string) {
  if (string.length === 0) {
    return {};
  }
  let obj = {};
  let arr = string.split("");
  arr.forEach((e) => {
    if (obj[e] === undefined) {
      obj[e] = 1;
    } else {
      obj[e] += 1;
    }
  });
  return obj;
}
console.log(count("aba"), { a: 2, b: 1 });
//console.log(count(""), {});
