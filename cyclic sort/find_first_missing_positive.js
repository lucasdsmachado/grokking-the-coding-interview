const find_first_missing_positive = function (nums) {
  let i = 0, n = nums.length;
  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log(find_first_missing_positive([-3, 1, 5, 4, 2])); // 3
console.log(find_first_missing_positive([3, 2, 5, 1])); // 4
console.log(find_first_missing_positive([3, -2, 0, 1, 2])); // 4 