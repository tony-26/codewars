function getGrade(s1, s2, s3) {
  let ave = (s1 + s2 + s3) / 3;
  console.log(ave);
  if (90 <= ave && ave <= 100) {
    return "A";
  } else if (80 <= ave && ave < 90) {
    return "B";
  } else if (70 <= ave && ave < 80) {
    return "C";
  } else if (60 <= ave && ave < 70) {
    return "D";
  } else {
    return "F";
  }
}
console.log(getGrade(65, 70, 59), "D");
