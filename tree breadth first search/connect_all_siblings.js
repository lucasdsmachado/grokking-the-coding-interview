class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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
  
  let queue = [];
  queue.push(root);
  
  while (queue.length > 0) {
    let currentNode = queue.shift();
    
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    
    if (queue.length === 0) {
      currentNode.next = null;
    } else {
      currentNode.next = queue[0];
    }
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