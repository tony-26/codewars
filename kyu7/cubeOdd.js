function cubeOdd(arr) {
  let sum = arr[0] * arr[0] * arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
    if (arr[i] % 2 !== 0) {
      sum = sum + arr[i] * arr[i] * arr[i];
    }
  }
  return sum;
}
console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);
