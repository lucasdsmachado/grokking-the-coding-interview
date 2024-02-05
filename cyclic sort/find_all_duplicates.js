const find_all_duplicates = function (nums) {
  let i = 0, duplicates = [];
  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicates.push(nums[i]);
    }
  }
  
  return duplicates;
}

console.log(find_all_duplicates([3, 4, 4, 5, 5])); // [4, 5]
console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3])); // [3, 5]
console.log(find_all_duplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]