function switchItUp(number) {
  const numberSwitch = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return numberSwitch[number.toString()];
}
console.log(switchItUp(1));
