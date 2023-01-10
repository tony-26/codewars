function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    year += 1;
  }
  return year;
}
assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3);
assert.strictEqual(calculateYears(1000, 0.01625, 0.18, 1200), 14);
assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1000), 0);
