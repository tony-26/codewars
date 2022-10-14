const likes = (names) => {
  let output = "";
  let str = "";

  let count = 0;
  // console.log(str);

  if (names.length === 0) {
    output = output + "no one likes this";
  } else if (names.length === 1) {
    output = names[0] + " likes this";
  } else if (names.length === 2) {
    output = names.join(" and ") + " like this";
  } else if (names.length === 3) {
    output = names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else if (names.length > 3) {
    count = names.length - 2;
    output = names[0] + ", " + names[1] + " and " + count + " others like this";
  }

  return output;
};

console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); //'Peter likes this'

//Who likes it
//
