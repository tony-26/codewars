var greet = function (name) {
  let result = "Hello " + name.charAt(0).toUpperCase();
  for (let i = 1; i < name.length; i++) {
    result += name[i].toLowerCase();
  }
  return result + "!";
};
console.log(greet("riley"), "Hello Riley!");
