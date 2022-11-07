const sum = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  } else {
    numbers.reduce((prevReturnedValue, currentNum) => {
      return currentNum + prevReturnedValue;
    });
  }
};
console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
// const sum = (numbers) => {
//   let SUM = 0;
//   for (i = 0; i < numbers.length; i++) {
//     SUM = SUM + numbers[i];
//   }
//   return SUM;
// }; //Sum array
