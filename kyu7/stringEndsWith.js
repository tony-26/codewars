const solution = (str, ending) => {
  let output = "";
  if (ending === str.substring(str.length - ending.length, str.length)) {
    return true;
  } else {
    return false;
  }
};
console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "abc"), false);
//String ends with?
// var str = "amangupta";
// var x = str.substring(str.length - 7, str.length);
// console.log(x);
