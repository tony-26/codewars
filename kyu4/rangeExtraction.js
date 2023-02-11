const rangeExtraction = (list) => {};
console.log(rangeExtraction([2, 3, 4, 5, 10, 11, 12, 13])); // "2-5,10-13"
console.log(rangeExtraction([2, 3, 4, 5, 6, 10, 11, 15, 16, 17])); // "2-6,10,11,15-17"
