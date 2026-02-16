function repeatMissing(arr){
    const n=arr.length;
    const Sn=(n*(n+1))/2;
    const S2n=(n*(n+1)*((2*n)+1))/6;
    let S=0;
    let S2=0;
    for(num of arr){
        S+=num;
        S2+=num*num;
    }
    const val1=S-Sn;
    let val2=S2-S2n;
    val2=val2/val1;
    const x=(val1+val2)/2
    const y=val2-x;
    return [x,y]
};