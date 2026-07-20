function bottomViewBinaryTree(root) {
  const result = [];
  const q = [];
  if (!root) return [];
  q.push([0, root]);

  const bottomMap = new Map();

  while (q.length) {
    const [currHD, currNode] = q.shift();
    bottomMap.set(currHD, currNode.value);
    if (currNode.left) {
      q.push([currHD - 1, currNode.left]);
    }
    if (currNode.right) {
      q.push([currHD + 1, currNode.right]);
    }
  }
  const sortedKeys = new Array.from(bottomMap.keys()).sort((a, b) => a - b);
  for (let key of sortedKeys) {
    result.push(bottomMap.get(key));
  }
  return result;
}
