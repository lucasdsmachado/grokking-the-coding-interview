const maximum_subarray = function (nums) {
  let currSum = -Infinity, maxSum = -Infinity;
  for (let num of nums) {
    currSum = Math.max(currSum + num, num);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

console.log(maximum_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maximum_subarray([1]));
console.log(maximum_subarray([5, 4, -1, 7, 8]));