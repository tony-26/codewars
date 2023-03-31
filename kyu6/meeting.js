const meeting = (s) => {
  newStr = s.toUpperCase();
  const arr = newStr.split(";");
  let nameArr = arr.map((e) => {
    let [firstName, lastName] = e.split(":");
    return { firstName, lastName };
  });
  nameArr.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
  });
  return nameArr;
};
console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
); //"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
