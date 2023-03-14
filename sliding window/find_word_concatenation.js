/**
 *
 * @param {string} str
 * @param {string[]} words
 * @return {string[]}
 */

const find_word_concatenation = function (str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  let wordFrequency = {};
  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word]++;
  })

  const result_indices = [],
    wordsCount = words.length,
    wordLength = words[0].length;

  for (let i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      let next_word_index = i + j * wordLength;
      // GET THE NEXT WORD FROM THE STRING
      let word = str.substring(next_word_index, next_word_index + wordLength);
      // BREAK IF WE DONT NEED THIS WORD
      if (!(word in wordFrequency)) {
        break;
      }
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0
      }
      wordsSeen[word]++;
      // NO NEED TO PROCESS FURTHER IF THE WORD HAS HIGHER FREQUENCY THAN REQUIRED
      if (wordsSeen[word] > (wordFrequency[word] || 0)) { // UNDEFINED || 0 -> 0
        break;
      }

      if (j + 1 === wordsCount) { // STORE INDEX IF WE HAVE FOUND ALL THE WORDS
        result_indices.push(i)
      }
    }
  }
  return result_indices;
}

console.log(find_word_concatenation("catfoxcat", ["cat", "fox"]));
console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"]));
