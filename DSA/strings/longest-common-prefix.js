function longestCommonPrefix(strgs) {
  const n = strgs.length;
  if (n === 0) {
    return "";
  }
  let commonPrefix = strgs[0];
  for(let i=1;i<n;i++){
    while(strgs[i].indexOf(commonPrefix)!==0){
        commonPrefix=commonPrefix.slice(0,commonPrefix.length-1);
    }
  }
  return commonPrefix;
}
