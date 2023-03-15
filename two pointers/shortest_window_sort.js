const shortest_window_sort = function (nums) {
  let low = 0,
    high = nums.length - 1,
    subarrayMax = Number.MIN_VALUE,
    subarrayMin = Number.MAX_VALUE;
  // FIND THE FIRST NUMBER OUT OF SORTING ORDER FROM THE BEGINNIG
  while (low < nums.length && nums[low] <= nums[low + 1]) {
    low++;
  }

  if (low === nums.length - 1) { // THE ARRAY IS SORTED
    return 0;
  }
  // FIND THE THE FIRST NUMBER OUT OF SORTING ORDER FROM THE END
  while (high > 0 && nums[high] >= nums[high - 1]) {
    high--;
  }

  // FIND THE MAXIMUM AND MINIMUM OF THE SUBARRAY
  for (let i = low; i <= high; i++) {
    subarrayMax = Math.max(subarrayMax, nums[i]);
    subarrayMin = Math.min(subarrayMin, nums[i]);
  }

  // EXTEND THE SUBARRAY TO INCLUDE ANY NUMBER WHICH IS BIGGER THAN THE MINIMUM OF SUBARRAY
  while (low > 0 && nums[low - 1] > subarrayMin) {
    low--;
  }

  // EXTEND THE SUBARRAY TO INCLUDE ANY NUMBER WHICH IS SMALLER THAN THE MAX OF SUBARRAY
  while (high < nums.length - 1 && nums[high + 1] < subarrayMax) {
    high++;
  }

  return high - low + 1;
}

console.log(shortest_window_sort([3, 2, 1])); // 3
console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12])); // 5
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]))// 4
console.log(shortest_window_sort([1, 2, 3])); // 0
console.log(shortest_window_sort([1, 2, 3, 4])); // 0
console.log(shortest_window_sort([1])); // 0
console.log(shortest_window_sort([1, 2, 3, 3, 3])); // 0
console.log(shortest_window_sort([1, 3, 2, 2, 2])); // 4
