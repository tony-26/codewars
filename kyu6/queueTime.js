const getShortestQueueIndex = (queues) => {
  const sums = queues.map((queue) => {
    return queue.reduce((r, e) => {
      return r + e;
    }, 0);
  });
  const minimum = [...sums].sort((a, b) => a - b)[0];
  return sums.indexOf(minimum);
};
//console.log(getShortestQueueIndex([[1, 2, 5], [4], [10, 7, 8], [10, 1]])); //1

const getLongestQueue = (queues) => {
  const sums = queues.map((queue) => {
    return queue.reduce((r, e) => {
      return r + e;
    }, 0);
  });
  return (minimum = [...sums].sort((a, b) => b - a)[0]);
};

const createEmptyQueues = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  return result;
};

function queueTime(customers, n) {
  const queues = createEmptyQueues(n);
  while (customers.length > 0) {
    const nextCustomer = customers.shift();
    const index = getShortestQueueIndex(queues);
    queues[index].push(nextCustomer);
  }
  return getLongestQueue(queues);
}
// console.log(queueTime([], 1), 0);
// console.log(queueTime([1, 2, 3, 4], 1), 10);
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
// console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
// console.log(queueTime([5, 3, 4], 1), 12);
// console.log(queueTime([10, 2, 3, 3], 2), 10);
// console.log(queueTime([2, 3, 10, 2], 2), 12);
console.log(queueTime([1, 2, 3, 3, 4, 5, 1, 1, 3, 4, 1], 3));
// q1: 1, 3, 1, 1, 3;
// q2: 2, 4, 4;
// q3: 3, 5, 1;
