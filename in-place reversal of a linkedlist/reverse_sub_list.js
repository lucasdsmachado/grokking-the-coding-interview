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
    previous = null,
    i = 0;
  // after skipping 'p-1' nodes, current will point to p'th' node 
  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i++;
  }
  // we are interested in three parts of the LinkedList, the part before index 'p',
  // the part between 'p' and 'q', and the part after index 'q'
  const last_node_of_first_part = previous,
    // after reversing the linkedlist 'current' will become the last node  
    last_node_of_sub_list = current;
  let next = null; // will be used to temporarily store the next node

  i = 0;

  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }
  // connect with the first part
  if (last_node_of_first_part !== null) {
    // previous is now the first node of the sub-list
    last_node_of_first_part.next = previous;
    // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
  } else {
    head = previous;
  }
  // connect with the last part;
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