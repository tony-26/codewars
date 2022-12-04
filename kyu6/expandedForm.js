function expandedForm(num) {
  let str;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      str = (str + num[i] * (num.length - i - 1)).toString() + " + ";
    }
  }
  return str;
}

console.log(expandedForm(12)); //"10 + 2"
// console.log(expandedForm(42), "40 + 2");
// console.log(expandedForm(70304), "70000 + 300 + 4");
