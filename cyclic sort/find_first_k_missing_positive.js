const find_first_k_missing_positive = function (nums, k) {
  let i = 0,
    n = nums.length,
    missing = [],
    present = new Set();

  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] <= n && nums[i] > 0 && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  
  console.log(nums);

  i = 0;

  while (i < n && missing.length < k) {
    if (nums[i] !== i + 1) {
      missing.push(i + 1);
      present.add(nums[i]);
    }
    i++;
  }

  i = 1;

  while (missing.length < k) {
    const candidate = i + n;
    if (!present.has(candidate)) {
      missing.push(candidate);
    }
    i++;
  }

  return missing;
}

console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3)); // [1, 2, 6]
console.log(find_first_k_missing_positive([2, 3, 4], 3)); // [1, 5, 6]
console.log(find_first_k_missing_positive([-2, -3, 4], 2)); // [1, 2]