function pigIt(str) {
  newStr = "";
  finalStr = "";
  let arr = str.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    newStr = arr[i].reverse() + "ay";
    finalStr = finalStr + newStr;
  }
  return finalStr;
}
console.log(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string"), "hisTay siay ymay tringsay");
