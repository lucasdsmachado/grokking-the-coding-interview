const fruits_into_baskets = function(arr) {
  let fruitFrequency = {}, max = 0, windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    let rightChar = arr[i];
    if (!(rightChar in fruitFrequency)) {
      fruitFrequency[rightChar] = 0;
    }
    fruitFrequency[rightChar]++;

    while (Object.keys(fruitFrequency).length > 2) {
      let leftChar = arr[windowStart];
      fruitFrequency[leftChar]--;
      if (fruitFrequency[leftChar] == 0)
        delete fruitFrequency[leftChar];
      windowStart++
    }

    max = Math.max(max, i + 1 - windowStart);
  }

  return max;
}


console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])); // 3
console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])); // 5
console.log(fruits_into_baskets([1, 2, 1])); // 3
console.log(fruits_into_baskets([0, 1, 2, 2])); // 3
console.log(fruits_into_baskets([1, 2, 3, 2, 2])); // 4
console.log(fruits_into_baskets([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5
