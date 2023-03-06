function capitalize(s) {
  let evenChars = "";
  let oddChars = "";

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenChars += s.charAt(i).toUpperCase();
      oddChars += s.charAt(i);
    } else {
      evenChars += s.charAt(i);
      oddChars += s.charAt(i).toUpperCase();
    }
  }

  return [evenChars, oddChars];
}
console.log(capitalize("abcdef"), ["AbCdEf", "aBcDeF"]);
console.log(capitalize("codewars"), ["CoDeWaRs", "cOdEwArS"]);
console.log(capitalize("abracadabra"), ["AbRaCaDaBrA", "aBrAcAdAbRa"]);
console.log(capitalize("codewarriors"), ["CoDeWaRrIoRs", "cOdEwArRiOrS"]);
