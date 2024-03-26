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

const reverse_alternate_k_elements = function (head, k) {
  if (k === 1 || head === null) {
    return head;
  }

  let current = head,
    previous = null,
    flag = true;

  while (current !== null) {
    const last_node_of_first_part = previous,
      last_node_of_sub_list = current;

    let i = 0,
      next = null;

    if (!flag) {
      while (current !== null && i < k) {
        previous = current
        current = current.next;
        i++;
      }
      flag = !flag;
      continue;
    }

    while (current !== null && i < k) {
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
    flag = !flag;
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
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`);