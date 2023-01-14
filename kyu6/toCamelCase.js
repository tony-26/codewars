const splitBy = (str) => {
  let splitArr = [];
  str.split("_").forEach((e) => {
    splitArr.push(...e.split("-"));
  });

  return splitArr;
};
//console.log(splitBy("hello_Tony-hi-good")); //["hello", "Tony", "hi", "good"]

function toCamelCase(str) {
  if (str.length === 0) {
    return "";
  } else {
    let arr = splitBy(str);
    for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join("");
  }
}
console.log(toCamelCase(""), "");
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
