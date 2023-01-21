function countSmileys(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].includes(";") ||
      (arr[i].includes(":") && arr[i].includes("D")) ||
      arr[i].includes(")")
    ) {
      count += 1;
    }
  }
  return count;
}
console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
