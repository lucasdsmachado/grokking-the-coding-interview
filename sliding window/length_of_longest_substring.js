/*
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’
 * letters with any letter, find the length of the longest substring having the same letters
 *  after replacement.
 *
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 *
 * Input: String="abbcb", k=1
 * Output: 4
 * Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
 *
 * Input: String="abccde", k=1
 * Output: 3
 * Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
 */

const length_of_longest_substring = function (k, str) {
  let frequencyMap = {}, maxLength = 0, maxLetterCount = 0, windowStart = 0;
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar]++;
    maxLetterCount = Math.max(maxLetterCount, frequencyMap[rightChar]);

    if (i - windowStart + 1 - maxLetterCount > k) {
      let leftChar = str[windowStart];
      frequencyMap[leftChar]--;
      windowStart++;
    }

    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return maxLength;
}

const length_of_longest_substring_map = function(str, k) {
  let start = 0, length = 0, frequency = new Map(), maxRepeatLetterCount = 0;

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    frequency.set(rightChar, frequency.get(rightChar) + 1 || 1);
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequency.get(rightChar));

    if ((i - start + 1 - maxRepeatLetterCount) > k) {
      let leftChar = str[start];
      frequency.set(leftChar, frequency.get(leftChar) - 1);
      start++;
    }

    length = Math.max(length, i - start + 1);
  }

  return length;
}



console.log(length_of_longest_substring("aabccbb", 2)); // 5 "bbbbb"
console.log(length_of_longest_substring("aabcdbb", 2)); //
console.log(length_of_longest_substring("abbcb", 1)); // 4 "bbbb"
console.log(length_of_longest_substring("abccde", 1)); // 3 "ccc"
