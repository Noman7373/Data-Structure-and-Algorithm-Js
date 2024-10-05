// Insert new Number in Array

// Method 1 insert Element
let element = [22, 33, 44, 66, 77, 88, 99];
let nisertNumberPositon = 3;
let NumberInsert = 55;

for (let i = element.length - 1; i >= 0; i--) {
  if (i >= nisertNumberPositon) {
    element[i + 1] = element[i];
    if (i == nisertNumberPositon) {
      element[nisertNumberPositon] = NumberInsert;
    }
  }
}

console.log(element);

// Method 2 to insert Element

let num = [55, 60, 45, 24, 12];
let insertElement = 10000;
let position = 2;
for (let i = num.length - 1; i >= position; i--) {
  num[i + 1] = num[i];
}
num[position] = insertElement;
console.log(num);

// 3
function addElement(array, element, index) {
  for (let i = array.length - 1; i >= index; i--) {
    array[i + 1] = array[i];
  }
  array[index] = element;
  return array;
}

console.log(addElement([1, 2, 3, 5], 4, 3));

// 4
function elementInsert(array, index, element) {
  for (let i = array.length - 1; i >= index; i--) {
    array[i + 1] = array[i];
  }
  array[index] = element;
  return array;
}

console.log(elementInsert([1, 2, 3, 4, 6, 7, 8, 9], 4, 5));

// 5
function array(arr, ...element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 10) {
      arr.push(element[i]);
    } else {
      console.log("array length is full");
      break;
    }
  }
  return arr;
}
console.log(array([1, 2, 3, 4, 5], 6, 7, 8, 9, 10));
