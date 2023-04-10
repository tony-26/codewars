const rgb = (r, g, b) => {
  if (r <= 0 && g <= 0 && b <= 0) {
    return "000000";
  }
  let arr = [r, g, b];
  let hexV = "";
  const hex = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  for (let i = 0; i < arr.length; i++) {
    let firstDigitR = Math.floor(arr[i] / 16);
    let remainingR = arr[i] - firstDigitR * 16;
    //console.log(remainingR);
    if (firstDigitR >= 10) {
      firstDigitR = hex[firstDigitR];
    }
    if (remainingR > 10) {
      remainingR = hex[remainingR];
    }
    hexV = hexV + firstDigitR.toString() + remainingR.toString();
  }

  return hexV;
};
// console.log(rgb(0, 0, 0), "000000");
// console.log(rgb(0, 0, -20), "000000");
//console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47)); //"ADFF2F"

// console.log(Math.floor(100 / 3));
