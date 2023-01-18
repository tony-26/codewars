//console.log("b".charCodeAt(0) - 96);
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
    score = 0;
  }
  if (scoreArr.length === 2 && scoreArr[0] === scoreArr[1]) {
    return arr[0];
  } else {
    let maxValue = scoreArr[0];
    let maxIndex = 0;
    for (let i = 1; i < scoreArr.length; i++) {
      if (scoreArr[i] > maxValue) {
        maxValue = scoreArr[i];
        maxIndex = i;
      }
    }
    return arr[maxIndex];
  }
}
console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");
console.log(high("aa b"), "aa");
console.log(high("b aa"), "b");
