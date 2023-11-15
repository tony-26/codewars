const encrypt = (text, n) => {
  for (let i = 0; i < n; i++) {
    let odd = "";
    let even = "";
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        even += text[j];
      } else {
        odd += text[j];
      }
    }
    text = odd + even;
  }
  return text;
};

const decrypt = (encryptedText, n) => {
  for (let i = 0; i < n; i++) {
    const halfLength = Math.floor(encryptedText.length / 2);
    const firstHalf = encryptedText.slice(0, halfLength);
    const secondHalf = encryptedText.slice(halfLength);
    let decryptedText = "";
    for (let j = 0; j < halfLength; j++) {
      decryptedText += (secondHalf[j] || "") + (firstHalf[j] || "");
    }
    encryptedText = decryptedText;
  }
  return encryptedText;
};
console.log(encrypt("012345", 3)); //"012345"

console.log(encrypt("012345", 1)); //"135024"
