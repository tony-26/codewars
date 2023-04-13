const encrypt = (text, n) => {
  let arr1 = [];
  let arr2 = [];
  let newArr = [];
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      arr1.push(text[i]);
    } else {
      arr2.push(text[i]);
    }
  }
  newArr = arr2.concat(arr1).join("");
  return newArr;
};
console.log(encrypt("012345", 1)); //"135024"
