const validatePIN = (pin) => {
  if (
    (pin.length && /^[0-9]+$/.test(pin) === true) ||
    pin.length === 4 ||
    /^[0-9]+$/.test(pin) === true
  ) {
    return true;
  } else {
    return false;
  }
};
