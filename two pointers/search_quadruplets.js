const search_quadruplets = function (nums, target) {
  nums.sort((a, b) => a - b);
  let quadruplets = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    search_triplet(nums, target - nums[i], i, quadruplets);
  }
  return quadruplets
}

const search_triplet = function (nums, target_sum, first, quadruplets) {
  for (let j = first + 1; j < nums.length - 2; j++) {
    if (j > first + 1 && nums[j] === nums[j - 1]) { // DO NOT COMPARE WITH I
      continue;
    }
    search_pair(nums, target_sum - nums[j], first, j, quadruplets);
  }
}

const search_pair = function (nums, target_sum, first, second, quadruplets) {
  let left = second + 1, right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target_sum) {
      quadruplets.push([nums[first], nums[second], nums[left], nums[right]]);
      left++;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      right--;
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }

    } else if (nums[left] + nums[right] < target_sum) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));
console.log(search_quadruplets([2, 2, 2, 2, 2], 8));
console.log(search_quadruplets([-2, -1, -1, 1, 1, 2, 2], 0));
