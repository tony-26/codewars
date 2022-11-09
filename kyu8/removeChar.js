const removeChar = (str) => {
  let newStr = "";
  newStr = str.slice(0, str.length - 1).slice(1);
  return newStr;
};
console.log(removeChar("eloquent"), "loquen");
// console.log(removeChar("country"), "ountr");
// console.log(removeChar("person"), "erso");
// console.log(removeChar("place"), "lac");
// console.log(removeChar("ooopsss"), "oopss");
