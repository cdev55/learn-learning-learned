function bookAllocation(arr, m) {
  const n = arr.length;
  const low = Math.min(...arr);
  const high = findSum(arr);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
  }
}

function findSum(arr) {
  let sum = 0;
  for (let item of arr) {
    sum = sum + item;
  }
  return sum;
}

//m = 2, arr[] = {12, 34, 67, 90}
