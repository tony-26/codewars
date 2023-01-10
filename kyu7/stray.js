const stray = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i - 1]) {
      return numbers[i];
    }
  }
};
console.log(stray([1, 1, 2]), 2);
