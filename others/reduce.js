// const arr = [1, 2, 3];
// console.log(arr.reduce((a, b) => a + b));
const arr = [3, 4, 5, 6, 7, 8, 9];
console.log(
  arr.reduce((prevReturnedValue, currentNum) => {
    console.log(prevReturnedValue, currentNum);
    if (currentNum % 2 !== 0) {
      return currentNum + prevReturnedValue;
    } else {
      return prevReturnedValue;
    }
  }, 0)
);
