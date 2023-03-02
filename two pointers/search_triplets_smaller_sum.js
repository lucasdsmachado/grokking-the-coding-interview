const search_triplets = function (arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}

const search_pair = function (arr, target_sum, first) {
  let count = 0,
    left = first + 1,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < target_sum) { // FOUND THE TRIPLET
      // SINCE ARR[RIGHT] >= ARR[LEFT], THEREFORE, WE CAN REPLACE ARR[RIGHT]
      // BY ANY NUMBER BETWEEN LEFT AND RIGHT TO GET A SUM LESS THAN THE TARGET SUM
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}

console.log(search_triplets([-1, 0, 2, 3], 3))
console.log(search_triplets([-1, 4, 2, 1, 3], 5))
