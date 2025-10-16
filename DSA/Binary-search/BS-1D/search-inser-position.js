function searchInserPosition(arr,x){
    const n=arr.length;
    let low=0,high=n-1;
    ans=n;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]<=low){
            ans=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return ans;
}