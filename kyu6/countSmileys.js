function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(";") || arr[i].includes(":")) {
      if (arr[i].includes("D") || arr[i].includes(")")) {
        if (arr[i].length === 2) {
          count += 1;
        }
        if (arr[i].length === 3 && ["-", "~"].includes(arr[i][1])) {
          count += 1;
        }
      }
    }
  }
  return count;
}
// console.log(countSmileys([]), 0);
// console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
// console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));
