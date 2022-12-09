const stray = (numbers) => {
  let uniqueNum = [...new Set(numbers)];
  return uniqueNum;
};
console.log(stray([1, 1, 2])); //2
