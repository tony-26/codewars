function zero(value) {
  if (value === undefined) {
    return 0;
  } else if (value[1] === "+") {
    return 0 + value[0];
  } else if (value[1] === "-") {
    return 0 - value[0];
  } else if (value[1] === "/") {
    return 0;
  } else if (value[1] === "*") {
    return 0 * value[0];
  }
}
function one(value) {
  if (value === undefined) {
    return 1;
  } else if (value[1] === "+") {
    return 1 + value[0];
  } else if (value[1] === "-") {
    return 1 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(1 / value[0]);
  } else if (value[1] === "*") {
    return 1 * value[0];
  }
}
function two(value) {
  if (value === undefined) {
    return 2;
  } else if (value[1] === "+") {
    return 2 + value[0];
  } else if (value[1] === "-") {
    return 2 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(2 / value[0]);
  } else if (value[1] === "*") {
    return 2 * value[0];
  }
}
function three(value) {
  if (value === undefined) {
    return 3;
  } else if (value[1] === "+") {
    return 3 + value[0];
  } else if (value[1] === "-") {
    return 3 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(3 / value[0]);
  } else if (value[1] === "*") {
    return 3 * value[0];
  }
}
function four(value) {
  if (value === undefined) {
    return 4;
  } else if (value[1] === "+") {
    return 4 + value[0];
  } else if (value[1] === "-") {
    return 4 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(4 / value[0]);
  } else if (value[1] === "*") {
    return 4 * value[0];
  }
}
function five(value) {
  if (value === undefined) {
    return 5;
  } else if (value[1] === "+") {
    return 5 + value[0];
  } else if (value[1] === "-") {
    return 5 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(5 / value[0]);
  } else if (value[1] === "*") {
    return 5 * value[0];
  }
}
function six(value) {
  if (value === undefined) {
    return 6;
  } else if (value[1] === "+") {
    return 6 + value[0];
  } else if (value[1] === "-") {
    return 6 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(6 / value[0]);
  } else if (value[1] === "*") {
    return 6 * value[0];
  }
}
function seven(value) {
  if (value === undefined) {
    return 7;
  } else if (value[1] === "+") {
    return 7 + value[0];
  } else if (value[1] === "-") {
    return 7 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(7 / value[0]);
  } else if (value[1] === "*") {
    return 7 * value[0];
  }
}
function eight(value) {
  if (value === undefined) {
    return 8;
  } else if (value[1] === "+") {
    return 8 + value[0];
  } else if (value[1] === "-") {
    return 8 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(8 / value[0]);
  } else if (value[1] === "*") {
    return 8 * value[0];
  }
}
function nine(value) {
  if (value === undefined) {
    return 9;
  } else if (value[1] === "+") {
    return 9 + value[0];
  } else if (value[1] === "-") {
    return 9 - value[0];
  } else if (value[1] === "/") {
    return Math.trunc(9 / value[0]);
  } else if (value[1] === "*") {
    return 9 * value[0];
  }
}

function plus(arg) {
  let value = [];
  value = [arg, "+"];
  return value;
}
function minus(arg) {
  let value = [];
  value = [arg, "-"];
  return value;
}
function times(arg) {
  let value = [];
  value = [arg, "*"];
  return value;
}
function dividedBy(arg) {
  let value = [];
  value = [arg, "/"];
  return value;
}

console.log(five(dividedBy(six)));

// console.log(seven(times(zero())) === 0);
// console.log(seven(times(one())) === 7);
// console.log(seven(times(two())) === 14);
// console.log(seven(times(three())) === 21);
// console.log(seven(times(four())) === 28);
//console.log(seven(times(five())), 35);
// console.log(seven(times(six())), 42);
// console.log(seven(times(seven())), 49);
// console.log(seven(times(eight())) === 56);
// console.log(seven(times(nine())) === 63);
// V1: return 7(no input, arg = undefined), V2: return 7 * arg(input)

// console.log(seven(plus(five())), 12);
// console.log(seven(plus(one())), 8);
// console.log(seven(plus(two())), 9);
// console.log(seven(plus(seven())), 14);
// console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);
// console.log(seven(times(five())), 35);
// console.log(four(plus(nine())), 13);
// console.log(eight(minus(three())), 5);
// console.log(six(dividedBy(two())), 3);
const plusV2 = (a) => {
  return (b) => {
    return a + b;
  };
};
const oneV2 = (a) => {
  return a ? a(1) : 1;
};

const twoV2 = (a) => {
  return a ? a(2) : 2;
};

const threeV2 = (a) => {
  return a ? a(3) : 3;
};
