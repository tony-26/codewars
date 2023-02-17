function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365 * day;
}

const secondsToMinutes = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  if (minutes === 1) {
    if (remainingSeconds === 1) {
      return minutes + " minute " + remainingSeconds + " second";
    } else {
      return minutes + " minute " + remainingSeconds + " seconds";
    }
  } else {
    if (remainingSeconds === 1) {
      return minutes + " minutes " + remainingSeconds + " second";
    } else {
      return minutes + " minutes " + remainingSeconds + " seconds";
    }
  }
};

const minutesToHours = (minutes) => {
  let hours = Math.floor(minutes / 60);
  let remainingMinutes = minutes % 60;

  if (hours === 1) {
    if (remainingMinutes === 1) {
      return hours + " hour " + remainingMinutes + " minute";
    } else {
      return hours + " hour " + remainingMinutes + " minutes";
    }
  } else {
    if (remainingMinutes === 1) {
      return hours + " hours " + remainingMinutes + " minute";
    } else {
      return minutes + " hours " + remainingMinutes + " minutes";
    }
  }
};
console.log(minutesToHours(70));
// console.log(secondsToMinutes(70)); // "1 minute 10 seconds"
// console.log(secondsToMinutes(120)); // "2 minutes 0 seconds"
// console.log(secondsToMinutes(3661)); // "61 minutes 1 second"
// console.log(formatDuration(1), "1 second");
// console.log(formatDuration(62), "1 minute and 2 seconds");
// console.log(formatDuration(120), "2 minutes");
// console.log(formatDuration(3600), "1 hour");
// console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
