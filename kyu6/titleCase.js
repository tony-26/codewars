function titleCase(title, minorWords) {
  if (title.length === 0) {
    return "";
  }
  let resultArr = [];
  let splitWord = title.split(" ");

  for (let i = 0; i < splitWord.length; i++) {
    resultArr.push(
      splitWord[i][0].toUpperCase() + splitWord[i].slice(1).toLowerCase()
    );
  }
  if (minorWords) {
    for (let i = 1; i < resultArr.length; i++) {
      if (
        minorWords.toLowerCase().split(" ").includes(resultArr[i].toLowerCase())
      ) {
        resultArr[i] = resultArr[i].toLowerCase();
      }
    }
  }
  return resultArr.join(" ");
}

//console.log(titleCase("a clash of KINGS", "a an the of")); //"A Clash of Kings"

console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
// console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
