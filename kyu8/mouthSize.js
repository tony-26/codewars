function mouthSize(animal) {
  if (animal.toLowerCase() === "alligator") {
    return "small";
  } else {
    return "wide";
  }
}
console.log(mouthSize("toucan"), "wide");
console.log(mouthSize("ant bear"), "wide");
console.log(mouthSize("alligator"), "small");
