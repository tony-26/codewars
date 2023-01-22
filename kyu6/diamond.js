function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let stars = "*".repeat()
  const results = [];
  for (let i = 1; i <= 3; i++) {
    const stars = "*".repeat(2 * i - 1);
    const pluses = "+".repeat(3 - i);
    results.push(pluses + stars + "\n");
  }
  for (let i = 3; i>=1;i--){
    
    const decreaseStars
  }
  return results.join("");
}
// console.log(diamond(1), "*\n");
// console.log(diamond(3), "+*\n***\n";
console.log([diamond(5)]); //[++*\n+***\n*****\n);
//console.log(diamond(7))//+++*\n++***\n+*****\n*******\n
