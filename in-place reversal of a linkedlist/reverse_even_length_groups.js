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
  let prev = head,
    groupLen = 2;

  while (prev.next !== null) {
    let node = prev,
      numNodes = 0;

    while (node.next !== null && numNodes < groupLen) {
      node = node.next;
      numNodes++;
    }

    if (numNodes % 2) {
      prev = node;
    } else {
      let reverse = node.next,
        curr = prev.next,
        currNext = null;
      
      for (let j = 0; j < numNodes; j++) {
        currNext = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = currNext;
      }
      
      let prevNext = prev.next;
      prev.next = node;
      prev = prevNext;
    }

    groupLen++;
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