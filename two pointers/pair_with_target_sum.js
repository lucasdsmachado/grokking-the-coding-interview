/**
 * @param {number[]} arr
 * @param {number} target_sum
 * @return {number[]}
 */
const pair_with_target_sum = function (arr, target_sum) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (target_sum === currSum)
      return [left, right]
    else if (target_sum > currSum)
      left++;
    else
      right--;
  }

  return [-1, -1];
}

console.log(pair_with_target_sum([2, 3, 4], 6))
console.log(pair_with_target_sum([2, 5, 9, 11], 11))
