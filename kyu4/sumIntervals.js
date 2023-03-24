const sumIntervals = (intervals) => {};
console.log(
  sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15],
  ])
); //9
const refactorIntervals = (intervals) => {
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    let current = intervals[i];
    if (current[0] > result[result.length - 1][1] || result.length === 0) {
      result.push(current);
    } else {
      result[result.length - 1][1] = Math.max(
        result[result.length - 1][1],
        current[1]
      );
    }
  }
  return result;
};
console.log(
  refactorIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); // [[1, 5], [7, 10]]
