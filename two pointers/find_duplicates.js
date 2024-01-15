const find_duplicates = function (nums) {
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]]
  } while (fast !== slow);
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

console.log(find_duplicates([1, 3, 4, 2, 2]));
console.log(find_duplicates([3, 1, 3, 4, 2]));
console.log(find_duplicates([2, 5, 9, 6, 1, 3, 8, 9, 7, 1]));