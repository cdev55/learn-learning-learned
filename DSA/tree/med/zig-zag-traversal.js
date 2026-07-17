function zigZagTraversal(root) {
  const stack = [];
  stack.push(root);
  let ans = [];
  let leftToRight = true;
  
  while (stack.length) {
    const size = stack.length;
    const level = new Array(size);
    for (let i = 0; i < size; i++) {
      const curr = stack.shift();
      const index = leftToRight ? i : size - 1 - i;
      level[index] = curr.value;
      if (curr.left) {
        stack.push(curr.left);
      }
      if (curr.right) {
        stack.push(curr.right);
      }
    }
    leftToRight = !leftToRight;
    ans.push(level);
  }
}
