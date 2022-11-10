const betterThanAverage = (classPoints, yourPoints) => {
  let average = 0;
  let sum = 0;
  for (i = 0; i < classPoints.length; i++) {
    sum = sum + classPoints[i];
  }
  average = sum / classPoints.length;
  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
};
