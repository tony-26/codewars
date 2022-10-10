const likes = (names) => {
  let output = "";
  let str = "";
  str = names.toString().split(",");
  let count = 0;
  // console.log(str);

  if (names === []) {
    output = output + "no one likes this";
  } else if (str.length === 2) {
    output = str.join(" and") + "likes this";
  } else if (str.length === 3) {
    output = str[0] + ", " + str[1] + " and " + str[2] + " like this";
  } else if (str.length > 3) {
    count = str.length - 2;
    output = str[0] + ", " + str[1] + " and " + count + " others like this";
  }

  return output;
};

console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); //'Peter likes this'

//Who likes it
//
