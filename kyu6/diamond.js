function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let symbol = "*";
  let finalStr = "";
  for (let i = 0; i < n; i++) {
    finalStr = finalStr + symbol;
    symbol = symbol + "\n";
    symbol.repeat("*", 2);
  }
  return finalStr;
}
// console.log(diamond(1), "*\n");
// console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
