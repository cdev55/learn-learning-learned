function countOccurences(arr, x) {
  let count = 0;
  const [first, last] = firstLastOccurence(arr, x);
  if (first > 0) {
    count = last - first + 1;
  }
  return count;
}

function firstLastOccurence(arr, x) {
  const n = arr.length;
  const first = firstOccurence(arr, x);
  if (first === n || arr[first] != x) {
    return [-1, -1];
  }
  const last = lastOccurence(arr, x);
  return [first, last];
}

function firstOccurence(arr, x) {
  const n = arr.length - 1;
  let low = 0,
    high = n - 1;
  let first = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
}

function lastOccurence(arr, x) {
  const n = arr.length - 1;
  let low = 0,
    high = n - 1;
  let last = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return last;
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
