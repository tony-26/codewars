const validateUsr = (username) => {
  const range = /^[a-z0-9_]{4,16}$/;
  return range.test(username);
};
