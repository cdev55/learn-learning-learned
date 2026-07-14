function diameter(root){
    let ans=0;
    function height(root){
        if(root===null){
            return 0;
        }
        const lh=height(root.left);
        const rh=height(root.right);
        ans=Math.max((lh+rh),ans);
        return Math.max(lh,rh)+1;
    }
    height(root);
    return ans;
}

