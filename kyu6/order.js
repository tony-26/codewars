function order(words) {
  let str = "";
  let arr = words.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === i + 1) {
        str = str + arr[i];
      }
    }
  }
  return str;
}
console.log(order("is2 Thi1s T4est 3a")); //"Thi1s is2 3a T4est"
//console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//console.log(order(""), "", "empty input should return empty string" )
