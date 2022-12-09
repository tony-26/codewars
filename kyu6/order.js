function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      let num1, num2;
      for (let i = 0; i < a.length; i++) {
        if (a[i].match(/^\d+$/)) {
          num1 = Number(a[i]);
        }
      }
      for (let i = 0; i < b.length; i++) {
        if (b[i].match(/^\d+$/)) {
          num2 = Number(b[i]);
        }
      }
      return num1 - num2;
    })
    .join(" ");
}
console.log(order("is2 Thi1s T4est 3a")); //"Thi1s is2 3a T4est"
console.log(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "Fo1r the2 g3ood 4of th5e pe6ople"
);
console.log(order(""), "", "empty input should return empty string");
