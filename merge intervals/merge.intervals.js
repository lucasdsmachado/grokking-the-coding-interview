function merge(intervals) {
  if (intervals.length === 0 || intervals.length[0] === 0) {
    return [];
  }

  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = merged.pop(), curr = intervals[i];
    if (prev[1] >= curr[0] && prev[1] <= curr[1]) { // curr ends after
      merged.push([prev[0], curr[1]]);
    } else if (prev[1] >= curr[0] && prev[1] >= curr[1]) { // prev contains curr
      merged.push(prev);
    } else { // disjoint
      merged.push(prev, curr);
    }
  }

  return merged;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [2, 5], [7, 9]])); // [[1,5], [7,9]]
console.log(merge([[6, 7], [2, 4], [5, 9]])); // [[2,4], [5,9]]
console.log(merge([[1, 4], [2, 6], [3, 5]])); // [[1,6]]
