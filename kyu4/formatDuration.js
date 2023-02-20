function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  return secondsToMinutes(seconds);
}

const secondsToMinutes = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  if (seconds === 1) {
    return seconds + " second";
  } else if (seconds < 60) {
    return seconds + " seconds";
  }
  if (minutes === 1) {
    if (remainingSeconds === 1) {
      return minutes + " minute " + "and " + remainingSeconds + " second";
    } 
    
    
    else {
      return minutes + " minute " + "and " + remainingSeconds + " seconds";
    }
  } else {
    if (remainingSeconds === 1) {
      return minutes + " minutes " + "and " + remainingSeconds + " second";
    } else {
      return minutes + " minutes " + "and " + remainingSeconds + " seconds";
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
const hoursToDays = (hours) => {
  let days = Math.floor(hours / 24);
  let remainingHours = hours % 24;

  if (days === 1) {
    if (remainingHours === 1) {
      return days + " day " + remainingHours + " hour";
    } else {
      return days + " day " + remainingHours + " hours";
    }
  } else {
    if (remainingHours === 1) {
      return days + " days " + remainingHours + " hour";
    } else {
      return days + " days " + remainingHours + " hours";
    }
  }
};
const daysToYears = (days) => {
  let years = Math.floor(days / 365);
  let remainingDays = days % 365;
  if (years === 1) {
    if (remainingDays === 1) {
      return years + " year " + remainingDays + " day";
    } else {
      return years + " year " + remainingDays + " days";
    }
  } else {
    if (remainingDays === 1) {
      return years + " years " + remainingDays + " day";
    } else {
      return years + " years " + remainingDays + " days";
    }
  }
};
//console.log(daysToYears(700));
//console.log(hoursToDays(90));
//console.log(minutesToHours(70));
console.log(formatDuration(1)); //
console.log(formatDuration(51));
console.log(formatDuration(60));
console.log(formatDuration(70)); // "1 minute and 10 seconds"
console.log(formatDuration(120));
// console.log(secondsToMinutes(120)); // "2 minutes 0 seconds"
// console.log(secondsToMinutes(3661)); // "61 minutes 1 second"
// console.log(formatDuration(1), "1 second");
// console.log(formatDuration(62), "1 minute and 2 seconds");
// console.log(formatDuration(120), "2 minutes");
// console.log(formatDuration(3600), "1 hour");
// console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
