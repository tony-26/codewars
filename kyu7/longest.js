function longest(s1, s2) {
  let str = s1 + s2;
  let arr = str.split("");
  const newStr = arr
    .filter((item, index) => arr.indexOf(item) === index)
    .sort()
    .join("");
  return newStr;
}
console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(
  longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
  "abcdefghilnoprstu"
);
