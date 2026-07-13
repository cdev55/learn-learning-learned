function checkBalanced(root) {
  return height(root) !== -1;
}

function height(root) {
  if (root === null) {
    return 0;
  }
  const lh = height(root.left);
  if (lh === -1) return -1;
  const rh = height(root.right);
  if (rh === -1) return -1;

  if (Math.abs(lh - rh) > 1) {
    return -1;
  }
  return Math.max(lh, rh) + 1;
}
