class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const tree_right_view = function (root) {
  if (!root) {
    return [];
  }
  
  const queue = [],
    result = [];
  
  queue.push(root);
  
  while (queue.length > 0) {
    let levelSize = queue.length,
      currentLevel = [];
    
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    
    result.push(currentLevel.pop());
  }
  
  return result;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(tree_right_view(root));