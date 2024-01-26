import Heap from 'collections/heap.js';

const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a[0] - b[0]);

  let maxCPULoad = 0,
    currentCPULoad = 0,
    minHeap = new Heap([], null, (a, b) => b[1] - a[1]);

  for (let i = 0; i < jobs.length; i++) {
    while (minHeap.length > 0 && jobs[i][0] >= minHeap.peek()[1])
      currentCPULoad -= minHeap.pop()[2];
    minHeap.push(jobs[i]);
    currentCPULoad += jobs[i][2];
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}

console.log(find_max_cpu_load([[1, 4, 3], [2, 5, 4], [7, 9, 6]])); // 7
console.log(find_max_cpu_load([[6, 7, 10], [2, 4, 11], [8, 12, 15]])); // 15
console.log(find_max_cpu_load([[1, 4, 2], [2, 4, 1], [3, 6, 5]])); // 8
console.log(find_max_cpu_load([[2, 4, 5], [0, 6, 7], [5, 10, 6], [0, 3, 10]])); // 22
console.log(find_max_cpu_load([[2, 4, 5], [0, 6, 7], [5, 10, 6]])) // 13
console.log(find_max_cpu_load([[1, 3, 50], [2, 4, 10], [3, 5, 40], [3, 6, 70]])); // 120
console.log(find_max_cpu_load([[1, 3, 20], [2, 5, 20], [3, 10, 100], [4, 6, 70], [6, 9, 60]])); //190
console.log(find_max_cpu_load([[1, 2, 5], [1, 3, 6], [1, 4, 4]])); // 15