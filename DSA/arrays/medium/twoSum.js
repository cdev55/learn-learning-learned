function twoSum(arr,k){
    const n=arr.length;
    let left=0;
    let right =n-1;
    const ans=[];
    while(left<right){
        const sum=arr[left]+arr[right];
        if(sum===k){
            ans.push(left);
            ans.push(right);
            return ans;
        }else if(sum>k){
            right--;
        }else{
            left++;
        }
    }
}