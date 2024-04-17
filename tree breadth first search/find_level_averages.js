class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_level_averages = function (root) {
  if (!root) {
    return [];
  }
  
  let result = [],
    queue = [];
  
  queue.push(root);
  
  while (queue.length) {
    let levelSize = queue.length,
      acc = 0;
    
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      acc += currentNode.val;
      
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    
    result.push(acc / levelSize);
  }
  
  return result;
}

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level averages are: ${find_level_averages(root)}`);