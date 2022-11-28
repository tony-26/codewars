function sumStrings(a, b) {
  console.log(a, b);
  return (Number(a) + Number(b)).toString();
}
function sumStrings(a, b) {
  const AL = a.length;
  const BL = b.length;
  const ML = Math.max(AL, BL);

  let carry = 0,
    sum = "";

  for (let i = 1; i <= ML; i++) {
    let A = +a.charAt(AL - i);
    let B = +b.charAt(BL - i);

    let t = carry + A + B;
    carry = (t / 10) | 0;
    t %= 10;

    sum = i === ML && carry ? carry * 10 + t + sum : t + sum;
  }

  return sum;
}
