const mango = (quantity, price) => {
  if (quantity <= 2) {
    return quantity * price;
  }
  let mangoPaid = Math.floor(quantity / 3) * 2;
  let total = mangoPaid * price;
  return total;
};
console.log(mango(3, 3), 6);
console.log(mango(9, 5), 30);
