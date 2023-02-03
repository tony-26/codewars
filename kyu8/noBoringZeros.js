function noBoringZeros(n) {
  let str = n.toString();
  if (n === 0) {
    return 0;
  }
  if (str[str.length - 1] !== "0") {
    return Number(str);
  } else {
    const arr = str.split("");
    arr.pop();
    return noBoringZeros(Number(arr.join("")));
  }
}
console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
