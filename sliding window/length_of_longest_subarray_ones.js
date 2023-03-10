function lengthOfLongestSubstring(arr, k) {
  let windowStart = 0, maxLength = 0, maxOnesCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value === 1) maxOnesCount++;

    if ((i - windowStart + 1 - maxOnesCount) > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount--;
      }
      windowStart++;
    }

    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
// console.log(lengthOfLongestSubstring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9
