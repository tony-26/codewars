const bubbleSort = (arr) => {
  const arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length - 1; i++) {
    if (arrCopy[i] > arrCopy[i + 1]) {
      const smallNum = arrCopy[i + 1];
      const largeNum = arrCopy[i];
      arrCopy[i] = smallNum;
      arrCopy[i + 1] = largeNum;
    }
  }
  console.log(arr, arrCopy);
  if (arrCopy.join("-") === arr.join("-")) {
    return arrCopy;
  } else {
    return bubbleSort(arrCopy);
  }
};
bubbleSort([5, 7, 32, 4, 2, 9]);
