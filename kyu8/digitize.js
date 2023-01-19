function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
assert.deepEqual(digitize(0), [0]);
