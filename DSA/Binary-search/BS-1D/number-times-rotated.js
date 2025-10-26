function numberTimesRotated(arr) {
  const n = arr.length;
  let low = 0,
    high = n - 1;
  let min = Infinity;
  let ans=-1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if(arr[low]<=arr[high]){
        if(arr[low]<ans){
            ans=low;
            break;
        }
    }
    if(arr[low]<=arr[mid]){
        if(arr[low]<ans){
            ans=low;
        }
        low=mid+1;
    }else{
        if(arr[mid]<ans){
            ans=mid;
        }
        high=mid-1;
    }
  }
  return ans;
}
