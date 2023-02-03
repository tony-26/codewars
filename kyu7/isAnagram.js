var isAnagram = function (test, original) {
  if (test.length !== original.length) {
    return false;
  }
  let sameCaseTest = test.toLowerCase().split("").sort().join("");
  let sameCaseOriginal = original.toLowerCase().split("").sort().join("");
  console.log(sameCaseTest, sameCaseOriginal);
  if (sameCaseOriginal === sameCaseTest) {
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram("foefet", "toffee"), true);
// console.log(isAnagram("Buckethead", "DeathCubeK"), true);
// console.log(isAnagram("Twoo", "WooT"), true);
