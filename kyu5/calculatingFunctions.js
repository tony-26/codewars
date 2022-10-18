function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
  return 5;
}
function six() {
  return 6;
}
function seven(arg) {
  if (typeof arg === "number") {
    return 7 * arg;
  } else {
    return 7;
  }
}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times(arg) {
  return arg;
}
function dividedBy() {}

console.log(seven(times(five())), 35);
console.log(seven(times(six())), 42);
console.log(seven(times(seven())), 49);
//V1: return 7(no input, arg = undefined), V2: return 7 * arg(input)

// console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);
