// Sliding Window
// The sliding window technique is a powerful tool to optimize problems involving subarrays or substrings. By sliding a window over the input data and keeping track of the relevant calculations, you can often reduce the time complexity of problems from O(n²) to O(n).

function slidingWindow(arr, w) {
  let current = 0;
  for (let i = 0; i < w; i++) {
    current += arr[i];
  }
  let max = current;
  for (let j = 1; j <= arr.length - w; j++) {
    current = current - arr[j - 1] + arr[j + w - 1];
    if (current > max) {
      max = current;
    }
  }
  return max;
}

let arr = [3, 8, 2, 5, 7, 6, 12];
let w = 4;

console.log(slidingWindow(arr, w));
