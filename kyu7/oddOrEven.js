function oddOrEven(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
