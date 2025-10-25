function floorCiel(arr, x) {
  const f = getFloor(arr, x);
  const c = getCeil(arr, x);
  return f, c;
}

function getFloor(arr, x) {
  const n = arr.length;
  let low = 0, high = n - 1;
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      ans = arr[mid];
      low = mid + 1;
    } else {
      high = mid -1;
    }
  }
  return ans;
}


function getCeil(arr, x) {
    const n = arr.length;
    let low = 0, high = n - 1;
    let ans = -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] >= x) {
        ans = arr[mid];
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
