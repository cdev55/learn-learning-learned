function findMinInRotated(arr){
    const n=arr.length;
    let low=0,high=n-1;
    let min=Infinity;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        
        if(arr[mid]>arr[high]){
            low=mid+1;
        }else{
            high=mid;
        }
    }
return arr[low];
}