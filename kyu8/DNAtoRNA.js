const DNAtoRNA = (dna) => {
  let newStr = "";
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      newStr = newStr + "U";
    } else {
      newStr = newStr + dna[i];
    }
  }
  return newStr;
};
console.log(DNAtoRNA("TTTT"), "UUUU");
console.log(DNAtoRNA("GCAT"), "GCAU");
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
//DNA to RNA Conversion
