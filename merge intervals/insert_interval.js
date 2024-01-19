const insert = function (intervals, newInterval) {
  let mergedIntervals = [];
  let start = newInterval[0],
    end = newInterval[1];

  for (let interval of intervals) {
    if (start <= interval[1] && end >= interval[0]) {
      start = Math.min(start, interval[0]);
      end = Math.max(end, interval[1]);
    } else if (end < interval[0]) {
      mergedIntervals.push([start, end]);
      start = interval[0];
      end = interval[1];
    } else {
      mergedIntervals.push(interval);
    }
  }

  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1,5],[6,9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // [[1,2],[3,10],[12,16]]
console.log(insert([[1, 5]], [0, 0])); // [[1,2],[3,10],[12,16]]
