function correct(string) {
  let finalStr = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "5") {
      finalStr = finalStr + "S";
    } else if (string[i] === "0") {
      finalStr = finalStr + "O";
    } else if (string[i] === "1") {
      finalStr = finalStr + "I";
    } else {
      finalStr = finalStr + string[i];
    }
  }
  return finalStr;
}
