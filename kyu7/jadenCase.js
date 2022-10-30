String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("how are you".toJadenCase() === "How Are You");
