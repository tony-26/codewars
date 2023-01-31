const sumConditionRecursively = (arr, condition, sum = 0) => {
  if (arr.length === 0) return sum;
  const currentNum = arr.shift();
  if (condition(currentNum)) {
    sum += currentNum;
  }
  return sumConditionRecursively(arr, condition, sum);
};
const arr1 = [1, 2, 3, 4, 5, 6, 7];
const condition1 = (e) => {
  return e < 5;
};
const condition2 = (n) => {
  return n % 2 === 0;
};

console.log(sumConditionRecursively(arr1, condition1)); //10
console.log(sumConditionRecursively([1, 2, 3, 4, 5, 6], condition2)); //12
