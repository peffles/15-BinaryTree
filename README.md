# - 15 - Binary Tree
Author: Wyatt Pefley
## Overview: 
Implementing different traversals of a binary tree, abd how ti test them.

### Node Module
```
  export default class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
```

### Binary-Tree Module
```
  export default class BinaryTree {
    constructor(root = null) {
      this.root = root;
    }
  }
```

### In-order Traversal
```
  let inOrder = '';
    const inOrderTraversal = (rootNode) => {
      if (!rootNode) {
        return undefined;
      }
      inOrderTraversal(rootNode.left);
      inOrder += rootNode.value;
      inOrderTraversal(rootNode.right);
      return inOrder;
    };
```

###Documentation:

In order to test, you must first import the respective modules.
then continue like so...
```
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const tree = new BinaryTree(one);

one.left = two;
one.right = three;

three.left = four;
```
and so on....

Pass `tree.root` as a parameter of the `inOrderTraversal` function to traverse the binary tree.
