// What is Data Structure?
// Way to organize data so that we can use organize data efficiently

// What is Big O notation
// Use to donate complexity(both)

// Example
// withou organize                      [2,5,4,1,8,0,3,7,6]
//with organize                         [0,1,2,3,4,5,6,7,8]

// What is Algorithem
//  Steps or a process to arrange data

//  Two type of Data Structure

// 1  Premitive Data
// Integer Float Character Pointer

// 2 Non- Primitive Data Structure
// 1 Arrays
// 2 Lists
// 3 Files

// list Type
// Linear List               =>    Stacks , Queues   => linear lsit can only perform form start and to end side.
// non-linear                =>    Graphs , Trees    => non-linear-lsit can perform form anywhere.

// Operations of Data Structure
//    1  Traversel
//    2  Insertion
//    3  Deletion
//    4  Searching
//    5  Sorting
//    6  Merging
//    Different Algorithem can be use for options

//  Insert Element to array by using input element
let array = [9, 3, 5, 2, 55, 7, 8];
let btn = document.getElementById("button");
let input = document.getElementById("input");

btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue < array.length && inputValue > 0) {
    console.log(array[inputValue]);
  } else {
    alert("PLease Enter Valid Id");
  }
});




//   LeetCode Problem
function filterArray(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((fn(arr[i]), i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

let arr = [0, 10, 20, 30];

let newNum = filterArray(arr, (num) => num > 10);
console.log(newNum);
