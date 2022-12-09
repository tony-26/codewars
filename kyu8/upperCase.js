String.prototype.isUpperCase = function () {
  let str = this.toUpperCase();
  console.log(str);
  if (str === this) {
    return true;
  } else {
    return false;
  }
};
console.log("c".isUpperCase()); //false
console.log("C".isUpperCase()); //true
console.log("hello I AM DONALD".isUpperCase()); //false
