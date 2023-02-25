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

const timeStr = (timeNum, timeUnit) => {
  if (timeNum === 0) return "";
  if (timeNum === 1) return "1 " + timeUnit;
  return timeNum.toString() + " " + timeUnit;
};
console.log(timeStr(1, "hour")); //"1 hour"
console.log(timeStr(1, "minute")); //"1 minute"
console.log(timeStr(3, "day")); //"3 days"
console.log(timeStr(0, "month")); //""


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

  let hoursOutput = "";

  if (time.hours === 1) {
    hoursOutput = time.hours + " hour";
  } else if (time.hours > 1) {
    hoursOutput = time.hours + " hours";
  }

  let daysOutput = "";
  if (time.days === 1) {
    daysOutput = time.days + " day";
  } else if (time.days > 1) {
    daysOutput = time.days + " days";
  }

  let monthsOutput = "";
  if (time.months === 1) {
    monthsOutput = time.months + " month";
  } else if (time.months > 1) {
    monthsOutput = time.months + " months";
  }
  return (
    monthsOutput +
    " " +
    daysOutput +
    " " +
    hoursOutput +
    " " +
    minutesOutput +
    " and " +
    secondsOutput
  );
};
//console.log(linkFormattedTime({ months: 12, days: 20, hours: 0, seconds: 10 }));
// console.log(linkFormattedTime({ seconds: 3 }), "3 seconds");
// console.log(linkFormattedTime({ seconds: 1 }), "1 second");
// console.log(
//   linkFormattedTime({ minutes: 1, seconds: 2 }),
//   "1 minute and 2 seconds"
// );
// console.log(linkFormattedTime({ hours: 2, minutes: 10, seconds: 35 })); //"2 hours, 10 minutes and 35 seconds"
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
