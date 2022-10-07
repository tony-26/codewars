const abbrevName = (name) => {
  let outStr = "";
  const newArr = name.split(" ");
  //   console.log(newStr);

  for (i = 0; i < newArr.length; i++) {
    outStr = outStr + newArr[i][0] + ".";
  }
  finalStr = outStr.slice(0, -1);
  finalStr = finalStr.toUpperCase();
  return finalStr;
};
console.log(abbrevName("GUYXqXHeFJNG psCEmMajpxuJrSJRJfwmf"));

//Abbreviate a Two Word Name
