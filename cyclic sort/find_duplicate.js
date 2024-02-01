const find_duplicate = function (nums) {
  let i = 0, duplicate = 0;
  while (i < nums.length) {
    let correctIdx = nums[i] - 1;
    if (nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
    } else if (i !== correctIdx) {
      duplicate = nums[i];
      break;
    } else {
      i++;
    }
  }
  return duplicate;
}
console.log(find_duplicate([1, 4, 4, 3, 2])); // 4
console.log(find_duplicate([2, 1, 3, 3, 5, 4])); // 3
console.log(find_duplicate([2, 4, 1, 4, 4])); // 4