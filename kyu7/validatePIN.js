const validatePIN = (pin) => {
  if (pin < 0) {
    return false;
  }
  if (pin.length === 4 && /^\d+$/.test(pin)) {
    return true;
  } else if (pin.length === 6) {
    return true;
  } else {
    return false;
  }
};

//Regex validate PIN code
