const updateLight = (current) => {
  if (current === "red") {
    current = "green";
  } else if (current === "green") {
    current = "yellow";
  } else if (current === "yellow") {
    current = "red";
  }
  return current;
};
