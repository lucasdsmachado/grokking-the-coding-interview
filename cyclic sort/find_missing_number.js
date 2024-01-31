const find_missing_number = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let currentIdx = nums[i] - 1;
    if (nums[i] !== 0 && nums[i] !== nums[currentIdx]) {
      [nums[i], nums[currentIdx]] = [nums[currentIdx], nums[i]];
    } else {
      i++;
    }
  }
  return nums.indexOf(0) + 1;
}

console.log(find_missing_number([3, 0, 1]));
console.log(find_missing_number([0, 1]));
console.log(find_missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1]));