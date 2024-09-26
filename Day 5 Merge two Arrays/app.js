//  Merge two arrays

function mergeTwoArrays(array1, array2, array3) {
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i];
  }
  for (let j = 0; j < array2.length; j++) {
    array3[array3.length] = array2[j];
  }
  return array3;
}

console.log(mergeTwoArrays([1, 2, 3], [4, 5, 6], []));
