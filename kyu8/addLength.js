function addLength(str) {
  let splitStr = str.split(" ");
  let result = [];
  let countStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    countStr = splitStr[i] + " " + splitStr[i].length;
    result.push(countStr);
  }
  return result;
}
console.log(addLength("apple ban")); //["apple 5", "ban 3"]
