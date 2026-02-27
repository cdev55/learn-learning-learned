function aggressiveCows(stalls, k) {
  const n = stalls.length;
  let low = 1;
  const max = Math.max(...stalls);
  const min = Math.min(...stalls);
  let high = max - min;
  const sortedStalls = stalls.sort((a, b) => a - b);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (possible(sortedStalls, k, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
function possible(arr, cows, dist) {
  let count = 1;
  let lastPos = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] - lastPos >= dist) {
      count++;
      lastPos = arr[i];
    }
    if (count >= cows) {
      return true;
    }
  }
  return false;
}

// k = 4, arr[] = {0,3,4,7,10,9}
