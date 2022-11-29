function expandedForm(num) {
  for (i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      return num[i] * (num.length - 1);
    }
  }
}

console.log(expandedForm(12), "10 + 2");
// console.log(expandedForm(42), "40 + 2");
// console.log(expandedForm(70304), "70000 + 300 + 4");
