function twoSort(s) {
  s.sort();
  const first = s[0];
  return first.split("").join("***");
}
assert.strictEqual(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]),
  "b***i***t***c***o***i***n"
);
assert.strictEqual(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ]),
  "a***r***e"
);
