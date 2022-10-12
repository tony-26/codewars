const howMuchILoveYou = (nbPetals) => {
  const anum = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };
  if (nbPetals <= 6) {
    return anum[nbPetals];
  } else {
    return anum[nbPetals % 6];
  }
};
console.log(howMuchILoveYou(8)); //"a little"
console.log(howMuchILoveYou(162));

//I love you, a little....
