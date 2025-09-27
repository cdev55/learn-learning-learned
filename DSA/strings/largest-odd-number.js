function largestOddNumberInString(s){
    const n=s.length;
    let res="";
    for(let i=n-1;i>=0;i--){
        if(Number(s[i])%2===1){
            return s.slice(0,i+1);
        }
    }
    return res;
}