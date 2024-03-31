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

const swap_pairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let dummy = new Node(0, head.next),
    previous = dummy,
    current = head;

  while (current !== null && current.next !== null) {
    previous.next = current.next;
    current.next = previous.next.next;
    previous.next.next = current;
    
    previous = current;
    current = current.next;
  }

  return dummy.next;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of swapped LinkedList are: ${swap_pairs(head).get_list()}`);