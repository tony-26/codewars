function twiceAsOld(dadYearsOld, sonYearsOld) {
  for (i = 0; i < dadYearsOld; i++) {
    if (dadYearsOld + i === (sonYearsOld + i) * 2) {
      return i;
    } else if (dadYearsOld - i === (sonYearsOld - i) * 2) {
      return i;
    }
  }
  return count;
}
console.log(twiceAsOld(36, 7));
