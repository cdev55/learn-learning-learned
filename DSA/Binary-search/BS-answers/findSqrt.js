function findSqrt(num){
    let low=1,high=num;
    let ans=Infinity;
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        const sqr=mid*mid;
        if(sqr===num){
            return mid;
        }else if(sqr<num){
            low=mid+1;
            ans=mid
        }else{
            high=mid-1
        }
    }
    return ans
}