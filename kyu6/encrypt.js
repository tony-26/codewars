const encrypt = (text, n) => {
  if (n === 0) return text;

  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      arr1.push(text[i]);
    } else {
      arr2.push(text[i]);
    }
  }
  return encrypt(arr2.concat(arr1).join(""), n - 1);
};

console.log(encrypt("012345", 3)); //"012345"

//console.log(encrypt("012345", 1)); //"135024"
