const find_employee_free_time = function (schedule) {
  let intervals = [], freetime = [];
  for (let employee of schedule) {
    for (let time of employee) {
      intervals.push(time);
    }
  }

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > intervals[i - 1][1]) {
      freetime.push([intervals[i - 1][1], intervals[i][0]]);
    }
  }

  return freetime;
}

console.log(find_employee_free_time([[[1, 3], [5, 6]], [[2, 3], [6, 8]]])); // [ [3, 5] ]
console.log(find_employee_free_time([[[1, 3], [9, 12]], [[2, 4]], [[6, 8]]])); // [ [4, 6], [8, 9] ]
console.log(find_employee_free_time([[[1, 3]], [[2, 4]], [[3, 5], [7, 9]]])); // [ [5, 7] ]
console.log(find_employee_free_time([[[1, 3], [6, 7]], [[2, 4]], [[2, 5], [9, 12]]])); // [ [5, 6], [7, 9] ]