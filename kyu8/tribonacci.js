const tribonacci = (signature, n) => {
  let arr = [];
  if (n === 0) {
    return [];
  } else if (n === 1) {
    arr.push(signature[0]);
    return arr;
  } else if (n === 2) {
    arr.push(signature[0], signature[1]);
    return arr;
  } else {
    for (i = 0; i < n - 3; i++) {
      signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
    }
    return signature;
  }
};
// console.log(tribonacci([0, 0, 1], 5)); // [0, 0, 1, 1, 2]
// console.log(tribonacci([1, 1, 1], 10)); // [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
console.log(tribonacci([1, 1, 1], 1)); // [1]

//Tribonacci Sequence
