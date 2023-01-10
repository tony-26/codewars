function towerBuilder(nFloors) {
  let tower = [];
  let symbol = "*";
  for (let i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) + symbol + " ".repeat(nFloors - 1 - i)
    );
    symbol = symbol + "**";
  }
  return tower;
}
// console.log(towerBuilder(1), ["*"]);
// console.log(towerBuilder(2), [" * ", "***"]);
// console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
console.log(towerBuilder(5)); // ["4*4", "3***3", "2*****2", "1*******1", "0*********0"]
