const feast = (beast, dish) => {
  let count1 = beast.length;
  let count2 = dish.length;
  if (beast[0] === dish[0] && beast[count1 - 1] === dish[count2 - 1]) {
    return true;
  } else {
    return false;
  }
};
console.log(feast("chickadee", "chocolate cake")); //true
