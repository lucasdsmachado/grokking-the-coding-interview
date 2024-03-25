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

const reverse_between = function (head, p, q) {
  if (p === q) {
    return head;
  }

  let current = head,
    prev = null,
    next = null;

  for (let i = 0; i < p - 1; i++) {
    prev = current;
    current = current.next;
  }

  const last_node_of_first_part = prev,
    last_node_of_sub_list = current;
  let i = 0;

  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i++
  }

  if (last_node_of_first_part !== null) {
    last_node_of_first_part.next = prev;
  } else {
    head = prev;
  }

  last_node_of_sub_list.next = current;
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse_between(head, 2, 4).get_list()}`);