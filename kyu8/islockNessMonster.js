const isLockNessMonster = (s) => {
  s = s.toLowerCase();
  if (
    s.includes("tree fiddy") ||
    s.includes("3.50") ||
    s.includes("three fifty")
  ) {
    return true;
  }
  return false;
};
