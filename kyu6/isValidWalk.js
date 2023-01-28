function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let leftAndRight = 0;
  let upAndDown = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      upAndDown++;
    } else if (walk[i] === "s") {
      upAndDown--;
    } else if (walk[i] === "w") {
      leftAndRight--;
    } else if (walk[i] === "e") {
      leftAndRight++;
    }
  }
  if (leftAndRight === 0 && upAndDown === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
console.log(isValidWalk(["w"]), "should return false");
console.log(
  isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);
