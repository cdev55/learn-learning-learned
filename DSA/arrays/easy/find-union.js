//FOR SORTED ARRAY
function findUnion_sorted(arr1, arr2) {
    let unionArray = [];
    let i = 0;
    let j = 0;
    while (arr1.length && arr2.length) {
      if (arr1[i] <= arr2[j]) {
        if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr1[i]) {
          unionArray.push(arr1[i]);
          i++;
        }
      } else if (arr2[j] < arr1[i]) {
        if (unionArray.length === 0 || unionArray[unionArray.length - 1] !== arr2[j]) {
          unionArray.push(arr2[j]);
          j++;
        }
      }
    }
    while (i < arr1.length) {
      if (unionArray[unionArray.length - 1] !== arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
    }
    while (j < arr2.length) {
      if (unionArray[unionArray.length - 1] !== arr2[j]) {
        unionArray.push(arr2[j]);
      }
      j++;
    }
    return unionArray;
  }

//FOR UNSORTED ARRAY

function findUnion_unsorted(arr1, arr2) {
  let unionArray = [];
  let set = new Set();
  for (let item of arr1) {
    set.add(item);
  }
  for (let item of arr2) {
    set.add(item);
  }

  for (let item of set) {
    unionArray.push(item);
  }
  return unionArray;
}
