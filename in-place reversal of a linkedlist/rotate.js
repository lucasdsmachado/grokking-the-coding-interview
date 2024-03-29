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
  if (!head || !head.next || k == 0)
    return head;

  let size = 0,
    right = head;

  while (right) {
    size++;
    right = right.next;
  }

  k = k % size;
  let left = head;
  right = head;

  while (k--) {
    right = right.next;
  }

  while (right.next) {
    left = left.next;
    right = right.next;
  }

  right.next = head;
  head = left.next;
  left.next = null;
  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of rotate LinkedList are: ${rotate(head, 0).get_list()}`);