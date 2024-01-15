function search_triplets(nums, target) {
  nums.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < nums.length - 2; i++) {
    search_pair(nums, target - nums[i], i, triplets)
  }
  return triplets;
}

function search_pair(nums, target, first, triplets) {
  let left = first + 1, right = nums.length - 1;
  while (left < right) {
    let currSum = nums[left] + nums[right];
    if (currSum < target) {
      for (let i = right; i > left; i--) {
        triplets.push([nums[first], nums[left], nums[i]]);
      }
      left++;
    } else {
      right--;
    }
  }
}

console.log(search_triplets([-1, 0, 2, 3], 3));
console.log(search_triplets([-1, 4, 2, 1, 3], 5));