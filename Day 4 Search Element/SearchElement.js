//  Linear Search in Array

const input = document.getElementById("input").value;
const btn = document.getElementById("btn");

function searchELement(array, elem) {
  let indices = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elem) {
      indices.push(i);
    }
  }
  return indices;
}

let array = [1, 2, 3, 4, 5, 6, 6, 6];
let elem = 6;

console.log(searchELement(array, elem));


//  Search element by using build in array method
let array2 = [1, 2, 3, 4, 5, 6, 6, 6];
let includeEle = array2.indexOf(6);
console.log(includeEle);
