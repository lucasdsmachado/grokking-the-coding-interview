/*
 * Given an array of positive numbers and a positive number ‘k’,
 * find the maximum sum of any contiguous subarray of size ‘k’.
 *
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 *
 * Input: [2, 3, 4, 1, 5], k=2
 * Output: 7
 * Explanation: Subarray with maximum sum is [3, 4].
 */

// Time complexity: O(n*k)

const max_sub_array_of_size_k_b = function (k, arr) {
  let max = 0;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0.0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(sum, max);
  }
  return max
};

// Time complexity: O(n)
const max_sub_array_of_size_k = function (k, arr) {
  let max = 0, sum = 0, windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(sum, max);
      sum -= arr[windowStart++];
    }
  }
  return max
};

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

console.log(max_sub_array_of_size_k_b(k, arr));
console.log(max_sub_array_of_size_k(k, arr));
