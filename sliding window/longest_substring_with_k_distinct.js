/*
 * Given a string, find the length of the longest substring in it with no more than K distinct rightCharacters.
 *
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct rightCharacters is "araa".
 *
 * Input: String="araaci", K=1
 * Output: 2
 * Explanation: The longest substring with no more than '1' distinct rightCharacters is "aa".
 *
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3' distinct rightCharacters are "cbbeb" & "bbebi".
 */

const longest_substring_with_k_distinct = function(k, str) {
  let charFrequency = {}, max = 0, windowStart = 0;
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar]++;

    while (Object.keys(charFrequency).length > k) {
      let leftChar = str[windowStart];
      charFrequency[leftChar]--;
      if (charFrequency[leftChar] == 0)
        delete charFrequency[leftChar];
      windowStart++
    }

    max = Math.max(max, i + 1 - windowStart);
  }

  return max;
}

const longest_substring_with_k_distinct_map = function (k, str) {
  let max = 0, windowStart = 0, charFrequency = new Map();
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    charFrequency.set(rightChar, charFrequency.get(rightChar) + 1 || 1);

    while (charFrequency.size > k) {
      let leftChar = str[windowStart];
      charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
      if (charFrequency.get(leftChar) === 0) charFrequency.delete(leftChar);
      windowStart++;
    }
    max = Math.max(max, i - windowStart + 1);
  }

  return max;
}

console.log(longest_substring_with_k_distinct(2, "araaci"));
console.log(longest_substring_with_k_distinct(1, "araaci"));
console.log(longest_substring_with_k_distinct(3, "cbbebi"));


console.log(longest_substring_with_k_distinct_map(2, "araaci"));
console.log(longest_substring_with_k_distinct_map(1, "araaci"));
console.log(longest_substring_with_k_distinct_map(3, "cbbebi"));
