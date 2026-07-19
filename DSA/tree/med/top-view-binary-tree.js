function topViewBinaryTree(root) {
  const result = [];
  const q = [];
  if (root === null) {
    return [];
  }
  q.push([0, root]);
  const topMap = new Map();
  topMap.set(0, root.value);
  while (q.length) {
    const [currHD,currNode]=q.shift();
    if (!topMap.has(currHD)) {
      topMap.set(currHD, currNode.value);
    }
    if (currNode.left) {
      q.push([currHD - 1, currNode.left]);
    }
    if (currNode.right) {
      q.push([currHD + 1, currNode.right]);
    }
  }

  const sortedKeys = new Array.from(topMap.keys()).sort((a, b) => a - b);
  for (let key of sortedKeys) {
    result.push(topMap.get(key));
  }
  return result;
}
