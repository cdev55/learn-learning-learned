function removeDuplicates(arr){
    const n=arr.length;
    let i = 0;
    for (let j = 1; j < n; j++) {
        if(arr[i]!==arr[j]){
            arr[i+1]=arr[j];
            i++;
        }
    }
    // const lengthOfArray=i+1;
    // return lengthOfArray
    return arr.slice(0,i+1)
}