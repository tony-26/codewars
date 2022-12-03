function isIsogram(str) {
  const sortedChars = str.toLowerCase().split("").sort();
  for (i = 0; i < sortedChars.length; i++) {
    if (sortedChars[i] === sortedChars[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
//
