const find_missing_number = function (nums) {
  let i = 0,
    n = nums.length;
  while (i < n) {
    let j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  
  for (i = 0; i < n; i++) {
    if (nums[i] !== i)
      return i;
  }
  
  return n;
}

console.log(find_missing_number([3, 0, 1])); // 2
console.log(find_missing_number([0, 1])); // 2
console.log(find_missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8