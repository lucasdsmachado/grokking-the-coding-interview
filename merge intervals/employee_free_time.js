import Heap from 'collections/heap.js';

const find_employee_free_time = function (schedule) {
  let res = [];
  const pq = new Heap([], null, (a, b) => a[0] < b[0]);
   
  schedule.forEach((employee) => {
    employee.forEach((period) => {
      pq.add(period);
    })
  })
  
  let curr = pq.pop();
  
  while (pq.length > 0) {
    if (curr[1] >= pq.peek()[0]) {
      curr[1] = Math.max(curr[1], pq.pop()[1]);
    } else {
      res.push([curr[1], pq.peek()[0]]);
      curr = pq.pop();
    }
  }
  
  return res;
}

console.log(find_employee_free_time([[[1, 3], [5, 6]], [[2, 3], [6, 8]]])); // [ [3, 5] ]
console.log(find_employee_free_time([[[1, 3], [9, 12]], [[2, 4]], [[6, 8]]])); // [ [4, 6], [8, 9] ]
console.log(find_employee_free_time([[[1, 3]], [[2, 4]], [[3, 5], [7, 9]]])); // [ [5, 7] ]
console.log(find_employee_free_time([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]])); // [ [5, 6], [7, 9] ]