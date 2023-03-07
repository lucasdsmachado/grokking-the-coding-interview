const backspace_compare = function(s, t) {
  let sLastIndex = s.length - 1, tLastIndex = t.length - 1;

  while (sLastIndex >= 0 || tLastIndex >= 0) {
    let hashCount = 0;

    while (s[sLastIndex] === '#') {
      hashCount++;
      while (hashCount > 0 && s[sLastIndex - 1] != '#') {
        hashCount--;
        sLastIndex--;
      }
      sLastIndex--;
    }

    while (t[tLastIndex] === '#') {
      hashCount++;
      while (hashCount > 0 && t[tLastIndex - 1] != '#') {
        hashCount--;
        tLastIndex--;
      }
      tLastIndex--;
    }

    if (s[sLastIndex] != t[tLastIndex]) {
      return false;
    }

    sLastIndex--;
    tLastIndex--;
  }

  return true;
}

console.log(backspace_compare("y#fo##f", "y#f#o##f")); // false
console.log(backspace_compare("bxj##tw", "bxo#j##tw")); // true
console.log(backspace_compare("ab##", "c#d#")); // true
console.log(backspace_compare("xp#", "xyz##")); // true
console.log(backspace_compare("xy#z", "xzz#")); // true
console.log(backspace_compare("xy#z", "xyz#")); // false
console.log(backspace_compare("xywrrmp", "xywrrmu#p")); // true
