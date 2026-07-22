function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && !right) {
    return left;
  } else if (!left && right) {
    return right;
  } else {
    return root;
  }
}
