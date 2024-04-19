class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  print_tree() {
    let result = `Traversal using 'next' pointer: `;
    let current = this;
    while (current) {
      result += current.val + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

const connect_all_siblings = function (root) {
  if (!root) {
    return null;
  }

  let queue = [],
    currentNode = null,
    previousNode = null;

  queue.push(root);

  while (queue.length > 0) {
    currentNode = queue.shift();

    if (previousNode !== null) {
      previousNode.next = currentNode;
    }

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    previousNode = currentNode;
  }
  
  return root;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root).print_tree();