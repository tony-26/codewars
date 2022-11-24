const findShort = (s) => {
  let arr = s.split(" ");
  let min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length < min.length) {
      min = arr[i];
    }
  }
  return min.length;
};
console.log(
  findShort("bitcoin take over the world maybe who knows perhaps"),
  3
);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  ),
  3
);
console.log(findShort("Let's travel abroad shall we"), 2);
