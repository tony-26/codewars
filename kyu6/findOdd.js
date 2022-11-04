const findOdd = (A) => {
  let newArr = [];
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  let count10 = 0;
  for (i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count0 += 1;
    } else if (A[i] === 1) {
      count1 += 1;
    } else if (A[i] === 2) {
      count2 += 1;
    } else if (A[i] === 3) {
      count3 += 1;
    } else if (A[i] === 4) {
      count4 += 1;
    } else if (A[i] === 5) {
      count5 += 1;
    } else if (A[i] === 6) {
      count6 += 1;
    } else if (A[i] === 7) {
      count7 += 1;
    } else if (A[i] === 8) {
      count8 += 1;
    } else if (A[i] === 9) {
      count9 += 1;
    }
  }
  newArr.push(
    count0,
    count1,
    count2,
    count3,
    count4,
    count5,
    count6,
    count7,
    count8,
    count9
  );
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 != 0) {
      return i;
    }
  }
};
