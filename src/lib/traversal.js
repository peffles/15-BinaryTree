'use strict';

let preOrder = '';
let inOrder = '';
let postOrder = '';

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  preOrder += rootNode.value;
  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return preOrder;
};

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  inOrder += rootNode.value;
  inOrderTraversal(rootNode.right);
  return inOrder;
};

const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  postOrder += rootNode.value;
  return postOrder;
};

export { preOrderTraversal, inOrderTraversal, postOrderTraversal };
