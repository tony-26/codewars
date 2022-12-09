String.prototype.isUpperCase = function () {
  console.log(this);
};
console.log("c".isUpperCase(), false, "c is not upper case");
console.log("C".isUpperCase(), true, "C is upper case");
console.log(
  "hello I AM DONALD".isUpperCase(),
  false,
  "hello I AM DONALD not is upper case"
);
console.log(
  "HELLO I AM DONALD".isUpperCase(),
  true,
  "HELLO I AM DONALD is upper case"
);
