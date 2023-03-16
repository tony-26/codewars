function titleCase(title, minorWords) {
  if (title.length === 0) {
    return "";
  }
  let splitWord = title.split(" ");
  for (let i = 0; i < splitWord.length; i++) {
    splitWord[i][0] = splitWord[i][0].toUpperCase();
  }
  return splitWord.join(" ");
}
console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of")); //"A Clash of Kings"
// console.log(
//   titleCase("THE WIND IN THE WILLOWS", "The In"),
//   "The Wind in the Willows"
// );
// console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
