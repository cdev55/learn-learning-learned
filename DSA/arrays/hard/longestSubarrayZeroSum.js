function longestSubarrayZeroSum(arr){
    const n=arr.length;
    let prefixSum={0:1}
    let count=0;
    for(let i=0;i<n;i++){
        sum=sum+arr[i];
        if(prefixSum[sum]){
            count=count+prefixSum[sum]
        }
        prefixSum[sum]=prefixSum[sum]?prefixSum[sum]+1 : 1;
    }
    return count
}