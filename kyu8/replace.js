function replace(s) {
  let str = "aeiouAEIOU";

  let returnStr = "";
  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      returnStr = returnStr + "!";
    } else {
      returnStr = returnStr + s[i];
    }
  }
  return returnStr;
}
console.log(replace("Hi!"), "H!!");
console.log(replace("!Hi! Hi!"), "!H!! H!!");
console.log(replace("aeiou"), "!!!!!");
console.log(replace("ABCDE"), "!BCD!");
