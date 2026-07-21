function symmetricBinaryTree(root) {
    if(root===null){
        return
    }
  return isSymmetric(root.left, root.right);
}

function isSymmetric(l, r) {
  if (!l || !r) {
    return l === r;
  }

  if (l.value !== right.value) {
    return false;
  }

  const isLeftSame = isSymmetric(l.left, r.right);
  const isRightSame = isSymmetric(l.right, r.left);

  return isLeftSame && isRightSame;
}
