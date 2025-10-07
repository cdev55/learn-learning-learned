function majorityElement(arr) {
  let n = arr.length;
  let element = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      element = ar[i];
    }
    if (arr[i] === element) {
      count++;
    } else {
      count--;
    }
  }
  //check if stored element is the majority element
//   let cnt = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === element) {
//       cnt++;
//     }
//   }
//   if (cnt < Math.floor(n / 2)) {
//     return -1;
//   }
  return element;
}
