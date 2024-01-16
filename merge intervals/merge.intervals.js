function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  // sort the intervals on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [];
  let start = intervals[0][0],
    end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= end) {
      end = Math.max(interval[1], end); // overlapping intervals, adjust the end
    } else { // non-overlapping intervals, add the previous interval and reset
      mergedIntervals.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }
  // add the last interval
  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [2, 5], [7, 9]])); // [[1,5], [7,9]]
console.log(merge([[6, 7], [2, 4], [5, 9]])); // [[2,4], [5,9]]
console.log(merge([[1, 4], [2, 6], [3, 5]])); // [[1,6]]
