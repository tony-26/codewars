function cantBeatSoJoin(numbers) {
  numbers.sort(
    (a, b) =>
      b.reduce((acc, val) => acc + val, 0) -
      a.reduce((acc, val) => acc + val, 0)
  );

  return numbers.flat();
}
