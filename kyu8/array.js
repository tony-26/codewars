function array(arr) {
  const arrSplit = arr.split(",");
  if (arrSplit.length < 3) {
    return null;
  }
  arrSplit.shift();
  arrSplit.pop();
  const result = arrSplit.join(" ");
  return result;
}
console.log(array("1, 2, 3")); //"2"
