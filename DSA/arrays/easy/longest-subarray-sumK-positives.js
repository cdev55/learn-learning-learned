function longestSubArrayWithSumK(arr, k) {
  const n = arr.length;
  let sum = arr[0];
  let maxLen = 0;
  let right = 0,
    left = 0;
  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
    if (right < n) {
      sum += arr[right];
    }
  }
  return maxLen;
}
