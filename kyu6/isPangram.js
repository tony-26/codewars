function isPangram(string) {
  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  let lowerCase = string.toLowerCase().split("");
  for (let i = 0; i < letters.length; i++) {
    if (lowerCase.includes(letters[i])) {
      letters[i] = "";
    }
  }
  return letters.join("").length === 0;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram.")); //false
