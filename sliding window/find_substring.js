const find_substring = function (str, pattern) {
  let charMap = {},
    windowStart = 0,
    matched = 0,
    substrStart = 0;
    minLength = str.length + 1;

  for (let char of pattern) {
    if (!(char in charMap))
      charMap[char] = 0;
    charMap[char]++;
  }

  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i];
    if (rightChar in charMap) {
      charMap[rightChar]--; // IF CHAR IN MAP, DECREMENT ITS FREQUENCY
      if (charMap[rightChar] >= 0) // IF GREATER OR EQUAL THAN ZERO, THERE ARE CHARACTERS REMAINING
        matched++; // INCREASE MATCHED VARIABLE
    }

    while (matched === pattern.length) { // WE'LL TRY TO SHRINK THE SUBSTRING
      if (minLength > i - windowStart + 1) { // IF MINLENGTH BECOMES GREATER THAN CURRENT WINDOW, UPDATE IT
        minLength = i - windowStart + 1;
        substrStart = windowStart;
      }

      let leftChar = str[windowStart++];
      if (leftChar in charMap) {
        if (charMap[leftChar] === 0)  // LAST CHARACTER IN SLIDING WINDOW
          matched--;
        charMap[leftChar]++;
      }
    }
  }
  return minLength > str.length ? "" : str.substring(substrStart, substrStart + minLength);
}

console.log(find_substring("aabdec", "abc"));
console.log(find_substring("ADOBECODEBANC", "ABC"));
