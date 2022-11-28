const hoopCount = (n) => {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
};
console.log(hoopCount(3), "Keep at it until you get it");
console.log(hoopCount(11), "Great, now move on to tricks");
