const DNAtoRNA = (dna) => {
  return dna.replace("T", "U");
};
console.log(DNAtoRNA("TTTT"), "UUUU");
console.log(DNAtoRNA("GCAT"), "GCAU");
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
//DNA to RNA Conversion
