function incrementString(string) {
  let digit = 0;
  let newStr = string.slice(6);
  digit = Number(newStr) + 1;
  console.log(digit);
  //console.log(newStr);
}
console.log(incrementString("foobar000", "foobar001"));
// console.log("foobar999", "foobar1000");
// console.log("foobar00999", "foobar01000");
//console.log("foo", "foo1");
