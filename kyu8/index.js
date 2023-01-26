function index(array, n) {
  if (array.length < n + 1) {
    return -1;
  }
  return array[n] ** n;
}
