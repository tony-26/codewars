function longest(s1, s2) {
  const str = s1 + s2;
  let arr = str.split("");
  const newStr = arr
    .filter((item, index) => arr.indexOf(item) === index)
    .join("");
  return newStr;
}
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(
  longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
  "abcdefghilnoprstu"
);
