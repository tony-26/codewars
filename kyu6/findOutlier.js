const findOutlier = (integers) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even += 1;
    } else if (integers[i] % 2 !== 0) {
      odd += 1;
    }
  }
};
