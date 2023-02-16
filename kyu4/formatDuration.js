function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365 * day;
}
console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
