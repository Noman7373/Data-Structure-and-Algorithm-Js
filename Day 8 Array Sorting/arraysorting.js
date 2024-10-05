let array = [9, 3, 5, 4, 20];

for (let i = 0; i < array.length; i++) {
//   console.log(i);
  for (j = 0; j < array.length; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array);

