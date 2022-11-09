const DNAStrand = (dna) => {
  let newStr = "";
  var change = [(A: "T"), (C: "G")];
  for (i = 0; i < dna.length; i++) {
    newStr = newStr + change[dna[i]];
  }
  return newStr;
};
console.log(DNAStrand("AAAA"), "TTTT");
console.log(DNAStrand("ATTGC"), "TAACG");
console.log(DNAStrand("GTAT"), "CATA");
