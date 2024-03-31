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

const swap_nodes = function (head, k) {
  let curr = head,
    front = null,
    end = null,
    count = 0;

  while (curr !== null) {
    count++;

    if (end !== null)
      end = end.next;

    if (count === k) {
      front = curr;
      end = head;
    }

    curr = curr.next;
  }

  let temp = front.value;
  front.value = end.value;
  end.value = temp;

  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${swap_nodes(head, 2).get_list()}`);