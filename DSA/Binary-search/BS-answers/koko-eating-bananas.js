var minEatingSpeed = function(piles, h) {
    const n=piles.length;
    let low=0;
    let high=Math.max(...piles)
    while(low<=high){
        const mid=Math.floor((low+high)/2);
        if(hoursTaken(piles,mid)>h){
            low=mid+1;
        }else{
            high=mid-1
        }
    }
    return low
};

function hoursTaken(piles,k){
    let hours=0;
    for(item of piles){
        hours=hours+Math.ceil(item/k);
    }
    return hours;
}