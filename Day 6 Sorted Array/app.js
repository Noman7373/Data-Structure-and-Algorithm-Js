//  Merge two array

let number1 = [1, 3, 4];
let number2 = [2, 6, 8];

let idx1 = 0;
let idx2 = 0;
let idx3 = 0;
let sortedNumber = [];
while (idx1 < number1.length || idx2 < number2.length) {
  if (number1[idx1] < number2[idx2]) {
    sortedNumber[idx3] = number1[idx1];
    idx1++;
  } else {
    sortedNumber[idx3] = number2[idx2];
    idx2++;
  }
  idx3++;
}
console.log(sortedNumber);

let arr1 = [3, 1, 5];
let arr2 = [4, 2, 6];

let sortedArray = [];

for (let i = 0; i < arr1.length; i++) {
  sortedArray[i] = arr1[i];
}
for (let j = 0; j < arr2.length; j++) {
  sortedArray[sortedArray.length] = arr2[j];
}

sortedArray.sort((a, b) => a - b);

console.log(sortedArray);

//  SUm of all Elements in an Array

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArray([1, 2, 3, 4, 5]));
//  O(n) Liear time complexity will apply
// Time complexity

// f(n) = 5n2 + 6n + 12
// f(5) = 5(5*2) + 6(5) + 12 = 125 + 30 + 12 = 167
// f(5) = 5(5*2) = 125
//  f(5) = (167 / 125) * 100 = 133.6%

// Running time complexity  = 133.6%

// This means the total number of operations is 133.6% of the operations contributed by the quadratic term alone. The additional 33.6% comes from the linear and constant terms (6n + 12).
