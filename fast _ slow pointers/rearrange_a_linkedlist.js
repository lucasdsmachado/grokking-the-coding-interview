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

const reorder = function (head) {
  if (head === null || head.next === null) {
    return;
  }

  // FIND MIDDLE OF LINKED LIST
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // SLOW IS NOW POINTING TO THE MIDDLE NODE
  let headSecondHalf = reverse(slow),
    headFirstHalf = head;

  // REARRANGE TO PRODUCE THE LINKEDLIST IN THE REQUIRED ORDER
  while (headFirstHalf !== null && headSecondHalf !== null) {
    let temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp;
  }
  // SET THE NEXT OF THE LAST NODE TO 'null'
  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }
}

const reverse = function (head) {
  let prev = null, next = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.printList();
