const unformatted = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return { minutes: minutes, seconds: remainingSeconds };
};

const formatTime = (time) => {
  const { minutes, seconds } = time;
  let minutesStr = "";
  if (minutes !== 0) {
    if (minutes === 1) {
      minutesStr += "1 minute";
    } else {
      minutesStr = minutesStr + " minutes";
    }
  }
  if (seconds === 1) {
    return minutesStr + " and 1 second";
  } else {
    return minutesStr + " and " + seconds + " seconds";
  }
};
//console.log(formatTime({ minutes: 1, seconds: 30 }, "1 minute and 30 seconds"));
const allFormatTime = (time) => {
  const { years, days, hours, minutes, seconds } = time;
  let outputStr = "";
  if (years === 1) {
    outputStr += " year";
  } else {
    outputStr += " years";
  }
  outputStr += ", ";

  if (days === 1) {
    outputStr += " day";
  } else {
    outputStr += " days";
  }
  outputStr += ", ";

  if (hours === 1) {
    outputStr += " hour";
  } else {
    outputStr += " hours";
  }
  outputStr += ", ";

  if (seconds === 1) {
    outputStr += " second";
  } else {
    outputStr += " seconds";
  }
  return outputStr;
};

const unformattedTime




console.log(allFormatTime({ years: 1, days: 12, hours: 23, seconds: 1 })); //"1 year, 12 days, 23 hours and 1 second."

// console.log(unformatted(90), { minutes: 1, seconds: 30 });
// console.log(unformatted(31), { minutes: 0, seconds: 31 });
// console.log(unformatted(2000), { minutes: 33, secondes: 20 });
// console.log(unformatted(1), { minutes: 0, secondes: 1 });
//console.log(unformatted(60), { minutes: 1, secondes: 0 });
