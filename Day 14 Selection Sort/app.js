// Selction Sort in DSA

// let arr = [7, 12, 9, 11, 3];

function selectionSort(array) {
  let minValue;
  for (let i = 0; i < array.length; i++) {
    minValue = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minValue]) {
        minValue = j;
      }
    }
    let tempValue = array[minValue];
    array[minValue] = array[i];
    array[i] = tempValue;
  }
  return array;
}

// console.log(selectionSort([40, 30, 20, 10, 0]));

// ===============================  Practice Selection Sorting  ===================================
// Input: [64, 25, 12, 22, 11]
// Output: [11, 12, 22, 25, 64]

function ascendingOrder(arr) {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // console.log(min);

    let tampArrValue = arr[min];
    arr[min] = arr[i];
    arr[i] = tampArrValue;
  }
  return arr;
}

console.log(ascendingOrder([64, 25, 12, 22, 11]));

// 2. Sort in Descending Order
// Input: [64, 25, 12, 22, 11]
// Output: [64, 25, 22, 12, 11]

function descendingOrder(number) {
  let minNumber;
  for (let i = 0; i < number.length; i++) {
    // this loop run n time;
    minNumber = i;
    for (let j = i + 1; j < number.length; j++) {
      // each iteration of the outer loop innerloop run j.length - 1
      // When i = 0 inner loop n - 1 ... i = 1 =>  n - 2 , i = 2 => n - 3
      // (n - 1) + (n - 2) + (n + 3) + ..... + 1 = n(n-1) / 2 = O(n^2)
      if (number[j] > number[minNumber]) {
        minNumber = j; // Each comparison and swap take time O(1)
      }
    }
    let tamp = number[minNumber];
    number[minNumber] = number[i];
    number[i] = tamp;
  }
  return number;
}

console.log(descendingOrder([64, 25, 12, 22, 11]));
// time Complexity = O(n^2)


// Find the Kth Smallest Element
// Input: [64, 25, 12, 22, 11], K = 3
function findSmallest(arr, k) {
  let minValue;
  for (let i = 0; i < arr.length; i++) {
    minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValue]) {
        minValue = j;
      }
    }
    [arr[i], arr[minValue]] = [arr[minValue], arr[i]];
  }
  return arr[k - 1];
}

console.log(findSmallest([64, 25, 12, 22, 11], 1)); // output = 22
