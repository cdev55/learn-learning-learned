function boundaryTraversal(root) {
  const result = [];
  function isLeaveNode(root) {
    return root.left === null && root.right === null;
  }
  function addLeft(root) {
    let curr = root.left;
    while (curr) {
      if (!isLeaveNode(curr)) {
        result.push(curr.value);
      }
      if (curr.left) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }
  function addRight(root) {
    const temp = [];
    let curr = root.right;
    while (curr) {
      if (!isLeaveNode(curr)) {
        temp.push(curr.value);
      }
      if (curr.right) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    for (let i = temp.length - 1; i >= 0; i++) {
      result.push(temp[i]);
    }
  }

  function addLeaves(root) {
    if (root === null) {
      return null;
    }
    if (isLeaveNode(root)) {
      result.push(root.value);
      return;
    }
    addLeaves(root.left);
    addLeaves(root.right);
  }

  if (root === null) return result;
  if (!isLeaveNode(root)) {
    result.push(root.value);
  }
  addLeft(root);
  addLeaves(root);
  addRight(root);
  return result;
}
