class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      return (this.root = newNode);
    }
    return this.insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else if (root.value < newNode.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (root.value === null) {
      return false;
    } else {
      if (root.value > value) {
        this.search(root.left, value);
      } else if (root.value < value) {
        this.search(root.right, value);
      } else {
        return true;
      }
    }
  }

  preOrder(root){
    if(root.value===null){
        return null;
    }
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root){
    if(root.value===null){
        return null
    }
    this.inOrder(root.left)
    console.log(root.value)
    this.inOrder(root.right)
  }

  postOrder(root){
    if(root.value===null){
        return null
    }
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
  }

}
