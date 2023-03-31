const multiTable = (number) => {
  let result = "";
  for (let i = 1; i <= 10; i++) {
    let p = i * number;
    result = result + i + " * " + number + " = " + p + "\n";
  }
  return result.slice(0, -1);
};
