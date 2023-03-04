function validParentheses(parens) {
  if (parens.length === 0) {
    return true;
  }
  if (parens.length%2!==0){
    return false
  }
  for (let i=0;i<parens.length;i++){
    
  }
  return false;
}
console.log(validParentheses("("), false);
console.log(validParentheses(")"), false);
console.log(validParentheses(""), true);
console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
