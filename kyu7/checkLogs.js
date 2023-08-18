function checkLogs(log) {
  if (log.length === 0) {
    return 0;
  }

  let minDays = 1;

  for (let i = 1; i < log.length; i++) {
    const currTime = new Date(`1970-01-01T${log[i]}`);
    const prevTime = new Date(`1970-01-01T${log[i - 1]}`);
    const timeDiffInSeconds = (currTime - prevTime) / 1000;

    if (timeDiffInSeconds < 0) {
      minDays++;
    }
  }

  return minDays;
}
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"])); //2
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"])); //3
