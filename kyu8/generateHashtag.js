const generateHashtag = (str) => {
  let str1 = "#";
  if (str.replace(/\s/g, "").length === 0) {
    return false;
  }

  str.split(" ").forEach((e) => {
    str1 = str1 + e.charAt(0).toUpperCase() + e.slice(1);
  });

  if (str1.length > 140) {
    return false;
  } else {
    return str1;
  }
};

console.log(generateHashtag("Hello how are you")); // "#HelloHowAreYou"
console.log(generateHashtag("")); //false
console.log(generateHashtag(" ".repeat(200))); // false

//The Hashtag Generator
