function pigIt(str) {
  const newWords = [];
  let arr = str.split(" ");
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "!" || arr[i] === "?") {
      newWords.push(arr[i]);
    } else {
      let letters = arr[i].split("");
      const firstLetter = letters.shift();
      letters.push(firstLetter, "ay");
      newWords.push(letters.join(""));
    }
  }
  return newWords.join(" ");
}
// console.log(pigIt("Pig latin is cool") === "igPay atinlay siay oolcay");
// console.log(pigIt("This is my string") === "hisTay siay ymay tringsay");
console.log(pigIt("This is my string !") === "hisTay siay ymay tringsay !");
