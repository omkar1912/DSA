// Tree Traversal and Problems

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Inorder Traversal
function inorder(node, result = []) {
  if (node) {
    inorder(node.left, result);
    result.push(node.value);
    inorder(node.right, result);
  }
  return result;
}

// Preorder Traversal
function preorder(node, result = []) {
  if (node) {
    result.push(node.value);
    preorder(node.left, result);
    preorder(node.right, result);
  }
  return result;
}

// Postorder Traversal
function postorder(node, result = []) {
  if (node) {
    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.value);
  }
  return result;
}

// Level Order Traversal (BFS)
function levelOrder(root) {
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return result;
}

// Test cases
console.log('=== TREES ===');
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

console.log('Inorder:', inorder(tree));
console.log('Preorder:', preorder(tree));
console.log('Postorder:', postorder(tree));
console.log('Level Order:', levelOrder(tree));
