const find_missing_numbers = function (nums) {
  let i = 0, missing = [];
  while (i < nums.length) {
    let correctIdx = nums[i] - 1;
    if (nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1)
      missing.push(i + 1)
  }

  return missing;
}

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1])); // [4, 6, 7]
console.log(find_missing_numbers([2, 4, 1, 2])); // [3]
console.log(find_missing_numbers([2, 3, 2, 1])); // [4]