const is_palindrome = function (s) {
  s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("race a car"));
console.log(is_palindrome("ab_a"));