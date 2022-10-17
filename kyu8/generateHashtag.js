const generateHashtag = (str) => {
  let str1 = "#";
  let str2 = "";
  if (str.length === 0) {
    return false;
  } else {
    arr1 = str.split(" ");
    for (i = 0; i < arr1.length; i++) {
      str2 = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
      str1 = str1 + str2;
    }

    // console.log(arr1);
  }
  return str1;
};

console.log(generateHashtag("Hello how are you")); // "#HelloHowAreYou"
console.log(generateHashtag("")); //false

//The Hashtag Generator
