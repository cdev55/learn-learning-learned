var smallestDivisor = function(nums, threshold) {
    const n=nums.length;
    let low=1;
    let high=Math.max(...nums);
    while(low<=high){
        const mid=Math.floor((low+high)/2);
        if(findSum(nums,mid)<=threshold){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return low
}
function findSum(nums,k){
    let sum=0;
    for(item of nums){
        sum=sum+Math.ceil(item/k);
    }
    return sum;
}

console.log(smallestDivisor([44,22,33,11,1],5))

// nums = [1,2,5,9], threshold = 6