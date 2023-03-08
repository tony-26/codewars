function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
  const sumOfSquares = ages.reduce((sum, age) => sum + age * age, 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  const predictedAge = Math.floor(squareRoot / 2);
  return predictedAge;
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
