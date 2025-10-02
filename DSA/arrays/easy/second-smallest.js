function secondSmallest(arr){
    const n=arr.length;
    const smallest=Infinity;
    const secSmallest=Infinity;
    for(let i=0;i<n;i++){
        if(arr[i]<smallest){
            secSmallest=smallest;
            smallest=arr[i]
        }else if(arr[i]<secSmallest && arr[i]!==smallest){
            secSmallest=arr[i]
        }
    }
    return secSmallest;
}