const sumEvensRecursively = (arr, sumEven = 0) => {
  if (arr.length === 0) {
    return sumEven;
  } else {
    if (arr[0] % 2 === 0) {
      sumEven = sumEven + arr[0];
      arr.shift();
    } else if (arr[0] % 2 !== 0) {
      arr.shift();
    }
    return sumEvensRecursively(arr, sumEven);
  }
};
console.log(sumEvensRecursively([1, 2, 3, 4, 5])); //6
