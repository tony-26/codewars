var isAnagram = function (test, original) {
  if (test.length !== original) {
    return false;
  }
  let sameCaseTest = test.toLowerCase();
  let sameCaseOriginal = original.toLowerCase();
  let sortedTest = sameCaseTest.split("").sort().join("");
  let sortedOriginal = sameCaseOriginal.split("").sort().join("");
  if (sortedTest === sortedOriginal) {
    return true;
  } else {
    return false;
  }
};
console.log(isAnagram("foefet", "toffee"), true);
console.log(isAnagram("Buckethead", "DeathCubeK"), true);
console.log(isAnagram("Twoo", "WooT"), true);
