function findNumberThatAppearOnce(arr) {
  let xor = 0;
  for (let num of arr) {
    xor = xor ^ num;
  }
  return xor;
}
