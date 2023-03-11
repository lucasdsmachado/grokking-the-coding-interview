const search_triplets = function (nums, targetSum) {
  nums.sort((a, b) => a - b);
  let smallestDifference = Number.MAX_VALUE;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      let targetDiff = targetSum - nums[i] - nums[left] - nums[right];

      if (Math.abs(targetDiff) < Math.abs(smallestDifference)) {
        smallestDifference = targetDiff;
      }

      if (targetDiff === 0) {
        return targetSum - targetDiff
      } else if (targetDiff > 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return targetSum - smallestDifference;
}

console.log(search_triplets([-2, 0, 1, 2], 2));
console.log(search_triplets([-3, -1, 1, 2], 1));
console.log(search_triplets([1, 0, 1, 1], 100));
