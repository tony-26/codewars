function maskify(cc) {
  if (cc.length > 4) {
    let newStr = "#".repeat(cc.length - 4);
    newStr = newStr + cc.substr(cc.length - 4);
    return newStr;
  } else {
    return cc;
  }
}
console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
