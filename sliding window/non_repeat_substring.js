/*
 * Given a string, find the length of the longest substring which has no repeating characters.
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring without any repeating characters is "abc".
 *
 * Input: String="abbbb"
 * Output: 2
 * Explanation: The longest substring without any repeating characters is "ab".
 *
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings without any repeating characters are "abc" & "cde".
 */

const non_repeat_substring = function (str) {
  let charIndexMap = {}, max = 0, windowStart = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[char] + 1);
    }
    charIndexMap[char] = i;
    max = Math.max(max, i - windowStart + 1);
  }
  return max;
}

console.log(non_repeat_substring("abcabcbb")); // 3
console.log(non_repeat_substring("abba")); // 2
console.log(non_repeat_substring("bbbbb")); // 1
console.log(non_repeat_substring("pwwkew")); // 3
console.log(non_repeat_substring("aabccbb")); // 3
console.log(non_repeat_substring("abbbb")); // 2
console.log(non_repeat_substring("abccde")); // 3
console.log(non_repeat_substring("dvdf")); // 3
