function zero() {
  return 0;
}
function one() {
  return 1;
}
function two() {
  return 2;
}
function three() {
  return 3;
}
function four() {
  return 4;
}
function five() {
  return 5;
}
function six() {
  return 6;
}
function seven(arg) {
  console.log(arg);
  // if (typeof arg === "number") {
  return 7 + arg[1] + arg[0];
  // } else {
  //   return 7;
  // }
}
function eight() {
  return 8;
}
function nine() {
  return 9;
}

function plus(arg) {
  return [arg, "+"];
}
function minus() {}
function times(arg) {
  // console.log(arg);
  return [arg, "*"];
}
function dividedBy() {}

// console.log(seven(times(zero())) === 0);
// console.log(seven(times(one())) === 7);
// console.log(seven(times(two())) === 14);
// console.log(seven(times(three())) === 21);
// console.log(seven(times(four())) === 28);
console.log(seven(times(five())), 35);
// console.log(seven(times(six())), 42);
// console.log(seven(times(seven())), 49);
// console.log(seven(times(eight())) === 56);
// console.log(seven(times(nine())) === 63);
// V1: return 7(no input, arg = undefined), V2: return 7 * arg(input)

// console.log(seven(plus(one())), 8);
// console.log(seven(plus(two())), 9);
// console.log(seven(plus(seven())), 14);
// console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);
