function duplicateEncode(word) {
  let characters = word.toLowerCase().split("");
  let uniques = [];
  let indexOfUniques = [];
  let result = [];

  for (let i = 0; i < word.length; i++) {
    if (uniques.includes(characters[i])) {
      result.push(")");
      for (let j = 0; j < indexOfUniques.length; j++) {
        const firstOccurance = characters[indexOfUniques[j]];

        if (firstOccurance === characters[i]) {
          result[indexOfUniques[j]] = ")";
        }
      }
    } else {
      result.push("(");
      uniques.push(characters[i]);
      indexOfUniques.push(i);
    }
    // console.log({
    //   element: characters[i],
    //   i,
    //   uniques,
    //   indexOfUniques,
    //   result,
    // });
  }

  return result.join("");
}

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }

console.log(duplicateEncode("din") === "(((");
console.log(duplicateEncode("recede") === "()()()");
console.log(duplicateEncode("Success") === ")())())");
console.log(duplicateEncode("(( @") === "))((");
