const highAndLow = (numbers) => {
  let output = "";
  highestToLowest = numbers.split(" ").sort((a, b) => b - a);
  output =
    output +
    highestToLowest[0] +
    " " +
    highestToLowest[highestToLowest.length - 1];
  return output;
};
//highest and lowest

console.log(highAndLow("1 2 3"), "3 1");
