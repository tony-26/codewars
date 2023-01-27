function findDifference(a, b) {
  let productA = 1;
  let productB = 1;
  const A = a.map((e) => {
    productA = productA * e;
  });
  const B = b.map((e) => {
    productB = productB * e;
  });
  if (productA > productB) {
    return productA - productB;
  } else {
    return productB - productA;
  }
}
console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);
