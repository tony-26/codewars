function evalObject(value) {
  var result = 0;
  if (value.operation === "+") {
    result = value.a + value.b;
  }
  if (value.operation === "-") {
    result = value.a - value.b;
  }
  if (value.operation === "/") {
    result = value.a / value.b;
  }
  if (value.operation === "*") {
    result = value.a * value.b;
  }
  if (value.operation === "%") {
    result = value.a % value.b;
  }
  if (value.operation === "^") {
    result = Math.pow(value.a, value.b);
  }
  return result;
}
console.log(evalObject({ a: 1, b: 1, operation: "+" }));
// Switch/Case
