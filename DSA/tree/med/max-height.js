function maxHeight(root) {
  return height(root);
}

function height(root) {
  if (!root) {
    return 0;
  }
  const lh = height(root.left);
  const rh = height(root.right);
  return Math.max(lh, rh) + 1;
}
