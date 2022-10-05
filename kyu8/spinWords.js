function spinWords(string) {
  let newString = "";
  let finalStr = "";
  let count = 0
  const newArr = string.split(" ");
  console.log(newArr);
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i].length >= 5) {
      newString += newArr[i];
      //   console.log(newString);
      newString = [...newString].reverse().join("");
      //   console.log(newString);
      
    }
    count += 1
    finalStr = 
  }
  return newString;
}

console.log(spinWords("abcdefsd asd"));
