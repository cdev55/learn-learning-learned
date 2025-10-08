function stockBuySell(arr) {
  const n = arr.length;
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let num of arr) {
    minPrice = Math.min(minPrice, num);
    maxProfit = Math.max(maxProfit, num - minPrice);
  }
  return maxProfit;
}
