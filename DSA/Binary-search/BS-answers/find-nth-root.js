function findNthRoot(n,m){
   let low=1,high=num;
   let ans=-1
    while(low<=high){
        let mid=Math.floor((low+high)/2);
        const result=multiply(mid,n,m);
        if(result===2){
            high=mid-1;
        }else if(result===1){
            low=mid+1
        }else{
            return n
        }
    }
}

function multiply(mid,n,m){
    const prod=1;
    for (let i = 1; i <=m; i++) {
        prod=prod*i
        if(prod>m)
            return 2      
    }
    if(prod===m){
        return 0;
    }else{
        return 1;
    }

}