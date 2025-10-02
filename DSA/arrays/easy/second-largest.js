function secondLargest(arr){
    const n=arr.length;
    const largest=-Infinity;
    const secLargest=-Infinity;
    for(let i=0;i<n;i++){
        if(arr[i]>largest){
            secLargest=largest;
            largest=arr[i]
        }else if(arr[i]>secLargest && arr[i]!==largest){
            secLargest=arr[i]
        }
    }
    return secLargest;
}