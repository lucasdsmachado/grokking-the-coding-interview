import Heap from 'collections/heap.js';

const min_meeting_rooms = function (meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  let minRooms = 0,
    minHeap = new Heap([], null, ((a, b) => b[1] - a[1]));

  for (let i = 0; i < meetings.length; i++) {
    while (minHeap.length > 0 && meetings[i][0] >= minHeap.peek()[1])
      minHeap.pop();
    minHeap.push(meetings[i]);
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}

console.log(min_meeting_rooms([[1, 4], [2, 5], [7, 9]])); // 2
console.log(min_meeting_rooms([[6, 7], [2, 4], [8, 12]])); // 1
console.log(min_meeting_rooms([[1, 4], [2, 3], [3, 6]])); // 2
console.log(min_meeting_rooms([[4, 5], [2, 3], [2, 4], [3, 5]])); // 2