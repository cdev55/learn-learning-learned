var shipWithinDays = function (weights, days) {
    const n = weights.length;
    let sum = 0;
    for (item of weights) {
      sum = sum + item;
    }
    let low = Math.max(...weights);
    let high = sum;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if(noOfDays(weights,mid)<=days){
          high=mid-1;
      }else{
          low=mid+1;
      }
    }
    return low;
  };
  
  function noOfDays(weights, cap) {
    let load = 0;
    let days = 1;
    for (item of weights) {
      load = load + item;
      if (load > cap) {
        load = item;
        days++;
      }
    }
    return days
  }

//weights = [1,2,3,4,5,6,7,8,9,10], days = 5
