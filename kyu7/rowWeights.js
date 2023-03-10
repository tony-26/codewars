function rowWeights(array) {
  let team1Weight = 0;
  let team2Weight = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1Weight += array[i];
    } else {
      team2Weight += array[i];
    }
  }

  return [team1Weight, team2Weight];
}
