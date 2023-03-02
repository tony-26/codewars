function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let gasLeft = 100;
  while (gasLeft > threshold) {
    gasLeft *= 1 - evap_per_day / 100;
    days += 1;
  }
  return days;
}
console.log(evaporator(10, 10, 10), 22);
