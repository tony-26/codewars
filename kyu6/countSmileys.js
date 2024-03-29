const isSmileyWithNose = (str, validEyes, validNoses, validFaces) =>
  str.length === 3 &&
  validEyes.includes(str[0]) &&
  validNoses.includes(str[1]) &&
  validFaces.includes(str[2]);

const isSmileyWithoutNose = (str, validEyes, validFaces) =>
  str.length === 2 && validEyes.includes(str[0]) && validFaces.includes(str[1]);

const isSmiley = (str, validEyes, validNoses, validFaces) =>
  isSmileyWithNose(str, validEyes, validNoses, validFaces) ||
  isSmileyWithoutNose(str, validEyes, validFaces);

function countSmileys(arr) {
  const validEyes = [";", ":"];
  const validNoses = ["-", "~"];
  const validFaces = ["D", ")"];

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isSmiley(arr[i], validEyes, validNoses, validFaces)) {
      count += 1;
    }
  }
  return count;
}
// console.log(countSmileys([]), 0);
// console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
// console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
// console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));
