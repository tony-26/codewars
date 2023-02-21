const getUnformattedTime = (seconds) => {
  let remainingTime = seconds;

  const seconds = remainingTime / 1;
  const remainingSeconds = seconds % 60;
  remainingTime = remainingTime - remainingSeconds;

  const minutes = remainingTime / 60;
  const remainingMinutes = minutes % 60;
  remainingTime = minutes - remainingMinutes;

  const hours = remainingTime / 60;
  const remainingHours = hours % 24;
  remainingTime = hours - remainingHours;

  const days = remainingTime / 24;

  return {
    days: days,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};
console.log(getUnformattedTime(3), { seconds: 3 });
console.log(getUnformattedTime(62), { minutes: 1, seconds: 2 });
console.log(getUnformattedTime(3661), { hours: 1, minutes: 1, seconds: 1 });
console.log(getUnformattedTime(3609), { hours: 1, minutes: 0, sseconds: 9 });
console.log(getUnformattedTime(14470), { hours: 4, minutes: 1, seconds: 10 });
console.log(getUnformattedTime(267065), {
  days: 3,
  hours: 2,
  minutes: 11,
  seconds: 5,
});
// console.log(getUnformattedTime(18411065), {
//   months: 7,
//   days: 3,
//   hours: 2,
//   minutes: 11,
//   seconds: 5,
// });
