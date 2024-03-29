class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

const rotate = function (head, k) {
  if (head === null) return head;

  let slow = head, fast = head;
  let len = 1;

  while (fast.next !== null) {
    fast = fast.next;
    len++;
  }

  k = k > len ? k % len : k;
  fast = head;

  if (k === 0 || k === len) return head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }


  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of rotate LinkedList are: ${rotate(head, 2).get_list()}`);