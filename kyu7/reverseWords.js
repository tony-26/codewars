const reverseWords = (str) => {
  let newStr = 0;
  for (let i = 0; i < str.split(" ").length - 1; i++) {
    console.log(str.split(" ").length);
    newStr = newStr + str[i].split("").reverse();
  }
  return newStr;
  // return str.split("").reverse().join("");
};
// console.log(reverseWords("apple"), "elppa");
console.log(
  reverseWords("The quick brown fox jumps over the lazy dog."),
  "ehT kciuq nworb xof spmuj revo eht yzal .god"
);
//Reverse words
