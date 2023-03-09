/*
 * Given an array of positive numbers and a positive number ‘S’,
 * find the minLength of the smallest contiguous subarray whose sum is greater
 * than or equal to ‘S’. Return 0, if no such subarray exists.
 *
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
 *
 * Input: [2, 1, 5, 2, 8], S=7
 * Output: 1
 * Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
 *
 * Input: [3, 4, 1, 1, 6], S=8
 * Output: 3
 * Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
 */

/*
 * Time Complexity: O(N)
 * The outer for loop runs for all elements and the inner while loop processes
 * each element only once, therefore the time complexity of the algorithm will be
 * O(N+N) which is asymptotically equivalent to O(N).
 */

const smallest_subarray_sum = function (s, arr) {
  let sum = 0, minLength = Number.MAX_VALUE, windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      sum -= arr[windowStart];
      windowStart++;
    }
  }
  
  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;;
}

console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])); // 2
console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 8])); // 1
console.log(smallest_subarray_sum(8, [3, 4, 1, 1, 6])); // 3
