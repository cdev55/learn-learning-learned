function reverseWordsInString(s) {
  const trimmedString = s
    .trim()
    .split(" ")
    .filter((word) => word.length > 0);
  let left = 0;
  let right = trimmedString.length - 1;
  while (left < right) {
    [trimmedString[left], trimmedString[right]] = [
      trimmedString[right],
      trimmedString[left],
    ];
    left++;
    right--;
  }
  return trimmedString.join(" ");
}

// <---Alternate Solution----->
// function reverseWordsInString(s){
//     return s.trim().split(" ").filter(word=>word>length>0).reverse().join(" ");
// }
