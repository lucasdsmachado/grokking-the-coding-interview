const dutch_flag_sort = function (nums) {
  // ALL ELEMENTS < LOW ARE 0, AND ALL ELEMENTS > HIGH ARE 2
  // ALL ELEMENTS FROM >= LOW < I ARE 1
  let low = 0,
    high = nums.length - 1,
    i = 0;

  while (i <= high) {
    if (nums[i] === 0) {
      [nums[i], nums[low]] = [nums[low], nums[i]];
      // INCREMENT 'i' AND 'low'
      i++;
      low++;
    } else if (nums[i] === 1) {
      i++;
    } else { // THE CASE FOR nums[i] === 2
      [nums[i], nums[high]] = [nums[high], nums[i]];
      // DECREMENT 'high' ONLY, AFTER THE SWAP THE NUMBER AT INDEX 'i' COULD BE 0, 1 or 2
      high--;
    }
  }
}

let nums = [2, 0, 2, 1, 1, 0];
dutch_flag_sort(nums);
console.log(nums)
