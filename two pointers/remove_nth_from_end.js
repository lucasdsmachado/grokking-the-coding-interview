const remove_nth_from_end = function (head, n) {
  if (head === null || (head.next === null && n >= 0)) {
    return null;
  }

  let lastNode = reverse(head),
    copyLastNode = lastNode,
    prev = null;

  if (n === 1) {
    copyLastNode = copyLastNode.next;
    lastNode = null;
  } else {
    for (let i = 0; i < n - 1; i++) {
      prev = lastNode
      lastNode = lastNode.next;
    }
    prev.next = lastNode.next;
  }

  return reverse(copyLastNode);
};

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