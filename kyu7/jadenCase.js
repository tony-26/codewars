String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("how are you".toJadenCase() === "How Are You");

// String.prototype.toJadenCase = function () {
//     const words = this.split(" ");
//     const capitalise = words.map((word) => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });

//     return capitalise.join(" ");
//   };
