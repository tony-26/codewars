const generateHashtag = (str) => {
  let str1 = "#";
  let str2 = "";
  if (str.replace(/\s/g, "").length === 0) {
    return false;
  } else {
    arr1 = str.split(" ");
    for (i = 0; i < arr1.length; i++) {
      str2 = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
      str1 = str1 + str2;
    }

    // console.log(arr1);
  }
  if (str1.length > 140) {
    return false;
  } else {
    return str1;
  }
};

// console.log(generateHashtag("Hello how are you")); // "#HelloHowAreYou"
// console.log(generateHashtag("")); //false
console.log(generateHashtag(" ".repeat(200))); // false

//The Hashtag Generator
