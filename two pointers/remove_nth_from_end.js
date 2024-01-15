class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

const remove_nth_from_end = function (head, n) {
  let left = head, right = head;
  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  if (!right) {
    return head.next;
  }

  while (right.next !== null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
remove_nth_from_end(head, 2);
head.printList();