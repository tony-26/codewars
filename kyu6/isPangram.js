function isPangram(string) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let lowerCase = string.toLowerCase();
  for (let i = 0; i < letters.length; i++) {
    if (lowerCase.includes(letters[i])) {
      letters.replace(letters[i], "");
    }
  }
  if (letters.length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); //true
console.log(isPangram("This is not a pangram.")); //false
