function leftRotateByK(arr,k){
    const n=arr.length;
    k=k%n;
    if(k>n){
        return;
    }
   return rotateLeftByK(arr,k)
}

function rotateLeftByK(arr,k){
    reverseArray(arr,0,k-1);
    reverseArray(arr,k,arr.length-1);
    reverseArray(arr,0,arr.length-1);
    return arr;
}

function reverseArray(arr,l,r){
    let left=l;
    let right=r;
    while(l<=r){
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left--;
        right++;
    }
    return arr;
}