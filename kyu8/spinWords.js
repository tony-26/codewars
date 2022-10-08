const spinWords = (string) => {
  return string
    .split(" ")
    .map((e) => (e.length >= 5 ? e.split("").reverse().join("") : e))
    .join(" ");
};
console.log(2 > 1 ? "Yes" : "No");
console.log(spinWords("abcdefsd asd")); // "dsfedcba asd"
console.log(spinWords("how are you doing")); // "dsfedcba asd"
