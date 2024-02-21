function solution(number) {
  const romanLetters = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
  let finalRomNumber = "";
  for (let i = 0; number > 0; i++) {
    const digit = number % 10;
    number = Math.floor(number / 10);

    let romDigit = "";
    if (digit <= 3) {
      romDigit = romanLetters[i][0].repeat(digit);
    } else if (digit === 4) {
      romDigit = romanLetters[i][0] + romanLetters[i][1];
    } else if (digit <= 8) {
      romDigit = romanLetters[i][1] + romanLetters[i][0].repeat(digit - 5);
    } else if (digit === 9) {
      romDigit = romanLetters[i][0] + romanLetters[i + 1][0];
    }
    finalRomNumber = romDigit + finalRomNumber;
  }
  return finalRomNumber;
}
console.log(solution(1), "I", '1 should return "I"');
console.log(solution(2), "II", '2 should return "II"');
console.log(solution(3), "III", '3 should return "III"');
console.log(solution(4), "IV", '4 should return "IV"');
console.log(solution(5), "V", '5 should return "V"');
console.log(solution(9), "IX", '9 should return "IX"');
console.log(solution(10), "X", '10 should return "X"');
console.log(solution(11), "XI", '11 should return "XI"');
console.log(solution(19), "XIX", '19 should return "XIX"');
console.log(solution(22), "XXII", '22 should return "XXII"');
console.log(solution(15), "XV", '15 should return "XV"');
