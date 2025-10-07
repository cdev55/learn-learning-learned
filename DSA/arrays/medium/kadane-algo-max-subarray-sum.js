function maxSubArray(arr) {
  const n = arr.length;
  let sum = 0;
  let maxSum = 0;
//   let start=0,end=0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    //   start=i
    }
    if(sum>maxSum){
        maxSum = Math.max(maxSum, sum);
        // end=i
    }
  }
  return maxSum;
}
