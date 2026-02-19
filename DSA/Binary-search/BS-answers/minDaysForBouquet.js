var minDays = function (bloomDay, m, k) {
    const n = bloomDay.length;
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let result=-1;
    if (m * k > n) return -1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (possible(bloomDay, mid, m, k)) {
        result=mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return result;
  };
  
  function possible(arr, day, m, k) {
    let sum = 0;
    let count = 0;
    for (item of arr) {
      if (Math.ceil(item / day) === 1) {
        sum = sum + 1;
        if (sum === k) {
          count++;
          sum=0;
        }
      } else {
        sum = 0;
      }
    }
    return count >= m;
  }

//bloomDay = [1,10,3,10,2], m = 3, k = 1
