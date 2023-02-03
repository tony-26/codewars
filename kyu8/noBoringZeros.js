function noBoringZeros(n) {
  let str = n.toString();
  if (n === 0) {
    return 0;
  }
  //   if (n.toString()[n.toString().length] !== 0) {
  //     return n;
  //   }
  //   if (n === 0) {
  //     return 0;
  //   }
  //   let arr = n.toString().split("").reverse();
  //   for (let i = 0; i < arr.length; i++) {}
  if (str[str.length - 1] !== "0") {
    return str;
  } else {
    const arr = str.split("");
    arr.pop();
    return noBoringZeros(Number(arr.join("")));
    // const newStr = str.split("").pop().join("");
    //return noBoringZeros(Number(newStr));
  }
}
console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);
