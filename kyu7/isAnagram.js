var isAnagram = function (test, original) {
  if (test.length !== original) {
    return false;
  }
  if (test.includes(original)) {
    return true;
  } else {
    return false;
  }
};
