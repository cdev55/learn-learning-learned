function findPeakElement(arr){
    
    const n=arr.length;
    let low=1,high=n-1;
    if(n===1){
        return arr[0];
    }
    if(arr[0]>arr[1]){
        return 0;
    }
    if(arr[n-1]>arr[n-2]){
        return n-1;
    }
    while(low<=high){
        let mid=Math.min((low+high)/2);

        if(arr[mid]>arr[mid+1]&& arr[mid]<arr[mid-1]){
            return mid
        }else if(arr[mid]<arr[mid+1]){
            low=mid+1
        }else if(arr[mid]>arr[mid+1]){
            high=mid-1;
        }else{
            high=mid-1;
        }
    }
    return -1;
}