const reverseWords = (str) => {
  let newStr = "";
  const len = str.split(" ").length;

  for (let i = 0; i < len - 1; i++) {
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
