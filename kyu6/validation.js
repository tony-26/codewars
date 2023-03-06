const validation = (str) => {
  if (str.length < 6) {
    return false;
  }
  let caseCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
  return caseCheck.test(str);
};
console.log(validation("fjd3IR9", true));
console.log(validation("ghdfj32", false));
