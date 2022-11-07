// const sum = (numbers) => {
//   if (numbers.length === 0) {
//     return 0;
//   } else {
//     numbers.reduce((prevReturnedValue, currentNum) => {
//       return currentNum + prevReturnedValue;
//     });
//   }
// };
const sum = (numbers) => {
  let SUM = 0;
  for (i = 0; i < numbers.length; i++) {
    SUM = SUM + numbers[i];
  }
  return SUM;
}; //Sum array
