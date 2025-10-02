function leftRotateByOne(arr){
    const n=arr.length;
    const temp=arr[0];
    for (let i = 1; i < n; i++) {
        arr[i-1]=arr[i];
    }
    arr[n-1]=temp;
    return arr;
}