function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  if (n === 1) {
    return customers.reduce((a, b) => a + b, 0);
  }
  let time = 0;
  for (let i = 0; i < customers.length; i++) {
    while (customers[i] !== 0) {
      customers[i] - 1;
      time += 1;
    }
  }
}
console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(queueTime([5, 3, 4], 1), 12);
console.log(queueTime([10, 2, 3, 3], 2), 10);
console.log(queueTime([2, 3, 10, 2], 2), 12);
