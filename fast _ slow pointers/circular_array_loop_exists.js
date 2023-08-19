const circular_array_loop_exists = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let isForward = arr[i] >= 0, // IF WE ARE MOVING FORWARD OR NOT
      slow = i, fast = i;

    // IF SLOW OR FAST BECOMES '-1', THIS MEANS WE CAN'T FIND CYCLE FOR THIS NUMBER
    while (true) {
      // MOVE ONE STEP FOR SLOW POINTER
      slow = find_next_index(arr, isForward, slow);
      // MOVE ONE STEP FOR FAST POINTER
      fast = find_next_index(arr, isForward, fast);
      if (fast !== -1) {
        // MOVE ANOTHER STEP FOR THE FAST POINTER
        fast = find_next_index(arr, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }
    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
}

const find_next_index = function (arr, isForward, currentIndex) {
  let direction = arr[currentIndex] >= 0;
  if (isForward !== direction) {
    return -1; // CHANGE IN DIRECTION, RETURN -1;
  }

  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {
    nextIndex += arr.length; // WRAP AROUND FOR NEGATIVE NUMBERS
  }

  // ONE ELEMENT CYCLE, RETURN -1;
  if (nextIndex === currentIndex) {
    nextIndex = -1;
  }

  return nextIndex;
}

console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`); // false
console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`); // true
console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`); // true

// [-10, 0, 3, 4]