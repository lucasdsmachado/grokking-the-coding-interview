class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current !== null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function (root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let previousNode = null,
      levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (previousNode !== null) {
        previousNode.next = currentNode;
      }

      previousNode = currentNode;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);
root.print_level_order();