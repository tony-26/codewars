function gimme(triplet) {
  let index = 0;
  let min = 0;
  if (triplet[0] < triplet[1]) {
    index = 0;
    min = triplet[0];
  } else {
    index = 1;
    min = triplet[1];
  }

  if (triplet[2] < min) {
    index = 2;
    min = triplet[2];
  }
  return index;
}
console.log(gimme([2, 3, 1], 0));
console.log(gimme([2.1, 3.2, 1.4], 0));
console.log(gimme([-2, -3.2, 1], 0));
