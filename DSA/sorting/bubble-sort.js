function bubbleSort(arr){
    const n=arr.length;
    let swapped=true;
    for(let j=0;j<n;j++){
        swapped=false;
        for(let i=0;i<n-i-1;i++){
            if(arr[i]<arr[i-1]){
                [arr[i],arr[i-1]]=[arr[i-1],arr[i]];
                swapped=true
            }
        }
        if(!swapped){
            break;
        }
    }
    
    return arr;
}