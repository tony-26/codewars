const stray = (numbers) => {
  let check = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (check !== numbers[i]) {
      return numbers[i];
    } else {
      check = numbers[i];
    }
  }
};
console.log(stray([1, 1, 2])); //2
