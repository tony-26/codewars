const XO = (str) => {
  let countX = 0;
  let countO = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === "X") {
      countX += 1;
    } else if (str[i].toUpperCase() === "O") {
      countO += 1;
    }
  }
  if (countX === countO) {
    return true;
  } else {
    return false;
  }
};

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
//Exes and Ohs
//passing all tests
