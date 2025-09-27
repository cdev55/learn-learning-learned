function removeOuterParanthesis(s) {
  let start = 0;
  let balance = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? balance++ : balance--;

    if (balance === 0) {
      res += s.slice(start + 1, i);
      start = i + 1;
    }
  }
  return res;
}
