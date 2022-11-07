const bmi = (weight, height) => {
  let BMI = weight / (height * height);
  if (BMI <= 18.5) {
    return "Underweight";
  } else if (BMI <= 25.0) {
    return "Normal";
  } else if (BMI <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
};
