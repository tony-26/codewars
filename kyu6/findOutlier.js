const findOutlier = (integers) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      even += 1;
    } else if (integers[i] % 2 !== 0) {
      odd += 1;
    }
  }
  //console.log(even, odd);
  let numType = even > 1 ? "odd" : "even";
  for (let i = 0; i < integers.length; i++) {
    if (numType === "odd" && integers[i] % 2 === 1) {
      return integers[i];
    }
    if (numType === "even" && integers[i] % 2 !== 1) {
      return integers[i];
    }
  }
};
console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
