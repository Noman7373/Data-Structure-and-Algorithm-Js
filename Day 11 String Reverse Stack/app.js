// ======================  Practice  =====================

// Remove Adjacent Duplicates in String Using Stack
// Problem: Given a string, repeatedly remove adjacent duplicate characters. Return the final string after all possible duplicate removals.

let str = "abbaca";
let strStack = [];

for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);

  if (strStack.length > 0 && strStack[strStack.length - 1] == str[i]) {
    strStack.pop();
  } else {
    strStack.push(str[i]);
  }
}

let result = strStack.join("");
// console.log(result);

// Simplify Directory Path
// Problem: Given a Unix-style absolute file path, simplify it using a stack. Return the canonical path.

let value = "/home/";
let stack = [];
let lengthStack = 0;

let component = value.split("/");
for (let i = 0; i < component.length; i++) {
  let part = component[i];
  if (part === "..") {
    if (stack.length > 0) {
      lengthStack--;
    }
  } else if (part !== "" && part !== ".") {
    stack[lengthStack] = part;
    lengthStack++;
  }
}

let finalComponent = "/" + stack.slice(0, lengthStack).join("/");
console.log(finalComponent);

function validComponents(value) {
  let stack = [];
  let stackLength = 0;

  let component = value.split("/");
  for (let i = 0; i < component.length; i++) {
    if (component[i] === "..") {
      if (stack.length > 0) {
        stackLength--;
      }
    } else if ((component[i] !== "") & (component[i] !== ".")) {
      stack[stackLength] = component[i];
      stackLength++;
    }
  }

  return "/" + stack.slice(0, stackLength).join("/");
}

console.log(validComponents("/home/"));
