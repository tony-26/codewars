const boolToWord = (bool) => {
  let result = "";
  if (bool === true) {
    result = "Yes";
  } else {
    result = "No";
  }
  return result;
};
console.log(boolToWord(true)); // Yes
