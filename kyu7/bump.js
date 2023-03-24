const bump = (x) => {
  let bumpCount = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      bumpCount++;
    }
  }
  if (bumpCount <= 15) {
    return "Woohoo!";
  } else {
    return "Car Dead";
  }
};
console.log(bump("n"), "Woohoo!");
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");
