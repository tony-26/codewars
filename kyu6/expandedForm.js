function expandedForm(num) {
  let str = num.toString(); //"12"
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== 0) {
      newStr = newStr + str[i] * (str.length - i - 1);
    }
    console.log(str[i], newStr);
  }
  return newStr + " + " + str[str.length - 1];
}

//console.log(expandedForm(12)); //"10 + 2"
//console.log(expandedForm(42), "40 + 2");
console.log(expandedForm(70304), "70000 + 300 + 4");
