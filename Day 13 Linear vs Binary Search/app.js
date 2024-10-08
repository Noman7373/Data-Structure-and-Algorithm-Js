// //  Linear Search

// //  In Linear Search we iterate over all the list element and find our target element...

// // Time complextiy
// // Best case  O(1)
// // Wrost Case O(n)

// // Example

// let arr = [8, 5, 3, 4, 6];
// let find = 3;

// for (let i = 0; i < arr.length; i++) {
//   //   iterate all element and than match our target element throught the conditional
//   if (arr[i] == find) {
//     find = [i];
//   }
// }
// // our targe element appear in index 2 and index 2 meaning => 3 element
// // console.log(find); // output : index 2

// // ===========================  Binary Search  ====================================

// // Binary search is an efficient algorithm used to find the position of a target value within a sorted array...
// // Time Complexity:

// // Best Case: O(1) (when the middle element is the target)
// // Worst Case: 𝑂(log⁡𝑛)O(logn) (the target may be at either end of the list or not present at all)

// //  to find midd formula
// //  start index + end index / 2 =  midd

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let start = 0;
let end = number.length - 1;
let mid;

let target = 3;

while (start <= end) {
  mid = Math.floor((start + end) / 2);
  if (number[mid] == target) {
    // console.log(mid);
    break;
  } else if (number[mid] < target) {
    start = mid + 1;
    // console.log(number[mid]);
    // console.log(start);
  } else {
    end = mid - 1;
    // console.log(end);
  }
}
if (start > end) {
  //   console.log(-1);
}

// ===================   Binary Search  Practice  ====================

// probelm 1

function findFirstOccurance(array, start, end, target) {
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      result = mid;
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(findFirstOccurance([2, 4, 10, 10, 10, 18, 20], 0, 6, 10));

// probelm 2
function findLastOccurance(arr, start, end, target) {
  let result = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}
console.log(findLastOccurance([2, 4, 10, 10, 10, 18, 20], 0, 6, 10));

// probelm 3
// arr = [1, 3, 20, 4, 1, 0]
function findPeakElement(arr, start, end) {
  let result;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(findPeakElement([1, 3, 20, 4, 1, 0], 0, 5));

// probelm 4
// Input: arr = [4, 5, 6, 7, 0, 1, 2], target = 0
function searchIndexinRotatedArray(arr, start, end, target) {
  if (arr[start] < arr[end]) {
    return arr[start];
  }

  let find = arr[start];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return find;
}

console.log(searchIndexinRotatedArray([4, 5, 6, 7, 0, 1, 2], 0, 6, 0));

// // probelm 5
//  Input: arr = [3, 4, 5, 1, 2]   Output: 1
function findMinimum(arr, start, end) {
  if (arr[start] < arr[end]) {
    return arr[start];
  }
  let minimum = arr[start];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid > 0 && arr[mid] < arr[mid - 1]) {
      return arr[mid];
    } else if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return minimum;
}

console.log(findMinimum([3, 4, 5, 1, 2], 0, 4));
