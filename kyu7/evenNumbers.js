function evenNumbers(array, number) {
  let allEvenNum = [];
  array.map((e) => {
    if (e % 2 === 0) {
      allEvenNum.push(e);
    }
  });
  //console.log(allEvenNum);
  if (allEvenNum.length === number.length) {
    return allEvenNum;
  } else {
    for (let i = allEvenNum.length; i > number; i--) {
      allEvenNum.shift();
    }
  }
  return allEvenNum;
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(
  evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2),
  [-8, 26]
);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
