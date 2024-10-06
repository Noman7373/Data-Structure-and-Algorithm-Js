// Merging two array Bubble Sort

let array = [9, 3, 5, 4, 20];

for (let i = 0; i < array.length; i++) {
  for (j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      // Swap values
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);

//sorting function

function mergeArrays(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temporaryArr = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temporaryArr;
      }
    }
  }
  return array;
}

console.log(mergeArrays([10, 2, 6, 1, 0]));
