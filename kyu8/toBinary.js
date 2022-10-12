const toBinary = (n) => {
  let binary = (n % 2).toString();
  for (; n > 1; ) {
    n = parseInt(n / 2);
    binary = (n % 2) + binary;
  }
  return binary;
};
console.log(toBinary(2585)); // 11
//Convert to Binary
