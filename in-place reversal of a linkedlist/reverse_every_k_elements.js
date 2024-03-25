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

const reverse_every_k_elements = function (head, k) {

  let current = head,
    prev = null,
    next = null;

  let last_node_of_first_part = null;
  let last_node_of_sub_list = current;

  while (current !== null) {
    let i = 0;

    while (current !== null && i < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }

    if (last_node_of_first_part !== null) {
      last_node_of_first_part.next = prev;
    } else {
      head = prev;
    }

    last_node_of_sub_list.next = current;
    last_node_of_first_part = last_node_of_sub_list;
    last_node_of_sub_list = current;
  }

  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head, 3).get_list()}`);