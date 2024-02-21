function solution() {
  for (let i = 0; i < arguments.length; i++) {
    for (let j = i + 1; j < arguments.length; j++) {
      if (arguments[i] === arguments[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(solution(1, 2, 3), false);
// console.log(solution(1, 2, 3, 6, 5, 6), true);
// console.log(solution("a", "b", "c", "a"), true);
// console.log(solution(1, 2, 3, "a", "b"), false);
