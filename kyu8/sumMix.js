function sumMix(x) {
  const reduceFunction = (prevReturnedValue, currentNum) => {
    console.log({ prevReturnedValue, currentNum });
    const currentReturn = prevReturnedValue * Number(currentNum);
    console.log({ currentReturn });
    return currentReturn;
  };
  return x.reduce(reduceFunction, 1);

  //   for (let i = 0; i < x.length; i++) {
  //     sum = sum + Number(x[i]);
  //   }
  //   return sum;
}
console.log(sumMix([9, 3, "7", "3"]), 22);
// console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
// console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
//how to use reduce
