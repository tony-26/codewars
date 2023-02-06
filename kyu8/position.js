function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lower = letter.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (lower === alphabet[i]) {
      return "Position of alphabet: " + (i + 1).toString();
    }
  }
}
console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");
