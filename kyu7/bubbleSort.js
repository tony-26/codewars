function BubbleSort(list) {
  let temp;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] > list[j + 1]) {
        // Swap Elements
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
}

console.log(BubbleSort([29, 10, 14, 30, 37, 19, 18]));
