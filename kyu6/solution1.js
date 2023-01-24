function solution(number) {
  let str = "";
  let romanNumbers = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  for (let i = 0;i<number)
}

console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
console.log(solution(2007), 'MMVII', '2007 should, "MMVII"')
console.log(solution(22), 'XXII', '22 should return "XXII"')
console.log(solution(15), 'XV', '15 should return "XV"')