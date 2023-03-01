function isPalindrome(x) {
  x = x.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (x === x.split("").reverse().join("")) {
    return true;
  }
  return false;
}
