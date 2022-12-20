function sumStrings(a, b) {
  let carry = 0;
  let currentValue = "";
  let digit = 0;
  let A = a.split("").reverse().join("");
  let B = b.split("").reverse().join("");
  //console.log(A, B);
  // if (A.length >= B) {
  //   for (let i = 0; i < A.length; i++) {
  //     digit = Number(A[i]) + Number(B[i]);
  //     if (digit >= 10) {
  //       carry = 1;
  //       if ((i = 0)) {
  //         currentValue = (digit - 10).toString() + currentValue;
  //       } else {
  //         currentValue = (digit + carry - 10).toString() + currentValue;
  //       }
  //     } else if (digit < 10) {
  //       currentValue = digit.toString() + currentValue;
  //     }
  //   }
  // } else {
  //   for (let i = 0; i < B.length; i++) {
  //     digit = Number(A[i]) + Number(B[i]);
  //     if (digit >= 10) {
  //       carry = 1;
  //       if ((i = 0)) {
  //         currentValue = (digit - 10).toString() + currentValue;
  //       } else {
  //         currentValue = (digit + carry - 10).toString() + currentValue;
  //       }
  //     } else if (digit < 10) {
  //       currentValue = digit.toString() + currentValue;
  //     }
  //   }
  // }
  return currentValue;
  // console.log(a, b);
  // return (Number(a) + Number(b)).toString();
}
console.log(sumStrings("12345", "789789")); //'802134'
