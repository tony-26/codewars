function dataReverse(data) {
  if (data.length % 8 !== 0) {
    return "invalid input";
  }

  let reversedData = [];
  for (let i = data.length; i > 0; i -= 8) {
    reversedData.push(...data.slice(i - 8, i));
  }

  return reversedData;
}
