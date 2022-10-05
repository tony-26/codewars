const points = (games) => {
  let score = 0;
  for (i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      score = score + 3;
    } else if (games[i][0] === games[i][2]) {
      score = score + 1;
    }
  }
  return score;
};
console.log(points(["1:0", "1:1"])); //4
