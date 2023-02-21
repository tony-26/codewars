const getUnformattedTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  if (minutes >= 60) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    if (hours >= 24) {
      let days = Math.floor(hours / 24);
      let remainingHours = hours % 24;

      if (days >= 30) {
        let months = Math.floor(days / 30);
        let remainingDays = days % 30;
        return {
          months: months,
          days: remainingDays,
          hours: remainingHours,
          minutes: remainingMinutes,
          seconds: remainingSeconds,
        };
      }
      return {
        days: days,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      };
    }
    return {
      hours: hours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  }

  return { minutes: minutes, seconds: remainingSeconds };
};

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
console.log(getUnformattedTime(18411065), {
  months: 7,
  days: 3,
  hours: 2,
  minutes: 11,
  seconds: 5,
});
