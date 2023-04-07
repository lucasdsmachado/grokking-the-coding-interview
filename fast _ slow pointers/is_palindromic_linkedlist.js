class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const is_palindromic_linked_list = function (head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head,
    fast = head;

  // FIND MIDDLE OF THE LINKEDLIST
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverse(slow); // REVERSE THE SECOND HALF
  let copyHeadSecondHalf = headSecondHalf; // STORE THE HEAD OF REVERSED PART TO REVERT LATER

  while (head !== null && headSecondHalf !== null) {
    if (head.value !== headSecondHalf.value) {
      break;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  reverse(copyHeadSecondHalf); // REVERT THE REVERSE OF SECOND HALF

  if (head === null || headSecondHalf === null) { // IF BOTH HALVES MATCH
    return true;
  }

  return false;
}

const reverse = function (head) {
  let prev = null,
    next = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);

head.next.next.next.next.next = new Node(2);
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`);
