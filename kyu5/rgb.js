const rgb = (r, g, b) => {
  let hexR = "";
  const hex = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };

  let firstDigitR = Math.floor(r / 16);
  let remainingR = r - firstDigitR * 16;
  console.log(remainingR);
  if (firstDigitR > 10) {
    firstDigitR = hex[firstDigitR];
  }
  if (remainingR > 10) {
    remainingR = hex[remainingR];
  }
  console.log([firstDigitR, remainingR]);
  // hexR = firstDigitR.toString() + remainingR.toString();
  return hexR;
};
// console.log(rgb(0, 0, 0), "000000");
// console.log(rgb(0, 0, -20), "000000");
//console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");

// console.log(Math.floor(100 / 3));
