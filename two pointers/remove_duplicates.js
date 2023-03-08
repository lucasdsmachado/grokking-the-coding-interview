const remove_duplicates = function (nums) {
  let nextNonDuplicate = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[nextNonDuplicate - 1] != nums[i]) {
      nums[nextNonDuplicate] = nums[i];
      nextNonDuplicate++;
    }
  }
  // return nums.slice(0, nextNonDuplicate);
  return nextNonDuplicate;
}

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])) // 4
console.log(remove_duplicates([2, 2, 2, 11])) // 2
