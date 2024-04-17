class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  if (!root) {
    return [];
  }

  const queue = [],
    result = [];
  let flag = true;

  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      
      if (flag)
        currentLevel.push(currentNode.val);
      else
        currentLevel.unshift(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    
    flag = !flag;
    result.push(currentLevel);
  }

  return result;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.log(traverse(root));