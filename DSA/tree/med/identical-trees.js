function identicalTrees(p, q) {
  if (p === null || q === null) {
    return p === q;
  }
  if (p.value !== q.value) {
    return false;
  }
  const isLeftSame = identicalTrees(p.left, q.left);
  const isRightSame = identicalTrees(p.right, q.right);

  return isLeftSame && isRightSame;
}
