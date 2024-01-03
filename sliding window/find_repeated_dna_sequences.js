const find_repeated_dna_sequences = function (s, k) {
  let repeated = new Set(), seen = new Set();
  for (let i = 0; i <= s.length - k - 1; i++) {
    let word = s.substring(i, i + k);
    if (seen.has(word)) {
      repeated.add(word);
    }
    seen.add(word);
  }
  return repeated;
}