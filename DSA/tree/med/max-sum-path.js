function maxSumPath(root) {
  let maxi = -Infinity;

  function pathSum(node) {
    if (!node) return 0;

    const left = Math.max(0, pathSum(node.left));
    const right = Math.max(0, pathSum(node.right));

    maxi = Math.max(maxi, left + right + node.value);

    return node.value + Math.max(left, right);
  }

  pathSum(root);
  return maxi;
}
