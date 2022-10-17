const getMiddle = (s) => {
  let output = "";
  if (s.length % 2 === 0) {
    output = output + s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    output = s[(s.length + 1) / 2 - 1];
  }
  return output;
};
console.log(getMiddle("test")); // "es"
