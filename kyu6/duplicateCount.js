const duplicateCount = (text) => {
  let count = 0;
  let current = text[0].toUpperCase();
  for (let i = 0; i < text.length - 1; i++) {
    //console.log({ i });
    if (current === text[i + 1].toUpperCase()) {
      count += 1;
    } else {
      current = text[i + 1].toUpperCase();
    }
  }
  return count;
};
console.log(duplicateCount("aabb"), 1);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2, "should ignore case");
// console.log(duplicateCount("Indivisibility"), 1);
// console.log(
//   duplicateCount("Indivisibilities"),
//   2,
//   "characters may not be adjacent"
// );
