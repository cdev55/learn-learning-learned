function isStringAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const count = new Map();

  for (let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (count.get(char) === 0 || !count.get(char)) {
      return false;
    }
    count.set(char - 1);
  }
  return true;
}
