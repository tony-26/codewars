function expandedForm(num) {
  let str = num.toString(); //"12"
  let newStr = "";
  let finalStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      newStr = str[i] + "0".repeat(str.length - i - 1);
      finalStr = finalStr + " + " + newStr;
    }
    //console.log(str[i], newStr);
  }
  return finalStr;
}

//console.log(expandedForm(12)); //"10 + 2"
//console.log(expandedForm(42), "40 + 2");
console.log(expandedForm(70304), "70000 + 300 + 4");
