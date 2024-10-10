function Partition(arr, low, high) {
  let pivot = arr[high]; // array Last element
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // Use j < high
    if (arr[j] < pivot) {
      i++;
      // Swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp; // Correct swap logic
    }
  }

  // Swap the pivot element with arr[i + 1]
  i++;
  let temp = arr[i];
  arr[i] = pivot;
  arr[high] = temp;
  return i;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = Partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
}

// Initial call to quickSort
let array = [6, 3, 9, 5, 2, 8];
quickSort(array, 0, array.length - 1);
console.log(array); // Output the sorted array
