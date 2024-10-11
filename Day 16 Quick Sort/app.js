// to Choose pivot
// 1 random element
// 2 medium element
// 3 first element
// 4 last element

function quickPartition(arr, low, high) {
  let pivot = arr[high]; // Pivot is the last element
  let i = low - 1; /// Index of the smaller element
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      // Swap Elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = quickPartition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}
let arr = [6, 3, 9, 5, 2, 8];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // [2,3,5,6,8,9]



// [10, 8, 14, 7, 55, 20, 15];
function numQuickSort(num, low, high) {
  if (low < high) {
    let pivot = numPartition(num, low, high);
    numQuickSort(num, low, pivot - 1);
    numQuickSort(num, pivot + 1, high);
  }
}
function numPartition(num, low, high) {
  let pivot = num[high]; // Pivot is the last element
  let i = low - 1; /// Index of the smaller element
  // Loop from low to high - 1
  for (let j = low; j < high; j++) {
    if (num[j] < pivot) {
      i++;
      [num[i], num[j]] = [num[j], num[i]];
    }
  }
  // Swap the pivot element with the element at i + 1
  [num[i + 1], num[high]] = [num[high], num[i + 1]];
  return i + 1;
}

let num = [10, 8, 14, 7, 55, 20, 15];
numQuickSort(num, 0, num.length - 1);
console.log(num); // Output [7, 8 ,10 ,4 ,15 ,20 ,55]

// =======================   Practice QuickSort   =====================================

// Problem 1
// Input:  An array of strings, e.g., ["apple", "orange", "banana", "grape"]

function quickSortStr(strArray, low, high) {
  if (low < high) {
    let pivot = strPartition(strArray, low, high);
    quickSortStr(strArray, low, pivot - 1);
    quickSortStr(strArray, pivot + 1, high);
  }
}

function strPartition(strArray, low, high) {
  let pivot = strArray[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (strArray[j] < pivot) {
      i++;
      [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
    }
  }

  [strArray[i + 1], strArray[high]] = [strArray[high], strArray[i + 1]];
  return i + 1;
}

let strArray = ["apple", "orange", "banana", "grape"];
quickSortStr(strArray, 1, strArray.length - 1);
console.log(strArray); // Output ["apple", "banana", "grape", "orange"]


// Problem 2
// Input  