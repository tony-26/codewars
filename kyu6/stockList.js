function stockList(listOfArt, listOfCat) {
  let finalData = "";
  for (let i = 0; i < listOfArt.length; i++) {
    for (let j = 0; j < listOfCat.length; j++) {
      if (listOfArt[i][0] === listOfCat[j]) {
      }
    }
  }
}
let b, c, res;
b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
c = ["A", "B", "C", "D"];
res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
console.log(stockList(b, c), res);
