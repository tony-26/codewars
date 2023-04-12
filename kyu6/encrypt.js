const encrypt = (text, n) => {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      arr1.push(text[i]);
    } else {
      arr2.push(text[i]);
    }
  }
  return arr2.concat(arr1).join("");
};
console.log(encrypt("012345", 1)); //"135024"
