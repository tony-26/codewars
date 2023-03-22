const remove = (string) => {
  let arr = string.split("").reverse();
  while (arr[0] === "!") {
    arr.shift();
  }
  return arr.reverse().join("");
};
console.log(remove("Hi!", "Hi"));
console.log(remove("Hi!!!", "Hi"));
console.log(remove("!Hi", "!Hi"));
console.log(remove("!Hi!", "!Hi"));
console.log(remove("Hi! Hi!", "Hi! Hi"));
console.log(remove("Hi", "Hi"));
