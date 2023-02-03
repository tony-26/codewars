function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
}
console.log(findNeedle(haystack_1), "found the needle at position 3");
console.log(findNeedle(haystack_2), "found the needle at position 5");
console.log(findNeedle(haystack_3), "found the needle at position 30");
