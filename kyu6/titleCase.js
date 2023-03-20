function titleCase(title, minorWords) {
  // if (title.length === 0) {
  //   return "";
  // }
  let splitWord = title.split(" ");
  console.log(splitWord);
  for (let i = 0; i < splitWord.length; i++) {
    console.log(i);
    splitWord[i][0] = splitWord[i][0].toUpperCase();
  }
  return splitWord;
}
// console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of")); //"A Clash of Kings"
// console.log(
//   titleCase("THE WIND IN THE WILLOWS", "The In"),
//   "The Wind in the Willows"
// );
// console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
