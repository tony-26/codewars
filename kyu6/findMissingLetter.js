function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1].charCodeAt() - array[i].charCodeAt() > 1) {
      return array[i + 1];
    }
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");
