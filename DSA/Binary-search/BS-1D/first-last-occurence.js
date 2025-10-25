function firstLastOccurence(arr, x) {
  const n = arr.length;
  const lower = lowerBound(arr, x);
  if (lower === n || arr[lower] != x) {
    return [-1, -1];
  }
  const upper = upperBound(arr, x) - 1;
  return [lower, upper];
}

function lowerBound(arr, x) {
  const n = arr.length;
  let low = 0,
    high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}

function upperBound(arr, x) {
  const n = arr.length - 1;
  let low = 0,
    high = n - 1;
  ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
