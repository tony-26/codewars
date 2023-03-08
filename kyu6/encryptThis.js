const encryptWord = (word) => {
  let arrWord = word.split("");
  let firstChar = arrWord[0].charCodeAt(0);
  let oldSecondChar = arrWord[1];
  let oldLastChar = arrWord[arrWord.length - 1];
  arrWord[0] = firstChar;
  arrWord[1] = oldLastChar;
  arrWord[arrWord.length - 1] = oldSecondChar;
  return arrWord.join("");
};
console.log(encryptWord("Hello"), "72olle");

var encryptThis = function (text) {
  let result = [];
  let splitText = text.split(" ");
  for (let i = 0; i < splitText.length; i++) {
    let encryptedWord = encryptWord(splitText[i]);
    result.push(encryptedWord);
  }
  return result.join(" ");
};
