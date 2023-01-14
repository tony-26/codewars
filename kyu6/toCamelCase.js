function toCamelCase(str) {
  if (str.length === 0) {
    return "";
  } else if (str.includes("-")) {
    let arr = str.split("-");
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
  } else if (str.includes("_")) {
    let arr = str.split("_");
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
  }
}
console.log(
  toCamelCase(""),
  "",
  "An empty string was provided but not returned"
);
console.log(
  toCamelCase("the_stealth_warrior"),
  "theStealthWarrior",
  "toCamelCase('the_stealth_warrior') did not return correct value"
);
console.log(
  toCamelCase("The-Stealth-Warrior"),
  "TheStealthWarrior",
  "toCamelCase('The-Stealth-Warrior') did not return correct value"
);
console.log(
  toCamelCase("A-B-C"),
  "ABC",
  "toCamelCase('A-B-C') did not return correct value"
);
