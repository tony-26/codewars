const sortArray = (arr) => {
  let indexArr = [];
  let currOddNum, currOddIndex, nextOddNum, nextOddIndex;
  const arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] % 2 !== 0) {
      indexArr.push(i);
    }
  }
  for (let i = 0; i < indexArr.length; i++) {
    if (arrCopy[indexArr[i]] > arrCopy[indexArr[i + 1]]) {
      currOddNum = arrCopy[indexArr[i + 1]];
      nextOddNum = arrCopy[indexArr[i]];
      arrCopy[indexArr[i]] = currOddNum;
      arrCopy[indexArr[i + 1]] = nextOddNum;
    }
  }
  if (arrCopy.join("-") === arr.join("-")) {
    return arrCopy;
  } else {
    return sortArray(arrCopy);
  }
};

console.log(sortArray([5, 6, 1, 2, 3])); //[1, 6, 3, 2, 5]
console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]

//console.log(sortArray([5, 6, 1, 2, 3])); // [3,2,1,4,5]
