const validatePIN = (pin) => {
  if (pin < 0) {
    return false;
  }
  if (pin.length === 4 && /^\d+$/.test(pin)) {
    return true;
  } else if (pin.length === 6 && /^\d+$/.test(pin)) {
    return true;
  } else {
    return false;
  }
};
console.log(validatePIN("1234.0")); //false

//Regex validate PIN code
