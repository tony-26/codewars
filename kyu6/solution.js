const solution = (number) => {
  let sum = 0;
  if (number < 0) {
    return 0;
  } else {
    for (i = 1; i < number / 3; i++) {
      sum = sum + 3 * i;
    }
    for (i = 1; i < number / 5; i++) {
      if (i % 3 !== 0) {
        sum = sum + 5 * i;
      }
    }
  }
  return sum;
};
console.log(solution(20)); // 78

// multiples of 3 or 5
