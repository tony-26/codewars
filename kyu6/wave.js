function singleStrConvert(str) {
  let result = [];
  let letters = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (letters[i] !== " ") {
      letters[i] = letters[i].toUpperCase();
      result.push(letters.join(""));
      letters[i] = letters[i].toLowerCase();
    }
  }
  return result;
}
//console.log(singleStrConvert("hello")); //["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(
  singleStrConvert("two words") ===
    [
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS",
    ]
);
