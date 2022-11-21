const solution = (string) => {
  let str = string;
  let i = 0;
  while (true) {
    if (str[i].toUpperCase() === str[i]) {
      str = str.slice(0, i) + " " + str.slice(i);
      i = i + 1;
    }
    i = i + 1;
    if (i >= str.length) {
      break;
    }
  }
  return str;
};
console.log(solution("camelCaseHello")); //camel Case
