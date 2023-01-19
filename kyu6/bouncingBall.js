function bouncingBall(h, bounce, window) {
  if (h <= 0) {
    return -1;
  } else if (bounce <= 0 || bounce >= 1) {
    return -1;
  } else if (window >= h) {
    return -1;
  }
  let bounceTimes = 0;
  while (h > window) {
    bounceTimes += 2;
    h = h * bounce;
  }
  return bounceTimes - 1;
}
