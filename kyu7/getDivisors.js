const getDivisorsCnt = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count;
};
console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
