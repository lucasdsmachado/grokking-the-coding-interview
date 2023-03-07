const backspace_compare = function (s, t) {
  let index1 = s.length - 1, index2 = t.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(s, index1),
      i2 = get_next_valid_char_index(t, index2);

    if (i1 < 0 && i2 < 0) { // REACHED THE END OF BOTH THE STRINGS
      return true;
    }

    if (i1 < 0 || i2 < 0) { // REACHED THE END OF ONE OF THE STRINGS
      return false;
    }

    if (s[i1] !== t[i2]) { // CHECK IF CHARACTERS ARE EQUAL
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }

  return true;
}

const get_next_valid_char_index = function (str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === '#') { // FOUND A BACKSPACE CHARACTER
      backspaceCount++;
    } else if (backspaceCount > 0) { // A NON-BACKSPACE CHARACTER
      backspaceCount--;
    } else {
      break;
    }
    index--; // SKIP A BACKSPACE OR A VALID CHARACTER
  }

  return index;
}

console.log(backspace_compare("y#fo##f", "y#f#o##f")); // true
console.log(backspace_compare("bxj##tw", "bxo#j##tw")); // true
console.log(backspace_compare("ab##", "c#d#")); // true
console.log(backspace_compare("xp#", "xyz##")); // true
console.log(backspace_compare("xy#z", "xzz#")); // true
console.log(backspace_compare("xy#z", "xyz#")); // false
console.log(backspace_compare("xywrrmp", "xywrrmu#p")); // true
