function searchInRotated(arr, x) {
  const n = arr.length;
  let low = 0,
    high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      return mid;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= x && x <=arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
        if (arr[mid] <= x && x <=arr[high]) {
            low = mid + 1;
          } else {
            high = mid -1;
          }
    }
  }
  return -1 

}
