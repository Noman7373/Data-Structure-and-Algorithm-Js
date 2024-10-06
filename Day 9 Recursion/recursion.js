// Recursion
// Always use condition when call Recursion Funtion otherwise it will run infinite loop and it will hange your browser

let number = 10;
function recursion() {
  console.log("Recusrion");
  if (number < 15) {
    number++;
    recursion();
  }
}
recursion();

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// Fectorial Recursion
function recursionFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(recursionFactorial(4));




// Reverse array with Recursion
function arrayRecursion(data, start, end) {
  if (start >= end) {
    return;
  }
  let temp = data[start];
  data[start] = data[end];
  data[end] = temp;

  arrayRecursion(data, start + 1, end - 1);
}

let data = [5, 4, 3, 2, 1];
arrayRecursion(data, 0, data.length - 1);
console.log(data);

