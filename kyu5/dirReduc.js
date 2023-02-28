const dirReducStr = (str) => {
  const result = str
    .replace("EW", "")
    .replace("NS", "")
    .replace("SN", "")
    .replace("WE", "");
  if (result === str) {
    return result;
  } else {
    return dirReducStr(result);
  }
};
console.log(dirReducStr("NSSEWNW"));
console.log(dirReducStr("ENSW"));
const arrDirToStr = (arr) => arr.map((e) => e[0]).join("");
console.log(arrDirToStr(["NORTH", "SOUTH", "EAST"])); //"NSE"
const strToArrDir = (str) => {
  const mappings = { W: "WEST", E: "EAST", S: "SOUTH", N: "NORTH" };
  return str.split("").map((e) => mappings[e]);
};
console.log(strToArrDir("WESN")); //["WEST","EAST","SOUTH", "NORTH"]
const dirReduc = (arr) => {
  return strToArrDir(dirReducStr(arrDirToStr(arr)));
};
console.log(
  dirReduc(
    ["NORTH", "WEST", "SOUTH", "EAST"],
    ["NORTH", "WEST", "SOUTH", "EAST"]
  )
);
// console.log(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
