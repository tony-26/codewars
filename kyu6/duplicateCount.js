const duplicateCount = (text) => {
  let dup = 0;
  const counts = {};
  for (let i = 0; i < text.length; i++) {
    const key = text[i].toLowerCase();
    if (counts[key] >= 1) {
      counts[key] += 1;
    } else {
      counts[key] = 1;
    }
    //console.log(counts);
  }
  const countsArray = Object.values(counts);
  for (let i = 0; i < countsArray.length; i++) {
    if (countsArray[i] > 1) {
      dup += 1;
    }
  }
  return dup;
};
console.log(duplicateCount("abab23"), 1);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
