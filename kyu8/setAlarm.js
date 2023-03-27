const setAlarm = (employed, vacation) => {
  if (employed === true && vacation === false) {
    return true;
  } else {
    return false;
  }
};
console.log(setAlarm(true, true), false, "Should be false.");
console.log(setAlarm(false, true), false, "Should be false.");
console.log(setAlarm(true, false), true, "Should be true.");
