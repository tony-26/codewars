function singleStrConvert(str) {
  let result = [];
  let letters = str.split("");
  for (let i = 0; i < str.length; i++) {
    letters[i] = letters[i].toUpperCase();
    result.push(letters.join(""));
    letters[i] = letters[i].toLowerCase();
  }
  return result;
}
//console.log(singleStrConvert("hello")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]
["h", "e", "l", "l", "o"];
const wave = (str) => {
  let separet = str.split(" ");
  let result = [];
  for (let i = 0; i < separet.length; i++) {
    result.push(singleStrConvert(separet[i]));
  }
  return result;
};
console.log(wave("two words")); //["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
