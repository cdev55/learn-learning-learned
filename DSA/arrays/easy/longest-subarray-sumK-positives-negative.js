function longestSubArrayWithSumk(arr,k){
    const n=arr.length;
    const prefixMap = new Map();
    let sum=0;
    let maxLen=0;
    for (let i = 0; i < n; i++) {
        sum+=arr[i];
        if(sum===k){
            maxLen=Math.max(maxLen,i+1);
        }
        let rem=sum-k;
        if(prefixMap.has(rem)){
            maxLen=Math.max(maxLen,i-prefixMap.get(rem));
        }
        if(!prefixMap.has(sum)){
            prefixMap.set(sum,i)
        }
    }
    return maxLen;
}