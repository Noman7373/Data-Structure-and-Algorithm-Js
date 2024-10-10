//  Insert Sort Algorithm
// [10 ,11, 4, 2, 20, 6 ,3 ,8]
function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let prev = i - 1;
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev];
      prev--;
    }
    array[prev + 1] = current;
  }
  return array;
}

let array = [13, 8, 7, 2, 6, 3, 4];
console.log(insertSort(array));

let arr = [4, 1, 5, 2, 3];

for (let i = 1; i < arr.length; i++) {
  // loop start from 1 index to n.length - 1 which is 3
  let currentValue = arr[i]; // current Element to be sorted store the value [1,5,2]
  let prevValue = i - 1; // store the index of the prev Element[0,1,2,3]
  while (prevValue >= 0 && arr[prevValue] > currentValue) {
    arr[prevValue + 1] = arr[prevValue]; // move larger element to right position
    prevValue--;
  }
  // insert the lowest element at correct position
  arr[prevValue + 1] = currentValue;
}

console.log(arr);

// Time complexity
// Best Case = O(n) Linear (array already sorted)
// Average Case = O(n^2)
// Worst Case = O(n^2) (reverse sorted array)

//===================    Prectice Problems  ================================

// Sort an array sorted array
// input [1, 2, 3, 4, 5]

function sortedArray(Array) {
  for (let i = 1; i < Array.length; i++) {
    let currArray = Array[i];
    let prevArray = i - 1;
    while (prevArray >= 0 && Array[prevArray] > currArray) {
      Array[prevArray + 1] = Array[prevArray];
      prevArray--;
    }
  }
  return Array;
}

console.log(sortedArray([1, 2, 3, 4, 5]));

// Preblem 2   Sort an Array of Negative and Positive Numbers
// Input [3, -1, 0, -7, 4, 2]

function sortingNegativeArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    let arrCurr = arr[i];
    let arrPrev = i - 1;
    while (arrPrev >= 0 && arr[arrPrev] > arrCurr) {
      arr[arrPrev + 1] = arr[arrPrev];
      arrPrev--;
    }
    arr[arrPrev + 1] = arrCurr;
  }
  return arr;
}
console.log(sortingNegativeArray([3, -1, 0, -7, 4, 2])); //Output: [-7, -1, 0, 2, 3, 4]

//Problem 3: Sort an Array of Repeated Numbers
//  Input [5, 1, 5, 3, 5, 2]

function sortRepeatedArray(num) {
  for (let i = 1; i < num.length; i++) {
    let currNum = num[i];
    let prevNum = i - 1;
    while (prevNum >= 0 && num[prevNum] >= currNum) {
      num[prevNum + 1] = num[prevNum];
      prevNum--;
    }
    num[prevNum + 1] = currNum;
  }
  return num;
}

console.log(sortRepeatedArray([5, 1, 5, 3, 5, 2])); // output [1,2,3,5,5,5]

//  Problem : Sort an Array in Reverse Order
//  Input [9, 8, 7, 6, 5, 4, 3, 2, 1]

function sortArrayReverse(num) {
  for (let i = 1; i < num.length; i++) {
    let numCurr = num[i];
    let numPrev = i - 1;
    while (numPrev >= 0 && num[numPrev] > numCurr) {
      num[numPrev + 1] = num[numPrev];
      numPrev--;
    }
    num[numPrev + 1] = numCurr;
  }
  return num;
}

console.log(sortArrayReverse([9, 8, 7, 6, 5, 4, 3, 2, 1])); //output [1,2,3,4,5,6,7,8,9]

// Problem : Sort an Array of Floating Point Numbers
// Input [2.4, 1.8, 3.7, 0.9, 1.5]

function sortFloatingArray(array) {
  for (let i = 1; i < array.length; i++) {
    let currArray = array[i];
    let prevArray = i - 1;
    while (prevArray >= 0 && array[prevArray] > currArray) {
      array[prevArray + 1] = array[prevArray];
      prevArray--;
    }
    array[prevArray + 1] = currArray;
  }
  return array;
}

console.log(sortFloatingArray([2.4, 1.8, 3.7, 0.9, 1.5])); // Output [0.9, 1.5, 1.8, 2.4, 3.7]

// Problem : Sort a Partially Sorted Array
// Input [1, 3, 2, 4, 5]

function sortPartiallyArray(n) {
  for (let i = 2; i < n.length; i++) {
    let currN = n[i];
    let prevIdx = i - 1;
    while (prevIdx >= 0 && n[prevIdx] > currN) {
      n[prevIdx + 1] = n[prevIdx];
      prevIdx--;
    }
    n[prevIdx + 1] = currN;
  }
  return n;
}

console.log(sortPartiallyArray([1, 3, 2, 4, 5])); //  Output [1, 2, 3, 4, 5]

function sortAlphabaticArray(n) {
  for (let i = 1; i < n.length; i++) {
    let curr = n[i];
    let j = i - 1;
    while (j >= 0 && n[j] > curr) {
      n[j + 1] = n[j];
      j--;
    }
    n[j + 1] = curr;
  }
  return n;
}

console.log(sortAlphabaticArray(["banana", "apple", "cherry", "date"])); // Output ["apple", "banana", "cherry", "date"]

// Problem : Sort an Array with Duplicates and Zeros
// Input [0, 3, 2, 0, 5, 3]

function sortDuplicateZero(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currArr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currArr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currArr;
  }
  return arr
}

console.log(sortDuplicateZero([0, 3, 2, 0, 5, 3])); // Output [0, 0, 2, 3, 3, 5]
