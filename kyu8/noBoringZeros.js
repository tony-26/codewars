function noBoringZeros(n) {
  if (n.toString()[n.toString().length] !== 0) {
    return n;
  }
  if (n === 0) {
    return 0;
  }
  let arr = n.toString().split("").reverse();
  for (let i = 0; i < arr.length; i++) {}
}
console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
//[0, 5, 4, 1]
