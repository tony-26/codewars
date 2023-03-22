const calculateAge = (birthYear, countYear) => {
  const age = countYear - birthYear;
  if (age === 1) {
    return "You are " + age + " year old.";
  }
  if (age === -1) {
    return "You will be born in " + age * -1 + " year.";
  }
  if (age === 0) {
    return "You were born this very year!";
  } else if (age > 0) {
    return "You are " + age + " years old.";
  } else {
    return "You will be born in " + age * -1 + " years.";
  }
};
