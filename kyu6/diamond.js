function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let stars = "*".repeat();
  const top = [];

  for (let i = 1; i <= (n - 1) / 2; i++) {
    const stars = "*".repeat(2 * i - 1);
    const pluses = " ".repeat((n - 1) / 2 + 1 - i);
    top.push(pluses + stars + "\n");
  }
  const middleRow = "*".repeat(n) + "\n";
  const bottom = [...top].reverse();

  return top.join("") + middleRow + bottom.join("");
}
// console.log(diamond(1), "*\n");
// console.log(diamond(3), "+*\n***\n";
//console.log([diamond(5)]); //["++*\n", "+***\n", "*****\n"]
console.log(diamond(9)); //+++*\n++***\n+*****\n*******\n
//console.log([diamond(5)]); //["*****\n", "+***\n", "++*\n"];
