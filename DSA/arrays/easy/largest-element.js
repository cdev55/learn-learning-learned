function largestElement(arr){
    const n=arr.length;
    let largest=arr[0];
    for(let i=1;i<n;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest
}