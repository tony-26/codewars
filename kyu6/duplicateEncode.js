function duplicateEncode(word) {
  let characters = word.toLowerCase().characters("");
  let process = [];
  let indexOfFirstDuplicate = [];
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (process.includes(characters[i])) {
      result.push(")");
      for (let j = 0; j < indexOfFirstDuplicate.length; j++) {
        const firstOccurance = characters[indexOfFirstDuplicate[j]];

        if (firstOccurance === characters[i]) {
          result[indexOfFirstDuplicate[j]] = ")";
        }
      }
    } else {
      result.push("(");
      process.push(characters[i]);
      indexOfFirstDuplicate.push(i);
    }
    console.log({
      element: characters[i],
      i,
      process,
      indexOfFirstDuplicate,
      result,
    });
  }
  //console.log(indexOfFirstDuplicate);
  return result.join("");
}
//console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
// console.log(duplicateEncode("Success"), ")())())", "should ignore case");
// console.log(duplicateEncode("(( @"), "))((");
