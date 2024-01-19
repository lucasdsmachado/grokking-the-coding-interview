const meeting_rooms = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}

console.log(meeting_rooms([[1, 4], [2, 5], [7, 9]]));
console.log(meeting_rooms([[6, 7], [2, 4], [8, 12]]));
console.log(meeting_rooms([[4, 5], [2, 3], [3, 6]])); 