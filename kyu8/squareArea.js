let area = 0;
const squareArea = (A) => {
  area = (area + (4 * A * A) / (Math.PI * Math.PI)).toFixed(2);
  return area;
};
console.log(squareArea(4)); //6.48
// console.log(squareArea(2));
