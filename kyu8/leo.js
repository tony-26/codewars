const leo = (oscar) => {
  if (oscar === 89) {
    return "Leo got one already!";
  }
  if (oscar === 88) {
    return "Leo finally won the oscar! Leo is happy";
  }

  if (oscar === 86) {
    return "Not even for Wolf of wallstreet?!";
  }
  if (oscar < 88) {
    return "When will you give Leo an Oscar?";
  }
  if (oscar > 88) {
    return "Leo got one already!";
  }
};
console.log(leo(89), "Leo got one already!");
console.log(leo(88), "Leo finally won the oscar! Leo is happy");
console.log(leo(87), "When will you give Leo an Oscar?");
console.log(leo(86), "Not even for Wolf of wallstreet?!");
