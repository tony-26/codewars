console.log("a".charCodeAt(0) - 96);
function high(x) {
  let score = 0;
  let scoreArr = [];
  let arr = x.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let wordSplit = arr[i].split("");
    for (let j = 0; j < wordSplit.length; j++) {
      score = score + (wordSplit[j].charCodeAt(0) - 96);
    }
    scoreArr.push(score);
  }
}
// console.log(high("man i need a taxi up to ubud"), "taxi");
// console.log(high("what time are we climbing up the volcano"), "volcano");
// console.log(high("take me to semynak"), "semynak");
// console.log(high("aa b"), "aa");
console.log(high("b aa"), "b");
