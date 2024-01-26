const find_max_cpu_load = function (jobs) {
  jobs.sort((a, b) => a[0] - b[0]);
  if (jobs.length === 0) {
    return 0;
  }
  let maxCPULoad = jobs[0][2];
  for (let i = 1; i < jobs.length; i++) {
    if (jobs[i - 1][1] > jobs[i][0]) {
      jobs[i][0] = jobs[i - 1][0];
      jobs[i][1] = Math.max(jobs[i][1], jobs[i - 1][1]);
      jobs[i][2] = jobs[i - 1][2] + jobs[i][2];
    }
    maxCPULoad = Math.max(maxCPULoad, jobs[i][2]);
  }

  return maxCPULoad;
}

console.log(find_max_cpu_load([[1, 4, 3], [2, 5, 4], [7, 9, 6]])); // 7
console.log(find_max_cpu_load([[6, 7, 10], [2, 4, 11], [8, 12, 15]])); // 15
console.log(find_max_cpu_load([[1, 4, 2], [2, 4, 1], [3, 6, 5]])); // 8