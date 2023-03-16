const solve = (s) => {
  let upperCount = 0;
  let lowerCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      upperCount += 1;
    } else {
      lowerCount += 1;
    }
  }
  if (upperCount === lowerCount || upperCount < lowerCount) {
    s = s.toLowerCase();
  }
  if (lowerCount < upperCount) {
    s = s.toUpperCase();
  }
  return s;
};
console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
