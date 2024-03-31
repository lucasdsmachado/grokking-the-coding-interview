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

const reverse_even_length_groups = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head,
    previous = null,
    size = 1;

  while (current !== null) {
    let tracker = current,
      before = null,
      i = 0;

    while (tracker !== null && i < size) {
      before = tracker
      tracker = tracker.next;
      i++;
    }

    if (i % 2 === 1) {
      previous = before;
      current = tracker;
      size++;
      continue;
    }

    let last_node_of_first_part = previous,
      last_node_of_sub_list = current,
      next = null;

    i = 0;

    while (current !== null && i < size) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    if (last_node_of_first_part !== null) {
      last_node_of_first_part.next = previous;
    } else {
      head = previous;
    }

    last_node_of_sub_list.next = current;
    previous = last_node_of_sub_list;
    size++;
  }

  return head;
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
console.log(`Nodes of reversed LinkedList are: ${reverse_even_length_groups(head).get_list()}`);