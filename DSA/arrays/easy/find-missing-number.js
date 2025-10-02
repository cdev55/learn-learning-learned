function findMissingNumber(arr,n){
    const sumOfNnumbers=(n*(n+1))/2;
    let sum=0;
    for(let num of arr){
        sum+=num;
    }
    return sumOfNnumbers-sum;
}

//XOR METHOD

// function findMissingNumber(arr,n){
//     let xor1=0;
//     let xor2=0;
//     for(let i=0;i<n;i++){
//         xor2=xor2^arr[i];
//         xor1=xor1^(i+1);
//     }
//     xor1=xor1^n;
//     return xor2^xor1;
// }

