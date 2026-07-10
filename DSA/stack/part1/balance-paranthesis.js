var isValid = function (s) {
  const stack = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (!stack.length) {
        return false;
      } else {
        const top = stack.pop();
        if (
          (c === ")" && top === "(") ||
          (c === "}" && top === "{") ||
          (c === "]" && top === "[")
        ) {
          continue;
        } else {
          return false;
        }
      }
    }
  }
  return stack.length===0;
};
