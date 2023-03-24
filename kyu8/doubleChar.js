const doubleChar = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charAt(i) + str.charAt(i);
  }
  return result;
};
console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
