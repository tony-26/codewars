const howMuchILoveYou = (n) =>
  ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][
    (n - 1) % 6
  ];

console.log(howMuchILoveYou(8)); //"a little"
console.log(howMuchILoveYou(162));

//I love you, a little....
