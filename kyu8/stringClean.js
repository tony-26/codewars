const stringClean = (s) => {
  return s.replace(/[0-9]/g, "");
};
console.log(stringClean(""), "");
console.log(stringClean("! !"), "! !");
console.log(stringClean("123456789"), "");
console.log(stringClean("(E3at m2e2!!)"), "(Eat me!!)");
