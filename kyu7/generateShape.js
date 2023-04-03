function generateShape(integer) {
  let result = "";
  let c = "+".repeat(integer);
  for (let i = 0; i < integer; i++) {
    result = result + c + "\n";
  }
  return result.slice(0, -1);
}
console.log(generateShape(3)); //
