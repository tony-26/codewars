const rgb = (r, g, b) => {
  let hexR = "";
  const hex = { 11: "A", 12: "B", 13: "C", 14: "D", 15: "E", 16: "F" };
  while (r > 0) {
    let firstDigitR = Math.floor(r / 16);
    let remainingR = r - firstDigitR;
    if (firstDigitR > 10) {
      firstDigitR = hex[firstDigitR];
    }
    if (remainingR > 10) {
      remainingR = hex[remainingR];
    }
    hexR = firstDigitR.toString() + remainingR.toString();
  }
  
};
console.log(Math.floor(100 / 3));
