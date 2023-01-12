function removeUrlAnchor(url) {
  let index = 0;
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      index = i;
    }
  }
  return url.slice(i);
}
console.log(removeUrlAnchor("www.codewars.com#about"), "www.codewars.com");
// console.log(
//   removeUrlAnchor("www.codewars.com/katas/?page=1#about"),
//   "www.codewars.com/katas/?page=1"
// );
// console.log(
//   removeUrlAnchor("www.codewars.com/katas/"),
//   "www.codewars.com/katas/"
// );
