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
  //   for (let i = 0; i < 3; i++) {
  //     if (triplet[i] < triplet[i + 1]) {
  //       index = i;
  //       min = triplet[i];
  //     }
  //   }
}
