function validParentheses(parens) {
  //termination condition 1
  if (parens.length === 0) return true;
  //termination condition 2
  if (parens === parens.replace("()", "")) return false;
  //recurrsive step
  return validParentheses(parens.replace("()", ""));
}
// console.log(validParentheses("("), false);
// console.log(validParentheses(")"), false);
// console.log(validParentheses(""), true);
// console.log(validParentheses("()"), true);
// console.log(validParentheses("())"), false);
// console.log(validParentheses("(()(()()))"));
//step1: looking for a pair of "()", if not fund return false
//step2: if fund, remove "()" => "((()()))"
//step3: if string is empty, return true, else:  repeat step1 and 2 =>
//
