const merge = function (interval_a, interval_b) {
  let merged = [],
    i = 0,
    j = 0;

  while (i < interval_a.length && j < interval_b.length) {
    const start = Math.max(interval_a[i][0], interval_b[j][0]);
    const end = Math.min(interval_a[i][1], interval_b[j][1]);

    if (start <= end) merged.push([start, end]);

    interval_a[i][1] < interval_b[j][1] ? i++ : j++;
  }
  return merged;
}

console.log(merge([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])); // [ [ 2, 3 ], [ 5, 6 ], [ 7, 7 ] ]
console.log(merge([[1, 3], [5, 7], [9, 12]], [[5, 10]])); // [ [ 5, 7 ], [ 9, 10 ] ]
console.log(merge([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]])); // [ [1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25] ]
console.log(merge([[1, 3], [5, 9]], [])); // []