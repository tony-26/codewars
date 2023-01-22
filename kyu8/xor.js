function xor(a, b) {
  if ((a && !b) || (!a && b)) {
    return true;
  } else {
    return false;
  }
}
console.log(xor(false, false), false, "false xor false === false");
console.log(xor(true, false), true, "true xor false === true");
console.log(xor(false, true), true, "false xor true === true");
console.log(xor(true, true), false, "true xor true === false");
console.log(xor(true, true), true, "'xor' is NOT identical to 'or'");
