const sortArray = (arr) => {
  let indexArr = [];
  //console.log("executed");
  let currOddNum, currOddIndex, nextOddNum, nextOddIndex;
  const originalArry = [...arr];
  for (let i = 0; i < originalArry.length; i++) {
    if (originalArry[i] % 2 !== 0) {
      indexArr.push(i);
    }
  }
  for (let i = 0; i < indexArr.length; i++) {
    if (originalArry[indexArr[i]] > originalArry[indexArr[i + 1]]) {
      currOddNum = originalArry[indexArr[i + 1]];
      nextOddNum = originalArry[indexArr[i]];
      originalArry[indexArr[i]] = currOddNum;
      originalArry[indexArr[i + 1]] = nextOddNum;
    }
  }
  return originalArry;
};

console.log(sortArray([5, 6, 1, 2, 3])); //[1, 6, 3, 2, 5]
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);

//console.log(sortArray([5, 6, 1, 2, 3])); // [3,2,1,4,5]
