class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head) {
  let cycle_length = 0,
    slow = head,
    fast = head;
  //  FIND THE LINKEDLIST CYCLE
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // FOUND THE CYCLE
      cycle_length = calculate_cycle_length(slow);
      break;
    }
  }

  return find_start(head, cycle_length);
}

function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length++;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

function find_start(head, cycle_length) {
  let pointer1 = head,
    pointer2 = head;
  // MOVE POINTER2 AHEAD 'CYCLE_LENGHT' NODES
  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length--;
  }
  // INCREMENT BOTH POINTERS UNTIL THEY MEET AT THE START OF THE CYCLE
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  
  return pointer1;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList has cycle: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList has cycle: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList has cycle: ${find_cycle_start(head).value}`);
