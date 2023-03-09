/*
 * Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
 *
 * Example 1: Input: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
 * Output: [2.2, 2.8, 2.4, 3.6, 2.8]
 *
 * Time complexity: O(n*k)
 * Since for every element of the input array, we calculate
 * the sum of its next K elements
 */

const find_averages_of_subarrays_b = function (K, arr) {
  let averages = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0.0
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    averages.push(sum / K);
  }

  return averages;
}

const find_averages_of_subarrays = function(K, arr) {
  let averages = [], sum = 0.0, windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= K - 1) {
      averages.push(sum / K);
      sum -= arr[windowStart++];
    }
  }
  return averages
}

console.log(find_averages_of_subarrays_b(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
console.log(find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2],));
