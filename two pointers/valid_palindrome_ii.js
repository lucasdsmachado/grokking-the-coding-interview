const valid_palindrome = function (s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return is_palindrome(l, r - 1) || is_palindrome(l + 1, r);
    }
  }
  return true;
}

const is_palindrome = function (l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(valid_palindrome("aba"));
console.log(valid_palindrome("abca"));
console.log(valid_palindrome("abc"));