function count(string) {
  if (string.length === 0) {
    return {};
  } else {
    for (let i = 0; i < string.length; i++) {}
  }
}
console.log(count("aba"), { a: 2, b: 1 });
//console.log(count(""), {});
