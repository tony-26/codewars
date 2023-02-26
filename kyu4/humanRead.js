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
    month: months,
    day: remainingDays,
    hour: remainingHours,
    minute: remainingMinutes,
    second: remainingSeconds,
  };
};
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

const timeStr = (timeNum, timeUnit) => {
  if (timeNum === 0) return "";
  if (timeNum === 1) return "1 " + timeUnit;
  return timeNum.toString() + " " + timeUnit + "s";
};
console.log(timeStr(1, "hour")); //"1 hour"
console.log(timeStr(1, "minute")); //"1 minute"
console.log(timeStr(3, "day")); //"3 days"
console.log(timeStr(0, "month")); //""
console.log(timeStr(5, "second")); //"5 seconds"

const linkFormattedTime = (time) => {
  const result = [];
  Object.entries(time).forEach((e) => {
    const [timeUnit, timeNum] = e;
    const timeString = timeStr(timeNum, timeUnit);
    if (timeString.length > 0) {
      result.push(timeString);
    }
  });
  if (result.length === 1) return result[0];
  const lastTimeString = result.pop();
  return result.join(", ") + " and " + lastTimeString;
};
console.log(
  linkFormattedTime({ month: 0, day: 0, hour: 0, minute: 0, second: 10 })
); //"10 seconds"
console.log(
  linkFormattedTime({ month: 10, day: 0, hour: 0, minute: 0, second: 11 })
); //"10 months and 11 seconds"
console.log(
  linkFormattedTime({ month: 12, day: 20, hour: 0, minute: 0, second: 10 })
); //"12 months, 20 days and 10 seconds"
console.log(
  linkFormattedTime({ month: 1, day: 20, hour: 59, minute: 11, second: 10 })
); //"1 month, 20 days, 59 hours, 11 minutes and 10 seconds"
