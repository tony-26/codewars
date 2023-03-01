function humanReadable(seconds) {
  if (seconds > 359999) return "";
  let remainingTime = seconds;
  let remainingSeconds = seconds % 60;
  remainingTime = remainingTime - remainingSeconds;
  if (remainingSeconds.toString().length === 1) {
    remainingSeconds = "0" + remainingSeconds;
  }

  const minutes = remainingTime / 60;
  let remainingMinutes = minutes % 60;
  remainingTime = minutes - remainingMinutes;
  if (remainingMinutes.toString().length === 1) {
    remainingMinutes = "0" + remainingMinutes;
  }

  let hours = remainingTime / 60;
  if (hours.toString().length === 1) {
    hours = "0" + hours;
  }
  return hours + ":" + remainingMinutes + ":" + remainingSeconds;
}
console.log(humanReadable(0), "00:00:00", "humanReadable(0)");
console.log(humanReadable(59), "00:00:59", "humanReadable(59)");
console.log(humanReadable(90), "00:01:30", "humanReadable(90)");
console.log(humanReadable(3599), "00:59:59", "humanReadable(3599)");
console.log(humanReadable(3600), "01:00:00", "humanReadable(3600)");
console.log(humanReadable(45296), "12:34:56", "humanReadable(45296)");
console.log(humanReadable(86399), "23:59:59", "humanReadable(86399)");
console.log(humanReadable(86400), "24:00:00", "humanReadable(86400)");
console.log(humanReadable(359999), "99:59:59", "humanReadable(359999)");
