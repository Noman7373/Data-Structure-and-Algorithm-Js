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
