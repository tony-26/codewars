function cockroachSpeed(s) {
  const unit = (s * 100000) / (60 * 60);
  return Math.trunc(unit);
}
console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);
