class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const find_sucessor = function (root, key) {
  if (!root)
    return null;
  
  let result = [],
    queue = [],
    found = false;
  
  queue.push(root);
  
  while (queue.length > 0) {
    let levelSize = queue.length,
      currentNode = queue.shift();
    
    if (currentNode.val === key) {
      found = true;
    }
    
    for (let i = 0; i < levelSize; i++) {     
      if (currentNode.left) {
        queue.push(currentNode.left);
      } 
      
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    
    if (found)
      return queue.shift().val;
  }
  
  return null;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = find_sucessor(root, 12);
if (result)
  console.log(result);
result = find_sucessor(root, 9);
if (result)
  console.log(result);