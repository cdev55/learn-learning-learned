function sortColors(arr) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let i = 0;
  while (i <= high)
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    }
  if (arr[i] === 1) {
    i++;
  }
  if (arr[i] === 2) {
    [arr[high], arr[i]] = [arr[i], arr[high]];
    high--;
  }
}

