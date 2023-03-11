const make_squares = function (nums) {
  let squares = new Array(nums.length);
  let left = 0, right = nums.length - 1, nextIndex = right;
  while (left <= right) {
    let leftSquare = Math.pow(nums[left], 2),
      rightSquare = Math.pow(nums[right], 2);
    if (leftSquare <= rightSquare) {
      squares[nextIndex] = rightSquare;
      right--;
    } else {
      squares[nextIndex] = leftSquare;
      left++;
    }
    nextIndex--;
  }
  return squares
}

console.log(make_squares([-2, -1, 0, 2, 3]))
