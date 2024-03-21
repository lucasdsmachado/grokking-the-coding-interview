import Heap from 'collections/heap.js';

function leastTime(task, n) {
  let frequencies = new Map();

  for (let c of task) {
    frequencies.set(c, (frequencies.get(c) || 0) + 1);
  }

  let pq = new Heap(Array.from(frequencies.values()), null, (a, b) => a - b),
    result = 0;

  while (pq.length > 0) {
    let time = 0,
      queue = [],
      i = 0;

    while (i < n + 1 && pq.length > 0) {
      queue.push(pq.pop() - 1);
      time++;
      i++;
    }

    queue.forEach((c) => {
      if (c > 0) pq.push(c);
    });

    result += pq.length === 0 ? time : n + 1;
  }

  return result;
}

console.log(leastTime(["A", "A", "A", "A"], 2)); // 10
console.log(leastTime(["A", "A", "B", "B"], 2)); // 5
console.log(leastTime(["A", "B", "A"], 2)); // 4
console.log(leastTime(["A", "A", "A", "B", "B", "C", "C"], 1)); // 7
console.log(leastTime(["S", "I", "V", "U", "W", "D", "U", "X"], 0)); // 8
console.log(leastTime(["A", "K", "X", "M", "W", "D", "X", "B", "D", "C", "O", "Z", "D", "E", "Q"], 3)); // 15
console.log(leastTime(["A", "B", "C", "O", "Q", "C", "Z", "O", "X", "C", "W", "Q", "Z", "B", "M", "N", "R", "L", "C", "J"], 10)); // 34