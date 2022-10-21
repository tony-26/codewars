const solution = (number) => {
  let mul3 = [];
  let mul5 = [];
  let sum = 0;
  if (number < 0) {
    return 0;
  } else {
    for (i = 1; i < number / 3; i++) {
      console.log(i);
      //   mul3.push(3 * i);
      sum = sum + 3 * i;
    }
    for (i = 1; i < number / 5; i++) {
      //   mul5.push(5 * i);
      sum = sum + 5 * i;
    }
  }
  return sum;
};
console.log(solution(10)); // 23
console.log(solution(2801)); // 1831668

// multiples of 3 or 5
