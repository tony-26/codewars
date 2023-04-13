const encrypt = (text, n) => {
  let result = "";
  if (n === 0) return result;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      arr1.push(text[i]);
    } else {
      arr2.push(text[i]);
    }
  }
  n = n - 1;
  result = arr2.concat(arr1).join("");
  return encrypt(result, n);
};

console.log(encrypt("012345", 3)); //"012345"

//console.log(encrypt("012345", 1)); //"135024"
