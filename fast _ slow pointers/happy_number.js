function find_happy_number(n) {
  let slow = n, fast = n;
  while (true) {
    slow = find_square_sum(slow);
    fast = find_square_sum(find_square_sum(fast));
    if (slow === fast) {
      break;
    }
  }
  return slow === 1;
}

function find_square_sum(n) {
  let sum = 0, digit = 0;
  while ((n > 0)) {
    digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(find_happy_number(23));
console.log(find_happy_number(12));
console.log(find_happy_number(10));
