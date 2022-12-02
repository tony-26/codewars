const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft < distanceToPump) {
    return false;
  } else {
    return true;
  }
};
console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
