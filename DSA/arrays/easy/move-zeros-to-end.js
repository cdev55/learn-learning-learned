function moveZerosToEnd(arr) {
  const n = arr.length;
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0);
    j = i;
    break;
  }
  if (j < 0) {
    return;
  }
  for (let i = j + 1; i < n; i++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}
