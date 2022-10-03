function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value + value;
    case "-":
      result = value - value;
    case "/":
      result = value.a / value.b;
    case "*":
      result = value.a * value.b;
    case "%":
      result = value.a % value.b;
    case "^":
      result = Math.pow(value.a, value.b);
  }
  return result;
}
Test.assertEquals(evalObject({ a: 1, b: 1, operation: "+" }));
