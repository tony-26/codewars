function partlist(arr) {
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    const left = arr.slice(0, i).join(" ");
    const right = arr.slice(i).join(" ");
    result.push([left, right]);
  }
  return result;
}
