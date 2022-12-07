function remove(string) {
  if (string[string.length - 1] === "!") {
    let newStr = string.slice(0, string.length - 1);
    return newStr;
  } else {
    return string;
  }
}
console.log(remove("Hi!"), "Hi");
console.logremove("Hi!!!", "Hi!!");
