function narcissistic(value) {
  const str = value.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    //console.log(Number(str[i]), str.length);
    sum = sum + Number(str[i]) ** str.length;
  }
  //   return sum;
  if (sum === value) {
    return true;
  }
  return false;
}
console.log(narcissistic(122)); //false
console.log(narcissistic(153)); //true
