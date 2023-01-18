function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  } else {
    let positive = 0;
    let negtive = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positive = positive + 1;
      } else if (input[i] < 0) {
        negtive = negtive + input[i];
      }
    }
    return [positive, negtive];
  }
}
