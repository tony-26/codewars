String.prototype.isUpperCase = function () {
  console.log(this);
  return this === this.toUpperCase();
};
console.log("c".isUpperCase()); //false
console.log("C".isUpperCase()); //true
console.log("hello I AM DONALD".isUpperCase()); //false
