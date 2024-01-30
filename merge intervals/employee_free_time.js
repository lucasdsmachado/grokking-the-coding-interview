import Heap from 'collections/heap.js';

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const find_employee_free_time = function (schedule) {
  let res = [];
  const pq = new Heap([], null, (a, b) => b.start - a.start);
  for (let employee of schedule) {
    for (let period of employee) {
      pq.push(new Interval(...period));
    }
  }
  let curr = pq.pop();
  while (pq.length > 0) {
    if (curr.end >= pq.peek().start) {
      curr.end = Math.max(curr.end, pq.pop().end);
    } else {
      res.push(new Interval(curr.end, pq.peek().start));
      curr = pq.pop();
    }
  }
  return res;
}

console.log(find_employee_free_time([[[1, 3], [5, 6]], [[2, 3], [6, 8]]])); // [ [3, 5] ]
console.log(find_employee_free_time([[[1, 3], [9, 12]], [[2, 4]], [[6, 8]]])); // [ [4, 6], [8, 9] ]
console.log(find_employee_free_time([[[1, 3]], [[2, 4]], [[3, 5], [7, 9]]])); // [ [5, 7] ]
console.log(find_employee_free_time([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]])); // [ [5, 6], [7, 9] ]