function duplicateEncode(word) {
  let split = word.toLowerCase().split("");
  let firstProcessed = [];
  let indexOfFirstDuplicate = [];
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (process.includes(split[i])) {
      result += ")";
    } else {
      result += "(";
    }
    process.push(split[i]);
  }
  return result;
}
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
// console.log(duplicateEncode("Success"), ")())())", "should ignore case");
// console.log(duplicateEncode("(( @"), "))((");
