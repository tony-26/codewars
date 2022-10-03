const squareArea = (A) => {
  let area = 0;
  area = area + (4 * A * A) / (Math.PI * Math.PI);
  if (area % 1 != 0) {
    area = Number(area.toFixed(2));
  }

  return area;
};
console.log(squareArea(2)); //1.62
// console.log(squareArea(2));
