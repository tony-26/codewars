const getUnformattedTime = (time) => {
  let remainingTime = time;

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
  const remainingDays = days % 30;
  remainingTime = days - remainingDays;

  const months = remainingTime / 30;

  return {
    months: months,
    days: remainingDays,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
  };
};
const linkFormattedTime = (time) => {
  let secondsOutput = "";
  if (time.seconds === 1) {
    secondsOutput = "1 second";
  } else if (time.seconds > 1) {
    secondsOutput = secondsOutput + time.seconds + " seconds";

  }

  let minutesOutput = "";
  if (time.minutes === 1) {
    minutesOutput = "1 minute";
  } else if (time.minutes > 1) {
    minutesOutput = time.minutes + " minutes";
  }

};
console.log(linkFormattedTime({ seconds: 3 }), "3 seconds");
console.log(linkFormattedTime({ seconds: 1 }), "1 second");
console.log(
  linkFormattedTime({ minutes: 1, seconds: 2 }),
  "1 minute and 2 seconds"
);
// console.log(getUnformattedTime(3), { seconds: 3 });
// console.log(getUnformattedTime(62), { minutes: 1, seconds: 2 });
// console.log(getUnformattedTime(3661), { hours: 1, minutes: 1, seconds: 1 });
// console.log(getUnformattedTime(3609), { hours: 1, minutes: 0, sseconds: 9 });
// console.log(getUnformattedTime(14470), { hours: 4, minutes: 1, seconds: 10 });
// console.log(getUnformattedTime(267065), {
//   days: 3,
//   hours: 2,
//   minutes: 11,
//   seconds: 5,
// });
// console.log(getUnformattedTime(18411065), {
//   months: 7,
//   days: 3,
//   hours: 2,
//   minutes: 11,
//   seconds: 5,
// });
