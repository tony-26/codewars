function reverseWords(str) {
  let arr = str.split(" ");
  return arr.reverse().join(" ");
}
console.log(
  reverseWords("yoda doesn't speak like this"),
  "this like speak doesn't yoda"
);
