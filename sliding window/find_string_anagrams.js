/**
 * @param {string} str
 * @param {string} pattern
 * @return {number[]}
 */
var find_string_anagrams = function (str, pattern) {
  charFrequency = {}, windowStart = 0, matched = 0, indexes = [];

  if (pattern.length > str.length) return indexes;

  for (let char of pattern) {
    if (!(char in charFrequency))
      charFrequency[char] = 0;
    charFrequency[char]++;
  }

  for (let j = 0; j < str.length; j++) {
    let rightChar = str[j];
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      if (charFrequency[rightChar] == 0) matched++;
    }

    if (matched == Object.keys(charFrequency).length) indexes.push(j + 1 - pattern.length);

    if (j >= pattern.length - 1) {
      let leftChar = str[windowStart]
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) { // Se tá 0 só tinha 1 caractere na janela
          matched--;
        }
        charFrequency[leftChar]++;
      }
      windowStart++;
    }
  }
  return indexes;
}

console.log(find_string_anagrams("ppqp", "pq"));
console.log(find_string_anagrams("abbcabc", "abc"));
