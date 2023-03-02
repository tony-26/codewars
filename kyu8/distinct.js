function distinct(a) {
  if (a.length === 0) {
    return a;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i + 1]) {
      a.splice(i, 1);
    }
  }
  return a;
}
console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
