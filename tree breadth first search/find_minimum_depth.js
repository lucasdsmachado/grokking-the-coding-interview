class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_minimum_depth = function (root) {
  if (!root) {
    return 0;
  }

  const queue = [];
  let minimumTreeDepth = 0;

  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    minimumTreeDepth++;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      
      if (!currentNode.right && !currentNode.left) {
        return minimumTreeDepth;
      }
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  return minimumTreeDepth;
}

var root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(find_minimum_depth(root));