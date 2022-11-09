// const alphabetPosition = (text) => {
//   let value = 0;
//   let arr = [];
//   const number = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26,
//   };
//   for (i = 0; i < text.length; i++) {
//     arr = text.split("");
//     value = value + number[arr[i]];
//   }
//   return value;
// };
// console.log(
//   alphabetPosition("The sunset sets at twelve o' clock."),
//   "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// );
// console.log(
//   alphabetPosition("The narwhal bacons at midnight."),
//   "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
// );

function count(string) {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var splitted_string = string.split(string);

  var count = 0;
  for (i = 0; i < splitted_string.length; i++) {
    var letterPosition = alphabet.indexOf(splitted_string[i]) + 1;
    count = count + letterPosition;
  }
  return count;
}

console.log(count("az")); // returns 27 in the console
