const reverseWords = (str) => {
  let finalStr = "";
  let n = "";
  let newArr = [];

  newArr = str.split(" ");
  for (i = 0; i < newArr.length; i++) {
    n = newArr[i].split("").reverse().join("");
    finalStr = finalStr + n + " ";
  }
  finalStr = finalStr.slice(0, -1);
  return finalStr;
};
console.log(reverseWords("apple") === "elppa");
console.log(
  reverseWords("The quick brown fox jumps over the lazy dog.") ===
    "ehT kciuq nworb xof spmuj revo eht yzal .god"
);
//Reverse words
