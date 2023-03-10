function solution(str) {
  if (str.length === 0) {
    return [];
  }

  let result = [];
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.legnth; i += 2) {
      console.log(i);
      result.push(str[i], str[i + 1]);
    }
  }
  if (str.length % 2 !== 0) {
    for (let i = 0; i < str.length; i += 1) {
      result.push(str[i], str[i + 1]);
    }
    result[result.length - 1] = result[result.length - 1] + "_";
  }

  return result;
}
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
// console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// console.log(solution(""), []);
