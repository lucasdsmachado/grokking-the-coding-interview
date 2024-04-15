class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  let res = [], dq = [];

  if (root) {
    dq.push(root);
  }

  while (dq.length > 0) {
    let visited = [], waiting = [];
    while (dq.length > 0) {
      let current = dq.shift();
      visited.push(current.val);
      if (current.left) {
        waiting.push(current.left);
      }
      if (current.right) {
        waiting.push(current.right);
      }
    }

    res.push(visited);
    dq = waiting;
  }

  return res;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(traverse(root));