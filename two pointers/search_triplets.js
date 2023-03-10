const search_triplets = function (arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) { // SKIP THE SAME ELEMENT TO AVOID DUPLICATE TRIPLETS
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

const search_pair = function (arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) { // FOUND THE TRIPLET
      triplets.push([-target_sum, arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++; // SKIP THE SAME ELEMENT TO AVOID DUPLICATE TRIPLETS
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--; // SKIP THE SAME ELEMENT TO AVOID DUPLICATE TRIPLETS
      }
    } else if (target_sum > current_sum) {
      left++; // WE NEED A PAIR WITH A BIGGER SUM
    } else {
      right--; // WE NEED A PAIR WITH A SMALLER SUM
    }
  }
}
