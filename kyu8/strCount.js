const strCount = (str, letter) => {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (letter === str[i]) {
      count = count + 1;
    }
  }
  return count;
};
console.log(strCount("Hello", "o")); // 1
