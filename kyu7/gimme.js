function gimme(triplet) {
  let newArr = [...triplet];
  newArr.sort((a, b) => a - b);
  for (let i = 0; i < 3; i++) {
    if (newArr[1] === triplet[i]) {
      return i;
    }
  }
}
console.log(gimme([2, 3, 1], 0));
console.log(gimme([2.1, 3.2, 1.4], 0));
console.log(gimme([-2, -3.2, 1], 0));
