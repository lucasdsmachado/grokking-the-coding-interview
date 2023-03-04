/**
 * @param {string} str
 * @param {string} pattern
 * @return {boolean}
 */
const find_permutation = function (str, pattern) {
  charFrequency = {}, windowStart = 0, matched = 0;

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

    if (matched == Object.keys(charFrequency).length)
      return true;

    if (j + 1 >= pattern.length) { // só preciso checar o indice
      let leftChar = str[windowStart]
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) { // Se tá 0 era o ultimo caractere na janela
          matched--;
        }
        charFrequency[leftChar]++;
      }
      windowStart++;
    }
  }
  return false;
}

console.log(find_permutation("bcdxabcdy", "bcdyabcdx"));
console.log(find_permutation("aaacb", "abc"));
console.log(find_permutation("ooolleoooleh", "hello"));
console.log(find_permutation("oidbcaf", "abc"));
console.log(find_permutation("odicf", "dc"));
console.log(find_permutation("eidbaooo", "ab"));
