function dirReduc(arr) {
  let x = 0;
  let y = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "NORTH") {
      y += 1;
    } else if (arr[i] === "SOUTH") {
      y -= 1;
    } else if (arr[i] === "EAST") {
      x += 1;
    } else if (arr[i] === "WEST") {
      x -= 1;
    }
  }
  if (x === 1) {
    result.push("EAST");
  }
  if (x === -1) {
    result.push("WEST");
  }
  if (y === 1) {
    result.push("NORTH");
  }
  if (y === -1) {
    result.push("SOUTH");
  }
  return result;
}
console.log(
  dirReduc(
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
    ["WEST"]
  )
);
// console.log(
//   ["NORTH", "WEST", "SOUTH", "EAST"],
//   ["NORTH", "WEST", "SOUTH", "EAST"]
// );
// console.log(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
